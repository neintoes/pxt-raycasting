game.stats = true

let sprMiniMapCursor: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
sprMiniMapCursor = sprites.create(img`
    . . . . .
    . . 2 . .
    . 2 2 2 .
    . . 2 . .
    . . . . .
`, 0)
sprMiniMapCursor.z=999


//////////////////////// engine operations /////////////////////////
let map = img`
    66666666666665656663666366666366
    6.......6......................6
    6.......6......................6
    6...7...5......................6
    6...7...6..7777777777....6666666
    6...1...6..7777777777..........6
    6...2...6..66666.......7.......6
    6...7...6......6.......4.......6
    6...1...64664666.......7.......6
    6...7..................7.......6
    666666666665666566..665666656666
    6..............................6
    6..............................6
    6....7777777477777777774777....6
    6....6666666666666666666666....6
    6....6666266666266666266666....6
    6..............................6
    6..............................6
    677727777771777717772777.......6
    6..............................6
    6............77777777777.......6
    6..........777.........777777776
    6..6....7777...................6
    6..6....6.....77777....777.....6
    6..6....6.....7...77...7.77....6
    6..6....6.....77...7....7.77..76
    6..6....667....7...7...7...7..76
    6..6......777..7...77777...77776
    6..6........7777...............6
    6..............................6
    6..............................6
    66666666666666666666666666666666
`
let textures = [
    img`
        8888888888bbbbbb8888888888888888
        8888888bbb444444bb88888888888888
        888882244444ddd444b8888888888888
        8888244444444dddd44e888888888888
        888244444444444ddd4be88888888888
        88244444444444444d44be8888888888
        82b444444444444444d4be8888888888
        82b44444444444444444bbe888888888
        2bbb4444444444444444bbe888888888
        2bbb4444444444444444bbe888888888
        2bb4b4444444444444444bbe88888888
        2bb4444444444444444444be88888888
        2bb44444444444444444444e88888888
        2bbb444bbb4444444444444e88888888
        22bbb444bb4bb444444444be88888888
        82bbbbb44bbbb44444444bbe88888888
        822bbbbbbbb44bbb444444bbe8888888
        88eeebbbbbbb44bbb444444be8888888
        888eeeeebbbbbbbb44b4444be8888888
        88888eeeeee222bb44bbb4bbe8888888
        8888888eeeee222bb44bbbbee8888888
        888888888888e222bbbbbbbec8888888
        88888888888888ee2bbbbeebdb888888
        88888888888888888eeeeecdddb88888
        88888888888888888888888cd11bbbb8
        888888888888888888888888cd111dbb
        8888888888888888888888888b11111c
        8888888888888888888888888c11dd1c
        8888888888888888888888888cd1dbc8
        8888888888888888888888888cb11c88
        88888888888888888888888888ccc888
        88888888888888888888888888888888
    `,
    null,
    img`
        9999999999993333bb99bb3333399999
        999999993bb31111d3b311d111d33999
        99999993bdd11111dbd11d1111111399
        9999999bdddd1111bd11d111dd111139
        9999993d111dd111b11d111dd33d11d3
        9999993d11111dd1d11d111d11d33113
        9999bb3d111111dd13dd111d1dd3b31b
        999b3d3dd111111dd13dd11d1dddbbdb
        9993ddd31d111111dd133dddddddb9b9
        99311111d1ddd1111dd11dddddd33999
        993111111d111dd111dd1111dd331399
        99bddd1111ddd11dd111d11111111399
        99311ddd111dddd11dd11ddd1111ddb9
        9931111dd111dddd11dd111dddddddb9
        999bd1111d1113ddd11dd1111111d3b9
        9994dd1111d1113ddd11ddd111d333b9
        994dbdddd11d11133ddddddddddddb99
        94ddbddddd11d111d33ddddddddd3b99
        94dddb11ddd11dd111d333dddd3bb999
        94dd55b111d11dd11111d3333bbb9999
        9445555b111d11dddd111111ddb99999
        94455555bd1d311ddddddddddd399999
        945455555bb1d3111ddddddd11399999
        94554555555b333d1111111113999999
        455554555555bbb33d11111d33999999
        4d555545555555dbbb3d11d339999999
        4dd5555455555ddddd43333999999999
        45dd555544ddddddd499999999999999
        945dd5555d44dddd4999999999999999
        9945dd55dddd44449999999999999999
        99945dd5544499999999999999999999
        99994444499999999999999999999999
    `,
    null,
    img`
        6666666666666666666666bbb6666666
        66666666666666666666bb333b666666
        66666666666666666bbb333d33b66666
        6666666666666666bb333333d3a66666
        66666666666666bb33332eeeedba6666
        666666666666bbb333323eee2e3a6666
        6666666666bbd333333e22222ed3a666
        6666666bbbdd3333333e22222edda666
        666666bb3d333333333be222eb3d3a66
        666bbb3dd33333333333beeeb33d3a66
        66b3ddd33333333333333333333dda66
        bbddd3333333333333333333333dd3a6
        b33dddddd3333333333333333333d3a6
        bb3333333ddddd33333333333333dda6
        bbbbbbb333dd33dddddddddd3333ddba
        b55553bbbbbb3333dd33333ddd33dd3a
        b555555555553bbbbbbbb33333dddd3a
        bd555555555555555dddbaaaaab3d3ba
        bb55555555555555555dddddddbb33ba
        b3bb35555555555d5555d55dddddbbba
        b33333bbb355dd55555d555ddddddbba
        b5555d333333bbb35dddddd55ddddbba
        b5d555dd5553333bbbbb3ddddddddb3a
        b5d555555555555dd3333bbbbbb3db3a
        bd5d555555d55555dd555ddbbbbbbb3a
        bbb55dd555555555555555ddddddbb3a
        666bbbbdd555ddd5555ddddddddddb3a
        6666666bbbb555555d5ddd5ddddddb3a
        66666666666bbbb55555555555dd533a
        666666666666666bbbbddd5d55d5b3ba
        6666666666666666666bbbbddddb3ba6
        66666666666666666666666bbbaaaa66
    `,
    null,
    img`
        11111111111111bbbbbbb11111111111
        11111111111bb66663333baa11111111
        111111111bb3367776333663aa111111
        11111111b33333888333389633aa1111
        1111111b3333333333333389633aa111
        111111b34443333333333338633bae11
        11111b3455433333333334443333ae11
        1111b33322333dddd3333455233daee1
        111b3d333333dd3bbbb33322333dabe1
        11b3d333333d3bb33bb33333333da4e1
        11bd33333333b33aab3333333223a4ee
        1b3d3663333b33aab33366332442b4ee
        1bd3b983333a3aa3333387633ee3b4ee
        1bd6983333baaa333333387633bb4bee
        b3d6833333bba333333333863ba44ebe
        bdd3333333bb3333333333333a44bebe
        add666633333322333366333ba44bbbe
        ad67776333332442336983d3a444b4e1
        add888b333333ee3369833d3a44b44e1
        add333333333333336833d3a444b4e11
        a3dd3333344433333dddd3a444b44e11
        ab33ddd325543333dd33aa444b44e111
        1eabb3dd32233333baaa4444b44e1111
        1ebabb3d333d33baa444443b44e11111
        11ebaab3ddd3aaa4444433b44e111111
        11eebbaab33a44444333b444e1111111
        111eeebbaab444b333b4444e11111111
        1111ebeeebbbbbbbb4444ee111111111
        11111eebbbb44444444ee11111111111
        1111111eeebbb444eee1111111111111
        1111111111eeeeee1111111111111111
        11111111111111111111111111111111
    `,
    null,
    img`
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccb5bcccccccccccc
        ccccccccccccccccb5bccccccccccccc
        cccccccccccccbbbbbbccccccccccccc
        ccccccccccccbb55555bcccccccccccc
        cccccccccccbb5d1f55dfccccccccccc
        cccccccccccb551ff5d4cccccccccccc
        cccccccccccb55dfbdd44ccccccccccc
        ccccccccbbbd5555544444bccccccccc
        cccccccbdddbbd5544444bcccccccccc
        cccccccbbd555b555555bccccccccccc
        ccccccccdc5555d555555bcccccccccc
        ccccccccbdcd55b555555bcccccccccc
        cccccccccddccbd55555dbcccccccccc
        ccccccccccbddddd555bbccccccccccc
        ccccccccccccccccccbbcccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc
    `,
    null,
    img`
        66666666666666666666888888888888
        66666666666666666666866666666668
        66666666666666666666866666666668
        88888888888886666666866666666668
        87777777777786666666866666666668
        87777777777786666666866666666668
        87777777777786666666866666666668
        87777777777788888888888886666668
        87777777777788666666866686666668
        87777777777788666666866686666668
        87777777777788666666866686666668
        88888888888888666666866686666668
        66666666666668666666888888888888
        66666666666668666666666686666666
        66666666666668666666666686666666
        66666666666668666666666686666666
        66666666666668888888888886666666
        66666666666666666666666666666666
        66666666666666666688888888888888
        88888888888666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        87777777778666666686666666666668
        88888888888666666688888888888888
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
    `,
    img`
        dddddddddddddddddddd888888888888
        dddddddddddddddddddd8dddddddddd8
        dddddddddddddddddddd8dddddddddd8
        8888888888888ddddddd8dddddddddd8
        8777777777778ddddddd8dddddddddd8
        8777777777778ddddddd8dddddddddd8
        8777777777778ddddddd8dddddddddd8
        8777777777778888888888888dddddd8
        87777777777788dddddd8ddd8dddddd8
        87777777777788dddddd8ddd8dddddd8
        87777777777788dddddd8ddd8dddddd8
        88888888888888dddddd8ddd8dddddd8
        ddddddddddddd8dddddd888888888888
        ddddddddddddd8dddddddddd8ddddddd
        ddddddddddddd8dddddddddd8ddddddd
        ddddddddddddd8dddddddddd8ddddddd
        ddddddddddddd888888888888ddddddd
        dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88888888888888
        88888888888ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        87777777778ddddddd8dddddddddddd8
        88888888888ddddddd88888888888888
        dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddd
    `,
    img`
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
        eebcccccccccccccccccccccccccccee
        eebbbbbbbbbbbbbbbbbbbbbbbbbbbcee
        eebeeeeeeeeeeeeeeeeeeeeeeeeeecee
    `,
    img`
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbdddddddddddddddddddddddddd1dd
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd
        ddb111111111111111111111111111dd
        ddbdddddddddddddddddddddddddd1dd
    `
    ]
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
img`
    . . . b b b . .
    . . b 5 5 5 b .
    . b 5 d 3 d 5 b
    . b 5 1 5 3 5 b
    . c d 1 5 3 5 c
    . c d d 1 d 5 c
    . . f d d d f .
    . . . f f f . .
`
let sprs:CompactSprite[]=[]
sprs.push(new CompactSprite(20.3, 9, 0, -0.8, texturesDog))
sprs.push(new CompactSprite(17.3, 9, 0, -0.7, texturesSkelly))
sprs.push(new CompactSprite(18.3, 9, 0, -0.6, texturesPrincess2))
sprs.push(new CompactSprite(19, 9, 0, -.1, texturesPlane))
sprs.push(new CompactSprite(22, 8.5, 0.4, 0, texturesPrincess))
sprs.push(new CompactSprite(22, 7, 0.5, 0, texturesHero))
// sprs.push(new CompactSprite(22, 8, 0, 0, texturesBigCake))
let testSprite = new CompactSprite(22, 8, 0.5, 0, texturesBigCake)
sprs.push(testSprite)
testSprite.radiusRate/=4
testSprite.heightRate/=4
sprs.push(new CompactSprite(22, 6.5, 0.2, 0, texturesCoin,100))

