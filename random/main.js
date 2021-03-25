var worker = new Worker('worker.js');
worker.addEventListener('message', function(e) {
    document.getElementById("randomPassResult").innerText = e.data;
});

function randomPassGen() {
    var PassLen = document.getElementById("randomPassLen").value;
    worker.postMessage(PassLen);
}

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


// var t0 = performance.now()

// getRandomStr(1200);

// var t1 = performance.now()
// alert("OLD Call to doSomething took " + (t1 - t0) + " milliseconds.")
