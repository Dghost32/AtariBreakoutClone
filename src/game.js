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

    /* Fills bricks array
     * 4 rows, 16 cols
     */
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 16; i++) {
        this.bricks.push(new Brick(this, { x: i * 52, y: 30 * j }));
      }
    }

    /* Stores game objects in an array */
    this.gameObjects = [this.paddle, this.ball, ...this.bricks];
  }

  update() {
    this.gameObjects.forEach(object => object.update());
  }
  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
