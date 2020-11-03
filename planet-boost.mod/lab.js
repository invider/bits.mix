// position at the center of the screen
let x = rx(.5)  // place at 50% of the screen width
let y = ry(.5)  // place at 50% of the screen height
let r = 50      // planet radius in pixels

let dx = 100 // x-axis speed component
let dy = 100 // y-axis speed component

function init() {
    this.background = '#000000' // black color in hex RGB
}

function boost(mouseX, mouseY) {
    if (!this.booster && dist(x, y, mouseX, mouseY) <= r) {
        dx *= 1.2
        dy *= 1.2
        this.booster = true
    }
}

function slowDown(dt) {
    dx *= 1 - 0.05*dt
    dy *= 1 - 0.05*dt
}

function evo(dt) {
    // make the movement factored by the delta time dt
    x += dx * dt
    y += dy * dt

    // bounce from the screen edges
    if (x > rx(1)-r && dx > 0) dx *= -1
    else if (x < r && dx < 0) dx *= -1
    if (y > ry(1)-r && dy > 0) dy *= -1
    else if (y < r && dy < 0) dy *= -1

    slowDown(dt)
}

function draw() {
    // planet
    lineWidth(5)
    if (this.booster) stroke(.05, .4, .6)
    else stroke(.58, .5, .7)
    circle(x, y, r)       // atmosphere haze
    image(res.mars_type_planet, x-r, y-r, 2*r, 2*r)
}
