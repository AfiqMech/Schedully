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
        let bestModel = validModels.find(m => m.name.includes('3.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('3.0-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('1.5-flash'));
        if (!bestModel) bestModel = validModels.reverse().find(m => m.name.includes('flash'));
        if (!bestModel && validModels.length > 0) bestModel = validModels[0];
        if (bestModel) targetModelName = bestModel.name.replace('models/', '');
      }
    } catch (e) {
      console.warn("Failed to list models, using fallback", e);
    }

    const payload = {
      contents: [{
        parts: [
          { text: "Examine this course schedule/timetable screenshot carefully. Identify the layout orientation (Days on Y or X axis). Ignore any breaks, recess, or lunch blocks. Handle merged blocks spanning multiple columns to calculate accurate duration and endTime. Infer 24-hour time format from AM/PM context (e.g. 1 means 13:00 if in afternoon). Translate any local language days (like Isnin, Selasa, Rabu) into standard English 3-letter abbreviations. Extract all subject class slots into a JSON array of objects with exact keys: \"code\" (The main prominent text in the block: e.g. Course Code like WIX1002, or Class Name like 5K4), \"title\" (full course name or subject name like Mathematics), \"day\" (Mon, Tue, Wed, Thu, Fri, Sat, Sun), \"startTime\" (HH:MM 24-hour time), \"endTime\" (HH:MM 24-hour time calculated from spanning width), \"type\" (secondary text like Subject abbreviation e.g. MM, or Lecture/Lab), \"room\" (physical location/room name), \"lecturer\" (teacher or lecturer name), \"group\" (class section or group). IMPORTANT: properly escape double quotes and newlines. Output JSON array only." },
          { inline_data: { mime_type: mimeType || 'image/png', data: base64Data } }
        ]
      }],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.1
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
