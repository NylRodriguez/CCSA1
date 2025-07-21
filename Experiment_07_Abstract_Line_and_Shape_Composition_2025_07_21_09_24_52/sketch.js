let angle = 0;

function setup() {
  createCanvas(400, 400);
  strokeCap(ROUND);
  noFill();
}

function draw() {
  background(30);

  // Animated frame lines with shifting hue
  strokeWeight(10);
  let hue = map(sin(angle), -1, 1, 100, 255);
  stroke(hue, 200, 255);
  line(10, 20, 90, 20);
  line(10, 20, 10, 180);
  line(10, 90, 80, 90);
  line(10, 180, 90, 180);

  // Pulsing circles
  stroke(255);
  let d1 = 80 + 30 * sin(angle * 1.5);
  let d2 = 80 + 30 * cos(angle * 1.5);
  ellipse(200, 150, d1);
  ellipse(200, 270, d2);

  // Rotating bottom polygon
  push();
    translate(200, 350);
    rotate(angle);
    stroke(255, 100, 150);
    beginShape();
      vertex(-40, -20);
      vertex(-40, 20);
      vertex(0, 40);
      vertex(40, 20);
      vertex(40, -20);
    endShape(CLOSE);
  pop();

  angle += 0.02;
}
