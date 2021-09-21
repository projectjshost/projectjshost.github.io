var context = new AudioContext(),
    oscillators = {};

var oscillatorType = "square";
var lastFrequency = 0;
var CHROMATIC = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
var isRunning = false;

var gainNode = context.createGain();
gainNode.gain.value = 0;
gainNode.connect(context.destination);



function setOscillatorType(type) {
    oscillatorType = type;
    document.getElementById("istr").innerText = "Waveform: " + type;
}
 
function midiNoteToFrequency(note) {
    return Math.pow(2, ((note - 69) / 12)) * 440;
}

function midiNoteToNoteName(midi) {
    var name = CHROMATIC[midi % 12]
    var oct = Math.floor(midi / 12) - 1
    return name + oct
  }

function playNote(frequency) {
    oscillators[frequency] = context.createOscillator();
    oscillators[frequency].type = oscillatorType;
    oscillators[frequency].frequency.value = frequency;
    oscillators[frequency].connect(context.destination);
    oscillators[frequency].connect(gainNode);
    oscillators[frequency].start(context.currentTime);
    document.getElementById("pitch").innerText = "Last frequency: " + Math.abs(Math.trunc(frequency)) + "Hz";
}
 
function stopNote(frequency) {
    oscillators[frequency].stop(context.currentTime);
    oscillators[frequency].disconnect();
}
function playRandomNote() {
    var randomNote = getRandom(0,6);
    switch(randomNote) {
        case 0:
            randomNote = 60
        break;
        case 1:
            randomNote = 62
        break;
        case 2:
            randomNote = 64
        break;
        case 3:
            randomNote = 65
        break;
        case 4:
            randomNote = 67
        break;
        case 5:
            randomNote = 69
        break;
        case 6:
            randomNote = 71
        break;
    }
    playNote(midiNoteToFrequency(randomNote));
    $("#notesPlayed").append(` ${midiNoteToNoteName(randomNote)}`)
    console.log(midiNoteToNoteName(randomNote));
    var randomNote1=randomNote;
    setTimeout(function() {
        stopNote(midiNoteToFrequency(randomNote1))
    }, 450);
  }

function generateMelody() {
    if (!isRunning) {
        isRunning=true;
        document.getElementById("notesPlayed").innerText="";
        var noteInterval = setInterval(playRandomNote, 500);
        setTimeout(function() {
            clearInterval(noteInterval);
            isRunning=false;
        }, 4500);
    }
}