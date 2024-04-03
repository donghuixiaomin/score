input.onButtonPressed(Button.A, function () {
	
})
let score = 0
Microbit.init()
basic.forever(function () {
    if (Microbit.buttonState(Write_pin.w0) == 0) {
        score += 1
        basic.pause(200)
    }
    if (Microbit.buttonState(Write_pin.w2) == 0) {
        score += -1
        basic.pause(200)
    }
    Microbit.showNumber(Oled.oled17, score)
})
