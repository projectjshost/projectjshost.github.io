var hideTabCB = document.getElementById("hideTabCB");
function updatehideTab() {
    localStorage.hideTab = document.getElementById("hideTabCB").checked;
}



function setTheme(theme) {
    if (theme == "dark") {
        localStorage.theme = "dark";
        if (document.getElementById("lightTheme")) {
            $("#lightTheme").remove();
        }
        if (document.getElementById("customTheme")) {
            $("#customTheme").remove();
        }
    } 
    if (theme == "light") {
        localStorage.theme = "light";
        if (document.getElementById("customTheme")) {
            $("#customTheme").remove();
        }
        loadTheme("light");
    }
    if (theme == "custom") {
        localStorage.theme = "custom";
        if (document.getElementById("lightTheme")) {
            $("#lightTheme").remove();
        }
        loadTheme("custom");
    }
}

function settingsInit() {
    switch(localStorage.theme) {
        case "light":
            document.getElementById("themeSelect").selectedIndex = "1";
            break;
        case "dark":
            document.getElementById("themeSelect").selectedIndex = "0";
            break;
        case "custom":
            document.getElementById("themeSelect").selectedIndex = "2";
            break;
    }
    switch(localStorage.hideTab) {
        case "true":
            document.getElementById("hideTabCB").checked = true;
            break;
        case "false":
            document.getElementById("hideTabCB").checked = false;
            break;
    }
}

function updateTheme() {
    setTheme(document.getElementById("themeSelect").value)
}

function importTheme() {
    var input = document.createElement('input');
input.type = 'file';

input.onchange = e => { 
   var file = e.target.files[0]; 

   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');

   reader.onload = readerEvent => {
      var content = readerEvent.target.result; 
      if (localStorage.customThemeCSS) { 
        localStorage.removeItem("customThemeCSS");
      }
      localStorage.customThemeCSS = content;
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
      setTheme("custom");
      document.getElementById("themeSelect").selectedIndex = "2";
   }

}

input.click();
}

function resetAll() {
    localStorage.clear();
    location.reload();
}