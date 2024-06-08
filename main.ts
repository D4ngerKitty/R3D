tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(2)
let mySprite = platformer.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    `, SpriteKind.Player)
platformer.moveSprite(mySprite, true)
platformer.loopFrames(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . . . . . f 2 f 2 f f . . . . . 
    . . . . . f 2 f 2 f f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f . f f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f . . . . f . . . . 
    `],
500,
platformer.rule(platformer.PlatformerSpriteState.FacingLeft)
)
platformer.loopFrames(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . . . . . f f 2 f 2 f . . . . . 
    . . . . . f f 2 f 2 f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f . . . . f . . . . . . 
    `],
500,
platformer.rule(platformer.PlatformerSpriteState.FacingRight)
)
platformer.loopFrames(
mySprite,
[img`
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f . f f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f . . . . f . . . . 
    `,img`
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    `,img`
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . f . . f f . . . . . 
    . . . . . . . . . . f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . f f f f f f f f f f f f . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f . f f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f f . . f f . . . . 
    . . . . . . f . . . . f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    `,img`
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f 2 f 2 f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . f . . f f . . . . . 
    . . . . . . . . . . f . . . . . 
    `],
100,
platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving, platformer.PlatformerSpriteState.OnGround)
)
platformer.loopFrames(
mySprite,
[img`
    . . . . . . . f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f . . . . f . . . . . . 
    `,img`
    . . . . . . . f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    `,img`
    . . . . . . . f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . . f . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . f f f f f f f f f f f f . 
    . . . . . f f f f f f f f . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f . . . . f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    `,img`
    . . . . . . . f f f f . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f f f f f f f f f . . 
    . . . f f f f f f f f f f f f . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f 2 f 2 f . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . . f . . . . . . . . . . 
    `],
100,
platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving, platformer.PlatformerSpriteState.OnGround)
)
