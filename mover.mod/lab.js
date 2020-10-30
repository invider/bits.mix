// coordinates and radius
let   x = rx(.5)
const y = ry(.5)
const r = ry(.05)

const SPEED = rx(.33)

function evo(dt) {
    // move the circle horizontally
    x = warp(x + SPEED*dt, 0, rx(1))
}

function draw() {
    fill(.45, .5, .5) // color in HSL
    circle(x, y, r)
}
