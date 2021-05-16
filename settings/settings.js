function updatehideTab() {
    localStorage.hideTab = document.getElementById("hideTabCB").checked;
    if(localStorage.hideTab=="true") {
        setStealth("​", "/icons/blank.png");
    } else {
        setStealth(appname, "/favicon.ico");
    }
}

function updateClassic() {
    var checkValue = document.getElementById("classicInterface").checked;
    if(checkValue==true) {
        localStorage.interface="classic";
        switchInterface("classic");
    } else {
        localStorage.interface="modern";
        switchInterface("modern");
    }
}

function updateloadingScreen() {
    var checkValue = document.getElementById("loadingScreen").checked;
    if(checkValue==true) {
        localStorage.loadingScreen="false";
    } else {
        localStorage.loadingScreen="true";
    }
}


function setTheme(theme) {
    if (theme == "dark") {
        localStorage.theme = "dark";
        if (document.getElementById("JStheme")) {
            $("#JStheme").remove();
        }
        if (document.getElementById("customTheme")) {
            $("#customTheme").remove();
        }
        loadTheme("dark");
    } 
    if (theme == "light") {
        localStorage.theme = "light";
        if (document.getElementById("JStheme")) {
            $("#JStheme").remove();
        }
        if (document.getElementById("customTheme")) {
            $("#customTheme").remove();
        }
        loadTheme("light");
    }
    if (theme == "custom") {
        localStorage.theme = "custom";
        if (document.getElementById("JStheme")) {
            $("#JStheme").remove();
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
    switch(localStorage.interface) {
        case "classic":
            document.getElementById("classicInterface").checked = true;
            break;
        case "modern":
            document.getElementById("classicInterface").checked = false;
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
    switch(localStorage.loadingScreen) {
        case "true":
            document.getElementById("loadingScreen").checked = false;
            break;
        case "false":
            document.getElementById("loadingScreen").checked = true;
            break;
    }
}

function updateTheme() {
    setTheme(document.getElementById("themeSelect").value)
}

function importTheme() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.css';

    input.onchange = e => { 
   var file = e.target.files[0]; 

   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');

   reader.onload = readerEvent => {
      var content = readerEvent.target.result;
      if (content.includes("<script")||content.includes("</script>")) {
        dialog("Warning: this theme may contain dangerous code.")
    }
      content = content.replace(/</g, "_").replace(/>/g, "_");
      
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
    var resetAlld = confirm("Are you sure? This cannot be undone.");
if (resetAlld == true) {
    localStorage.clear();
    document.write("All data has been successfully deleted.")
}
    
}