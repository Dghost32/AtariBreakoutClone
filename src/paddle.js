export default class Paddle {
  constructor(game) {
    this.WIDTH = game.WIDTH;
    this.HEIGHT = game.HEIGHT;
    this.width = 150;
    this.height = 20;
    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: game.WIDTH / 2 - this.width / 2,
      y: game.HEIGHT - this.height - 10
    };
  }

  draw(ctx) {
    /* ctx.fillStyle = "#0f0"; */
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x =
      this.position.x < 0
        ? 0
        : this.position.x > this.WIDTH - this.width
        ? this.WIDTH - this.width
        : this.position.x + this.speed;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
