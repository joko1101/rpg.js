class GameObject {
    constructor(args) {
        this.x = args.x || 0;
        this.y = args.y || 0;

        this.directions = [];

        this.sprite = new Sprite({
            gameObject: this,
            src: args.src || "./images/characters/player-sprite.png"
        })
    }   

    update() {
    }
}