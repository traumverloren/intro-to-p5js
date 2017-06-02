var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);
  angle += 0.02;

  // top left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    noStroke();
    fill(127+127*sin(angle));
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      ellipse(x, y, 25, 25);
    }
    noFill();
  }

  // top right quadrant
  for (var x = (windowWidth/2)-20; x <= (windowWidth-40); x += 50) {
    noStroke();
    fill(127+127*sin(angle));
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      triangle(x, y-20, x+20, y+20, x-20, y);
    }
    noFill();
  }

  // bottom left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    stroke(127+127*sin(angle));
    strokeWeight(10);
    for (var y = (windowHeight/2); y <= (windowHeight-30); y += 50) {
      line(x-7, y-7, x+7, y+7);
      line(x+7, y-7, x-7, y+7);
    }
    noFill();
  }

  // bottom right quadrant
  for (var x = (windowWidth/2); x <= (windowWidth-30); x += 50) {
    strokeWeight(0);
    fill(127+127*sin(angle));
    for (var y = (windowHeight/2)+10; y <= (windowHeight-30); y += 50) {
      rect(x-35, y-20, 25, 25);
    }
    noFill();
  }
}
