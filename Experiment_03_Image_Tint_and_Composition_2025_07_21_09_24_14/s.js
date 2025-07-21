let img;

function preload() {
  img = loadImage("s.jpg.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // Top half red‑tinted
  tint(255, 0, 0);
  image(img, 0, 0, img.width / 2, img.height / 2);

  // Bottom half original
  noTint();
  image(img, 0, img.height / 2, img.width / 2, img.height / 2);
}
