import { Scene } from "phaser";
import sky from "@/static/assets/sky.png";
// import ice from "@/static/assets/ice.png";
import apple from "@/static/assets/apple.png";

import thudMp3 from "@/static/assets/thud.mp3";
import thudOgg from "@/static/assets/thud.ogg";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("bomb", "/assets/bomb.png");
    this.load.image("apple", apple);

    this.load.audio("thud", [thudMp3, thudOgg]);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
