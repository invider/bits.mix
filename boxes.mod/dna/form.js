const form = {
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
        if (this.x+this.r >= ctx.width && this.dx > 0) this.dx *= -1
        if (this.x < 0 && this.dx < 0) this.dx *= -1
        if (this.y+this.r >= ctx.height && this.dy > 0) this.dy *= -1
        if (this.y < 0 && this.dy < 0) this.dy *= -1
    },

    draw: function() {
        lineWidth(2)
        stroke(this.color)
        rect(this.x, this.y, this.r, this.r)
    },
}
