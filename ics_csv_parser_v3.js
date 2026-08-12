class ScheduleParser {
  /**
   * Parse an iCal (.ics) string into an array of course objects.
   * @param {string} content 
   * @returns {Array} List of course objects
   */
  static parseICS(content) {
    // Unfold multi-line iCal properties (lines starting with space/tab continue previous line)
    const unfoldedContent = content.replace(/\r?\n[ \t]/g, '');
    const lines = unfoldedContent.split(/\r?\n/);
    const events = [];
    let currentEvent = null;

    // Helper to extract value from iCal line format (KEY:VALUE or KEY;PARAM=X:VALUE)
    const getValue = (line) => {
      const idx = line.indexOf(':');
      if (idx === -1) return '';
      return line.substring(idx + 1).trim();
    };

    // Helper to convert iCal Date string (e.g. 20260810T090000 or 20260810T010000Z) to local HH:MM
    const parseTime = (dateStr) => {
      if (!dateStr) return '';
      let rawVal = dateStr.includes(':') ? dateStr.split(':').pop().trim() : dateStr.trim();

      // Dynamic UTC conversion if timestamp explicitly ends in 'Z' (RFC 5545 UTC)
      if (rawVal.endsWith('Z') && rawVal.includes('T')) {
        const parts = rawVal.split('T');
        const dStr = parts[0];
        const tStr = parts[1].replace('Z', '');
        if (dStr.length === 8 && tStr.length >= 4) {
          const y = parseInt(dStr.substring(0, 4));
          const m = parseInt(dStr.substring(4, 6)) - 1;
          const d = parseInt(dStr.substring(6, 8));
          const hh = parseInt(tStr.substring(0, 2));
          const mm = parseInt(tStr.substring(2, 4));
          
          const utcDate = new Date(Date.UTC(y, m, d, hh, mm));
          const localH = String(utcDate.getHours()).padStart(2, '0');
          const localM = String(utcDate.getMinutes()).padStart(2, '0');
          return `${localH}:${localM}`;
        }
      }

      // Direct local time parsing (reads exact timestamp from file)
      const timePart = rawVal.includes('T') ? rawVal.split('T')[1] : rawVal;
      if (timePart && timePart.length >= 4) {
        return `${timePart.substring(0, 2)}:${timePart.substring(2, 4)}`;
      }
      return '';
    };

    // Helper to extract Day of Week from iCal Date string
    const getDayFromDateStr = (dateStr) => {
      if (!dateStr) return null;
      let rawVal = dateStr.includes(':') ? dateStr.split(':').pop().trim() : dateStr.trim();

      if (rawVal.endsWith('Z') && rawVal.includes('T')) {
        const parts = rawVal.split('T');
        const dStr = parts[0];
        const tStr = parts[1].replace('Z', '');
        if (dStr.length === 8 && tStr.length >= 4) {
          const y = parseInt(dStr.substring(0, 4));
          const m = parseInt(dStr.substring(4, 6)) - 1;
          const d = parseInt(dStr.substring(6, 8));
          const hh = parseInt(tStr.substring(0, 2));
          const mm = parseInt(tStr.substring(2, 4));
          const utcDate = new Date(Date.UTC(y, m, d, hh, mm));
          const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          return days[utcDate.getDay()];
        }
      }

      let datePart = rawVal.includes('T') ? rawVal.split('T')[0] : rawVal;
      if (datePart.length >= 8) {
        const y = parseInt(datePart.substring(0, 4));
        const m = parseInt(datePart.substring(4, 6)) - 1;
        const d = parseInt(datePart.substring(6, 8));
        const dateObj = new Date(y, m, d);
        if (!isNaN(dateObj.getTime())) {
           const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
           return days[dateObj.getDay()];
        }
      }
      return null;
    };

    // Helper to map RRULE BYDAY to short Day string
    const parseDay = (rruleStr) => {
      if (!rruleStr) return null;
      const dayMap = {
        'MO': 'Mon', 'TU': 'Tue', 'WE': 'Wed', 'TH': 'Thu', 'FR': 'Fri', 'SA': 'Sat', 'SU': 'Sun'
      };
      const byDayMatch = rruleStr.match(/BYDAY=([A-Z]{2})/i);
      if (byDayMatch && dayMap[byDayMatch[1].toUpperCase()]) {
        return dayMap[byDayMatch[1].toUpperCase()];
      }
      return null;
    };

    // State machine parser with case-insensitive tag matching
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const upperLine = line.toUpperCase();

      if (upperLine.startsWith('BEGIN:VEVENT')) {
        currentEvent = {
          code: '', title: '', day: 'Mon', startTime: '', endTime: '', type: 'Lecture', room: '', lecturer: '', group: ''
        };
      } else if (upperLine.startsWith('END:VEVENT') && currentEvent) {
        if (currentEvent.title) {
          const split = currentEvent.title.split(' - ');
          if (split.length > 1) {
            currentEvent.code = split[0].trim();
            currentEvent.title = split.slice(1).join(' - ').trim();
          } else {
            const words = currentEvent.title.split(' ');
            if (words[0] && words[0] === words[0].toUpperCase() && /[0-9]/.test(words[0])) {
               currentEvent.code = words[0];
            } else {
               currentEvent.code = currentEvent.title;
            }
          }
        } else {
          currentEvent.code = 'COURSE';
        }
        
        if (currentEvent.startTime && currentEvent.endTime) {
          events.push(currentEvent);
        } else if (currentEvent.startTime) {
          const [sh, sm] = currentEvent.startTime.split(':').map(Number);
          const eh = (sh + 1) % 24;
          currentEvent.endTime = `${String(eh).padStart(2, '0')}:${String(sm || 0).padStart(2, '0')}`;
          events.push(currentEvent);
        }
        currentEvent = null;
      } else if (currentEvent) {
        if (upperLine.startsWith('SUMMARY')) {
          currentEvent.title = getValue(line);
        } else if (upperLine.startsWith('LOCATION')) {
          currentEvent.room = getValue(line);
        } else if (upperLine.startsWith('DTSTART')) {
          const val = getValue(line);
          currentEvent.startTime = parseTime(val);
          const parsedDay = getDayFromDateStr(val);
          if (parsedDay) currentEvent.day = parsedDay;
        } else if (upperLine.startsWith('DTEND')) {
          currentEvent.endTime = parseTime(getValue(line));
        } else if (upperLine.startsWith('RRULE')) {
          const rruleDay = parseDay(getValue(line));
          if (rruleDay) currentEvent.day = rruleDay;
        } else if (upperLine.startsWith('DESCRIPTION')) {
          const desc = getValue(line);
          const descLower = desc.toLowerCase();
          if (descLower.includes('lecturer:') || descLower.includes('prof')) {
             currentEvent.lecturer = desc.substring(0, 50);
          } else if (descLower.includes('occ') || descLower.includes('grp') || descLower.includes('group') || descLower.includes('sec')) {
             currentEvent.group = desc.substring(0, 20);
          }
        }
      }
    }

    // Deduplicate events to handle ICS files that export every single week as a separate event
    const uniqueEvents = [];
    const seen = new Set();
    for (const ev of events) {
      // Create a unique fingerprint for this class occurrence
      const key = `${ev.code}|${ev.title}|${ev.day}|${ev.startTime}|${ev.endTime}|${ev.type}|${ev.room}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueEvents.push(ev);
      }
    }

    return uniqueEvents;
  }

  /**
   * Parse a CSV string into an array of course objects.
   * Handles grouping multiple OCCs (Occurrences).
   * @param {string} content 
   * @returns {Array} List of course objects
   */
  static parseCSV(content) {
    const lines = content.split(/\r?\n/).filter(l => l.trim() !== '');
    if (lines.length < 2) return [];

    // 1. Find the real header row (TimeEdit/UM puts metadata in the first few rows)
    let headerIdx = 0;
    const headerKeywords = ['start', 'begin', 'time', 'module', 'subject', 'code', 'course', 'day', 'hari', 'masa', 'tarikh', 'venue', 'room', 'location', 'type', 'group', 'occ', 'section'];
    let maxMatches = 0;
    
    for (let i = 0; i < Math.min(lines.length, 20); i++) {
      const lower = lines[i].toLowerCase();
      let matches = 0;
      for (const kw of headerKeywords) {
        // Ensure keyword matches as whole word or with delimiters
        if (lower.includes(kw)) matches++;
      }
      
      const colCount = Math.max(lower.split(',').length, lower.split(';').length, lower.split('\t').length);
      if (colCount >= 3 && matches > maxMatches) {
        maxMatches = matches;
        headerIdx = i;
      }
    }

    // Detect delimiter: comma, semicolon, or tab
    const sampleLine = lines[headerIdx] || lines[0] || '';
    let delim = ',';
    if (sampleLine.includes(';') && (sampleLine.split(';').length > sampleLine.split(',').length)) {
       delim = ';';
    } else if (sampleLine.includes('\t') && (sampleLine.split('\t').length > sampleLine.split(',').length)) {
       delim = '\t';
    }

    const parseCSVLine = (line) => {
      const result = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === delim && !inQuotes) {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim());
      return result;
    };

    const headers = parseCSVLine(lines[headerIdx]).map(h => h.toLowerCase().replace(/"/g, '').trim());
    
    // Map expected fields to header indices flexibly
    const headerMap = {
      code: headers.findIndex(h => h.includes('code') || h.includes('module') || h.includes('course') || h.includes('kursus')),
      title: headers.findIndex(h => h.includes('title') || h.includes('name') || h.includes('desc') || h.includes('subject')),
      day: headers.findIndex(h => h.includes('day') || h.includes('hari') || h.includes('slot')),
      date: headers.findIndex(h => h.includes('date') || h.includes('tarikh')), 
      startTime: headers.findIndex(h => (h.includes('start') || h.includes('from') || h.includes('begin') || h.includes('mula')) && !h.includes('date') && !h.includes('tarikh') && !h.includes('minggu') && !h.includes('week')),
      endTime: headers.findIndex(h => (h.includes('end') || h.includes('to') || h.includes('until') || h.includes('tamat')) && !h.includes('date') && !h.includes('tarikh') && !h.includes('minggu') && !h.includes('week')),
      type: headers.findIndex(h => h.includes('type') || h.includes('mode') || h.includes('activity') || h.includes('jenis')),
      room: headers.findIndex(h => h.includes('room') || h.includes('location') || h.includes('venue') || h.includes('bilik') || h.includes('dewan')),
      lecturer: headers.findIndex(h => h.includes('lecturer') || h.includes('teacher') || h.includes('instructor') || h.includes('pensyarah')),
      group: headers.findIndex(h => h.includes('group') || h.includes('occ') || h.includes('section') || h.includes('class') || h.includes('kumpulan') || h.includes('kump') || h.includes('sesi'))
    };

    const events = [];
    const seenSignatures = new Set(); // For deduplicating weekly recurring instances

    for (let i = headerIdx + 1; i < lines.length; i++) {
      const cols = parseCSVLine(lines[i]).map(c => c.replace(/"/g, '').trim());
      if (cols.length < 2) continue; // Skip malformed rows

      // Extract values safely
      const getCol = (idx) => (idx !== -1 && cols[idx]) ? cols[idx] : '';
      
      let rawDay = getCol(headerMap.day);
      let day = 'Mon';
      
      if (rawDay) {
         if (rawDay.toLowerCase().startsWith('mo') || rawDay.toLowerCase().includes('isnin')) day = 'Mon';
         else if (rawDay.toLowerCase().startsWith('tu') || rawDay.toLowerCase().includes('selasa')) day = 'Tue';
         else if (rawDay.toLowerCase().startsWith('we') || rawDay.toLowerCase().includes('rabu')) day = 'Wed';
         else if (rawDay.toLowerCase().startsWith('th') || rawDay.toLowerCase().includes('khamis')) day = 'Thu';
         else if (rawDay.toLowerCase().startsWith('fr') || rawDay.toLowerCase().includes('jumaat')) day = 'Fri';
         else if (rawDay.toLowerCase().startsWith('sa') || rawDay.toLowerCase().includes('sabtu')) day = 'Sat';
         else if (rawDay.toLowerCase().startsWith('su') || rawDay.toLowerCase().includes('ahad')) day = 'Sun';
      } else {
         // Fallback to parsing day of week from Date
         let dateVal = getCol(headerMap.date);
         if (dateVal) {
           let d;
           if (dateVal.includes('/')) {
             const parts = dateVal.split('/');
             if (parts.length === 3) d = new Date(`${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`);
           } else {
             d = new Date(dateVal);
           }
           const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
           if (d && !isNaN(d.getDay())) day = days[d.getDay()];
         }
      }

      let startTime = getCol(headerMap.startTime);
      let endTime = getCol(headerMap.endTime);
      
      // If there's a single 'Time' column like "09:00 - 11:00"
      if (!startTime || !endTime) {
         const timeIdx = headers.findIndex(h => h.includes('time') || h.includes('masa'));
         if (timeIdx !== -1 && cols[timeIdx]) {
           const timeParts = cols[timeIdx].split(/[-–—to]+/i);
           if (timeParts.length >= 2) {
             if (!startTime) startTime = timeParts[0].trim();
             if (!endTime) endTime = timeParts[1].trim();
           } else if (timeParts.length === 1) {
             if (!startTime) startTime = timeParts[0].trim();
           }
         }
      }

      let code = getCol(headerMap.code);
      let title = getCol(headerMap.title);

      // Fallback if only one column exists for both
      if (!code && title) {
         const words = title.split(' ');
         code = words[0]; 
      } else if (!title && code) {
         title = code;
      }
      
      const type = getCol(headerMap.type) || '';
      const baseRoom = getCol(headerMap.room) || '';
      const baseLecturer = getCol(headerMap.lecturer) || '';
      let codeColStr = code || '';
      
      // If codeColStr doesn't contain a course code, try to find a column that DOES.
      if (!codeColStr.match(/([A-Z]{3,4}\s*\d{4})/i)) {
          for (let j = 0; j < cols.length; j++) {
              if (cols[j].match(/([A-Z]{3,4}\s*\d{4})/i)) {
                  codeColStr = cols[j].trim();
                  break;
              }
          }
      }

      // Split the column by commas to handle shared slots (e.g. KIG2012/S1/1, KIG2012/S1/2)
      const codesList = codeColStr ? codeColStr.split(',') : ['COURSE'];
      const fallbackGroup = getCol(headerMap.group) || '';

      codesList.forEach(rawItem => {
         let cleanCode = rawItem.trim();
         let group = fallbackGroup;

         // Extract Code and OCC from each individual item
         const match = cleanCode.match(/([A-Z]{3,4}\s*\d{4})/i);
         if (match) {
            const foundCode = match[1].replace(/\s/g, '').toUpperCase(); // Normalize to KIG1001
            // Extract the rest of the string as the group
            const rest = cleanCode.substring(match.index + match[0].length).replace(/^[\/\-\s]+/, '').trim();
            cleanCode = foundCode;
            if (rest.length > 0) {
               group = rest;
            }
         }

         // Time normalization helper: converts "9:00:00 AM", "09.00", "09:00:00", "9:00" -> "09:00"
         const normalizeTime = (t) => {
           if (!t) return '00:00';
           let str = t.trim().toUpperCase();
           let isPM = str.includes('PM');
           let isAM = str.includes('AM');
           str = str.replace(/[A-Z\s]/g, '');
           const parts = str.split(/[:.]/);
           let h = parseInt(parts[0] || '0', 10);
           let m = parseInt(parts[1] || '0', 10);
           if (isPM && h < 12) h += 12;
           if (isAM && h === 12) h = 0;
           return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
         };

         const normStart = normalizeTime(startTime);
         const normEnd = normalizeTime(endTime);
         const normCode = (cleanCode || '').toUpperCase().trim();
         const normGroup = (group || '').toUpperCase().trim();
         const normType = (type || '').toUpperCase().trim();
         const normDay = (day || 'Mon').substring(0, 3);

         // Deduplicate: If this exact class happens every week (14 weeks), keep it only once
         const signature = `${normCode}-${normGroup}-${normDay}-${normStart}-${normEnd}-${normType}`;
         if (seenSignatures.has(signature)) {
            return; // Skip this weekly duplicate instance
         }
         seenSignatures.add(signature);

         events.push({
           code: cleanCode || 'COURSE',
           title: title || 'Course',
           day: day,
           startTime: normStart !== '00:00' ? normStart : (startTime || '08:00'),
           endTime: normEnd !== '00:00' ? normEnd : (endTime || '09:00'),
           type: type,
           room: baseRoom,
           lecturer: baseLecturer,
           group: group
         });
      });
    }

    return events;
  }
}

window.ScheduleParser = ScheduleParser;
