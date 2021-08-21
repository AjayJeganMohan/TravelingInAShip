var ship, ship_images;
var sea, sea_image;

function preload(){
  sea_image = loadImage("sea.png");
  ship_images = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(600, 400);
 
  
 
    ship = createSprite(50,250,20,50);
    ship.addAnimation("image", ship_images);
    ship.scale = 0.1;

    //ship.velocityX = 2


    sea = createSprite(10,180,2084,20);
    sea.addImage("waves", sea_image)
    console.log(sea.width)  
    sea.scale = 0.5

    
    sea.velocityX = -2
    sea.x = sea.width / 4
    sea.depth = ship.depth-1
}

function draw() {
  //background("blue")

  if (sea.x < -sea.width / 5) {
    sea.x = sea.width / 4
  }
  
  console.log(sea.width + ' ' +sea.x)


  drawSprites();

}

