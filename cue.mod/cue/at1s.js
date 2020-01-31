//
// It could be convenient to export that function from module
// That way, if we'd have to change at1s on something else,
// we'd not have to change the function name as well.
//
module.exports = function() {
    // show status.mod to see Time and FPS
    mod.status.lab.status.hidden = false
}
