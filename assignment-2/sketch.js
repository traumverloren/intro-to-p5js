var framesPerSecond = 256;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(framesPerSecond);
}

function draw() {
  background(255);

  var gray = frameCount % 128;

  // top right quadrant
  for (var x = 50; x <= (windowWidth-50); x += 50) {
    noStroke();
    fill(gray);
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      triangle(x, y-20, x+20, y+20, x-20, y);
    }
    noFill();
  }

  // bottom left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    stroke(gray);
    strokeWeight(10);
    for (var y = 50; y <= (windowHeight-50); y += 50) {
      line(x-7, y-7, x+7, y+7);
      line(x+7, y-7, x-7, y+7);
    }
    noFill();
  }

  // bottom right quadrant
  for (var x = (windowWidth/2); x <= (windowWidth-50); x += 50) {
    strokeWeight(0);
    fill(gray);
    for (var y = windowHeight/2; y <= (windowHeight-50); y += 50) {
      rect(x-35, y-20, 25, 25);
      console.log(x,y);
    }
    noFill();
  }

  //
  // for (var x = 50; x <= width-50; x += 50) {
  //   for (var y = 50; y <= height-50; y += 50) {
  //     var randX = random(-x, x);
  //     var randY = random(-y, y);
  //     ellipse(randX, randY, 20, 20);
  //   }
  // }

  // fill(255);
  // ellipse(width/2, height/2, 100, 100);
}
