// Append a card element
function appendCard(item, index){
    $("#terms").append(`<div id="card${index}" class='card'></div>`)
    // Bold text
    if(item.substring(0,2)!=="--") {
        $(`#card${index}`).append(`<div class='term'>${item}</div>`)
    } else {
        $(`#card${index}`).append(`<div class='term'><b>${item.replaceAll("--","")}</b></div>`)
    }
    if(filtered2[index].replace(/\s/g, '').length>0) {
        if(filtered2[index].substring(0,2)!=="--") {
            $(`#card${index}`).append(`<div class='definition'>${filtered2[index]}</div>`)
        } else {
            $(`#card${index}`).append(`<div class='definition'><b>${filtered2[index].replaceAll("--","")}</b></div>`)
        }
        // $(`#card${index}`).append(`<div class='definition'>${filtered2[index]}</div>`)
    }
    
}

// Filter even items of an array
function even(a) {
    var ar = [];
    for (var i = 0; i < a.length; i++) {
        if(i % 2 === 0) {
            ar.push(a[i]);
        }
    }
    return ar;
}

// Filter odd items of an array
function odd(a) {
    var ar = [];
    for(var i = 1; i < a.length; i += 2) {
        ar.push(a[i]);
    }
    return ar;
}

// Open a file
function importFile() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = e => { 
    var file = e.target.files[0];
    currentFileName=file.name.split(".",1)
    setAppName(`${currentFileName} - JS Learn`)
    
    localStorage.JSlearnLastFilename=LZString.compressToBase64(currentFileName[0]);
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');

    reader.onload = readerEvent => {
        text = readerEvent.target.result;
        textToCards(text)
        localStorage.JSlearnLastLoaded=LZString.compressToBase64(text);
    }
}
    input.click();
}

function textToCards(text) {
    $("#terms").html("")
    // Sanitize the text
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // Split the text every enter
    lines = text.split(/[\r\n]+/g);
    // Remove the last line
    console.log(lines[lines.length])
    if(lines[lines.length-1]=="") {
        lines.length=lines.length-1;
    }
    // Filter even items
    filtered1=even(lines);
    // Filter odd items
    filtered2=odd(lines);
    // Append each card
    filtered1.forEach(appendCard);
    $("#hideDefinitionsButton").show();
    $("#openLastFileButton").remove()
    $("#shareFile").show();
}

function openLastFile() {
    text=LZString.decompressFromBase64(localStorage.JSlearnLastLoaded);
    textToCards(text);
    currentFileName=LZString.decompressFromBase64(localStorage.JSlearnLastFilename);
    setAppName(`${LZString.decompressFromBase64(localStorage.JSlearnLastFilename)} - JS Learn`)
}

function shareUrl() {
    var url = `http://${location.host}/jslearn/?c=${localStorage.JSlearnLastLoaded}`
    if(url.length<4096) {
        if(typeof currentFileName!=="undefined") {
            dialog(`<a target="_blank" href="${url}">${LZString.decompressFromBase64(localStorage.JSlearnLastFilename)}</a>`,"custom", "Shareable Link:")
        } else {
            dialog(`<a target="_blank" href="${url}">Link</a>`,"custom", "Shareable Link:")
        }
    } else {
        dialog(`The file is too large to share!\nCurrent size: ${url.length} bytes\nMaximum size: 4096 bytes`,"error")
    }

    
}

// Hide Definitions
function hideDefinitions() {
    $("head").append("<style id='hideDefinitions'>.definition{color:transparent;user-select:none}.definition:hover{color:var(--foreground);user-select:initial}</style");
    $("#hideDefinitionsButton").hide();
    $("#showDefinitionsButton").show();

}
// Show Definitions
function showDefinitions() {
    $("#hideDefinitions").remove();
    $("#showDefinitionsButton").hide();
    $("#hideDefinitionsButton").show();
}

// Hide the show definitions button on app load
$(function() {
    $("#showDefinitionsButton").hide();
    $("#hideDefinitionsButton").hide();
    $("#shareFile").hide();
    if(typeof localStorage.JSlearnLastLoaded!=="undefined") {
        $(".actionBar").append(`<button id="openLastFileButton" onclick="openLastFile()"><span class="icon">refresh</span>Reopen Last File</button>`)
    }
    if(getAppParam("c",undefined)!==undefined) {
        textToCards(LZString.decompressFromBase64(getAppParam("c",undefined)))
    }
  });