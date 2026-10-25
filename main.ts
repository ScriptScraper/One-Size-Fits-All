namespace SpriteKind {
    export const Button = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    CurrentLevel = CurrentLevel + 1
    tiles.setCurrentTilemap(tileUtil.cloneMap(Levels[CurrentLevel]))
    LOadButtons()
    tiles.placeOnTile(sqaurePlayer, tiles.getTileLocation(tiles.getTilesByType(assets.tile`myTile4`)[1].column + 2, tiles.getTilesByType(assets.tile`myTile4`)[1].row))
    playerScale = 1
    changeScale()
    sqaurePlayer.setKind(SpriteKind.Enemy)
    timer.after(50, function () {
        sqaurePlayer.setKind(SpriteKind.Player)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`grow`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    playerScale += 1
    changeScale()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sqaurePlayer.isHittingTile(CollisionDirection.Bottom)) {
        sqaurePlayer.vy = -105 * (1 + playerScale / 2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    tiles.setCurrentTilemap(tileUtil.cloneMap(Levels[CurrentLevel]))
    for (let index = 0; index <= 4; index++) {
        for (let value of list[index]) {
            if (index == 0) {
                tiles.setTileAt(value, assets.tile`myTile3`)
            } else if (index == 1) {
                tiles.setTileAt(value, assets.tile`myTile2`)
            } else if (index == 2) {
                tiles.setTileAt(value, assets.tile`myTile5`)
            } else if (index == 3) {
                tiles.setTileAt(value, assets.tile`grow`)
            } else if (index == 4) {
                tiles.setTileAt(value, assets.tile`shrink`)
            }
        }
    }
    tileUtil.setWalls(assets.tile`myTile9`, true)
    tileUtil.setWalls(assets.tile`myTile10`, true)
    tileUtil.setWalls(assets.tile`myTile11`, true)
    tileUtil.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile6`)
    tileUtil.replaceAllTiles(assets.tile`myTile10`, assets.tile`myTile7`)
    tileUtil.replaceAllTiles(assets.tile`myTile11`, assets.tile`myTile11`)
    if (CurrentLevel == 0) {
        tiles.placeOnTile(sqaurePlayer, tiles.getTileLocation(10.5, 7))
    } else {
        tiles.placeOnTile(sqaurePlayer, tiles.getTileLocation(tiles.getTilesByType(assets.tile`myTile4`)[1].column + 2, tiles.getTilesByType(assets.tile`myTile4`)[1].row))
    }
    playerScale = 1
    changeScale()
    LOadButtons()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sqaurePlayer.isHittingTile(CollisionDirection.Bottom)) {
        sqaurePlayer.vy = -105 * (1 + playerScale / 2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`shrink`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    playerScale += -1
    changeScale()
})
browserEvents.R.onEvent(browserEvents.KeyEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    tiles.setCurrentTilemap(tileUtil.cloneMap(Levels[CurrentLevel]))
    for (let index = 0; index <= 4; index++) {
        for (let value of list[index]) {
            if (index == 0) {
                tiles.setTileAt(value, assets.tile`myTile3`)
            } else if (index == 1) {
                tiles.setTileAt(value, assets.tile`myTile2`)
            } else if (index == 2) {
                tiles.setTileAt(value, assets.tile`myTile5`)
            } else if (index == 3) {
                tiles.setTileAt(value, assets.tile`grow`)
            } else if (index == 4) {
                tiles.setTileAt(value, assets.tile`shrink`)
            }
        }
    }
    tileUtil.setWalls(assets.tile`myTile9`, true)
    tileUtil.setWalls(assets.tile`myTile10`, true)
    tileUtil.setWalls(assets.tile`myTile11`, true)
    tileUtil.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile6`)
    tileUtil.replaceAllTiles(assets.tile`myTile10`, assets.tile`myTile7`)
    tileUtil.replaceAllTiles(assets.tile`myTile11`, assets.tile`myTile11`)
    if (CurrentLevel == 0) {
        tiles.placeOnTile(sqaurePlayer, tiles.getTileLocation(10.5, 14.5))
    } else {
        tiles.placeOnTile(sqaurePlayer, tiles.getTileLocation(tiles.getTilesByType(assets.tile`myTile4`)[1].column + 2, tiles.getTilesByType(assets.tile`myTile4`)[1].row))
    }
    playerScale = 1
    changeScale()
    LOadButtons()
})
function changeScale () {
    if (playerScale == 0) {
        sqaurePlayer.setImage(img`
            f f f f f f 
            f a a a a f 
            f f a a f f 
            f a a a a f 
            f a a a a f 
            f f f f f f 
            `)
    } else if (playerScale == 1) {
        sqaurePlayer.setImage(assets.image`playerScale1`)
        sqaurePlayer.y += -3
    } else if (playerScale == 2) {
        sqaurePlayer.setImage(img`
            ffffffffffffffffff
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3111113333111113f
            f3111113333111113f
            f311ff133331ff113f
            f311ff133331ff113f
            f3111113333111113f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            f3333333333333333f
            ffffffffffffffffff
            `)
        sqaurePlayer.y += -6
    }
    extraEffects.createSpreadEffectOnAnchor(sqaurePlayer, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Twinkle), 100, 32)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (playerScale == 0 && otherSprite.image.equals(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . a a a a a a . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `)) {
        tileUtil.setWalls(assets.tile`myTile8`, false)
        tileUtil.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile11`)
        otherSprite.setImage(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 8 9 
            `)
    } else if (playerScale == 1 && otherSprite.image.equals(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . 7 7 7 7 7 7 . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `)) {
        tileUtil.setWalls(assets.tile`myTile7`, false)
        tileUtil.replaceAllTiles(assets.tile`myTile7`, assets.tile`myTile10`)
        otherSprite.setImage(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 8 9 
            `)
    } else if (playerScale == 2 && otherSprite.image.equals(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . 2 2 2 2 2 2 . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `)) {
        tileUtil.setWalls(assets.tile`myTile6`, false)
        tileUtil.replaceAllTiles(assets.tile`myTile6`, assets.tile`myTile9`)
        otherSprite.setImage(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            9 9 9 9 9 9 9 9 
            9 8 8 8 8 8 8 9 
            `)
    }
})
function LOadButtons () {
    list = [
    tiles.getTilesByType(assets.tile`myTile3`),
    tiles.getTilesByType(assets.tile`myTile2`),
    tiles.getTilesByType(assets.tile`myTile5`),
    tiles.getTilesByType(assets.tile`grow`),
    tiles.getTilesByType(assets.tile`shrink`)
    ]
    tileUtil.createSpritesOnTiles(assets.tile`myTile3`, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . a a a a a a . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `, SpriteKind.Button)
    tileUtil.createSpritesOnTiles(assets.tile`myTile5`, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . 7 7 7 7 7 7 . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `, SpriteKind.Button)
    tileUtil.createSpritesOnTiles(assets.tile`myTile2`, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . 2 2 2 2 2 2 . 
        9 9 9 9 9 9 9 9 
        9 8 8 8 8 8 8 9 
        `, SpriteKind.Button)
    tileUtil.replaceAllTiles(assets.tile`myTile3`, assets.tile`transparency8`)
    tileUtil.replaceAllTiles(assets.tile`myTile5`, assets.tile`transparency8`)
    tileUtil.replaceAllTiles(assets.tile`myTile2`, assets.tile`transparency8`)
}
spriteutils.createRenderable(100, function (screen2) {
    let Paused = 0
    if (Paused) {
        for (let x = 0; x <= 159; x++) {
            for (let y = 0; y <= 119; y++) {
                screen2.setPixel(x, y, Image2.getPixel(screen2.getPixel(x, y), 1))
            }
        }
    }
})
let list: tiles.Location[][] = []
let playerScale = 0
let sqaurePlayer: Sprite = null
let Image2: Image = null
let CurrentLevel = 0
let Levels: tiles.TileMapData[] = []
let LevelNames = ["01: Tutorial", "02: Shorty!"]
Levels = [
tileUtil.createSmallMap(tilemap`level12`),
tileUtil.createSmallMap(tilemap`level0`),
tileUtil.createSmallMap(tilemap`level5`),
tileUtil.createSmallMap(tilemap`level6`),
tileUtil.createSmallMap(tilemap`level7`),
tileUtil.createSmallMap(tilemap`level8`),
tileUtil.createSmallMap(tilemap`level9`),
tileUtil.createSmallMap(tilemap`level10`),
tileUtil.createSmallMap(tilemap`level11`)
]
CurrentLevel = 0
Image2 = img`
    . 1 2 3 4 5 6 7 8 9 a b c d e f 
    . d e 2 3 4 7 a 9 a f 9 2 e f f 
    `
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(Levels[CurrentLevel])
sqaurePlayer = sprites.create(assets.image`playerScale1`, SpriteKind.Player)
playerScale = 1
sqaurePlayer.setPosition(88, 115)
sqaurePlayer.ay = 500
controller.moveSprite(sqaurePlayer, 90, 0)
scene.centerCameraAt(88, 68)
LOadButtons()
