class DirectionInput {
    constructor(args) {
        this.heldDirections = [];

        this.map = {
            "ArrowUp": "Up",
            "ArrowLeft": "Left",
            "ArrowDown": "Down",
            "ArrowRight": "Right",
            "KeyW": "Up",
            "KeyA": "Left",
            "KeyS": "Down",
            "KeyD": "Right",
        }
    }
    
    getDirections() {
        if (this.heldDirections.includes("Up") && this.heldDirections.includes("Down")) {
            this.heldDirections.splice(this.heldDirections.indexOf("Up"));
            this.heldDirections.splice(this.heldDirections.indexOf("Down"));
        }
        if (this.heldDirections.includes("Right") && this.heldDirections.includes("Left")) {
            this.heldDirections.splice(this.heldDirections.indexOf("Right"));
            this.heldDirections.splice(this.heldDirections.indexOf("Left"));
        }
        return this.heldDirections;
    }

    init() {
        document.addEventListener("keydown", e => {
            const direction = this.map[e.code];
            if (direction && this.heldDirections.indexOf(direction) === -1) {
                this.heldDirections.unshift(direction);
            }
        });
        document.addEventListener("keyup", e => {
            const direction = this.map[e.code];
            const index = this.heldDirections.indexOf(direction);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        })
    }
}