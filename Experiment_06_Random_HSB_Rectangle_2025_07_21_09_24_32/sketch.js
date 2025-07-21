function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);

  let rectSize = random(50, 100);
  let x = random(width - rectSize);
  let y = random(height - rectSize);

  background(random(360), 100, 100);
  noStroke();
  fill(random(360), 100, 100);
  rect(x, y, rectSize, rectSize);
}

function draw() {
  // Static—new composition only on setup
}
