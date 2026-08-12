const fs = require('fs');

const oldHtml = fs.readFileSync('index_backup.html', 'utf-8');
let newHtml = fs.readFileSync('stitch.html', 'utf-8');

function extractForm(idName) {
    const regex = new RegExp(`(<div[^>]*id="${idName}"[^>]*>.*?)(?=</section>)`, 's');
    const match = oldHtml.match(regex);
    if (match) {
        return match[1].trim();
    }
    return '';
}

const themeForm = extractForm('content-theme');
const layoutForm = extractForm('content-layout-options');
const addClassForm = extractForm('content-add-course');
const importForm = extractForm('content-file-import');

function injectFormAfterNavItem(navTitle, formContent, htmlStr) {
    // We need to match the <a> tag that contains navTitle
    // Since JavaScript regex doesn't support dotall nicely without 's' flag, we use 's' flag.
    const pattern = new RegExp(`(<a[^>]*>.*?${navTitle}.*?</a>)`, 's');
    return htmlStr.replace(pattern, (match, aTag) => {
        let headerId = "";
        if (navTitle.includes("Theme")) headerId = "header-theme";
        else if (navTitle.includes("Layout")) headerId = "header-layout-options";
        else if (navTitle.includes("Add Class")) headerId = "header-add-course";
        else if (navTitle.includes("Importer")) headerId = "header-file-import";
        else if (navTitle.includes("Scanner")) headerId = "header-scanner";
        
        const modifiedATag = aTag.replace('<a class="', `<a id="${headerId}" class="card-expand-header `);
        return modifiedATag + '\n' + formContent;
    });
}

newHtml = injectFormAfterNavItem('Theme &amp; Colors', themeForm, newHtml);
newHtml = injectFormAfterNavItem('Timetable Layout', layoutForm, newHtml);
newHtml = injectFormAfterNavItem('Add Class / Course', addClassForm, newHtml);
newHtml = injectFormAfterNavItem('Schedule Importer', importForm, newHtml);

// Right Sidebar - Clash alert
const clashAlertMatch = oldHtml.match(/(<div id="clash-alert".*?<\/div>\s*<\/div>)/s);
const clashAlert = clashAlertMatch ? clashAlertMatch[1] : '';

// Center Canvas
const phoneWrapperStart = oldHtml.indexOf('<div class="m3-phone-wrapper">');
const phoneWrapperEnd = oldHtml.indexOf('</section>', phoneWrapperStart);
const phoneWrapper = oldHtml.substring(phoneWrapperStart, phoneWrapperEnd).trim();

// Replace Stitch placeholder
const bezelStart = newHtml.indexOf('<div class="w-[320px] h-[650px] device-bezel');
const bezelEndStr = '<div class="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div></div>';
const bezelRegex = new RegExp(`<div class="w-\\[320px\\] h-\\[650px\\] device-bezel.*?${bezelEndStr}`, 's');
newHtml = newHtml.replace(bezelRegex, phoneWrapper);

// Add JS IDs
newHtml = newHtml.replace('Calendar (.ics)', '<span id="btn-export-ical" style="display:flex;align-items:center;gap:8px;">Calendar (.ics)</span>');
newHtml = newHtml.replace('Download Image', '<span id="btn-download-hd" style="display:flex;align-items:center;gap:8px;">Download Image</span>');
newHtml = newHtml.replace('Save as PDF', '<span id="btn-save-pdf" style="display:flex;align-items:center;gap:8px;">Save as PDF</span>');
newHtml = newHtml.replace('value="Untitled"', 'id="input-title-text-stage" value="Untitled"');
newHtml = newHtml.replace('Smartphone', '<span data-device="phone" class="capsule-btn w-full h-full flex items-center gap-2" style="cursor:pointer;">Smartphone</span>');
newHtml = newHtml.replace('>Tablet', '><span data-device="tablet" class="capsule-btn w-full h-full flex items-center gap-2" style="cursor:pointer;">Tablet</span>');
newHtml = newHtml.replace('>Paper', '><span data-device="paper" class="capsule-btn w-full h-full flex items-center gap-2" style="cursor:pointer;">Paper</span>');

// Right Sidebar IDs
newHtml = newHtml.replace('0 Subjects', '<span id="slots-badge-count">0</span> Subjects');
newHtml = newHtml.replace('Clear All', '<span id="btn-clear-all" style="display:flex;align-items:center;gap:8px;cursor:pointer;width:100%;">Clear All</span>');
newHtml = newHtml.replace('>Settings', '><span id="btn-schedule-settings-toggle" style="display:flex;align-items:center;gap:8px;cursor:pointer;width:100%;">Settings</span>');

// Empty State
const emptyStateStart = newHtml.indexOf('<!-- Empty State Content -->');
const emptyStateEnd = newHtml.indexOf('<!-- Help Widget at bottom -->');
const emptyStateHtml = newHtml.substring(emptyStateStart, emptyStateEnd);
newHtml = newHtml.replace(emptyStateHtml, `<div id="empty-state-wrapper" class="flex-1 flex flex-col">${emptyStateHtml}</div>\n<div id="added-classes-list" class="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3"></div>\n${clashAlert}\n`);

// Remove any existing script/styles if needed, append logic
newHtml = newHtml.replace('</body>', '<script src="app_v3.js"></script>\n</body>');
newHtml = newHtml.replace('</head>', '<link rel="stylesheet" href="styles.css">\n</head>');

fs.writeFileSync('index.html', newHtml, 'utf-8');
console.log("Merge completed.");
