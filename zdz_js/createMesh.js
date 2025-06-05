import scene from "./scene.js";
// import gsap from "gsap";
import City from "./City.js";
let city;
export default function createMesh() {
  // 创建城市
  city = new City(scene);
  return city;
}

export function updateMesh(t) {
  // 更新城市
  // city.update(t);
}
