input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . # . # .
            . # . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            . # . . #
            `)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    for (let y = 0; y <= 0; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
            basic.pause(500)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
let y = 0
let x = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.East)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.South)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.West)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
