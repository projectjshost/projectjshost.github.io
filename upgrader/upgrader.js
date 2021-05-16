// Upgrades JS 2.2 localstorage to JS 2.3 localstorage
localStorage.lastUsedVersion = 2.3;
localStorage.interface = "modern";
localStorage.laucher = "appcenter";
localStorage.customThemeCSS = localStorage.customThemeCSS.replace(/</g, "_").replace(/>/g, "_");
localStorage.loadingScreen = "true";

if(localStorage.getItem("EncryptPadcontents")!==null) {
    localStorage.encryptPadContent=localStorage.EncryptPadcontents;
    localStorage.removeItem("EncryptPadcontents");
}

setTimeout(
    function(){
        location.pathname="/appcenter/";
    }
    , 500);