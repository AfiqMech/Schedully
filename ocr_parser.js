/**
 * OCR Timetable Scanner & Schedule Parser Engine for TimeFactory-AI
 * Scans course portal screenshots and extracts Course Codes, Title, Day, Times, and Room
 */

const SAMPLE_SCHEDULES = {
  cs: [],
  biz: []
};

class OCRTimetableParser {
  constructor() {
    this.isTesseractLoaded = typeof Tesseract !== 'undefined';
  }

  /**
   * Universal Cloud Vision API Scanning (Supports Gemini 1.5 Flash Vision & OpenAI GPT-4o)
   */
  async scanWithCloudAPI(file, provider, apiKey, onProgress) {
    if (!apiKey) {
      alert("Please enter a valid API key to use Cloud Vision AI scanning!");
      return [];
    }

    onProgress("Encoding image for Cloud AI Vision Analysis...");
    const base64Data = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    const mimeType = file.type || 'image/png';

    if (provider === 'gemini') {
      onProgress("Analyzing timetable with Google Gemini 3.5 Flash...");
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [{
          parts: [
            { text: "Examine this course schedule/timetable screenshot carefully. Identify the layout orientation (Days on Y or X axis). Ignore any breaks, recess, or lunch blocks. Handle merged blocks spanning multiple columns to calculate accurate duration and endTime. Infer 24-hour time format from AM/PM context (e.g. 1 means 13:00 if in afternoon). Translate any local language days (like Isnin, Selasa, Rabu) into standard English 3-letter abbreviations. Extract all subject class slots into a JSON array of objects with exact keys: \"code\" (The main prominent text in the block: e.g. Course Code like WIX1002, or Class Name like 5K4), \"title\" (full course name or subject name like Mathematics), \"day\" (Mon, Tue, Wed, Thu, Fri, Sat, Sun), \"startTime\" (HH:MM 24-hour time), \"endTime\" (HH:MM 24-hour time calculated from spanning width), \"type\" (secondary text like Subject abbreviation e.g. MM, or Lecture/Lab), \"room\" (physical location/room name), \"lecturer\" (teacher or lecturer name), \"group\" (class section or group). IMPORTANT: You MUST properly escape any double quotes (\\\") or newlines (\\\\n) inside your text values to ensure the JSON is valid. Output JSON array only." },
            { inline_data: { mime_type: mimeType, data: base64Data } }
          ]
        }],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.1
        }
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message || "Gemini API Error");
        }

        let rawJSON = data.candidates[0].content.parts[0].text;
        
        // Strip markdown formatting in case the API wraps the JSON response
        rawJSON = rawJSON.replace(/```json/g, '').replace(/```/g, '').trim();
        
        let parsed;
        try {
          parsed = JSON.parse(rawJSON);
        } catch (parseErr) {
          console.warn("JSON Parse Failed, attempting to auto-fix...", parseErr);
          // Attempt to fix truncated JSON by closing open structures
          let fixedJSON = rawJSON.trim();
          if (fixedJSON.endsWith(',')) fixedJSON = fixedJSON.slice(0, -1);
          
          const openBraces = (fixedJSON.match(/\{/g) || []).length - (fixedJSON.match(/\}/g) || []).length;
          const openBrackets = (fixedJSON.match(/\[/g) || []).length - (fixedJSON.match(/\]/g) || []).length;
          
          // If it ends in the middle of a string, try closing it
          if ((fixedJSON.match(/"/g) || []).length % 2 !== 0) fixedJSON += '"';
          
          for (let i = 0; i < openBraces; i++) fixedJSON += '}';
          for (let i = 0; i < openBrackets; i++) fixedJSON += ']';
          
          try {
            parsed = JSON.parse(fixedJSON);
          } catch (fixErr) {
            console.error("Auto-fix failed. Raw JSON:", rawJSON);
            throw new Error("AI returned malformed or incomplete data: " + parseErr.message);
          }
        }
        
        return Array.isArray(parsed) ? parsed : (parsed.courses || parsed.slots || Object.values(parsed)[0] || []);
      } catch (err) {
        console.error("Gemini Vision API Error:", err);
        alert("Cloud API Error: " + err.message);
        return [];
      }
    } else if (provider === 'openai') {
      onProgress("Analyzing timetable with OpenAI GPT-4o Vision...");
      const url = "https://api.openai.com/v1/chat/completions";
      const payload = {
        model: "gpt-4o",
        max_tokens: 4096,
        messages: [{
          role: "user",
          content: [
            { type: "text", text: "Extract all subject class slots from this timetable screenshot. Identify orientation. Ignore breaks/recess/lunch. Handle merged/spanning blocks for correct duration. Infer 24-hour times correctly. Translate local language days (e.g. Isnin, Selasa) to standard English 3-letter abbreviations. Output JSON array of objects with keys: code (The main prominent text: e.g. Course Code or Class Name like 5K4), title, day (Mon, Tue, Wed, Thu, Fri, Sat, Sun), startTime (HH:MM 24h), endTime (HH:MM 24h based on spanning width), type (secondary text like Subject abbreviation e.g. MM, or Lecture/Lab), room, lecturer, group. IMPORTANT: properly escape double quotes and newlines. Return raw JSON array only." },
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${base64Data}` } }
          ]
        }],
        response_format: { type: "json_object" }
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const rawText = data.choices[0].message.content;
        const parsed = JSON.parse(rawText);
        return Array.isArray(parsed) ? parsed : (parsed.courses || parsed.slots || Object.values(parsed)[0] || []);
      } catch (err) {
        console.error("OpenAI API Error:", err);
        alert("OpenAI API Error: " + err.message);
        return [];
      }
    }

    return [];
  }
}

window.SAMPLE_SCHEDULES = SAMPLE_SCHEDULES;
window.ocrParser = new OCRTimetableParser();
