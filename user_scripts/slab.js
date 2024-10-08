const tool = new Tool("Slab")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}

tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,2),"#906847")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)))
    brick.clickable = true
}) 
