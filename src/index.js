import "./styles.css";
import Game from "/src/game";

const WIDTH = 850;
const HEIGHT = 600;

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let game = new Game(WIDTH, HEIGHT);
game.start();

function gameLoop() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  game.update();
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/* 
import "./styles.css";
import InputHandler from "/src/input";
import Paddle from "/src/paddle";
import Ball from "/src/ball";
import Game from "/src/game";

const WIDTH = 800;
const HEIGHT = 600;
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let game = new Game(WIDTH, HEIGHT);
game.start();
let ball = new Ball(WIDTH, HEIGHT, 25);
let ball = document.getElementById("ball");
ball.src = "/assets/images/ball.png";
ball.width = 30;
ball.height = 30;

let paddle = new Paddle(WIDTH, HEIGHT, 150, 20, 5);
screenWidth, screemHeight, paddlesWidth, paddlesHeight
, paddlesSpeed
let lastTime = 0;
call to input Handler
new InputHandler(paddle);

function gameLoop() {
  let dt = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  game.update();
  game.draw(ctx);
  ctx.drawImage(ball, 10, 10, 30, 30);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop); */
