function InputController() {
    this.upKey = false;
    this.downKey = false;
    this.rightKey = false;
    this.leftKey = false;
    this.sprintKey = false;
    this.jumpKey = false;
    this.crouchKey = false;

    function setupInputs() {
        document.addEventListener("keydown", function(e) {
            if (e.key === "w" || e.key === "ArrowUp") {
                upKey = true;
            }
            if (e.key === "a" || e.key === "ArrowLeft") {
                leftKey = true;
            }
            if (e.key === "s" || e.key === "ArrowDown") {
                downKey = true;
            }
            if (e.key === "d" || e.key === "ArrowRight") {
                rightKey = true;
            }
            if (e.key === "Control") {
                sprintKey = true;
            }
            if (e.key === "Space") {
                jumpKey = true;
            }
            if (e.key === "Shift") {
                crouchKey = true;
            }
        })
        document.addEventListener("keyup", function(e) {
            if (e.key === "w" || e.key === "ArrowUp") {
                upKey = false;
            }
            if (e.key === "a" || e.key === "ArrowLeft") {
                leftKey = false;
            }
            if (e.key === "s" || e.key === "ArrowDown") {
                downKey = false;
            }
            if (e.key === "d" || e.key === "ArrowRight") {
                rightKey = false;
            }
            if (e.key === "Control") {
                sprintKey = false;
            }
            if (e.key === "Space") {
                jumpKey = false;
            }
            if (e.key === "Shift") {
                crouchKey = false;
            }
        })
    }
}