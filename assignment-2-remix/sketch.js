var angle = 0;
var song;
var amplitude;
var option = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
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

// rotate between different patterns on mouseClick
function mousePressed() {
  option++;
  if (option > 5) {
    option = 1;
  };
}

function draw() {
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 500);
  strokeWeight(2);
  background(255);

  var density = map(mouseX, 0, width, 50, 200);
  if (option === 1) {
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        ellipse(x, y, size, size);
      }
    }
  }

  if (option === 2) {
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        line(x-size, y-size, x+size, y+size);
        line(x+size, y-size, x-size, y+size);
      }
    }
  }

  if (option === 3) {
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        triangle(x, y-size, x+size, y+5, x, y+size);
      }
    }
  }

  if (option === 4) {
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        rect(x-35, y-17, size, size);
      }
    }
  }

  if (option === 5) {
    var count = 0;
    for (var x = 50; x <= width-50; x += density) {
      for (var y = 50; y <= height-50; y += density) {
        strokeWeight(count+0.2);
        ellipse(x, y, size, size);
        count++;
      }
    }
  }
}
