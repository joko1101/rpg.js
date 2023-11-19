class Person extends GameObject{
    constructor(args) {
        super(args);

        this.isPlayer = args.isPlayer || false;

        this.directionUpdate = {
            "Up": ["y", -1],
            "Left": ["x", -1],
            "Down": ["y", 1],
            "Right": ["x", 1],
            "": ["x", 0]
        }
        
        this.currentDirection = "Down";

    }

    update(state) {

        if (this.isPlayer && state.keys) {
            this.directions = state.keys
            if (this.directions.includes("Up") && this.directions.includes("Down")) {
                this.directions.splice(this.directions.indexOf("Up"));
                this.directions.splice(this.directions.indexOf("Down"));
            }
            if (this.directions.includes("Right") && this.directions.includes("Left")) {
                this.directions.splice(this.directions.indexOf("Right"));
                this.directions.splice(this.directions.indexOf("Left"));
            }
        }

        this.updatePosition();
        this.updateSprite(state);
    }
    
    updatePosition() {
        this.directions.forEach(direction => {
            if (this.directions.length > 1) {

            }
            const [property, change] = this.directionUpdate[direction];
            this[property] += change/2;
        });        
    }

    updateSprite(state) {
        if (this.isPlayer && state.keys.length === 0) {
            if (this.directions.length > 1) {
                if (this.directions[0] !== "Up" && this.directions[0] !== "Down") {
                    var first = this.directions[0];
                    this.directions[0] = this.directions[1]
                    this.directions[1] = first;
                }
            }
            var dir = "";
            this.directions.forEach(d => {
                dir = dir + d;
            })
            this.sprite.setAnimation("idle" + this.currentDirection);
            return;
        }
        if (this.isPlayer) {
            if (this.directions.length > 1) {
                if (this.directions[0] !== "Up" && this.directions[0] !== "Down") {
                    var first = this.directions[0];
                    this.directions[0] = this.directions[1]
                    this.directions[1] = first;
                }
            }
            var dir = "";
            this.directions.forEach(d => {
                dir = dir + d;
            })
            this.currentDirection = dir;
            this.sprite.setAnimation("walk"+dir);
        }
    }
}