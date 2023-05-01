const CELL_SIZE = 20;
const ROWS = 12;
const COLS = 12;
const PADDING = 5;

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

canvas.width  = (CELL_SIZE + PADDING) * COLS;
canvas.height  = (CELL_SIZE + PADDING) * ROWS;


const cellPositions = [];

for (let row = 0; row < ROWS; row++) {
  const y = row * (CELL_SIZE + PADDING) + PADDING;
  for (let col = 0; col < COLS; col++) {
    const x = col * (CELL_SIZE + PADDING) + PADDING;
    cellPositions.push([x, y]);
  }
}

function drawGrid() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
      let index = 0;
  cellPositions.forEach(([x, y]) => {
    ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
       ctx.fillText(index, x + CELL_SIZE / 2, y + CELL_SIZE / 2);
    index++;
  });
}


let snakePosition = [    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3]
];

function drawSnake(snake) {
  snake.forEach(([row, col]) => {
    //to make the snake go down
    //cellPositions is a flat array with 144 [x,y] entries
    // each x y is a coordiante of the screen exmample 30px,30px
    // to get a value at a certain row in the array we have to transpose
    // row * colls to get the current row startingindex
    //each row 12 long so we add 12 to the row with (row*COLS)
    // = coll to add the current col pos
    const x = cellPositions[row * COLS + col][0]; // pos x or 0 [x,y]
    const y = cellPositions[row * COLS + col][1]; // pos y or 1
    console.log(y)
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
  });
}

function moveSnake() {
  const head = snakePosition[snakePosition.length - 1];
  const newHead = [head[0] + 1, head[1]];
  snakePosition.push(newHead);
  const tail = snakePosition.shift();
  const tailX = cellPositions[tail[0] * COLS + tail[1]][0];
  const tailY = cellPositions[tail[0] * COLS + tail[1]][1];
  ctx.fillStyle = 'red';
  ctx.fillRect(tailX, tailY, CELL_SIZE, CELL_SIZE);
  drawSnake(snakePosition);
}

drawGrid();
drawSnake(snakePosition);
setInterval(moveSnake, 500);