import { Scene } from "./js/Scene";
import "./style.css";

const scene = new Scene();

const animate = () => {
  requestAnimationFrame(animate);
  scene.update();
};

animate();
