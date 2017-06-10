var angle = 0;
var song;
var amplitude;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noFill();

  // setting up the sound
  song = loadSound('audio/06 Don\'t Talk (Redux).mp3', playSound);
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
