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


// Clears the the Library
function clearLibrary() {
    Object.entries(localStorage).map(
    x => x[0]
    ).filter(
        x => x.substring(0, 14) == "JSlearnLibrary"
    ).map(
        x => localStorage.removeItem(x))
}

function deleteLibraryItem(name, elementID) {
    localStorage.removeItem(name);
    $(`#libraryItem${elementID}`).remove()
}

// Reads the Library
function readLibrary(name) {
    var result = localStorage.getItem("JSlearnLibrary" + name);
    if (result!==null) {
        return result;
    } else {
        return false
    }
}

// Writes item to library
function writeLibrary(name, value) {
    localStorage.setItem("JSlearnLibrary" + name, value)
}

// Checks if library item exists
function checkLibrary(name) {
    if(typeof readLibrary(name) == "string") {
        return true
    } else {
        return false
    }
}

function listLibrary() {
    function libraryItem(item) {
        return item.substring(0, 14) == "JSlearnLibrary"
      }
      var fullLocalStorage = Object.keys(localStorage);
      return(fullLocalStorage.filter(libraryItem))
}
const library=listLibrary();

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
    
    
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');

    reader.onload = readerEvent => {
        text = readerEvent.target.result;
        textToCards(text, currentFileName)
    }
}
    input.click();
}

function textToCards(text, name) {
    if(typeof name !=="undefined") {
        if(typeof name !== "string") {
            name=name[0]
        }
        localStorage.JSlearnLastFilename=LZString.compressToBase64(name);
    }
    
    localStorage.JSlearnLastLoaded=LZString.compressToBase64(text);
    if (typeof name!=="undefined") {
        currentFileName = name;
        setAppName(name)
    }
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
    $("#importFile").remove();
    $("#openLastFileButton").remove();
    $("#library").remove();
    $("#hideDefinitionsButton").show();
    if(typeof currentFileName!=="undefined") {
        $("#shareFile").show()
    }
    if(typeof currentFileName!=="undefined"&&!checkLibrary(LZString.compressToBase64(currentFileName))) {
        $(".actionBar").append(`<button id="addToLibraryButton" onclick="addToLibrary()"><span class="icon">add</span>Add to Library</button>`)
    }
    if(checkLibrary(LZString.compressToBase64(currentFileName))) {
        $(".actionBar").append("<p><span class='icon'>check</span>In library</p>")
    }
}

function addToLibrary() {
    if(typeof localStorage.JSlearnLastLoaded!=="undefined"&&typeof localStorage.JSlearnLastFilename!=="undefined") {
        writeLibrary(localStorage.JSlearnLastFilename, localStorage.JSlearnLastLoaded)
    }
    $("#addToLibraryButton").remove();
    $(".actionBar").append("<p><span class='icon'>check</span>Added to library</p>")
}

function B64textToCards(text, name) {
    textToCards(LZString.decompressFromBase64(text), name)
}

function openLastFile() {
    text=LZString.decompressFromBase64(localStorage.JSlearnLastLoaded);
    textToCards(text, LZString.decompressFromBase64(localStorage.JSlearnLastFilename));
    currentFileName=LZString.decompressFromBase64(localStorage.JSlearnLastFilename);
}

function shareUrl() {
    var url = `http://${location.host}/jslearn/?f=${LZString.compressToBase64(currentFileName)}&c=${localStorage.JSlearnLastLoaded}`
    if(url.length<4096) {
        if(typeof currentFileName!=="undefined") {
            dialog(`<a target="_blank" href="${url}">${currentFileName}</a>`,"custom", "Shareable Link:")
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
temp1=0
// Hide the show definitions button on app load
$(function() {
    $("#showDefinitionsButton").hide();
    $("#hideDefinitionsButton").hide();
    $("#shareFile").hide();
    if(typeof localStorage.JSlearnLastLoaded!=="undefined") {
        $(".actionBar").append(`<button id="openLastFileButton" onclick="openLastFile()"><span class="icon">restore_page</span>Reopen Last File</button>`)
    }
    if(getAppParam("c",undefined)!==undefined) {
        if(getAppParam("f",undefined)!==undefined) {
            textToCards(LZString.decompressFromBase64(getAppParam("c",undefined)),LZString.decompressFromBase64(getAppParam("f",undefined)))
        } else {
            textToCards(LZString.decompressFromBase64(getAppParam("c",undefined)))
        }
    } else {
        if(library.length>0) {
            $("#library").append("<p2>Your Library</p2>")
            library.forEach(function(item, index) {
                temp1++;
                var name = LZString.decompressFromBase64(item.substr(14));
                var text = localStorage.getItem(item);
                $("#library").append(`<div id="libraryItem${temp1}" class="libraryItem"><p onclick="B64textToCards('${text}', '${name}')">${name}</p><button onclick="deleteLibraryItem('${item}', ${temp1})"><span class="icon">clear</span>Remove</button></div>`)
            })
        } else {
            $("#library").remove()
        }
    }
});
