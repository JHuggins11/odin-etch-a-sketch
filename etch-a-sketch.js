const header = document.querySelector("header");
const gridContainer = document.querySelector(".grid-container");

const btnNewGrid = document.createElement("button");
btnNewGrid.textContent = "New Grid";
const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
header.appendChild(btnNewGrid);
header.appendChild(btnReset);

// Create 16x16 rows
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.appendChild(cell);
    }
}

createGrid();

const cells = document.querySelectorAll(".cell");

// Assign "hover" class to cell divs when the mouse goes over them
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");
    })
});