import * as THREE from "three";
// import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
// 初始化场景
const scene = new THREE.Scene();
// 添加hdr环境纹理
// const rgbeloader = new RGBELoader();

// rgbeloader.loadAsync("../hdr/2kkkk.hdr").then((texture) => {
//   // 设置纹理为圆柱形纹理
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   // 添加天空环境
//   scene.background = texture;
//   scene.environment = texture;
//   scene.backgroundIntensity = 1.5;
// });
// 给场景添加平行光,类似太阳的作用，并设置位置
const light = new THREE.DirectionalLight(0xb67200, 0.5);
light.position.set(1000, 1000, 1000);
light.castShadow = true;
scene.add(light);
// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);
// // 给场景添加环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
export default scene;
