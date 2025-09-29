let ellipseSpacingX = 30;
let ellipseSpacingY = 10;
let ellipseSize = 30;

function setup() {
  createCanvas(1500, 800);
  noStroke();
}

function draw() {
  background(220);

  for (let x = 30; x < 1800; x += ellipseSpacingX) {
    for (let y = 10; y < 1000; y += ellipseSpacingY) {
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      fill(r, g, b);
      ellipse(x, y, ellipseSize);
    }
  }
}