let ir_waarde = 0
IR.IR_init()
let vooruit = 5
let achteruit = 133
let links = 69
let rechts = 197
let stop = 6
basic.forever(function () {
    if (ir_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 60)
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    if (ir_waarde == links) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 33)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 33)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (ir_waarde == rechts) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 33)
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 33)
    }
})
basic.forever(function () {
    if (ir_waarde == stop) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