const st = new State(map, textures, 18.5, 7.5, defaultFov, sprs)

game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    st.updateControls()
    paintCursorOnMiniMap()
})
game.onUpdateInterval(33, ()=>{
    sprs.forEach((v,i)=>{
        v.x+=v.vx/33
        v.y+=v.vy/33
        //bounce
        if (!st.canGoSpriteX(v))
            v.vx *= -1
        if (!st.canGoSpriteY(v))
            v.vy *= -1
    })
})


//////////////////////// end engine operations /////////////////////////


let sprMiniMap = sprites.create(map.clone(), 0)
for(let i=1;i<16;i++){
    sprMiniMap.image.replace(i,6)
}
sprMiniMap.left = 0
sprMiniMap.top = 0

let sprMiniMapMapXY = sprites.create(img`
    . 5 .
    5 5 5
    . 5 .
`, 0)
function paintCursorOnMiniMap() {
    sprMiniMapCursor.setPosition((st.x >> 10)+1, (st.y >> 10)+1)
    sprMiniMapCursor.image.fill(0)
    // map.width-
    sprMiniMapCursor.image.drawLine(2, 2, 2+(st.dirX * 3 >> fpx), 2+(st.dirY * 3>>fpx), 5)
    sprMiniMapCursor.image.setPixel(2, 2, 2)
}
