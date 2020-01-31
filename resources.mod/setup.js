function setup() {

    lab.spawn(dna.hud.Hud, {
        name: 'hud',
    })

    lab.hud.spawn('hud/gadget/Button', {
        name: 'button1',
        x: 40,
        y: ry(1) - 80,
        h: 40,
        w: 200,
        scale: 4,
        text: 'Click Me',
    })

    after(lab.hud.button1, 'onMouseDown', function() {
        // play 'click.wav' from /res
        sfx(res.click)
    })
}
