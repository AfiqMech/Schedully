import json

log_file = r'C:\Users\afiqh\.gemini\antigravity\brain\a9c6a5e7-be2f-481a-b2cd-f7b506da34af\.system_generated\logs\transcript_full.jsonl'

best_content = None
max_len = 0

with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            entry = json.loads(line)
            if entry.get('type') == 'SYSTEM_RESPONSE' or entry.get('type') == 'PLANNER_RESPONSE':
                # check if there's an output of app_v3.js
                content = entry.get('content', '')
                if 'app_v3.js' in content and 'class App {' in content:
                    # heuristic for full file output
                    if len(content) > max_len:
                        max_len = len(content)
                        best_content = content
                        
            # Also check tool calls if any tool call returned the file
            if 'tool_calls' in entry:
                for call in entry['tool_calls']:
                    if call.get('name') == 'default_api:view_file' and 'app_v3.js' in call.get('arguments', {}).get('AbsolutePath', ''):
                        pass # tool call arguments don't have output
                        
            # Wait, tool outputs are in tool_responses maybe? Or SYSTEM_RESPONSE?
            # Let's just dump the largest string containing 'class App {' and 'app_v3.js'
            
        except:
            pass
            
print(f"Max len found: {max_len}")
if max_len > 0:
    with open('recovered.txt', 'w', encoding='utf-8') as out:
        out.write(best_content)

