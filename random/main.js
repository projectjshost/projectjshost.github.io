var worker = new Worker('worker.js');
worker.addEventListener('message', function(e) {
    document.getElementById("randomPassResult").innerText = e.data;
});

function randomPassGen() {
    let PassLen = document.getElementById("randomPassLen").value;
    worker.postMessage(PassLen);
}

function getRandom(min, max) {
    let min1 = parseInt(min);
    let max1 = parseInt(max)+1;
    let num = Math.random() * (max1 - min1) + min1;

    return Math.floor(num);
};
function randomNumGen() {
    let randomNumMin = document.getElementById("randomNumMin").value;
    let randomNumMax = document.getElementById("randomNumMax").value;
    let result = getRandom(randomNumMin, randomNumMax);
    document.getElementById("randomNumResult").innerText = result;
}


// var t0 = performance.now()

// getRandomStr(1200);

// var t1 = performance.now()
// alert("OLD Call to doSomething took " + (t1 - t0) + " milliseconds.")
