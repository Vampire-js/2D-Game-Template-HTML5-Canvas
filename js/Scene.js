import { Box2D } from "./Box";
import { Camera } from "./Camera";

export class Scene extends Camera {
  constructor() {
    super();
    this.origin = { x: this.position.x, y: this.position.y };
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.entities = new Array();

    //props
    this.SCREEN_SIZE = { x: innerWidth, y: innerHeight };

    this.init();
  }
  init() {
    let box = new Box2D(this.context, this.origin);
    box.position.x = 20;
    this.entities.push(box);
  }
  updateScreenSize() {
    this.canvas.width = this.SCREEN_SIZE.x;
    this.canvas.height = this.SCREEN_SIZE.y;
  }
  update() {
    this.updateScreenSize();
    this.context.fillStyle = "#eee";
    this.context.fillRect(0, 0, innerWidth, innerHeight);

    this.entities.map((entity) => {
      entity.update(this.context);
    });
  }
}
