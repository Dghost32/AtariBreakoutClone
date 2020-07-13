export default class Ball {
  constructor(game) {
    this.ball = document.getElementById("ball");
    this.position = { x: 10, y: 10 };
    this.speed = { x: 2, y: 2 };
    this.size = 25;
    this.WIDTH = game.WIDTH;
    this.HEIGHT = game.HEIGHT;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.ball,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update() {
    /* console.log(this.game.paddle.position.x); */
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //COLISIONS
    /* WALL LEFT OR RIGHT */
    if (this.position.x > this.WIDTH - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    /* WALL TOP OR BOTTOM */
    if (this.position.y > this.HEIGHT - this.size || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    /* PADDLE */
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let leftOfPaddle = this.game.paddle.position.x;
    let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall > topOfPaddle &&
      this.position.x >= leftOfPaddle &&
      this.position.x <= rightOfPaddle - this.size
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
