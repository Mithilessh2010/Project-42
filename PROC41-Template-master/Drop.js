class Drop {
    constructor(x, y) {

        var options = {
            restitution: 0.4,
            friction: 0.1
        }
        this.r = 5;

        this.rain = Bodies.circle(x, y, this.r, options);
        World.add(world, this.rain);

    }
    updatedrop() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, { x: random(0, 700), y: random(0, 700) })
        }
    }

    drawdrop() {
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.r, this.r);
    }

};