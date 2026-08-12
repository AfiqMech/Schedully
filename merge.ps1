$oldHtml = Get-Content -Raw "index_backup.html" -Encoding UTF8
$newHtml = Get-Content -Raw "stitch.html" -Encoding UTF8

$themeForm = [regex]::Match($oldHtml, '(?s)(<div[^>]*id="content-theme"[^>]*>.*?)(?=</section>)').Groups[1].Value
$layoutForm = [regex]::Match($oldHtml, '(?s)(<div[^>]*id="content-layout-options"[^>]*>.*?)(?=</section>)').Groups[1].Value
$addClassForm = [regex]::Match($oldHtml, '(?s)(<div[^>]*id="content-add-course"[^>]*>.*?)(?=</section>)').Groups[1].Value
$importForm = [regex]::Match($oldHtml, '(?s)(<div[^>]*id="content-file-import"[^>]*>.*?)(?=</section>)').Groups[1].Value

$newHtml = [regex]::Replace($newHtml, '(?s)(<a[^>]*>.*?Theme &amp; Colors.*?</a>)', {
    param($match)
    $aTag = $match.Groups[1].Value -replace '<a class="', '<a id="header-theme" class="card-expand-header '
    return "$aTag`n$themeForm"
})
$newHtml = [regex]::Replace($newHtml, '(?s)(<a[^>]*>.*?Timetable Layout.*?</a>)', {
    param($match)
    $aTag = $match.Groups[1].Value -replace '<a class="', '<a id="header-layout-options" class="card-expand-header '
    return "$aTag`n$layoutForm"
})
$newHtml = [regex]::Replace($newHtml, '(?s)(<a[^>]*>.*?Add Class / Course.*?</a>)', {
    param($match)
    $aTag = $match.Groups[1].Value -replace '<a class="', '<a id="header-add-course" class="card-expand-header '
    return "$aTag`n$addClassForm"
})
$newHtml = [regex]::Replace($newHtml, '(?s)(<a[^>]*>.*?Schedule Importer.*?</a>)', {
    param($match)
    $aTag = $match.Groups[1].Value -replace '<a class="', '<a id="header-file-import" class="card-expand-header '
    return "$aTag`n$importForm"
})
$newHtml = [regex]::Replace($newHtml, '(?s)(<a[^>]*>.*?Timetable Scanner.*?</a>)', {
    param($match)
    $aTag = $match.Groups[1].Value -replace '<a class="', '<a id="header-scanner" class="card-expand-header '
    return "$aTag"
})

$clashAlertMatch = [regex]::Match($oldHtml, '(?s)(<div id="clash-alert".*?</div>\s*</div>)')
$clashAlert = if ($clashAlertMatch.Success) { $clashAlertMatch.Groups[1].Value } else { "" }

$phoneWrapperStart = $oldHtml.IndexOf('<div class="m3-phone-wrapper">')
$phoneWrapperEnd = $oldHtml.IndexOf('</section>', $phoneWrapperStart)
if ($phoneWrapperStart -ge 0 -and $phoneWrapperEnd -gt $phoneWrapperStart) {
    $phoneWrapper = $oldHtml.Substring($phoneWrapperStart, $phoneWrapperEnd - $phoneWrapperStart)
    $bezelMatch = [regex]::Match($newHtml, '(?s)<div class="w-\[320px\] h-\[650px\] device-bezel.*?<div class="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div></div>')
    if ($bezelMatch.Success) {
        $newHtml = $newHtml.Replace($bezelMatch.Value, $phoneWrapper)
    }
}

$newHtml = $newHtml.Replace('Calendar (.ics)', '<span id="btn-export-ical" style="display:flex;align-items:center;gap:8px;cursor:pointer;">Calendar (.ics)</span>')
$newHtml = $newHtml.Replace('Download Image', '<span id="btn-download-hd" style="display:flex;align-items:center;gap:8px;cursor:pointer;">Download Image</span>')
$newHtml = $newHtml.Replace('Save as PDF', '<span id="btn-save-pdf" style="display:flex;align-items:center;gap:8px;cursor:pointer;">Save as PDF</span>')
$newHtml = $newHtml.Replace('value="Untitled"', 'id="input-title-text-stage" value="Untitled"')
$newHtml = $newHtml.Replace('Smartphone', '<span data-device="phone" class="capsule-btn w-full h-full flex items-center justify-center gap-2" style="cursor:pointer;">Smartphone</span>')
$newHtml = $newHtml.Replace('>Tablet', '><span data-device="tablet" class="capsule-btn w-full h-full flex items-center justify-center gap-2" style="cursor:pointer;">Tablet</span>')
$newHtml = $newHtml.Replace('>Paper', '><span data-device="paper" class="capsule-btn w-full h-full flex items-center justify-center gap-2" style="cursor:pointer;">Paper</span>')
$newHtml = $newHtml.Replace('0 Subjects', '<span id="slots-badge-count">0</span> Subjects')
$newHtml = $newHtml.Replace('Clear All', '<span id="btn-clear-all" style="display:flex;align-items:center;gap:8px;cursor:pointer;width:100%;">Clear All</span>')
$newHtml = $newHtml.Replace('>Settings', '><span id="btn-schedule-settings-toggle" style="display:flex;align-items:center;gap:8px;cursor:pointer;width:100%;">Settings</span>')

$emptyStateStart = $newHtml.IndexOf('<!-- Empty State Content -->')
$emptyStateEnd = $newHtml.IndexOf('<!-- Help Widget at bottom -->')
if ($emptyStateStart -ge 0 -and $emptyStateEnd -gt $emptyStateStart) {
    $emptyStateHtml = $newHtml.Substring($emptyStateStart, $emptyStateEnd - $emptyStateStart)
    $newHtml = $newHtml.Replace($emptyStateHtml, "<div id=""empty-state-wrapper"" class=""flex-1 flex flex-col"">$emptyStateHtml</div>`n<div id=""added-classes-list"" class=""flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3""></div>`n$clashAlert`n")
}

$newHtml = $newHtml.Replace('</body>', "<script src=""app_v3.js""></script>`n</body>")
$newHtml = $newHtml.Replace('</head>', "<link rel=""stylesheet"" href=""styles.css"">`n</head>")
$newHtml = $newHtml.Replace('<div class="flex flex-col items-center gap-2">', '<div class="flex flex-col items-center gap-2 hidden">')

[IO.File]::WriteAllText("index.html", $newHtml)
Write-Host "Success"
