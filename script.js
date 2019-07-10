const container = document.querySelector('#grid');
container.addEventListener('mouseover', darken);
// Hack a workaround to make grid border ignore event listener 
// intended for its eventually generated child elements.
container.style.opacity = '1';

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

// Prompt and perform simple validation of received input.
function getSize() {
    let gridSize = 0;
    while (gridSize < 1) {
        gridSize = parseInt(prompt('Input a grid length', '2'));
    }
    return gridSize;
}

// Create a clean drawing grid.
function createGrid(size) {
    for (let row = 1; row < size + 1; ++row) {
        for (let col = 1; col < size + 1; ++col) {
            let cell = document.createElement('span');
            cell.style.backgroundColor = 'black';
            cell.style.opacity = '0';
            cell.style.gridColumn = `${col} / span 1`;
            cell.style.gridRow = `${row} / span 1`;
            container.appendChild(cell); 
        }
    }
}

// Darken a grid cell.
function darken(e) {
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
}

// Reset the drawing grid.
function resetGrid() {
    // Clear the current grid of all elements.
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Create a new grid.
    createGrid(getSize());
}
