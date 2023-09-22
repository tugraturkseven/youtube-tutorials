let snake = [{ x: 200, y: 200 }, { x: 190, y: 190 }, { x: 180, y: 180 }, { x: 170, y: 170 }, { x: 160, y: 160 }];

const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContent('2d');

start();

function start() {
    clearCanvas();
    drawSnake();
}

function clearCanvas() {
    snakeboard_ctx.fillStyle = board_background;
    snakeboard_ctx.strokestyle = board_border;
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.heigth);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    const board_border = 'black';
    const board_background = 'white';
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';


    snakeboard_ctx.fillStyle = 'lightblue';
    snakeboard_ctx.stroketyle = 'darkblue'
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

