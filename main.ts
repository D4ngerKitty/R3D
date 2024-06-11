namespace SpriteKind {
    export const background = SpriteKind.create()
    export const light = SpriteKind.create()
    export const eyes = SpriteKind.create()
}
function eyelook () {
    for (let value of sprites.allOfKind(SpriteKind.eyes)) {
        angelbetewn = Math.atan2(value.y - mySprite.y, value.x - mySprite.x)
        if (sprites.readDataNumber(value, "eye") == 1) {
            value.setImage(eyelist[(Math.floor(Math.map(angelbetewn, -3.14159, 3.14159, 0, 7)) + 7) % 8].clone())
        }
        if (sprites.readDataNumber(value, "eye") == 2) {
            value.setImage(eyelisttinny[(Math.floor(Math.map(angelbetewn, -3.14159, 3.14159, 0, 7)) + 7) % 8].clone())
        }
    }
}
function makearedline (myImage: Image) {
    for (let value of tiles.getTilesByType(myImage)) {
        image2 = myImage.clone()
        if (tiles.tileAtLocationIsWall(value.getNeighboringLocation(CollisionDirection.Bottom))) {
            image2.drawLine(0, 15, 15, 15, 0)
        }
        if (tiles.tileAtLocationIsWall(value.getNeighboringLocation(CollisionDirection.Left))) {
            image2.drawLine(0, 0, 0, 15, 0)
        }
        if (tiles.tileAtLocationIsWall(value.getNeighboringLocation(CollisionDirection.Right))) {
            image2.drawLine(15, 0, 15, 15, 0)
        }
        if (tiles.tileAtLocationIsWall(value.getNeighboringLocation(CollisionDirection.Top))) {
            image2.drawLine(0, 0, 15, 0, 0)
        }
        tiles.setTileAt(value, image2)
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lightonoff) {
        lightonoff = false
        multilights.toggleLighting(lightonoff)
    } else {
        lightonoff = true
        multilights.toggleLighting(lightonoff)
    }
})
function the_player () {
    mySprite = platformer.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 f f f f 2 . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f 2 f f 2 f . . . . . 
        . . . . . f 2 f f 2 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 f f f f 2 . . . . . 
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
    declutter.load("cam", sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.background))
    scene.cameraFollowSprite(declutter.get("cam"))
    multilights.toggleLighting(lightonoff)
    multilights.addLightSource(mySprite, 6)
}
function load_map () {
    tileUtil.createSpritesOnTiles(assets.tile`myTile8`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.light)
    tileUtil.createSpritesOnTiles(assets.tile`myTile12`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.light)
    tileUtil.createSpritesOnTiles(assets.tile`myTile13`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.light)
    tileUtil.createSpritesOnTiles(assets.tile`myTile17`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.light)
    makearedline(assets.tile`myTile3`)
    makearedline(assets.tile`myTile12`)
    makearedline(assets.tile`myTile6`)
    makearedline(assets.tile`myTile4`)
    makearedline(assets.tile`myTile7`)
    makearedline(assets.tile`myTile11`)
    makearedline(assets.tile`myTile10`)
    makearedline(assets.tile`myTile18`)
    makearedline(assets.tile`myTile14`)
    eyelist = [
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..........2222.......
        ......222..............222......
        ....222.......22222......222....
        ..2222.......2222222......2222..
        .222........222...222.......222.
        22..........22.....22.........22
        .222........22.....22.......222.
        ..2222......22.....22.....2222..
        ....222.....222...222....222....
        ......222....2222222...222......
        .......2222...22222..2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..........2222.......
        ......222..............222......
        ....222...22222..........222....
        ..2222...2222222..........2222..
        .222....222...222...........222.
        22......22.....22.............22
        .222....22.....22...........222.
        ..2222..22.....22.........2222..
        ....222.222...222........222....
        ......2222222222.......222......
        .......22222222......2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..........2222.......
        ......222.22222........222......
        ....222..2222222.........222....
        ..2222..222...222.........2222..
        .222....22.....22...........222.
        22......22.....22.............22
        .222....22.....22...........222.
        ..2222..222...222.........2222..
        ....222..2222222.........222....
        ......222.22222........222......
        .......2222..........2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......22222222......2222.......
        ......2222222222.......222......
        ....222.222...222........222....
        ..2222..22.....22.........2222..
        .222....22.....22...........222.
        22......22.....22.............22
        .222....222...222...........222.
        ..2222...2222222..........2222..
        ....222...22222..........222....
        ......222..............222......
        .......2222..........2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..22222...2222.......
        ......222...2222222....222......
        ....222....222...222.....222....
        ..2222.....22.....22......2222..
        .222.......22.....22........222.
        22.........22.....22..........22
        .222.......222...222........222.
        ..2222......2222222.......2222..
        ....222......22222.......222....
        ......222..............222......
        .......2222..........2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222......22222222.......
        ......222.......2222222222......
        ....222........222...222.222....
        ..2222.........22.....22..2222..
        .222...........22.....22....222.
        22.............22.....22......22
        .222...........222...222....222.
        ..2222..........2222222...2222..
        ....222..........22222...222....
        ......222..............222......
        .......2222..........2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..........2222.......
        ......222........22222.222......
        ....222.........2222222..222....
        ..2222.........222...222..2222..
        .222...........22.....22....222.
        22.............22.....22......22
        .222...........22.....22....222.
        ..2222.........222...222..2222..
        ....222.........2222222..222....
        ......222........22222.222......
        .......2222..........2222.......
        .........22222222222222.........
        ...........2222222222...........
        `,
    img`
        ...........2222222222...........
        .........22222222222222.........
        .......2222..........2222.......
        ......222..............222......
        ....222..........22222...222....
        ..2222..........2222222...2222..
        .222...........222...222....222.
        22.............22.....22......22
        .222...........22.....22....222.
        ..2222.........22.....22..2222..
        ....222........222...222.222....
        ......222.......2222222222......
        .......2222......22222222.......
        .........22222222222222.........
        ...........2222222222...........
        `
    ]
    eyelisttinny = [
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . 2 2 . . . . 2 2 2 . . . . 2 2 . 
        2 . . . . . 2 . . . 2 . . . . . 2 
        . 2 2 . . . 2 . . . 2 . . . 2 2 . 
        . . . 2 2 . 2 . . . 2 . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . 2 2 . . 2 2 2 . . . . . . 2 2 . 
        2 . . . 2 . . . 2 . . . . . . . 2 
        . 2 2 . 2 . . . 2 . . . . . 2 2 . 
        . . . 2 2 . . . 2 . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 . . . . 2 2 . . . 
        . 2 2 . 2 . . . 2 . . . . . 2 2 . 
        2 . . . 2 . . . 2 . . . . . . . 2 
        . 2 2 . 2 . . . 2 . . . . . 2 2 . 
        . . . 2 2 2 2 2 . . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . 2 . . . 2 2 . . . 
        . 2 2 . 2 . . . 2 . . . . . 2 2 . 
        2 . . . 2 . . . 2 . . . . . . . 2 
        . 2 2 . . 2 2 2 . . . . . . 2 2 . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . 2 . . . 2 . 2 2 . . . 
        . 2 2 . . . 2 . . . 2 . . . 2 2 . 
        2 . . . . . 2 . . . 2 . . . . . 2 
        . 2 2 . . . . 2 2 2 . . . . 2 2 . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . 2 . . . 2 2 . . . 
        . 2 2 . . . . . 2 . . . 2 . 2 2 . 
        2 . . . . . . . 2 . . . 2 . . . 2 
        . 2 2 . . . . . . 2 2 2 . . 2 2 . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . . 2 2 2 2 2 . . . 
        . 2 2 . . . . . 2 . . . 2 . 2 2 . 
        2 . . . . . . . 2 . . . 2 . . . 2 
        . 2 2 . . . . . 2 . . . 2 . 2 2 . 
        . . . 2 2 . . . . 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 . . . . . . . 2 2 . . . 
        . 2 2 . . . . . . 2 2 2 . . 2 2 . 
        2 . . . . . . . 2 . . . 2 . . . 2 
        . 2 2 . . . . . 2 . . . 2 . 2 2 . 
        . . . 2 2 . . . 2 . . . 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        `
    ]
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        eye = sprites.create(img`
            ...........2222222222...........
            .........22222222222222.........
            .......2222.2222222..2222.......
            ......222..222222222...222......
            ....222...222.....222....222....
            ..2222....22.......22.....2222..
            .222......22.......22.......222.
            22........22.......22.........22
            .222......22.......22.......222.
            ..2222....22.......22.....2222..
            ....222...222.....222....222....
            ......222..222222222...222......
            .......2222.2222222..2222.......
            .........22222222222222.........
            ...........2222222222...........
            `, SpriteKind.eyes)
        eye.z += 34000000
        sprites.setDataNumber(eye, "eye", 1)
        animation.runImageAnimation(
        eye,
        [img`
            ...........2222222222...........
            .........22222222222222.........
            .......2222..........2222.......
            ......222..............222......
            ....222..................222....
            ..2222....................2222..
            .222........................222.
            22............................22
            .222........................222.
            ..2222....................2222..
            ....222..................222....
            ......222..............222......
            .......2222..........2222.......
            .........22222222222222.........
            ...........2222222222...........
            `,img`
            ................................
            ................................
            .............222222.............
            ............22222222............
            ...........222....222...........
            ...........22......22...........
            ...........22......22...........
            ...........22......22...........
            ...........22......22...........
            ...........222....222...........
            ............22222222............
            .............222222.............
            ................................
            ................................
            ................................
            `],
        100,
        false
        )
        tiles.placeOnTile(eye, value)
        animation.runMovementAnimation(
        eye,
        animation.animationPresets(animation.bobbing),
        randint(2000, 3000),
        true
        )
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        eye = sprites.create(img`
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 . . . . . . . 2 2 . . . 
            . 2 2 . . . . 2 2 2 . . . . 2 2 . 
            2 . . . . . 2 . . . 2 . . . . . 2 
            . 2 2 . . . 2 . . . 2 . . . 2 2 . 
            . . . 2 2 . 2 . . . 2 . 2 2 . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            `, SpriteKind.eyes)
        eye.z += 34000000
        tiles.placeOnTile(eye, value)
        sprites.setDataNumber(eye, "eye", 2)
        animation.runMovementAnimation(
        eye,
        animation.animationPresets(animation.bobbing),
        randint(2000, 3000),
        true
        )
        tiles.setTileAt(value, assets.tile`myTile`)
    }
}
function loadmap (text2: string, num: number) {
    if (text2 == "test world") {
        tiles.setCurrentTilemap(tilemap`testmap`)
        scene.setBackgroundColor(2)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
        light_up = 12
    } else if (text2 == "test world 2") {
        tiles.setCurrentTilemap(tilemap`level6`)
        scene.setBackgroundColor(2)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    }
    load_map()
}
let lighton = false
let light_up = 0
let eye: Sprite = null
let image2: Image = null
let eyelisttinny: Image[] = []
let eyelist: Image[] = []
let mySprite: platformer.PlatformerSprite = null
let angelbetewn = 0
let lightonoff = false
lightonoff = true
let ui_1 = sprites.create(img`
    .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff
    f22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22f
    f2fff22f22ffff22f22ffff22f22ffffaafaaffffaafaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff2222222ff2222222ff2222222ffaaaaaaaffaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff2222222ff2222222ff2222222ffaaaaaaaffaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff2222222ff2222222ff2222222ffaaaaaaaffaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2fff22222ffff22222ffff22222ffffaaaaaffffaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ffff222ffffff222ffffff222ffffffaaaffffffaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2fffff2ffffffff2ffffffff2ffffffffaffffffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2fff222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff222222ffff222222f2222222222222f2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff22222ffffff22222f2222222222222f2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff222ffffffffff222f2222222222222f2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff22ffffffffffff222222222222222222222222222222ffff2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff22222ff2f2f22222f2222222222222f2222222222222fff222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff22222ff2f2f2222fff22222222222fff222222222222fff22fff2f2f2ff2222fff2f2f2fff2ff2ff22222f222f2f2f2ff222ff22ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff22222ffffff22222f2222222222222f2222222222222fff222f22f2f2f22222f2f2f2f22f22f22f2f2222f222f222f2f2f2f2222ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff2222fffff22222222222222222222222222222222222fff222f22fff2ff2ff2f2f2f2f22f22ff2ff22ff2f2f2f2f2f2f2f22f222ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff222fffffff222222f2222222222222f2222222222222fff222f22f2f2f22222f2f2f2f22f22f22f2f2222f2f2f2f2f2f2f222f22ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff222fffffff222222f2222222222222f2222222222222fff222f22f2f2ff2222fff2fff22f22ff2f2f22222f2f22f2f2ff22ff222ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ff222fffffff222222f2222222222222f2222222222222fff222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2fff22fffffff222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
    f22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22f
    ff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff
    .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Player)
ui_1.setFlag(SpriteFlag.Ghost, true)
ui_1.setFlag(SpriteFlag.RelativeToCamera, true)
ui_1.setFlag(SpriteFlag.Invisible, false)
ui_1.z += 34000000000
the_player()
loadmap("test world", 1)
game.onUpdate(function () {
    declutter.get("cam").x = mySprite.x
    declutter.get("cam").y = mySprite.y + -16
    eyelook()
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.light)) {
        lighton = false
        for (let lgithvule of spriteutils.getSpritesWithin(SpriteKind.Player, 160, value)) {
            multilights.addLightSource(value, 12)
            lighton = true
        }
        if (!(lighton)) {
            multilights.removeLightSource(value)
        }
    }
})
