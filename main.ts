let start = 0
for (let index = 0; index < 10; index++) {
    start = 0
    if (start == 0) {
        basic.showNumber(1)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("casual")
        }
        if (input.buttonIsPressed(Button.B)) {
            start += 1
        }
    }
    if (start == 1) {
        basic.showNumber(2)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("challenge")
        }
        if (input.buttonIsPressed(Button.B)) {
            start += 1
        }
    }
    if (start == 2) {
        basic.showNumber(3)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("3 insane")
        } else {
            if (input.buttonIsPressed(Button.B)) {
                start += 1
            }
        }
    }
    if (start == 3) {
        basic.showNumber(4)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("nightmare")
        } else {
            if (input.buttonIsPressed(Button.B)) {
                break;
            }
        }
    }
}
