import re

with open('index_backup.html', 'r', encoding='utf-8') as f:
    old_html = f.read()

with open('stitch.html', 'r', encoding='utf-8') as f:
    new_html = f.read()

def extract_form(id_name):
    match = re.search(f'(<div[^>]*id="{id_name}"[^>]*>.*?)(?=</section>)', old_html, re.DOTALL)
    if match:
        content = match.group(1).strip()
        # Add Tailwind classes to our forms to ensure they look okay when visible, or we rely on our css.
        # But we must ensure it's wrapped properly.
        return content
    return ''

theme_form = extract_form('content-theme')
layout_form = extract_form('content-layout-options')
add_class_form = extract_form('content-add-course')
import_form = extract_form('content-file-import')

def inject_form_after_nav_item(nav_title, form_content, new_html_str):
    pattern = f'(<a[^>]*>.*?{nav_title}.*?</a>)'
    def replacer(match):
        a_tag = match.group(1)
        header_id = ""
        if "Theme" in nav_title: header_id = "header-theme"
        elif "Layout" in nav_title: header_id = "header-layout-options"
        elif "Add Class" in nav_title: header_id = "header-add-course"
        elif "Importer" in nav_title: header_id = "header-file-import"
        elif "Scanner" in nav_title: header_id = "header-scanner" 
        
        a_tag = a_tag.replace('<a class="', f'<a id="{header_id}" class="card-expand-header ')
        return a_tag + '\n' + form_content

    return re.sub(pattern, replacer, new_html_str, flags=re.DOTALL)

new_html = inject_form_after_nav_item('Theme &amp; Colors', theme_form, new_html)
new_html = inject_form_after_nav_item('Timetable Layout', layout_form, new_html)
new_html = inject_form_after_nav_item('Add Class / Course', add_class_form, new_html)
new_html = inject_form_after_nav_item('Schedule Importer', import_form, new_html)

# Add our missing UI elements to Right Sidebar
clash_alert_match = re.search(r'(<div id="clash-alert".*?</div>\s*</div>)', old_html, re.DOTALL)
clash_alert = clash_alert_match.group(1) if clash_alert_match else ''

# Extract Center Canvas (it's the m3-phone-wrapper)
phone_wrapper_start = old_html.find('<div class="m3-phone-wrapper">')
# Let's find the closing tag for phone wrapper by counting divs, or just find the end marker.
# We know it is followed by the closing section.
phone_wrapper_end = old_html.find('</section>', phone_wrapper_start)
phone_wrapper = old_html[phone_wrapper_start:phone_wrapper_end].strip()

# Replace Stitch placeholder
bezel_start = new_html.find('<div class="w-[320px] h-[650px] device-bezel')
bezel_end = new_html.find('<!-- Bottom Zoom/View Controls -->', bezel_start)
# we need to preserve the div that closes the flex parent. Actually Stitch placeholder is a direct child of a div.
# Looking at Stitch HTML:
# <div class="flex-1 flex items-center justify-center p-8 relative">
#   <div class="absolute inset-0 ... bg blobs ..."></div>
#   <div class="w-[320px] h-[650px] device-bezel ..."> ... </div></div></div>
#   <div class="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div></div>
# </div>
# If we replace bezel_start to bezel_end, we might wipe out too much.
# Let's use regex to replace just the device-bezel div.
# It ends with `<div class="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div></div>`
# We'll just replace the device-bezel div.
match = re.search(r'<div class="w-\[320px\] h-\[650px\] device-bezel.*?<div class="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div></div>', new_html, re.DOTALL)
if match:
    new_html = new_html.replace(match.group(0), phone_wrapper)

# Add JS IDs to Stitch Elements
new_html = new_html.replace('Calendar (.ics)', '<span id="btn-export-ical" style="display:flex;align-items:center;gap:8px;">Calendar (.ics)</span>')
new_html = new_html.replace('Download Image', '<span id="btn-download-hd" style="display:flex;align-items:center;gap:8px;">Download Image</span>')
new_html = new_html.replace('Save as PDF', '<span id="btn-save-pdf" style="display:flex;align-items:center;gap:8px;">Save as PDF</span>')

new_html = new_html.replace('value="Untitled"', 'id="input-title-text-stage" value="Untitled"')

new_html = new_html.replace('Smartphone', '<span data-device="phone" class="capsule-btn w-full h-full flex items-center gap-2">Smartphone</span>')
new_html = new_html.replace('Tablet', '<span data-device="tablet" class="capsule-btn w-full h-full flex items-center gap-2">Tablet</span>')
new_html = new_html.replace('Paper', '<span data-device="paper" class="capsule-btn w-full h-full flex items-center gap-2">Paper</span>')

# Right Sidebar IDs
new_html = new_html.replace('0 Subjects', '<span id="slots-badge-count">0</span> Subjects')
new_html = new_html.replace('Clear All', '<span id="btn-clear-all" style="display:flex;align-items:center;gap:8px;cursor:pointer;">Clear All</span>')
new_html = new_html.replace('Settings', '<span id="btn-schedule-settings-toggle" style="display:flex;align-items:center;gap:8px;cursor:pointer;">Settings</span>')

# Empty State
empty_state_start = new_html.find('<!-- Empty State Content -->')
empty_state_end = new_html.find('<!-- Help Widget at bottom -->')
empty_state_html = new_html[empty_state_start:empty_state_end]
new_html = new_html.replace(empty_state_html, f'<div id="empty-state-wrapper" class="flex-1 flex flex-col">{empty_state_html}</div>\n<div id="added-classes-list" class="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3"></div>\n{clash_alert}\n')

# Append scripts
new_html = new_html.replace('</body>', '<script src="app_v3.js"></script>\n</body>')
new_html = new_html.replace('</head>', '<link rel="stylesheet" href="styles.css">\n</head>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Merge completed successfully.")
