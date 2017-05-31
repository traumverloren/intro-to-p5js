function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(30);
}

function draw() {
  background(255);

  var count = frameCount;

  if (frameCount % 1 === 0) {
    var randomColor = random(10,255);
    for (var x = 50; x <= width-50; x += 50) {
      strokeWeight(0);
      fill(count);
      for (var y = 50; y <= height-50; y += 50) {
        ellipse(x, y, 50, 50);
      }
      noFill();
    }
  }


  console.log(count)

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
