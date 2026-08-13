const fs = require('fs');

const logFile = 'C:\\Users\\afiqh\\.gemini\\antigravity\\brain\\a9c6a5e7-be2f-481a-b2cd-f7b506da34af\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logFile, 'utf8').split('\n');

let maxLen = 0;
let bestContent = '';

for (const line of lines) {
    if (!line) continue;
    try {
        const entry = JSON.parse(line);
        if (entry.type === 'SYSTEM_RESPONSE' || entry.type === 'PLANNER_RESPONSE') {
            const content = entry.content || '';
            if (content.includes('class App {') && content.length > maxLen) {
                maxLen = content.length;
                bestContent = content;
            }
        }
    } catch(e) {}
}

console.log('Max len found:', maxLen);
if (maxLen > 0) {
    fs.writeFileSync('recovered.txt', bestContent, 'utf8');
}
