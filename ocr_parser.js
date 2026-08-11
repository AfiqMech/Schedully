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
    onProgress("Encoding image for Cloud AI Vision Analysis...");
    const base64Data = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    const mimeType = file.type || 'image/png';

    onProgress("Analyzing timetable with Vercel AI Scanner...");
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64Data, mimeType })
      });
      
      const rawText = await response.text();
      let resData;
      try {
        resData = JSON.parse(rawText);
      } catch (e) {
        if (response.status === 404) {
          throw new Error("Vercel Function not found (404). Please ensure the 'api' folder was pushed to GitHub.");
        }
        throw new Error(`Server returned status ${response.status}`);
      }

      if (resData.error) throw new Error(resData.error);
      return resData.data || [];
    } catch (proxyErr) {
      console.error("Vercel Scan Error:", proxyErr);
      alert("AI Scanner Error: " + proxyErr.message);
      return [];
    }
  }
}

window.SAMPLE_SCHEDULES = SAMPLE_SCHEDULES;
window.ocrParser = new OCRTimetableParser();
