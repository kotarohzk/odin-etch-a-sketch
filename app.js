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
    square.style.cssText = `height: calc(100% / ${dimension}); width: calc(100% / ${dimension})`;
    registerEventListener(square);
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

gridSizeBtn.addEventListener("click", () => {
  let gridSize = getGridSize();
  if (gridSize) {
    createGrid(gridSize);
  }
});
