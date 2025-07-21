function setup() {
  createCanvas(400, 400);
  let maxCol = 5, maxRow = 4, triangleSize = 60;
  let xSpacing = width / maxCol + 1;
  let ySpacing = height / maxRow;

  for (let x = 0; x < maxCol; x++) {
    for (let y = 0; y < maxRow; y++) {
      fill((x === 3 && y === 2) ? color(0, 100, 100) : color(0, 0, 100));
      beginShape();
      vertex((x + 1) * xSpacing, y * ySpacing - triangleSize / 2);
      vertex((x + 1) * xSpacing - triangleSize / 2, y * ySpacing + triangleSize / 2);
      vertex((x + 1) * xSpacing + triangleSize / 2, y * ySpacing + triangleSize / 2);
      endShape(CLOSE);
    }
  }
}

function draw() {
  // Static grid—no animation
}
