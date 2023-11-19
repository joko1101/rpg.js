class Sprite {
    constructor(args) {
        this.image = new Image();
        this.image.src = args.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        this.animations = args.animations || {
            "idleUp": [ [3, 0] ],
            "idleUpLeft": [ [6, 0] ],
            "idleLeft": [ [1, 0] ],
            "idleDownLeft": [ [5, 0] ],
            "idleDown": [ [0, 0] ],
            "idleDownRight": [ [4, 0] ],
            "idleRight": [ [2, 0] ],
            "idleUpRight": [ [7, 0] ],
            "walkUp": [ [3, 1], [3, 2], [3, 3], [3, 0] ],
            "walkUpLeft": [ [6, 1], [6, 2], [6, 3], [6, 0] ],
            "walkLeft": [ [1, 1], [1, 2], [1, 3], [1, 0] ],
            "walkDownLeft": [ [5, 1], [5, 2], [5, 3], [5, 0] ],
            "walkDown": [ [0, 1], [0, 2], [0, 3], [0, 0] ],
            "walkDownRight": [ [4, 1], [4, 2], [4, 3], [4, 0] ],
            "walkRight": [ [2, 1], [2, 2], [2, 3], [2, 0] ],
            "walkUpRight": [ [7, 1], [7, 2], [7, 3], [7, 0] ],
        }

    this.currentAnimation = "idleDown";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = args.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;

    this.gameObject = args.gameObject;
    }

    getFrame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame]
    }

    setAnimation(key) {
        console.log(key)
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress --;
            return
        }
        this.currentAnimationFrame += 1
        if (this.getFrame() === undefined) {
            this.currentAnimationFrame = 0;
        }
        this.animationFrameProgress = this.animationFrameLimit;
    }

    draw(ctx, cameraPerson) {
        const x = this.gameObject.x - 32 + 462 - cameraPerson.x;
        const y = this.gameObject.y - 6 + 288 - cameraPerson.y;

        const [frameY, frameX] = this.getFrame();
        // confused X and Y in the animations array. So changing that here is the easiest fix :D

        this.isLoaded && ctx.drawImage(this.image,
            frameX*64, frameY*64,
            64, 64,
            x, y,
            50, 50
        )

        this.updateAnimationProgress();
    }
    
}