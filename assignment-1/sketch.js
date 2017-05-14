function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  fill(76, 112, 100);
  triangle(0, 768, 0, 666, 50, 768);

  noStroke();

  fill(61, 65, 43);
  triangle(40, 740, 130, 632, 180, 759);

  fill(69, 79, 55);
  triangle(75, 745, 138, 655, 180, 759);

  fill(79, 107, 84);
  triangle(110, 750, 153, 690, 180, 759);

  fill(58, 133, 103);
  rect(205, 595, 158, 160);

  fill(60, 68, 50);
  rect(205, 595, 22, 160);

  fill(70, 84, 61);
  rect(227, 595, 30, 160);

  fill(77, 97, 78);
  rect(257, 595, 29, 160);

  stroke(1, 50);
  line(326, 610, 326, 730);

  noStroke();
  fill(197, 206, 187);
  beginShape();
  vertex(0, 0);
  vertex(213, 0);
  vertex(256, 82);
  vertex(384, 67);
  bezierVertex(384, 67, 340, 100, 339, 150);
  bezierVertex(339, 150, 315, 162, 303, 193);
  vertex(303, 193);
  vertex(0, 217);
  endShape(CLOSE);

  fill(173, 159, 132);
  ellipse(102, 102, 200, 200);

  fill(106, 147, 115);
  beginShape();
  vertex(80, 6);
  bezierVertex(80, 6, 105, -3, 124, 6);
  vertex(124, 0);
  vertex(124, 200);
  bezierVertex(124, 200, 105, 207, 80, 200);
  vertex(80, 200);
  vertex(80, 0);
  endShape(CLOSE);

  fill(143, 151, 127);
  beginShape();
  vertex(213, 0);
  vertex(256, 82);
  vertex(384, 67);
  vertex(472, 0);
  endShape(CLOSE);

  fill(104, 114, 97);
  beginShape();
  vertex(384, 67);
  vertex(472, 0);
  vertex(595, 0);
  vertex(600, 21);
  vertex(384, 67);
  endShape(CLOSE);

  fill(98, 149, 123);
  beginShape();
  vertex(384, 67);
  vertex(600, 21);
  vertex(640, 150);
  vertex(837, 12);
  vertex(924, 274);
  vertex(772, 154);
  vertex(519, 174);
  vertex(500, 120);
  vertex(384, 127);
  vertex(384, 67);
  endShape(CLOSE);

  // vertex(600, 21);

  fill(90, 128, 110);
  beginShape();
  vertex(615, 73);
  vertex(640, 150);
  vertex(837, 12);
  vertex(830, 0);
  vertex(730, 0);
  vertex(615, 73);
  endShape(CLOSE);

  fill(141, 158, 130);
  beginShape();
  vertex(384, 67);
  bezierVertex(384, 67, 340, 100, 339, 150);
  bezierVertex(339, 150, 315, 162, 303, 193);
  vertex(303, 193);
  vertex(384, 186);
  vertex(384, 67);
  endShape(CLOSE);

}
