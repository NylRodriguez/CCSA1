function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);

  // Alien head
  noStroke();
  fill(0, 200, 0);
  ellipse(200, 100, 120, 120);

  // Eyes
  fill(0);
  ellipse(170, 90, 20, 30);
  ellipse(230, 90, 20, 30);
  fill(255);
  ellipse(170, 90, 8, 12);
  ellipse(230, 90, 8, 12);

  // Antennae
  stroke(0, 200, 0);
  strokeWeight(4);
  line(200, 40, 200, 10);
  noStroke();
  fill(255, 50, 50);
  ellipse(200, 10, 15, 15);

  // Mouth
  fill(0);
  arc(200, 120, 50, 30, 0, PI);

  // Body
  fill(0, 200, 0);
  rect(170, 150, 60, 60, 20);

  // Arms
  stroke(0, 200, 0);
  strokeWeight(8);
  line(170, 170, 130, 160);
  line(230, 170, 270, 160);
  noStroke();
}

