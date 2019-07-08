const container = document.querySelector('grid');

// Prompt and perform simple validation of received input.
function getSize() {
    let gridSize = 1;
    while (gridSize < 2) {
        gridSize = prompt('Input a grid length', '2');
    }
    return gridSize;
}

// Create a clean drawing grid.
function createGrid(size) {
    for (let row = 0; row < size; ++row) {
        for (let col = 0; col < size; ++col) {
            // let cell = document.createElement('???');
            container.appendChild(cell);
        }
        // Anything special to move down a grid row here?
    }
}

// Clean the drawing grid.
function resetGrid() {
    gridSize = getSize();
    createGrid(size)
}

const reset = document.querySelector('#button');
reset.addEventListener('click', resetGrid);