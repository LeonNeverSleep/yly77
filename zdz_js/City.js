import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { Reflector } from "three/addons/objects/Reflector.js";
import animate from "./animate.js";
import * as THREE from "three";
export default class City {
  constructor(scene) {
    // dracoLoader跟gltfLoader是模型加载器，用于加载模型文件
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.preload();
    gltfLoader.setDRACOLoader(dracoLoader);
    // 获取当前场景实例
    this.scene = scene;
    let mixer;
    const mirrorGeo = new THREE.PlaneGeometry(4.9, 7.35);
    let verticalMirror = new Reflector(mirrorGeo, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: 0xc1cbcb,
    });
    verticalMirror.position.y = 0.15;
    verticalMirror.position.z = -11.2;
    verticalMirror.position.x = -4.3;
    // 加载模型
    gltfLoader.load("./model/scene2.glb", (gltf) => {
      // 设置模型大小缩放至合适位置
      gltf.scene.scale.set(10, 10, 10);
      console.log(gltf.scene, "room");
      scene.add(verticalMirror);

      // 给模型命名
      scene.add(gltf.scene);
    });
    // 加载模型
    gltfLoader.load("./model/02.glb", (gltf) => {
      // 设置模型大小缩放至合适位置
      gltf.scene.scale.set(4, 4, 4);
      gltf.scene.position.y -= 10;
      gltf.scene.position.x -= 4;
      gltf.scene.rotation.y += Math.PI;
      mixer = new THREE.AnimationMixer(gltf.scene);
      const clips = gltf.animations;
      if (clips && clips.length > 0) {
        const action = mixer.clipAction(clips[0]);
        action.play();
      }
      animate((delta) => {
        if (mixer) mixer.update(delta * 10);
      });
      console.log(gltf, "people");
      // 给模型命名
      scene.add(gltf.scene);
    });
  }
}
