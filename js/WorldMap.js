class WorldMap {
    constructor(args) {
        this.gameObjects = args.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = args.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = args.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUppderImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.WorldMaps = {
    Island: {
        lowerSrc: "./images/maps/island.png",
        upperSrc: "./images/maps/island.png",
        gameObjects: {
            player: new Person({
                isPlayer: true,
                x: 495, 
                y: 250
            })
        }
    }
}