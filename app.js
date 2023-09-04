const grid = document.querySelector(".container");
let gridWidth = 300;

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

createGrid(30);
