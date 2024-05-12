class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload(){
		this.load.image("background", "assets/background.png");
		this.load.image("pers", "assets/pers.png");
	}

	create() {
		this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");
	}
}
