// apiLite beta

// If the document is loaded run the function ready()
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        ready();
    }
  };

//   The ready() function
function ready() {
    console.log("ready!")
    document.getElementsByTagName("HEAD")[0].innerHTML += "<link rel='stylesheet' href='/jsappapi/apiLite/theme.css'>";
    if (typeof appname == 'undefined') {
        appname = "apiLite App"
    }
    document.getElementById("header").innerText = appname;
    document.title = appname;
    loadTheme("custom")
}

// Converts dialog functions to alerts
function dialog(a) {
    alert(a);
}

// apiLite object
var apiLite = {
    version: "0.2",
    type: "Beta",
    build: 210514,
    theme: localStorage.theme,
    launcher:"./"
};
    apiLite.versionFull = "apiLite " + apiLite.version + " " + apiLite.type + ", build " + apiLite.build;

// projectJS compatibility
projectJS=apiLite;


// Theme stuff
function loadTheme(theme) {
    if (document.getElementById("customTheme")) {
        document.getElementById("customTheme").remove();
    }
    switch(theme) {
        case "light":
            break;
        case "custom":
            if (localStorage.theme=="custom"&localStorage.customThemeCSS!=="") {
                document.getElementsByTagName("HEAD")[0].innerHTML += "<style id='customTheme'>" + localStorage.customThemeCSS + "</style>";
            }
            break;
        default:
            error("warn", "loadTheme", "not supported!")
    }
}

function error(type,func,desc) {
    switch(type) {
        case "error":
            console.error("Error in function: '" + func + "', desciption: '" + desc + "'")
        break;
        case "warn":
            console.warn("Warning in function: '" + func + "', desciption: '" + desc + "'")
        break;
        default:
            console.error("Error in function: '" + func + "', desciption: '" + desc + "'")
    }
    
}