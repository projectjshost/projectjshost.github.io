function getRandom(min, max) {
    var min1 = parseInt(min);
    var max1 = parseInt(max)+1;
    var num = Math.random() * (max1 - min1) + min1;

    return Math.floor(num);
};
function randomNumGen() {
    var randomNumMin = document.getElementById("randomNumMin").value;
    var randomNumMax = document.getElementById("randomNumMax").value;
    var result = getRandom(randomNumMin, randomNumMax);
    document.getElementById("randomNumResult").innerText = result;
}

function getRandomStr(length) {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};

function randomPassGen() {
    var PassLen = document.getElementById("randomPassLen").value;
    var result = getRandomStr(PassLen);
    document.getElementById("randomPassResult").innerText = result;
}