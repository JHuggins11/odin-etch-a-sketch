const container = document.querySelector(".grid-container");

// Create 16x16 rows
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
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