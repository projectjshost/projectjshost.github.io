// Project JS apiLoader ver 1.3
const apiLoader = {
    version: "1.3",
    host: "/jsappapi/",
    defaultApi: "2.4"
};

$('head').append('<script src="' + apiLoader.host + apiLoader.defaultApi + '/main.js"></script>');