const myCanvas = document.getElementById("myCanvas");

myCanvas.width = innerWidth;
myCanvas.height = innerHeight;

const width = myCanvas.width;
const height = myCanvas.height;

const canvas = myCanvas.getContext("2d");
canvas.fillStyle = "rgba(21, 21, 21, 1)";
canvas.fillRect(0, 0, width, height);

class Number {
  constructor(x, y, prevX, prevY) {
    this.x = x;
    this.y = y;
    this.prevX = prevX;
    this.prevY = prevY;
    this.hue = Math.floor(Math.random() * 360);
  }
}

let numbers = [];

let xValue = 0;

let prevX = 0;
let prevY = height / 2;

const subtract = (point) => {
  point.prevX -= 1
  point.x -= 1
}

const graph = () => {
  canvas.fillStyle = "rgba(21,21,21,1)";
  canvas.fillRect(0, 0, width, height);

  let randomY = Math.floor(Math.random() * height);
  let newNum = new Number(xValue, randomY, prevX, prevY);

  numbers.push(newNum);

  for (let i = 0; i < numbers.length; i++) {
    let point = numbers[i];
    let randomHue = point.hue;
    canvas.beginPath();
    canvas.lineWidth = 1;
    canvas.moveTo(point.x, point.prevY);
    canvas.lineTo(point.x, point.y);
    canvas.strokeStyle = `hsl(${randomHue}, 50%, 50%)`;
    canvas.stroke();
  }

  prevY = randomY;
  prevX = xValue;

  if (xValue <= width) {
    xValue += 1;
  }

  if (numbers.length < width) return;
  numbers.forEach(subtract)
  numbers.shift();
  prevX -= 1
};

setInterval(graph, 10)