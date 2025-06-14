import * as THREE from "three";
import cameraModule from "./camera.js";
import rendererModule from "./renderer.js";
// import controlModule from "./controls.js";
import scene from "./scene.js";
// 导入eventhub
// import eventHub from "@/utils/eventHub";

const clock = new THREE.Clock();
function animate(updateMesh, city) {
  // const time = clock.getElapsedTime();
  // 获取间隔时间
  const delta = clock.getDelta();
  // controlModule.controls.update(delta);
  // 更新物体
  updateMesh(delta);
  requestAnimationFrame(() => {
    animate(updateMesh, city);
  });

  // 使用渲染器渲染相机看这个场景的内容渲染出来
  rendererModule.renderer.render(scene, cameraModule.activeCamera);
}

// let cameraName = "main";

// eventHub.on("toggleCamera", () => {
//   console.log("toggleCamera");
//   if (cameraName === "main") {
//     cameraName = "carCamera";
//   } else {
//     cameraName = "main";
//   }
// });

export default animate;
