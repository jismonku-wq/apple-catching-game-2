input.onButtonPressed(Button.A, function () {
    basket.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    basket.change(LedSpriteProperty.X, 1)
})
let basket: game.LedSprite = null
basket = game.createSprite(0, 4)
let apple = game.createSprite(0, 0)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        apple.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    apple.set(LedSpriteProperty.Y, 0)
    apple.set(LedSpriteProperty.X, randint(0, 4))
})
basic.forever(function () {
    if (basket.isTouching(apple)) {
        music.playTone(880, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
})
