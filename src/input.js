export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      /* Shows keycode */
      /* alert(event.keyCode); */

      switch (event.keyCode) {
        case 37:
          /* console.log("move Left"); */
          paddle.moveLeft();
          break;
        case 39:
          /* console.log("move Right"); */
          paddle.moveRight();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      /* Shows keycode */
      /* alert(event.keyCode); */

      switch (event.keyCode) {
        case 37:
          /* console.log("move Left"); */
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          /* console.log("move Right"); */
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          break;
      }
    });
  }
}
