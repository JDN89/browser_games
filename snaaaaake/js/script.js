const CELL_SIZE = 20;
const ROWS = 12;
const COLS = 12;
const PADDING = 5;

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

canvas.width  = (CELL_SIZE + PADDING) * COLS;
canvas.height  = (CELL_SIZE + PADDING) * ROWS;

let index = 0;

for (let row = 0; row< ROWS; row ++) {
    for (let col = 0; col < COLS; col++) {

        //coordinate of x and y-axis to start drawing
        const x = col * (CELL_SIZE + PADDING) + PADDING;
        const y = row * (CELL_SIZE + PADDING) +PADDING;


        ctx.fillStyle = 'white';
        ctx.fillRect(x,y,CELL_SIZE,CELL_SIZE)
        ctx.strokeStyle = 'black'
        ctx.strokeRect(x,y,CELL_SIZE,CELL_SIZE)

        // Display the index inside the cell.
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(index, x + CELL_SIZE / 2, y + CELL_SIZE / 2);

        index += 1;
    }
}