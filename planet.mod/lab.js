// position at the center of the screen
let x = rx(.5)
let y = ry(.5)
let r = 50

// the speed along x and y axises
let dx = 100
let dy = 100

function evo(dt) {
    // make the movement relative to the time passed
    x += dx * dt
    y += dy * dt

    // screen edge boundaries
    if (x > rx(1)-r && dx > 0) dx *= -1
    else if (x < r && dx < 0) dx *= -1
    if (y > ry(1)-r && dy > 0) dy *= -1
    else if (y < r && dy < 0) dy *= -1
}

function draw() {
    background('#000000') // color in hex RGB
    lineWidth(5)
    stroke(.58, .5, .7)   // color in float HSL
    circle(x, y, r)
    image(res.mars_type_planet, x-r, y-r, 2*r, 2*r)
}
