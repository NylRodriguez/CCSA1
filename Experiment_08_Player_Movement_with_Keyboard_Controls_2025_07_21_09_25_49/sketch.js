2let player;
let pressedKeys = {};

function setup() {
  createCanvas(600, 600);
  player = new Player(width/2, height/2);
}

function draw() {
  background(220);
  player.update();
  player.draw();
}

function keyPressed() {
  pressedKeys[key] = true;
}

function keyReleased() {
  delete pressedKeys[key];
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
  }
  update() {
    let mvmt = createVector(0, 0);
    if (pressedKeys['a']) mvmt.x -= 1;
    if (pressedKeys['d']) mvmt.x += 1;
    if (pressedKeys['w']) mvmt.y -= 1;
    if (pressedKeys['s']) mvmt.y += 1;
    if (mvmt.mag() > 0) {
      mvmt.setMag(this.speed);
      this.x += mvmt.x;
      this.y += mvmt.y;
    }
  }
  draw() {
    fill(255, 0, 0);
    noStroke();
    circle(this.x, this.y, 30);
  }
}
