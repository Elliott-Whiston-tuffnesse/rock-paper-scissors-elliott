let Tool = 0
input.onGesture(Gesture.Shake, function () {
    Tool = randint(0, 2)
    if (("Tool" as any) == ("0" as any)) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (("Tool" as any) == ("1" as any)) {
        basic.showIcon(IconNames.Square)
    } else if (false) {
        basic.showIcon(IconNames.Scissors)
    }
})
