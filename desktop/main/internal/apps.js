// JSDesktop Apps
function openApp(appName) {
    appWin = createWindow(appName);
    $( "#window" + appWin).append(`<iframe src='/${appName}/?platform=JSdesktop&splash=false&theme=dark' class='JSappcontent'></iframe>`);
    delete appWin;
    if(appDrawer==1) {
        openAppDrawer();
    }
}