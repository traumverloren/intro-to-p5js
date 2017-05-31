function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(5);
}

function draw() {
  background(255);

  if (frameCount % 1 === 0) {
    var randomColor = random(10,255);

    for (var x = 50; x <= width-50; x += 50) {
      for (var y = 50; y <= height-50; y += 50) {
        fill(randomColor);
        ellipse(x, y, 30, 30);
        noFill();
      }
    }
  }

  var count = 0;
  for (var x = 50; x <= width-50; x += 50) {
    for (var y = 50; y <= height-50; y += 50) {
      stroke(count);
      var randX = random(-x, x);
      var randY = random(-y, y);
      line(randX, randY, 0, 0);
      count++;
    }
  }

  // fill(255);
  // ellipse(width/2, height/2, 100, 100);
}
