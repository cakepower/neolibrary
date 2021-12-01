radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
    serial.writeLine("")
    if (receivedNumber == 1) {
        for (let count = 0; count <= 254; count++) {
            serial.writeNumber(count)
            serial.writeLine("")
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            strip.setBrightness(count)
            strip.show()
            basic.pause(10)
        }
        strip.clear()
        strip.setBrightness(20)
        strip.show()
        basic.pause(10)
    } else if (receivedNumber == -1) {
        strip.showRainbow(1, 360)
        strip.show()
        doRatate(24, 12)
    } else if (receivedNumber == 3) {
    	
    } else {
    	
    }
})
function doTWO () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doFOUR () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
    doRatate(24, 12)
})
function doSomething (num: number) {
    if (num == 1) {
        doONE()
    } else if (num == 2) {
        doTWO()
    } else if (num == 3) {
        doTHREE()
    } else if (num == 4) {
        doFOUR()
    } else if (num == 5) {
        doFIVE()
    } else {
        strip.clear()
    }
}
function doTHREE () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
    strip.show()
    doRainbow(48)
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 360)
    strip.show()
    doRainbow(48)
})
function doRainbow (num: number) {
    for (let new_count = 0; new_count <= num; new_count++) {
        serial.writeNumber(new_count)
        serial.writeLine("")
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
}
function doRatate (num: number, num2: number) {
    for (let pushA = 0; pushA <= num2 - 1; pushA++) {
        for (let count = 0; count <= num - 1; count++) {
            serial.writeNumber(pushA)
            serial.writeLine("")
            if (pushA % 4 == 0) {
                strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Red))
                strip.show()
                basic.pause(50)
            } else if (pushA % 4 == 1) {
                strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Orange))
                strip.show()
                basic.pause(50)
            } else if (pushA % 4 == 2) {
                strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Violet))
                strip.show()
                basic.pause(50)
            } else if (pushA % 4 == 3) {
                strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Indigo))
                strip.show()
                basic.pause(50)
            } else {
            	
            }
        }
    }
}
function doFIVE () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doONE () {
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
}
let strip: neopixel.Strip = null
serial.setBaudRate(BaudRate.BaudRate115200)
strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showRainbow(1, 360)
strip.show()
radio.setGroup(33)
basic.forever(function () {
	
})
