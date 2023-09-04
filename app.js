const grid = document.querySelector(".container");
const gridSizeBtn = document.querySelector(".grid-size");
let gridWidth = 500;

function getGridSize() {
  let userInput = Math.floor(+prompt("Please enter grid size"));
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert("Please enter a valid integer between 1 to 100");
  } else {
    return userInput;
  }
}

function createSquare(number, width) {
  let squares = [];
  for (let i = 0; i < number; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.height = `${width}px`;
    square.style.width = `${width}px`;
    registerEventListener(square);
    squares.push(square);
  }
  return squares;
}

function createGrid(dimension) {
  let squares = createSquare(dimension * dimension, gridWidth / dimension);
  squares.forEach((square) => {
    grid.appendChild(square);
  });
}

function registerEventListener(node) {
  node.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "magenta";
  });
}

gridSizeBtn.addEventListener("click", () => {
  let gridSize = getGridSize();
  if (gridSize) {
    createGrid(gridSize);
  }
});
