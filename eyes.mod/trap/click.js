const def = {
    dimentions: [
        [.01, .012],
        [.02, .03],
        [.03, .05],
        [.04, .06],
        [.05, .07],
    ]
}

function click(e) {
    const d = lib.math.rnde(def.dimentions)
    lab.spawn('eye', {
        x: mouse.x,
        y: mouse.y,
        hr: rx(d[0]),
        vr: rx(d[1]),
    })
}
