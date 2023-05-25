function mova_patinha () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 140)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 60)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
}
hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
basic.forever(function () {
    if (input.lightLevel() > 10) {
        mova_patinha()
    }
})
