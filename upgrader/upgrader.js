// Upgrades JS 2.2/3 localstorage to JS 2.3.1 localstorage
localStorage.lastUsedVersion = "2.3.2";
localStorage.launcher = "appcenter";

if(localStorage.getItem("EncryptPadcontents")!==null) {
    localStorage.encryptPadContent=localStorage.EncryptPadcontents;
    localStorage.removeItem("EncryptPadcontents");
}
if(localStorage.getItem("laucher")!==null) {
    localStorage.launcher=localStorage.laucher;
    localStorage.removeItem("laucher");
}

if(localStorage.getItem("loadingScreen")!==null) {
    localStorage.loadingScreen="true"
}

if(localStorage.interface == "modern") {
    localStorage.interface= "material";
}
setTimeout(
    function(){
        location.pathname="/appcenter/";
    }
    , 500);