var angle = 0;
var a;
var b;
var direction;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noFill();
  frameRate(60)
  a = 0;
  b = width;
  direction = true;
}

function draw() {
  // math to make the shapes fade black to white
  angle += 0.02;
  var grayscaleTransition = 127+127*sin(angle);

  // var count = 0;
  // for (var x = 50; x <= (windowWidth-50); x += 50) {
  //   for (var y = 50; y <= (windowHeight-50); y += 50) {
  //     stroke(240)
  //     strokeWeight(count+0.02);
  //     point(x,y)
  //     console.log(count)
  //
  //     count++;
  //   }
  // }

  // fading background
  a++;
  if(a > width) {
    a = 0;
    direction = !direction;
  }
  if(direction == true){
    stroke(a, 173);
  } else {
    stroke(width-a, 173);
  }
  line(a, 0, a, height);

  b--;
  if(b < 0) {
    b = width;
  }
  if(direction == true) {
    stroke(width-b, 127);
  } else {
    stroke(b, 127);
  }
  line(b, 0, b, height);

  // the 4 quadrant shapes:

  // top left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    noStroke();
    fill(grayscaleTransition);
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      ellipse(x, y, 25, 25);
    }
    // noFill();
  }

  // top right quadrant
  for (var x = (windowWidth/2)-30; x <= (windowWidth-80); x += 50) {
    noStroke();
    fill(grayscaleTransition);
    for (var y = 50; y <= (windowHeight/2)-50; y += 50) {
      triangle(x, y-10, x+20, y+5, x, y+20);
    }
  }

  // bottom left quadrant
  for (var x = 50; x <= (windowWidth/2)-50; x += 50) {
    stroke(grayscaleTransition);
    strokeWeight(10);
    for (var y = (windowHeight/2); y <= (windowHeight-50); y += 50) {
      line(x-7, y-7, x+7, y+7);
      line(x+7, y-7, x-7, y+7);
    }
  }

  // bottom right quadrant
  for (var x = (windowWidth/2); x <= (windowWidth-50); x += 50) {
    fill(grayscaleTransition);
    for (var y = (windowHeight/2)+10; y <= (windowHeight-40); y += 50) {
      rect(x-35, y-17, 15, 15);
    }
  }

}
