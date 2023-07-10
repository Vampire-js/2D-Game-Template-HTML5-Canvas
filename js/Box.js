import { Camera } from "./Camera";
import { Scene } from "./Scene";
import { Vector2D } from "./maths";

export class Box2D extends Camera {
  constructor(c) {
    super();

    this.origin = { x: this.position.x, y: this.position.y };
    this._position = Vector2D(0, 0, 0);
    this._velocity = Vector2D(0, 0, 0);
    this.c = c;
    this.color = "red";
    this.init();
  }
  init() {
    console.log(this.origin);
    this.c.fillStyle = this.color;
    this.c.fillRect(
      this.position.x + this.origin.x,
      this.position.y + this.origin.y,
      200,
      200
    );
  }
  update(c) {
    this.init(c);
    // this.position.MultiplyScalar(this.velocity)
  }
}
