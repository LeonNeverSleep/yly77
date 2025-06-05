import scene from "./scene.js";
import cameraModule from "./camera.js";
import rendererModule from "./renderer.js";
import controlModule from "./controls.js";
import animate from "./animate.js";
import "./init.js";
import createMesh from "./createMesh.js";
// import { getZdzData, getLtzData } from "../axios/zdz.js";

let sceneDiv = document.getElementById("sceneDiv");
let modelOptions = {
  zdz: {},
  ltz: {},
};
// 去获取管道速度、水泵开关状态、水面高度等数据
async function initData() {
  // try {
    // const [res1, res2] = await Promise.all([getZdzData(), getLtzData()]);
    // modelOptions.zdz = res1.data;
    // modelOptions.ltz = res2.data;
    // let city = new createMesh();
    // }
  // } catch (error) {
    // console.log(error);
    let city = new createMesh();
  // }
}
initData();
scene.add(cameraModule.activeCamera);
// 创建场景中的物体，包括模型等
// let city = createMesh();
animate(() => {
  controlModule.controls.update();
}, null);
sceneDiv.appendChild(rendererModule.renderer.domElement);
