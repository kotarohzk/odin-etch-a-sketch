const grid = document.querySelector(".container");
const gridSizeBtn = document.querySelector(".grid-size");

function getGridSize() {
  let userInput = Math.floor(+prompt("Please enter grid size"));
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert("Please enter a valid integer between 1 to 100");
  } else {
    return userInput;
  }
}

function createSquare(dimension) {
  let squares = [];
  for (let i = 0; i < dimension * dimension; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.dataset.filled = false;
    square.style.cssText = `height: calc(100% / ${dimension}); width: calc(100% / ${dimension})`;
    // registerEventListener(square);
    squares.push(square);
  }
  return squares;
}

function createGrid(dimension) {
  let squares = createSquare(dimension);
  grid.innerHTML = "";
  squares.forEach((square) => {
    grid.appendChild(square);
  });
}

function registerEventListener(node) {
  node.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "magenta";
  });
}

function getRandomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

function getRandomRGB() {
  let red = getRandomNumber(0, 256);
  let green = getRandomNumber(0, 256);
  let blue = getRandomNumber(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

gridSizeBtn.addEventListener("click", () => {
  let gridSize = getGridSize();
  if (gridSize) {
    createGrid(gridSize);
  }
});

grid.addEventListener("mouseover", (e) => {
  if (
    e.target.classList.contains("square") &&
    e.target.dataset.filled === "false"
  ) {
    e.target.style.backgroundColor = getRandomRGB();
    e.target.dataset.filled = true;
  }
});
