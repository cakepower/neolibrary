let strip: neopixel.Strip = null
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
