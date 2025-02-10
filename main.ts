let maxLaustaerke = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.soundLevel() < 50) {
        basic.showIcon(IconNames.Happy)
    } else if (input.soundLevel() < 150) {
        basic.showIcon(IconNames.Asleep)
    } else if (input.soundLevel() > 180) {
        maxLaustaerke = input.soundLevel()
        radio.sendNumber(maxLaustaerke)
        basic.showIcon(IconNames.Angry)
    }
})
