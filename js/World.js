class World {
    constructor(args) {
        this.gameContainer = args.gameContainer;
        this.canvas = this.gameContainer.querySelector(".gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.map;
    }
    
    startGameLoop() {
        const step = () => {

            const cameraPerson = this.map.gameObjects.player;

            Object.values(this.map.gameObjects).forEach(gameObject => {
                gameObject.update({
                    keys: this.directionInput.getDirections()
                });
            })

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.map.drawLowerImage(this.ctx, cameraPerson);

            Object.values(this.map.gameObjects).forEach(gameObject => {
                gameObject.sprite.draw(this.ctx, cameraPerson);
            })
            
            requestAnimationFrame(() => {
                step();
            })

        }
        step();
    }

    init() {

        this.map = new WorldMap(window.WorldMaps.Island);

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop(); 

    }

}