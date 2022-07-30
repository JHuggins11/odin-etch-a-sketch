const container = document.querySelector(".grid-container");

// Create 16x16 rows
function createRows() {
    for (let i = 0; i < 256; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    }
}

createRows();