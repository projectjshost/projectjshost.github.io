function setTheme(theme) {
    if (theme == "dark") {
        localStorage.theme = "dark";
        if (document.getElementById("lightTheme")) {
            $("#lightTheme").remove();
        }
    } 
    if (theme == "light") {
        localStorage.theme = "light";
        loadTheme("light");
    }
    if (theme == "custom") {
        localStorage.theme = "custom";
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