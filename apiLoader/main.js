// Project JS apiLoader ver 1.1
apiLoader = {
    version: "1.1",
    host: "/jsappapi/",
    defaultApi: "2.3.3"
};
if(!localStorage.allowCustomApi) {
    localStorage.allowCustomApi="false";
}
if(localStorage.allowCustomApi=="true") {
    if(!localStorage.apiName) {
        localStorage.apiName=apiLoader.defaultApi;
    }
} else {
    localStorage.removeItem("apiName");
}

if(localStorage.allowCustomApi=="true") {
    $('head').append('<script src="' + apiLoader.host + localStorage.apiName + '/main.js"></script>');
    console.warn("Custom API is enabled.")
} else {
    $('head').append('<script src="' + apiLoader.host + apiLoader.defaultApi + '/main.js"></script>');
}

// Fix launcher spelling mistake
if (localStorage.getItem("laucher") !== null) {
    localStorage.launcher = localStorage.laucher;
    localStorage.removeItem("laucher");
}