// apiLite beta version 0.3

// If the document is loaded run the function ready()
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        ready();
    }
  };

//   The ready() function
function ready() {
    document.getElementsByTagName("HEAD")[0].innerHTML += "<link rel='stylesheet' href='/jsappapi/apiLite/theme.css'>";
    if (typeof appname == 'undefined') {
        appname = "apiLite App"
    }
    document.getElementById("header").innerText = appname;
    document.title = appname;
    loadTheme("custom");
    console.log("ready!")
}

// Converts dialog functions to alerts
function dialog(a) {
    alert(a);
}

// Opens an app
function openApp(appName) {
    location.pathname="/" + appName + "/";
}

// Tab Stealth
function setStealth(title, icon) {
    document.title = title;
    console.log("set title to: '" + title + "' and icon to: '" + icon + "'")
}

// apiLite object
var apiLite = {
    version: "0.3",
    type: "Beta",
    build: 210604,
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

// Settheme compatibility
function setTheme(name) {
    loadTheme(name)
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

const apiLiteResizeTo = window.resizeTo;
window.resizeTo = function(x,y) {
    var resizeToConfirm = confirm("This app tried to resize itself to " + x + "x" + y + "\n Press OK to allow or press cancel to deny.");
    if (resizeToConfirm == true) {
        apiLiteResizeTo(x,y);
    }
}