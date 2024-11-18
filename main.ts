for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 34)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 34)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 34)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
	
})
