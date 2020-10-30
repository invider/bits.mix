// coordinates and radius
let   x = rx(.5)  // center horizontally
const y = ry(.5)  // center vertically
const r = ry(.05) // 5% of the screen height

const SPEED = rx(.25) // 25% of the screen width per second

function evo(dt) {
    // move the circle horizontally
    // warp the coordinate, so it always stays on the screen
    x = warp(x + SPEED*dt, 0, rx(1))
}

function draw() {
    fill(.45, .5, .5) // color in HSL
    circle(x, y, r)
}
