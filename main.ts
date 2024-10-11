let number = 0
input.onButtonPressed(Button.A, function () {
    number = 0
    while (number < 11) {
        basic.showNumber(number * 2)
        number += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    number = 0
    while (number < 11) {
        basic.showNumber(number * 10)
        number += 1
    }
})
input.onButtonPressed(Button.B, function () {
    number = 1
    while (number < 20) {
        basic.showNumber(number)
        number += 2
    }
})
