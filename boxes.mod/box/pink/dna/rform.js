const rform = {
    x: rx(.5), y: ry(.5), r: 50,

    dx: 20, dy: 20,
    speed: 100,

    color: '#ffffff',

    init: function(st) {
        this.dir = rnd(TAU)

        augment(this, st)

        this.dx = cos(this.dir) * this.speed
        this.dy = sin(this.dir) * this.speed
    },

    evo: function(dt) {
        this.x += this.dx * dt
        this.y += this.dy * dt

        // bounce off the screen edges
        if (this.x+this.r >= rx(1) && this.dx > 0) this.dx *= -1
        if (this.x < this.r && this.dx < 0) this.dx *= -1
        if (this.y+this.r >= ry(1) && this.dy > 0) this.dy *= -1
        if (this.y < this.r && this.dy < 0) this.dy *= -1
    },

    draw: function() {
        lineWidth(2)
        stroke(this.color)
        circle(this.x, this.y, this.r)
    },
}
