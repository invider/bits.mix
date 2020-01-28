function draw() {
    background(.8, .07, .15)

    // calculate some initial dimentions
    // to use later
    const r = rx(.2)
    const s = rx(.1)
    const l = rx(.025)

    // stroke the rect
    lineWidth(3)
    stroke('#e08040')
    rect( rx(.15), ry(.25), r, r/3)

    // fill the rect
    fill(.95, .45, .4)
    rect( rx(.65), ry(.25), r, r/3)

    // fill cirle + stroke the circle border
    lineWidth(5)
    fill(.6, .4, .4,   .65, .4, .8)
    circle( rx(.5), ry(.5), 50 )

    // triangle
    let x = rx(.5)
    let y = ry(.7)
    fill(.76, .4, .4,   .65, .4, .8)
    triangle( x, y, x-s, y+s, x+s, y+s)

    // quad
    x = rx(.8)
    y = ry(.42)
    fill(.15, .4, .4,   .65, .4, .8)
    quad(x, y, x-l, y+l, x, y+2*l, x+l, y+l)

    // now set the colors in RGB
    lineWidth(10)
    stroke(200, 140, 80)
    line( rx(.6), ry(.2), rx(.8), ry(.08))
}
