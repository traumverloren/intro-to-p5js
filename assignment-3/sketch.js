var song;
var amplitude;

function setup() {
  createCanvas(1024, 768);
  colorMode(RGB, 255);
  noFill();

  // setting up the sound
  song = loadSound('', playSound);
  song.setVolume(0.2);
  amplitude = new p5.Amplitude();
}

// play song callback
function playSound() {
  console.log("Playing song!");
  song.play();
}

function draw() {
  var level = amplitude.getLevel();

}
