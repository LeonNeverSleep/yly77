import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { FlyControls } from "three/addons/controls/FlyControls.js";
// import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import cameraModule from "./camera.js";
import rendererModule from "./renderer.js";
// import eventHub from "@/utils/eventHub";
// import * as THREE from "three";
// 初始化控制器;
const controls = new OrbitControls(
  // 设置启用相机模块里的活动相机
  cameraModule.activeCamera,
  rendererModule.renderer.domElement
);
// 设置控制器阻尼
controls.enableDamping = true;
// 设置页面聚焦点
// controls.target.set(29.54, -25.8648, 11.5727);
// 设置右键旋转，滚轮键平移
// controls.mouseButtons = {
//   MIDDLE: THREE.MOUSE.PAN,
//   RIGHT: THREE.MOUSE.ROTATE,
// };
// 设置自动旋转;
// controls.autoRotate = true;

class ControlModule {
  constructor() {
    this.controls = controls;
    this.controls.enableDamping = true;
    // 限制控制器垂直旋转范围
    // this.controls.minPolarAngle = Math.PI / 2;
    this.controls.maxPolarAngle = Math.PI / 2;
    // eventHub.on("toggleControls", (controlsName) => {
    //   this.setControls(controlsName);
    // });
  }
  setControls(controlsName) {
    this[`set${controlsName}Controls`]();
  }
  setOrbitControls() {
    this.controls.dispose();
    this.controls = new OrbitControls(
      // 设置启用相机模块里的活动相机
      cameraModule.activeCamera,
      renderer.domElement
    );
  }
  // setFlyControls() {
  //   this.controls = new FlyControls(
  //     // 设置启用相机模块里的活动相机
  //     cameraModule.activeCamera,
  //     renderer.domElement
  //   );
  //   this.controls.movementSpeed = 100;
  //   this.controls.rollSpeed = Math.PI / 60;
  // }
  // setFirstPersonControls() {
  //   this.controls = new FirstPersonControls(
  //     // 设置启用相机模块里的活动相机
  //     cameraModule.activeCamera,
  //     renderer.domElement
  //   );
  //   this.controls.movementSpeed = 100;
  //   this.controls.rollSpeed = Math.PI / 60;
  // }
}

export default new ControlModule();
