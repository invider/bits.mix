const MAX_SPEED = 120
const MAX_TIME = 1

// dot coordinates and movement parameters
const st = {
    timer: 0,
    x: rx(.5),
    y: ry(.5),
    dir: 0,
    speed: 0,
}

function setup() {
    delete this.background
}

function evo(dt) {
    // move the dot
    st.x = st.x + cos(st.dir) * st.speed * dt
    st.y = st.y + sin(st.dir) * st.speed * dt

    // warp values to the screen size
    st.x = warp(st.x, 0, rx(1))
    st.y = warp(st.y, 0, ry(1))

    // update the timer and choose a new direction if needed
    st.timer -= dt
    if (st.timer < 0) {
        // set new time, speed and direction
        st.timer = rnd(MAX_TIME)
        st.speed = rnd(MAX_SPEED)
        st.dir = rnd(TAU) // select an angle between 0 and 2*PI
    }
}

function draw() {

    // draw a point
    // note, that we are not filling background here
    // so the previous draw results would stay on screen

    lineWidth(2)
    fill(.55, .7, .55)
    plot(st.x, st.y)
}
