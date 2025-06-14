import * as THREE from "three";
// import eventHub from "@/utils/eventHub";
// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerHeight,
  1,
  100000
);
// 设置相机位置
camera.position.set(7, 8, 15);

class CameraModule {
  constructor() {
    this.activeCamera = camera;
    this.cameraCollect = {
      default: camera,
    };
    // eventHub.on("toggleCamera", (name) => {
    //   this.setActiveCamera(name);
    // });
  }
  addCamera(name, camera) {
    this.cameraCollect[name] = camera;
  }
  setActiveCamera(name) {
    this.activeCamera = this.cameraCollect[name];
  }
}

export default new CameraModule();
