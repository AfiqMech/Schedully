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

    const googleHeaders = {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    };

    const modelsToTry = [
      'gemini-1.5-flash',
      'gemini-1.5-flash-latest',
      'gemini-2.0-flash-exp',
      'gemini-2.5-flash'
    ];

    let data = null;
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: googleHeaders,
          body: JSON.stringify(payload)
        });

        data = await response.json();
        if (!data.error) {
          lastError = null;
          break;
        }
        lastError = data.error.message || 'Gemini API Error';
      } catch (err) {
        lastError = err.message;
      }
    }

    if (lastError || !data || !data.candidates) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: lastError || 'Gemini API Error' }) };
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
      body: JSON.stringify({ success: true, data: result })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
