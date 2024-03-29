let dotSize = 20;
let minSizeValue = 4;
let maxSizeValue = 12;
let isMouseMoved = false;
const spacing = minSizeValue * 6;
let dotColor = "#0647D140";
let bgColor = "#f3f4f9";
let dots = [];

const p5Container = document.querySelector(".p5__container");
let w = p5Container.clientWidth;
let h = p5Container.clientHeight;

function setup() {
  frameRate(30);
  colorMode(RGB);
  let cnv = createCanvas(w, h);
  cnv.parent(p5Container);
  for (let i = 0; i < w; i += spacing) {
    for (let j = 0; j < h; j += spacing) {
      let dotItem = new Dot(i + spacing / 2, j + spacing / 2, dotSize);
      dots.push(dotItem);
    }
  }
}

function draw() {
  background(bgColor);
  dots.forEach((dotItem) => {
    dotItem.update();
    dotItem.render();
  });
}

function mouseMoved() {
  isMouseMoved = true;
  setTimeout(() => {
    isMouseMoved = false;
  }, 100);
}

class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = minSizeValue;
  }

  update() {
    rectMode(CENTER);
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (isMouseMoved && distance < 200) {
      this.size = min(maxSizeValue, this.size + 0.2);
    } else {
      this.size = max(minSizeValue, this.size - 0.2);
    }
  }

  render() {
    rectMode(CENTER);
    fill(dotColor);
    noStroke();
    square(this.x, this.y, this.size);
  }
}
