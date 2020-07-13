import InputHandler from "/src/input";
import Paddle from "/src/paddle";
import Ball from "/src/ball";
import Brick from "/src/brick";

export default class Game {
  constructor(WIDTH, HEIGHT) {
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = [];
    new InputHandler(this.paddle);

    for (let i = 0; i < 10; i++) {
      this.bricks.push(new Brick(this, { x: i * 52, y: 30 }));
    }

    this.gameObjects = [this.paddle, this.ball, ...this.bricks];
  }

  update() {
    /* this.ball.update();
    this.paddle.update(); */
    this.gameObjects.forEach(object => object.update());
  }
  draw(ctx) {
    /* this.paddle.draw(ctx);
    this.ball.draw(ctx); */
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
