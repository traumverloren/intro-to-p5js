function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  stroke(10, 30);

  fill(76, 112, 100);
  triangle(0, 768, 0, 666, 50, 768);

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

  stroke(10, 30);
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

  noStroke();
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

  stroke(10, 30);
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

  // big green shape at top middle
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


  fill(76, 144, 113);
  beginShape();
  vertex(593, 0);
  vertex(606, 40);
  vertex(681, 0);
  vertex(595, 0);
  endShape(CLOSE);

  fill(68, 100, 75);
  beginShape();
  vertex(681, 0);
  vertex(637, 27);
  vertex(628, 0);
  endShape(CLOSE);

  fill(88, 137, 116);
  beginShape();
  vertex(615, 73);
  vertex(606, 40);
  vertex(681, 0);
  vertex(730, 0);
  endShape(CLOSE);

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

  fill(84, 129, 101);
  beginShape();
  vertex(892, 0);
  vertex(957, 213);
  vertex(899, 198);
  vertex(828, 0);
  endShape(CLOSE);

  fill(64, 120, 99);
  beginShape();
  vertex(892, 0);
  vertex(932, 130);
  vertex(973, 132);
  vertex(930, 0);
  endShape(CLOSE);

  // big dark shape at top right
  fill(50, 53, 42);
  beginShape();
  vertex(930, 0);
  vertex(967, 0);
  vertex(1024, 84);
  vertex(1024, 130);
  vertex(984, 135);
  vertex(930, 408);
  vertex(750, 420);
  vertex(768, 316);
  vertex(832, 400);
  vertex(850, 316);
  vertex(864, 333);
  vertex(864, 250);
  vertex(933, 300);
  vertex(899, 198);
  vertex(957, 213);
  vertex(932, 130);
  vertex(973, 132);
  vertex(930, 0);
  endShape(CLOSE);

  fill(60, 74, 61);
  beginShape();
  vertex(936, 303);
  vertex(924, 274);
  vertex(866, 228);
  vertex(864, 250);
  vertex(936, 303);
  endShape(CLOSE);

  fill(93, 107, 90);
  beginShape();
  vertex(772, 154);
  vertex(866, 228);
  vertex(865, 333);
  vertex(760, 213);
  vertex(475, 234);
  vertex(475, 196);
  bezierVertex(475, 196, 498, 193, 519, 174);
  vertex(519, 174);
  vertex(772, 154);
  endShape(CLOSE);

  fill(68, 111, 91);
  beginShape();
  vertex(760, 213);
  vertex(850, 316);
  vertex(832, 400);
  vertex(684, 214);
  vertex(760, 213);
  endShape(CLOSE);

  fill(58, 101, 81);
  beginShape();
  vertex(768, 320);
  vertex(750, 420);
  vertex(633, 222);
  vertex(684, 214);
  vertex(768, 320);
  endShape(CLOSE);

  fill(70, 115, 95);
  beginShape();
  vertex(984, 135);
  vertex(930, 408);
  vertex(952, 399);
  vertex(1005, 132);
  vertex(984, 135);
  endShape(CLOSE);

  fill(83, 99, 90);
  beginShape();
  vertex(1005, 132);
  vertex(951, 400);
  vertex(976, 412);
  vertex(1024, 258);
  vertex(1024, 126);
  vertex(1005, 132);
  endShape(CLOSE);

  fill(62, 75, 55);
  beginShape();
  vertex(1024, 258);
  vertex(1024, 424);
  vertex(976, 412);
  vertex(1024, 258);
  endShape(CLOSE);

  fill(192, 186, 157);
  beginShape();
  vertex(1024, 768);
  vertex(1024, 412);
  vertex(980, 412);
  vertex(980, 768);
  vertex(1024, 768);
  endShape(CLOSE);

  fill(167, 154, 123);
  beginShape();
  vertex(980, 412);
  vertex(980, 768);
  vertex(945, 768);
  vertex(940, 403);
  vertex(951, 399);
  vertex(980, 412);
  endShape(CLOSE);

  fill(119, 129, 112);
  beginShape();
  vertex(930, 402);
  vertex(910, 402);
  vertex(910, 721);
  vertex(944, 733);
  vertex(940, 402);
  vertex(930, 402);
  endShape(CLOSE);

  fill(74, 94, 60);
  beginShape();
  vertex(905, 768);
  bezierVertex(905, 768, 910, 720, 920, 718)
  vertex(920, 718);
  bezierVertex(920, 718, 945, 710, 948, 757)
  vertex(948, 757);
  vertex(982, 768);
  vertex(915, 768);

  endShape(CLOSE);
}
