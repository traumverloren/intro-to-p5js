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
  var size = map(level, 0, 1, 0, 200);

  // math to make the shapes fade black to white
  angle += 0.02;
  var grayscaleTransition = 127+127*sin(angle);

  // the 4 quadrants:

  // top left quadrant
  background(255)
  stroke(0);
  strokeWeight(1);
  fill(grayscaleTransition);
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      ellipse(x, y, size, size);
    }
  }

  // top right quadrant
  stroke(0);
  strokeWeight(1);
  for (var x = (windowWidth/2)-30; x <= (windowWidth-80); x += 50) {
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      triangle(x, y-size, x+size, y+5, x, y+size);
    }
  }

  // bottom left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    stroke(grayscaleTransition);
    strokeWeight(10);
    for (var y = (windowHeight/2); y <= (windowHeight-50); y += 50) {
      line(x-size, y-size, x+size, y+size);
      line(x+size, y-size, x-size, y+size);
    }
  }

  // bottom right quadrant
  stroke(0);
  strokeWeight(1);
  for (var x = (windowWidth/2); x <= (windowWidth-50); x += 50) {
    for (var y = (windowHeight/2)+10; y <= (windowHeight-40); y += 50) {
      rect(x-35, y-17, size, size);
    }
  }
}
