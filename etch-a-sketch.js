const header = document.querySelector("header");
const gridContainer = document.querySelector(".grid-container");

const btnNewGrid = document.createElement("button");
btnNewGrid.textContent = "New Grid";
const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
header.appendChild(btnNewGrid);
header.appendChild(btnReset);

// Create grid based on a given number of squares per side (e.g. inputting 16 would generate a 16x16 grid)
function createGrid(sqPerSide) {
    const sqTotal = sqPerSide * sqPerSide;

    for (let i = 0; i < sqTotal; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.appendChild(cell);
    }

    gridContainer.setAttribute("style", `grid-template-columns: repeat(${sqPerSide}, 1fr); grid-template-rows: repeat(${sqPerSide}, 1fr)`);
}

function removeGrid() {
    const gridItems = document.querySelectorAll(".cell");
    gridItems.forEach((gridItem) => {
        gridContainer.removeChild(gridItem);
    });
}

const cells = document.querySelectorAll(".cell");

// Assign "hover" class to cell divs when the mouse goes over them
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");
    });
});

// Reset colour of all cells when the reset button is clicked
btnReset.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.classList.remove("hover");
    });
})

// Call for default 16x16 grid
createGrid(16);