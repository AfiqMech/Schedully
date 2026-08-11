export default async function handler(req, res) {
  // Set CORS headers for Vercel Serverless Function
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { base64Data, mimeType } = req.body || {};

    if (!base64Data) {
      return res.status(400).json({ error: 'Missing image data' });
    }

    const apiKey = (process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
      return res.status(500).json({ error: 'Server key not configured. Please set GEMINI_API_KEY in Vercel Environment Variables.' });
    }

    // 1. DYNAMICALLY DISCOVER SUPPORTED MODELS
    let targetModelName = 'gemini-3.5-flash';
    try {
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`, {
        method: 'GET',
        headers: { 'x-goog-api-key': apiKey }
      });
      const listData = await listRes.json();
      if (listData && listData.models) {
        const validModels = listData.models.filter(m => 
          m.supportedGenerationMethods && 
          m.supportedGenerationMethods.includes('generateContent') &&
          m.name.includes('gemini')
        );
        // Prioritize Pro models for maximum accuracy and spatial grid reasoning
        let bestModel = validModels.find(m => m.name.includes('3.5-pro'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('1.5-pro'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('3.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('3.0-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('1.5-flash'));
        if (!bestModel) bestModel = validModels.reverse().find(m => m.name.includes('pro'));
        if (!bestModel && validModels.length > 0) bestModel = validModels[0];
        if (bestModel) targetModelName = bestModel.name.replace('models/', '');
      }
    } catch (e) {
      console.warn("Failed to list models, using fallback", e);
    }

    const payload = {
      contents: [{
        parts: [
          { text: "CRITICAL TASK: Perform an EXHAUSTIVE extraction of ALL course class slots in this timetable screenshot. Do NOT stop after extracting one day or column. You MUST systematically scan every column and row across ALL days (Mon, Tue, Wed, Thu, Fri, Sat, Sun).\n\nKey instructions:\n1. Identify layout orientation (Days on top horizontal header or left vertical column).\n2. Scan EVERY day column (Monday through Sunday). If a subject repeats on multiple days (e.g., Lecture on Monday and Tutorial on Wednesday), create SEPARATE entry objects for each class session.\n3. Calculate start time and end time accurately (24-hour format HH:MM) based on spanning grid width/height.\n4. Translate local day names (Isnin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis -> Thu, Jumaat -> Fri, Sabtu -> Sat, Ahad -> Sun).\n5. Extract keys: \"code\" (Course Code / Subject Code), \"title\" (Full Name), \"day\" (3-letter Mon-Sun), \"startTime\" (HH:MM 24h), \"endTime\" (HH:MM 24h), \"type\" (Lecture/Lab/Tutorial), \"room\" (Venue/Room), \"lecturer\" (Instructor name), \"group\" (Section/Occ/Group).\n6. Output ONLY a valid JSON array of objects." },
          { inline_data: { mime_type: mimeType || 'image/png', data: base64Data } }
        ]
      }],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.1,
        responseMimeType: "application/json"
      }
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${targetModelName}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || `Gemini API Error (${targetModelName})` });
    }

    if (!data.candidates || !data.candidates[0]) {
      return res.status(500).json({ error: `No candidates returned (${targetModelName})` });
    }

    let rawJSON = data.candidates[0].content.parts[0].text;
    rawJSON = rawJSON.replace(/```json/g, '').replace(/```/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(rawJSON);
    } catch (parseErr) {
      let fixedJSON = rawJSON.trim();
      if (fixedJSON.endsWith(',')) fixedJSON = fixedJSON.slice(0, -1);
      const openBraces = (fixedJSON.match(/\{/g) || []).length - (fixedJSON.match(/\}/g) || []).length;
      const openBrackets = (fixedJSON.match(/\[/g) || []).length - (fixedJSON.match(/\]/g) || []).length;
      if ((fixedJSON.match(/"/g) || []).length % 2 !== 0) fixedJSON += '"';
      for (let i = 0; i < openBraces; i++) fixedJSON += '}';
      for (let i = 0; i < openBrackets; i++) fixedJSON += ']';
      parsed = JSON.parse(fixedJSON);
    }

    const result = Array.isArray(parsed) ? parsed : (parsed.courses || parsed.slots || Object.values(parsed)[0] || []);

    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
