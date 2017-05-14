function setup() {
  createCanvas((windowWidth, windowHeight));
  background(255, 255, 0);
}

function draw() {
  strokeWeight(5);

  stroke(255, 0, 100);
  noFill();
  rect(10, 10, 90, 90);

  stroke(0, 0, 255);
  fill(0, 255, 100, 100);
  rect(50, 50, 90, 90);

  fill(250, 200);
  noStroke();
  rect(30, 30, 90, 90);

}
