
var monkey , monkey_running
var bananaImage
var ground
var obstacle, obstacleImage
var bananaGroup
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
 
function setup() {
  
  createCanvas(600, 200);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(300,190,1000,10);
  ground.velocityX = -5
  console.log(ground.x)
  
  //ground.debug = true
  
}


function draw() {
  background("white");
  
  
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")&& monkey.y > 153) {
        monkey.velocityY = -12;
    }
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime,100,50)
    
  console.log(frameCount)
  
  spawnBanana();
  
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    monkey.depth = banana.depth;
    monkey.depth = banana.depth + 1;
  }
}

function spawnObstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,170,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    
    obstacle.lifetime = 200;
  }
}