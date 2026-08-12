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
    const { base64Data, mimeType, apiKey: clientApiKey } = req.body || {};

    if (!base64Data) {
      return res.status(400).json({ error: 'Missing image data' });
    }

    const apiKey = (clientApiKey || process.env.GEMINI_API_KEY || '').trim().replace(/^["']|["']$/g, '');
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API Key not configured. Please set GEMINI_API_KEY in Vercel Environment Variables or enter your API key in settings.' });
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
        // Prioritize gemini-3.5-flash per user request
        let bestModel = validModels.find(m => m.name.includes('3.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('3.5-pro'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('2.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('1.5-flash'));
        if (!bestModel) bestModel = validModels.find(m => m.name.includes('flash'));
        if (!bestModel && validModels.length > 0) bestModel = validModels[0];
        if (bestModel) targetModelName = bestModel.name.replace('models/', '');
      }
    } catch (e) {
      console.warn("Failed to list models, using fallback", e);
    }

    const promptText = `CRITICAL SYSTEM COMMAND:
First, translate the image text into English if needed ("translate the image"), and then extract the timetable into a clean structured table ("can you extract this out the timetable into table"). Finally, convert all class slots into a valid JSON list of course objects.

UNIVERSAL GLOBAL TIMETABLE ENGINE RULES:

1. RTL & SCRIPT DIRECTION HANDLING (Arabic, Hebrew, Persian):
   - In Arabic/RTL timetables, the columns often read Right-to-Left (RTL). Recognize that the first day column (e.g. الأحد / Sunday or الإثنين / Monday) may be on the far RIGHT side.
   - Translate Arabic days: الأحد -> Sun, الإثنين -> Mon, الثلاثاء -> Tue, الأربعاء -> Wed, الخميس -> Thu, الجمعة -> Fri, السبت -> Sat.
   - Translate Arabic periods: الحصة الأولى -> 08:00-08:45, الحصة الثانية -> 08:45-09:30, etc.

2. EAST ASIAN & INTERNATIONAL LANGUAGES (Japanese, Chinese, Korean, German, Spanish, French, Russian, etc.):
   - Japanese days: 月/月曜 -> Mon, 火/火曜 -> Tue, 水/水曜 -> Wed, 木/木曜 -> Thu, 金/金曜 -> Fri, 土/土曜 -> Sat, 日/日曜 -> Sun
   - Chinese days: 星期一/周一/週一 -> Mon, 星期二/周二 -> Tue, 星期三/周三 -> Wed, 星期四/周四 -> Thu, 星期五/周五 -> Fri, 星期六/周六 -> Sat, 星期日/周日 -> Sun
   - Korean days: 월/월요일 -> Mon, 화/화요일 -> Tue, 수/수요일 -> Wed, 목/목요일 -> Thu, 금/금요일 -> Fri, 토/토요일 -> Sat, 일/일요일 -> Sun
   - German days: Mo/Montag -> Mon, Di/Dienstag -> Tue, Mi/Mittwoch -> Wed, Do/Donnerstag -> Thu, Fr/Freitag -> Fri, Sa/Samstag -> Sat, So/Sonntag -> Sun
   - Spanish/French/Italian days: Lunes/Lundi -> Mon, Martes/Mardi -> Tue, Miércoles/Mercredi -> Wed, Jueves/Jeudi -> Thu, Viernes/Vendredi -> Fri, Sábado/Samedi -> Sat, Domingo/Dimanche -> Sun
   - Malay/Indonesian days: Isnin/Senin -> Mon, Selasa -> Tue, Rabu -> Wed, Khamis/Kamis -> Thu, Jumaat/Jumat -> Fri, Sabtu -> Sat, Ahad/Minggu -> Sun

3. TIME CALCULATION:
   - Convert all times to 24-hour HH:MM strings (e.g. 08:45, 13:25).
   - If a row lists only a start time (e.g., 08:45), its "endTime" is the start time of the next row (e.g., 09:35).

4. FIELD EXTRACTION FOR JSON:
   - "title": Include subject name in full. (e.g., "الرياضيات", "算数", "日本語", "Mathematik", "ELA", "Math", "PE / Dance").
   - "code": Clean 2-8 uppercase Latin shorthand code (e.g. "الرياضيات" -> "MATH", "算数" -> "MATH", "日本語" -> "JAP-101", "Mathematik" -> "MATH").
   - "day": 3-letter English day ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
   - "startTime": 24h format HH:MM (e.g. "08:45").
   - "endTime": 24h format HH:MM (e.g. "09:35").
   - "type": "Class", "Lecture", "Lab", "Tutorial", "Activity", "Recess", or "Lunch".
   - "room": Room / Venue if stated (or "").
   - "lecturer": Instructor / Teacher if stated (or "").
   - "group": Class section / group if stated (or "").

OUTPUT REQUIREMENTS:
Output ONLY a valid JSON array of objects. Do NOT wrap in markdown or include conversational text.`;

    const payload = {
      contents: [{
        parts: [
          { text: promptText },
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
