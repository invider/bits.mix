
const circles = []

function setup() {
    // generate random circles
    for (let i = 0; i < 200; i++) {
        circles.push({
            x: RND(rx(1)),
            y: RND(ry(1)),
            r: RND(ry(.03), ry(.08)),
            color: hsl(rnd(), .5, .5),
        })
    }
}

function draw() {
    circles.forEach(c => {
        fill(c.color)
        circle(c.x, c.y, c.r)
    })
}
