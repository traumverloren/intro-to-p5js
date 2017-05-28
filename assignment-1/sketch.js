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
  rect(282, 589, 77, 169);

  fill(60, 68, 50);
  rect(203, 589, 24, 172);

  fill(70, 84, 61);
  rect(227, 589, 30, 165);

  fill(77, 97, 78);
  rect(257, 589, 25, 165);

  stroke(1, 50);
  line(326, 591, 326, 753);

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

  fill(50, 56, 44);
  beginShape();
  vertex(768, 320);
  vertex(759, 349);
  vertex(828, 416);
  vertex(833, 396);
  vertex(768, 320);
  endShape(CLOSE);

  fill(66, 69, 58);
  beginShape();
  vertex(844, 310);
  vertex(837, 330);
  vertex(868, 363);
  vertex(865, 333);
  vertex(844, 310);
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
  vertex(940, 398);
  vertex(951, 399);
  vertex(980, 412);
  endShape(CLOSE);

  fill(119, 129, 112);
  beginShape();
  vertex(930, 402);
  vertex(910, 407);
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

  fill(86, 133, 105);
  beginShape();
  vertex(921, 718);
  vertex(886, 721);
  vertex(882, 768);
  vertex(915, 768);
  vertex(921, 718);
  endShape(CLOSE);

  fill(175, 154, 118);
  beginShape();
  vertex(912, 719);
  vertex(886, 721);
  vertex(885, 631);
  vertex(912, 631);
  vertex(912, 719);
  endShape(CLOSE);

  fill(90, 136, 110);
  beginShape();
  vertex(910, 405);
  vertex(889, 412);
  vertex(873, 426);
  vertex(873, 768);
  vertex(888, 768);
  vertex(885, 631);
  vertex(912, 631);
  vertex(910, 405);
  endShape(CLOSE);

  fill(82, 81, 72);
  beginShape();
  vertex(891, 411);
  vertex(852, 412);
  vertex(850, 768);
  vertex(873, 768);
  vertex(873, 428);
  vertex(891, 411);
  endShape(CLOSE);

  fill(62, 63, 49);
  beginShape();
  vertex(852, 413);
  vertex(828, 414);
  vertex(828, 768);
  vertex(852, 768);
  vertex(852, 413);
  endShape(CLOSE);

  fill(56, 54, 41);
  beginShape();
  vertex(828, 414);
  vertex(806, 416);
  vertex(806, 768);
  vertex(828, 768);
  vertex(828, 414);
  endShape(CLOSE);

  fill(87, 129, 107);
  beginShape();
  vertex(766, 768);
  vertex(761, 447);
  vertex(754, 454);
  vertex(749, 476);
  vertex(686, 575);
  vertex(673, 546);
  vertex(660, 768);
  vertex(665, 768);
  bezierVertex(665, 768, 660, 720, 693, 722)
  vertex(693, 722);
  vertex(727, 720);
  bezierVertex(727, 720, 748, 720, 757, 768)
  vertex(757, 768);
  vertex(766, 768);
  endShape(CLOSE);

  fill(101, 157, 144);
  beginShape();
  vertex(665, 768);
  bezierVertex(665, 768, 660, 720, 693, 722)
  vertex(693, 722);
  vertex(727, 720);
  bezierVertex(727, 720, 748, 720, 757, 768)
  vertex(757, 768);
  vertex(766, 768);
  endShape(CLOSE);

  fill(66, 91, 70);
  beginShape();
  vertex(759, 430);
  vertex(738, 434);
  vertex(733, 467);
  vertex(728, 479);
  vertex(720, 492);
  vertex(673, 546);
  vertex(686, 575);
  vertex(749, 476);
  vertex(754, 454);
  vertex(761, 447);
  vertex(759, 430);
  endShape(CLOSE);

  fill(57, 127, 102);
  beginShape();
  vertex(673, 546);
  vertex(654, 525);
  vertex(633, 768);
  vertex(660, 768);
  vertex(673, 546);
  endShape(CLOSE);

  fill(55, 60, 54);
  beginShape();
  vertex(654, 525);
  vertex(627, 484);
  vertex(613, 768);
  vertex(633, 768);
  vertex(654, 525);
  endShape(CLOSE);

  fill(58, 64, 52);
  beginShape();
  vertex(627, 484);
  vertex(606, 454);
  vertex(590, 768);
  vertex(613, 768);
  vertex(627, 484);
  endShape(CLOSE);

  fill(40, 42, 31);
  beginShape();
  vertex(606, 454);
  vertex(590, 428);
  vertex(578, 768);
  vertex(590, 768);
  vertex(606, 454);
  endShape(CLOSE);

  fill(42, 44, 33);
  beginShape();
  vertex(590, 428);
  vertex(555, 380)
  vertex(543, 743)
  vertex(534, 748)
  vertex(534, 768)
  vertex(578, 768);
  vertex(590, 428);
  endShape(CLOSE);

  fill(57, 58, 42);
  beginShape();
  vertex(544, 706);
  vertex(457, 708);
  vertex(463, 745);
  vertex(534, 748)
  vertex(543, 743)
  vertex(544, 706);
  endShape(CLOSE);

  fill(91, 95, 89);
  beginShape();
  vertex(463, 745);
  vertex(463, 768);
  vertex(534, 768)
  vertex(534, 748)
  vertex(463, 745);
  endShape(CLOSE);

  fill(57, 62, 46);
  beginShape();
  vertex(750, 420);
  vertex(759, 420);
  vertex(759, 430);
  vertex(738, 434);
  vertex(600, 225);
  vertex(633, 222);
  vertex(750, 420);
  endShape(CLOSE);

  fill(42, 47, 34);
  beginShape();
  vertex(738, 434);
  vertex(734, 464);
  vertex(562, 228);
  vertex(600, 225);
  vertex(738, 434);
  endShape(CLOSE);

  fill(33, 40, 24);
  beginShape();
  vertex(734, 464);
  vertex(730, 476);
  vertex(717, 496);
  vertex(523, 232);
  vertex(562, 228);
  vertex(734, 464);
  endShape(CLOSE);

  fill(140, 145, 127);
  beginShape();
  vertex(500, 120);
  vertex(519, 174);
  vertex(475, 178);
  vertex(475, 142);
  vertex(466, 142);
  vertex(466, 122);
  vertex(500, 120);
  endShape(CLOSE);

  fill(104, 105, 90);
  beginShape();
  vertex(519, 174);
  vertex(475, 178);
  vertex(475, 196);
  bezierVertex(475, 196, 498, 193, 519, 174);
  vertex(519, 174);
  endShape(CLOSE);

  fill(91, 129, 106);
  beginShape();
  vertex(475, 178);
  vertex(475, 142);
  vertex(466, 142);
  vertex(466, 122);
  vertex(384, 127);
  vertex(384, 186);
  vertex(475, 178);
  endShape(CLOSE);

  fill(94, 114, 93);
  beginShape();
  vertex(384, 186);
  vertex(475, 178);
  vertex(475, 196);
  bezierVertex(475, 196, 400, 220, 384, 220);
  vertex(384, 220);
  vertex(384, 186);
  endShape(CLOSE);

  fill(113, 119, 95);
  beginShape();
  vertex(384, 186);
  vertex(384, 220);
  bezierVertex(384, 220, 340, 220, 303, 193);
  vertex(303, 193);
  vertex(384, 186);
  endShape(CLOSE);

  fill(106, 122, 96);
  beginShape();
  vertex(384, 220);
  bezierVertex(384, 220, 340, 220, 303, 193);
  vertex(303, 193);
  vertex(285, 195);
  vertex(295, 265);
  vertex(385, 265);
  vertex(384, 220);
  endShape(CLOSE);

  fill(77, 129, 103);
  beginShape();
  vertex(475, 196);
  bezierVertex(475, 196, 400, 220, 384, 220);
  vertex(384, 220);
  vertex(384, 186);
  vertex(385, 265);
  vertex(295, 265);
  vertex(302, 323);
  vertex(475, 323);
  vertex(475, 196);
  endShape(CLOSE);

  fill(73, 129, 106);
  beginShape();
  vertex(302, 323);
  vertex(305, 358);
  vertex(475, 352);
  vertex(475, 323);
  vertex(302, 323);
  endShape(CLOSE);

  fill(71, 89, 73);
  beginShape();
  vertex(474, 352);
  vertex(305, 358);
  vertex(308, 388);
  vertex(475, 388);
  vertex(475, 352);
  endShape(CLOSE);

  fill(64, 81, 65);
  beginShape();
  vertex(475, 388);
  vertex(308, 388);
  vertex(310, 420);
  vertex(475, 428);
  vertex(475, 388);
  endShape(CLOSE);

  // connects to triangles
  fill(39, 42, 31);
  beginShape();
  vertex(310, 420);
  vertex(301, 425);
  vertex(313, 445);
  vertex(475, 450);
  vertex(475, 428);
  endShape(CLOSE);

  fill(69, 141, 93);
  beginShape();
  vertex(285, 195);
  vertex(255, 197);
  vertex(260, 263);
  vertex(295, 265);
  vertex(285, 195);
  endShape(CLOSE);

  fill(80, 94, 69);
  beginShape();
  vertex(255, 197);
  vertex(233, 199);
  vertex(236, 262);
  vertex(260, 263);
  vertex(255, 197);
  endShape(CLOSE);

  fill(69, 73, 50);
  beginShape();
  vertex(233, 199);
  vertex(203, 201);
  vertex(183, 244);
  vertex(210, 285);
  vertex(298, 290);
  vertex(295, 265);
  vertex(236, 262);
  vertex(233, 199);
  endShape(CLOSE);

  // diamond at top of triangle
  fill(75, 80, 63);
  beginShape();
  vertex(183, 244);
  vertex(217, 296);
  vertex(186, 346);
  vertex(156, 296);
  vertex(183, 244);
  endShape(CLOSE);

  // 2nd green strip to right of triangle
  fill(83, 145, 108);
  beginShape();
  vertex(203, 203);
  vertex(22, 580);
  vertex(0, 571);
  vertex(0, 497);
  vertex(70, 375);
  bezierVertex(70, 375, 80, 340, 100, 320);
  vertex(100, 320);
  vertex(125, 280);
  bezierVertex(125, 280, 133, 245, 124, 209);
  vertex(125, 208);
  vertex(203, 203);
  endShape(CLOSE);

  fill(78, 101, 77);
  beginShape();
  vertex(0, 497);
  vertex(70, 375);
  bezierVertex(70, 375, 80, 340, 100, 320);
  vertex(100, 320);
  vertex(125, 280);
  bezierVertex(125, 280, 133, 245, 124, 209);
  vertex(125, 208);
  vertex(0, 416);
  vertex(0, 497);
  endShape(CLOSE);

  fill(62, 74, 49);
  beginShape();
  vertex(125, 208);
  vertex(0, 416);
  vertex(0, 297);
  vertex(63, 213);
  vertex(125, 208);
  endShape(CLOSE);

  // 2nd diamond at top of triangle
  fill(107, 128, 107);
  beginShape();
  vertex(158, 298);
  vertex(186, 346);
  vertex(160, 395);
  vertex(132, 352);
  vertex(158, 298);
  endShape(CLOSE);

  // right of triangle green piece
  fill(92, 147, 120);
  beginShape();
  vertex(186, 346);
  vertex(217, 296);
  vertex(350,504)
  vertex(324,507)
  vertex(325,590)
  vertex(186, 346);
  endShape(CLOSE);

  fill(58, 138, 105);
  beginShape();
  vertex(208, 312);
  vertex(217, 296);
  vertex(350,504)
  vertex(324,507)
  vertex(208, 312);
  endShape(CLOSE);

  // 2nd diamond at top of triangle
  fill(119, 175, 151);
  beginShape();
  vertex(132, 352);
  vertex(160, 395);
  vertex(91, 518);
  vertex(284, 518);
  vertex(325,590)
  vertex(22, 580);
  vertex(132, 352);
  endShape(CLOSE);

  // 2nd diamond at top of triangle
  fill(111, 139, 124);
  beginShape();
  vertex(284, 518);
  vertex(325, 590)
  vertex(261, 588);
  vertex(232, 519);
  vertex(284, 518);
  endShape(CLOSE);

  // triangle
  fill(209, 194, 155);
  beginShape();
  vertex(186, 346);
  vertex(284, 518);
  vertex(91, 518);
  vertex(186, 346);
  endShape(CLOSE);

  // inner triangle
  fill(199, 183, 157);
  beginShape();
  vertex(216, 400);
  vertex(284, 518);
  vertex(150, 518);
  vertex(216, 400);
  endShape(CLOSE);

  fill(191, 179, 156);
  beginShape();
  vertex(150, 518);
  vertex(186, 455);
  vertex(224, 518);
  vertex(150, 518);
  endShape(CLOSE);

  fill(127, 171, 151);
  beginShape();
  vertex(194, 480);
  vertex(205, 480);
  vertex(210, 499);
  vertex(190, 500);
  vertex(190, 490);
  vertex(194, 480);
  endShape(CLOSE);

  fill(46, 49, 35);
  beginShape();
  vertex(350, 504);
  vertex(324, 507);
  vertex(325, 560);
  vertex(368, 505);
  vertex(350, 504);
  endShape(CLOSE);

  fill(61, 80, 60);
  beginShape();
  vertex(385, 483);
  vertex(396, 501);
  vertex(325, 590);
  vertex(325, 560);
  vertex(385,483);
  endShape(CLOSE);

  fill(68, 106, 93);
  beginShape();
  vertex(396, 501);
  vertex(458, 598);
  vertex(360, 602);
  vertex(325, 590);
  vertex(396, 501);
  endShape(CLOSE);

  fill(52, 137, 127);
  beginShape();
  vertex(368, 588);
  vertex(395, 545);
  vertex(413, 578);
  vertex(401, 579);
  vertex(397, 588)
  vertex(368, 588);
  endShape(CLOSE);

  fill(72, 95, 87);
  beginShape();
  vertex(360, 602);
  vertex(368, 588);
  vertex(397, 588)
  vertex(428, 599);
  vertex(430, 752);
  vertex(360, 754);
  vertex(360, 602);
  endShape(CLOSE);

  fill(69, 133, 115);
  beginShape();
  vertex(458, 598);
  vertex(461, 610);
  vertex(462, 742);
  vertex(430, 752);
  vertex(428, 599);
  vertex(458, 598);
  endShape(CLOSE);

  fill(83, 130, 118);
  beginShape();
  vertex(462, 742);
  vertex(463, 768);
  vertex(429, 768);
  vertex(430, 752);
  vertex(462, 742);
  endShape(CLOSE);

  fill(62, 70, 57);
  beginShape();
  vertex(430, 752);
  vertex(429, 768);
  vertex(327, 768);
  vertex(327, 753);
  vertex(430, 752);
  endShape(CLOSE);

  fill(151, 174, 159);
  beginShape();
  vertex(327, 753);
  vertex(327, 768);
  vertex(227, 768);
  vertex(227, 754);
  vertex(327, 753);
  endShape(CLOSE);

  fill(90, 123, 106);
  beginShape();
  vertex(227, 754);
  vertex(227, 768);
  vertex(204, 768);
  vertex(204, 760);
  vertex(227, 754);
  endShape(CLOSE);
}
