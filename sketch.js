var path, pathImage
var jaxxon, jaxxonRuns
var invisibleWall
var invisibleWallR
function preload(){
  //pre-load images
    jaxxonRuns = loadAnimation("Runner-1.png", "Runner-2.png")
    pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here
  jaxxon = createSprite(200,500,10,30)
  jaxxon.addAnimation("running", jaxxonRuns)
  jaxxon.scale = 0.04

  path = createSprite(200,200)
  path.addImage("track", pathImage)
  path.velocityY = 4
  path.scale = 1.2
  path.height = 1007
  //path.y = 200
  jaxxon.depth = path.depth + 1 
  console.log(path.height + ' ' + path.y)
 
  invisibleWall = createSprite(0,300,50,600)
  invisibleWall.visible = false
  
  invisibleWallR = createSprite(400,300,50,600)
  invisibleWallR.visible = false
 
}

function draw() {
background(0)
 console.log(path.height + ' ' + path.y)
if(path.y > path.height / 2) {
  path.y = 200
}

if(keyDown(RIGHT_ARROW)){
  jaxxon.x = jaxxon.x+2
}

if(keyDown(LEFT_ARROW)){
  jaxxon.x = jaxxon.x-2
}
jaxxon.collide(invisibleWallR)
jaxxon.collide(invisibleWall)
  drawSprites();

}
