function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);

  // Car body
  fill(255, 0, 0);
  rect(100, 100, 200, 50, 20);

  // Car roof
  fill(255, 0, 0);
  beginShape();
  vertex(125, 100);
  vertex(275, 100);
  vertex(250, 75);
  vertex(150, 75);
  endShape(CLOSE);

  // Windows
  fill(0, 191, 255);
  rect(155, 80, 40, 20);
  rect(205, 80, 40, 20);

  // Wheels
  fill(0);
  ellipse(140, 150, 50, 50);
  ellipse(260, 150, 50, 50);

  // Wheel hubcaps
  fill(200);
  ellipse(140, 150, 25, 25);
  ellipse(260, 150, 25, 25);

  // Headlights
  fill(255, 255, 0);
  ellipse(310, 125, 20, 20);
}
