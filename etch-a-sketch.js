const header = document.querySelector("header");
const gridContainer = document.querySelector(".grid-container");
let gridItems = document.querySelectorAll(".cell");

const btnNewGrid = document.createElement("button");
btnNewGrid.textContent = "New Grid";
const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
const currentGridSize = document.createElement("p");
header.appendChild(btnNewGrid);
header.appendChild(btnReset);
header.appendChild(currentGridSize)

// Prompt user to enter the number of squares per side to create a grid
function promptUser() {
    let isValidInput = false;
    let newSqPerSide;
    
    while (!isValidInput) {
        newSqPerSide = parseInt(prompt("Enter an integer for the number of squares per side in the new grid."));

        if (isNaN(newSqPerSide)) {
            alert("Error: The inputted value must be a number.");
        }
        else if (newSqPerSide > 100) {
            alert("Error: The inputted value is too high. The maximum allowed value is 100.");
        }
        else if (newSqPerSide <= 0) {
            alert("Error: The inputted value cannot be negative or equal to 0.");
        }
        else {
            isValidInput = true;
        }
    }

    createGrid(newSqPerSide);
}

// Create grid based on a given number of squares per side (e.g. inputting 16 would generate a 16x16 grid)
function createGrid(sqPerSide) {
    removeGrid();
    const sqTotal = sqPerSide * sqPerSide;

    for (let i = 0; i < sqTotal; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.appendChild(cell);
    }

    gridContainer.setAttribute("style", `grid-template-columns: repeat(${sqPerSide}, 1fr); grid-template-rows: repeat(${sqPerSide}, 1fr)`);
    currentGridSize.textContent = `Current grid size: ${sqPerSide}x${sqPerSide}`;
    addHoverEventListeners();
}

function removeGrid() {
    gridItems = document.querySelectorAll(".cell");
    gridItems.forEach((gridItem) => {
        gridContainer.removeChild(gridItem);
    });
}

function addHoverEventListeners() {
    gridItems = document.querySelectorAll(".cell");

    // Assign "hover" class to cell divs when the mouse goes over them
    gridItems.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hover");
        });
    });

    // Reset colour of all cells when the reset button is clicked
    btnReset.addEventListener("click", () => {
        gridItems.forEach((cell) => {
            cell.classList.remove("hover");
        });
    });
}

btnNewGrid.addEventListener("click", promptUser);

// Default to 16x16 grid on entry
createGrid(16);