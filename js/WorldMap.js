class WorldMap {
    constructor(args) {
        this.gameObjects = args.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = args.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = args.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(this.lowerImage, 462 - cameraPerson.x, 288 - cameraPerson.y);
    }

    drawUppderImage(ctx, cameraPerson) {
        ctx.drawImage(this.upperImage, 462 - cameraPerson.x, 288 - cameraPerson.y);
    }
}

window.WorldMaps = {
    Island: {
        lowerSrc: "./images/maps/village.jpg",
        upperSrc: "./images/maps/village.jpg",
        gameObjects: {
            player: new Person({
                isPlayer: true,
                x: 900, 
                y: 400,
                src: "./images/characters/player-sprite.png"
            }),
            npc: new Person({
                isPlayer: false,
                x: 1200,
                y: 450,
            })
        }
    }
}