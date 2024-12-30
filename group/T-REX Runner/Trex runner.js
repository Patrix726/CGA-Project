var trex = createSprite(50,350,20,30);

//Creating Ground
var ground = createSprite(200,375,400,30);
ground.setAnimation("Ground.png")
ground.depth = -1;

//Creating Invisible Ground
var invisible_ground = createSprite(200,400,400,40);
invisible_ground.visible=false;

var gameState = "start";

var cactusGrp = createGroup();
var cloudGrp = createGroup();

var gaov = createSprite(200,150);
gaov.setAnimation("GameOver");
gaov.scale = 4;
gaov.visible = false;

var resetBt = createSprite(200,250);
resetBt.setAnimation("resetBt");
resetBt.scale = 0.8;
resetBt.visible = false;

var score = 0;

function draw() {
  
  //Giving background color
  background("white");
  
  //Making trex collide with invisible ground
  trex.collide(invisible_ground);
  
  
  if(gameState=="start"){
    
    fill("grey");
    textSize(25);
    text("Press space to start the game",30,200);
    
    trex.setAnimation("Trex-rest.png");
    
    
    gaov.visible = false;
    resetBt.visible = false;
  }
  
  if(keyDown("space")&& gameState=="start"){
    
    gameState="play";
    
   playSound("sound://category_accent/puzzle_game_accent_small_b_01.mp3")
   
  }
  
  if(gameState=="play"){
    
    trex.setAnimation("Trex-run.png");
    trex.scale = 0.60;
    
    score = score+Math.round(World.frameRate/60);
    
    if(trex.collide(cactusGrp)&&gameState=="play"){
      
      gameState="over"
      
    }
   
    
   Gravity();
   Ground_Move();
   Jump();
   Clouds();
   Cactus();

  }
  
 Over();
  
  drawSprites();
  
  
  fill("gray");
  textSize(20);
  text("Score: "+score,290,25)
  
  
 console.log(gameState)
  
  
   
}

function Gravity(){
  
  var grav = 0.50;
  trex.velocityY=trex.velocityY+grav;
}


function Ground_Move(){
  
  ground.velocityX = -5;
  
  if(ground.x<0){
    
    ground.x = ground.width/2;
  }
}

function Jump(){
  
  if(keyDown("space")&&trex.isTouching(ground)&&gameState=="play"){
    
    trex.velocityY = -10
  }
}

function Clouds(){
  
  if(frameCount%40==0){
    
    var cloud = createSprite(410,random(100,200),10,10);
    cloud.setAnimation("Clouds.png");
    cloud.velocityX = -5;
    cloud.lifetime = 100;
    cloudGrp.add(cloud);
  }
}

function Cactus(){
  
  if(frameCount%80==0){
    
    var rand = randomNumber(1,6)
    
    var cactus = createSprite(410,370,10,50);
    cactus.setAnimation("Obs"+rand)
    cactus.scale=0.7;
    cactus.velocityX = -5;
    cactus.lifetime=100;
    cactusGrp.add(cactus)
    
  }
}

function Over(){
  
   if(gameState=="over"){
    
    trex.setAnimation("Trex-collide")
    trex.velocityX = 0;
    trex.scale = 0.95
    
    cactusGrp.setVelocityXEach(0);
    cloudGrp.setVelocityXEach(0);
    
    cloudGrp.setLifetimeEach(-1);
    cactusGrp.setLifetimeEach(-1);
  
    gaov.visible = true;
    resetBt.visible = true;
    
    ground.velocityX = 0;
    
    if(mousePressedOver(resetBt)&&gameState=="over"){
      
      gameState = "start";
      
      cactusGrp.destroyEach();
      cloudGrp.destroyEach();
      
      score = 0;
    }
   
  }
}
