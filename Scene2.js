class Scene2 extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	create() {
		this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
		this.background.setOrigin(0,0);

		this.pers = this.add.image(config.width/2 -50, config.height/2, "pers");
		this.add.text(20, 20, "Playing game", {font: "24px Arial", fill: "yellow"});

		this.pers.setInteractive();

		this.input.on ('gameobjectdown', this.rotatePers, this);
	}

	update() {
		this.movePers(this.pers, 3);

		this.background.tilePositionY -=0.5;
	}

	movePers(pers, speed) {
		pers.y += speed;
		if (pers.y > config.height) {
			this.resetPersPos(pers);
		}
	}

	resetPersPos(pers) {
		pers.y=0;
		var randomX = Phaser.Math.Between(0, config.width);
		pers.x = randomX;
	}

	rotatePers (pointer, gameObject) {
		gameObject.rotation += Phaser.Math.Between (0, 5);
	}
}
