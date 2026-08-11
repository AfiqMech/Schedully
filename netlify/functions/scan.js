exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { base64Data, mimeType } = JSON.parse(event.body || '{}');

    if (!base64Data) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing image data' }) };
    }

    let apiKey = (process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server key not configured. Please set GEMINI_API_KEY in Netlify Environment Variables.' })
      };
    }

    // Google API requires x-goog-api-key for new keys (AQ...)
    const googleHeaders = {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    };

    // 1. DYNAMICALLY FIND A SUPPORTED MODEL to prevent "model not found" errors
    let targetModelName = 'gemini-1.5-flash'; // fallback default
    try {
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`, {
        method: 'GET',
        headers: { 'x-goog-api-key': apiKey }
      });
      const listData = await listRes.json();
      if (listData && listData.models) {
        // Find the first model that supports generateContent and contains "gemini" and "flash" or "pro"
        const validModels = listData.models.filter(m => 
          m.supportedGenerationMethods && 
          m.supportedGenerationMethods.includes('generateContent') &&
          m.name.includes('gemini')
        );
        
        // Prefer a flash model, otherwise pro, otherwise whatever is first
        let bestModel = validModels.find(m => m.name.includes('flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('pro'));
        if (!bestModel && validModels.length > 0) bestModel = validModels[0];

        if (bestModel) {
          // The name is usually in the format "models/gemini-..."
          targetModelName = bestModel.name.replace('models/', '');
        }
      }
    } catch (e) {
      console.warn("Failed to list models, using default", e);
    }

    const payload = {
      contents: [{
        parts: [
          { text: "Examine this course schedule/timetable screenshot carefully. Identify the layout orientation (Days on Y or X axis). Ignore any breaks, recess, or lunch blocks. Handle merged blocks spanning multiple columns to calculate accurate duration and endTime. Infer 24-hour time format from AM/PM context (e.g. 1 means 13:00 if in afternoon). Translate any local language days (like Isnin, Selasa, Rabu) into standard English 3-letter abbreviations. Extract all subject class slots into a JSON array of objects with exact keys: \"code\" (The main prominent text in the block: e.g. Course Code like WIX1002, or Class Name like 5K4), \"title\" (full course name or subject name like Mathematics), \"day\" (Mon, Tue, Wed, Thu, Fri, Sat, Sun), \"startTime\" (HH:MM 24-hour time), \"endTime\" (HH:MM 24-hour time calculated from spanning width), \"type\" (secondary text like Subject abbreviation e.g. MM, or Lecture/Lab), \"room\" (physical location/room name), \"lecturer\" (teacher or lecturer name), \"group\" (class section or group). IMPORTANT: You MUST properly escape any double quotes (\\\") or newlines (\\\\n) inside your text values to ensure the JSON is valid. Output JSON array only." },
          { inline_data: { mime_type: mimeType || 'image/png', data: base64Data } }
        ]
      }],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.1
      }
    };

    // Use the dynamically found model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${targetModelName}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: googleHeaders,
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.error) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: data.error.message || `Gemini API Error (Using model: ${targetModelName})` }) };
    }

    if (!data.candidates || !data.candidates[0]) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: `No candidates returned from Gemini API (Using model: ${targetModelName})` }) };
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data: result, usedModel: targetModelName })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
