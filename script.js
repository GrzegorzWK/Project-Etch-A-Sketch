const container = document.querySelector(".container");
const open_canvas = document.querySelector(".open-canvas");
const canvas_size_input = document.querySelector(".canvas-size");
const pick_color = document.querySelector('[type ="color"]');
const canvas_size_text = document.querySelector(".canvas-size-text");
const color_rainbow = document.querySelector(".color-rainbow");
const color_mode = document.querySelector(".color-mode");
const clear_canvas = document.querySelector(".clear-canvas");

let size = 16;
let color = "#79dbba";
let isRainbow = false;

function openCanvas() {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    container.appendChild(newDiv);
  }

  let canvas = document.querySelectorAll(".grid-item");
  canvas.forEach((canvas) => canvas.addEventListener("mouseover", painting));
  canvas.forEach((canvas) => (canvas.style.backgroundColor = `white`));
}

openCanvas();

function setCanvasSize() {
  size = this.value;
  canvas_size_text.innerHTML = `${this.value} x ${this.value}`;
}

function setColor() {
  color = this.value;
  document.querySelector(".header").style.backgroundColor = this.value;
  document.querySelector(".footer").style.backgroundColor = this.value;
  isRainbow = false;
}

function setColorMode(e) {
  e.preventDefault();
  isRainbow = false;
}

function colorRainbow(e) {
  e.preventDefault();
  isRainbow = true;
}

function clearCanvas(e) {
  e.preventDefault();

  let canvas = document.querySelectorAll(".grid-item");
  canvas.forEach((canvas) => (canvas.style.backgroundColor = `white`));
}

function gridSize(e) {
  e.preventDefault();
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    container.appendChild(newDiv);
  }

  let canvas = document.querySelectorAll(".grid-item");
  canvas.forEach((canvas) => canvas.addEventListener("mouseover", painting));
  canvas.forEach((canvas) => (canvas.style.backgroundColor = `white`));
}

function painting() {
  if (isRainbow == false) {
    this.style.backgroundColor = `${color}`;
  } else {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    document.querySelector(
      ".header"
    ).style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    document.querySelector(
      ".footer"
    ).style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
}

open_canvas.addEventListener("click", (e) => gridSize(e));
canvas_size_input.addEventListener("change", setCanvasSize);
pick_color.addEventListener("change", setColor);
color_rainbow.addEventListener("click", (e) => colorRainbow(e));
color_mode.addEventListener("click", (e) => setColorMode(e));
clear_canvas.addEventListener("click", (e) => clearCanvas(e));
