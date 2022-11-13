var worker = new Worker('worker.js');
worker.addEventListener('message', function(e) {
    document.getElementById("randomPassResult").innerText = e.data;
});

function randomPassGen() {
    let PassLen = document.getElementById("randomPassLen").value;
    worker.postMessage(PassLen);
}

function randomNumGen() {
    let randomNumMin = parseInt(document.getElementById("randomNumMin").value);
    let randomNumMax = parseInt(document.getElementById("randomNumMax").value)+1;
    let result = getRandom(randomNumMin, randomNumMax);
    document.getElementById("randomNumResult").innerText = result;
}