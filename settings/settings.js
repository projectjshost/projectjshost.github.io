function updatehideTab() {
    localStorage.hideTab = document.getElementById("hideTabCB").checked;
    if(localStorage.hideTab=="true") {
        setStealth("​", "/icons/blank.png");
    } else {
        setStealth(appname, "/favicon.ico");
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

function settingsInit() {
    switch(projectJS.theme) {
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
    switch(projectJS.interface) {
        case "material":
            document.getElementById("interfaceSelect").selectedIndex = "0";
            break;
        case "modern":
            document.getElementById("interfaceSelect").selectedIndex = "1";
            break;
        case "classic":
            document.getElementById("interfaceSelect").selectedIndex = "2";
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
    if (localStorage.interface!==document.getElementById("interfaceSelect").value) {
        setInterface(document.getElementById("interfaceSelect").value);
    }
    if (localStorage.theme!==document.getElementById("themeSelect").value) {
        setTheme(document.getElementById("themeSelect").value);
    }
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
    //   content = content.replace(/</g, "_").replace(/>/g, "_");
      localStorage.customThemeCSS = content;
      setTheme("custom");
      document.getElementById("themeSelect").selectedIndex = "2";
   }

}
    input.click();
}

function resetAll() {
    var resetAlld = confirm("Are you sure? This can't be undone.");
    if (resetAlld == true) {
        localStorage.clear();
        document.write("All data has been successfully deleted.")
    }
}