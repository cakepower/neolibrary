strip: neopixel.Strip = None
def doTWO():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doFOUR():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doTHREE():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doFIVE():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doONE():
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))

def doSomething(num: number):
    if num == 1:
        doONE()
    elif num == 2:
        doTWO()
    elif num == 3:
        doTHREE()
    elif num == 4:
        doFOUR()
    elif num == 5:
        doFIVE()
    else:
        strip.clear()