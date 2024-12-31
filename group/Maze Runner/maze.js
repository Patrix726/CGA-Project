// using  GameLab
var player;
var goal;
var walls = [];
var level = 1;
var timer = 30; 
var lives = 3;
var gameWon = false;
var gameLost = false;


player = createSprite(50, 50, 20, 20);
player.scale=0.05;
player.setAnimation("robot_29_1");

player.shapeColor = "blue";


goal = createSprite(350, 350, 30, 30);
goal.shapeColor = "green";


setupLevel(level);


setInterval(function () {
  if (!gameWon && !gameLost && timer > 0) {
    timer--;
  }
  if (timer === 0 && !gameWon) {
    gameLost = true;
  }
}, 1000);

function draw() {
  background("black");

  if (!gameWon && !gameLost) {
    
    movePlayer();

    
    for (var i = 0; i < walls.length; i++) {
      if (player.overlap(walls[i])) {
        resetPlayer();
        loseLife();
        break;
      }
    }

    if (player.overlap(goal)) {
      if (level === 5) {
        gameWon = true;
      } else {
        level++;
        setupLevel(level);
      }
    }

       displayHUD();
  } else if (gameWon) {
 
  textSize(30);
  fill("yellow");
  text("You Win!", 150, 200);
  textSize(20);
  text("Press 'R' to Restart", 120, 240);

  for (var i = 0; i < walls.length; i++) {
    walls[i].remove();
  }

 
  if (gameWon) {
 
  textSize(30);
  fill("yellow");
  text("You Win!", 150, 200);
  textSize(20);
  text("Press 'R' to Restart", 120, 240);


  for (var i = 0; i < walls.length; i++) {
    walls[i].remove();
  }

  playSound("sound://category_achievements/lighthearted_bonus_objective_2.mp3", false);
  setTimeout(function() {
    stopSound("sound://category_achievements/lighthearted_bonus_objective_2.mp3");
  }, 1000); 
} else if (gameLost) {
 
  textSize(30);
  fill("red");
  text("Game Over", 140, 200);
  textSize(20);
  text("Press 'R' to Restart", 120, 240);

 
  for (var i = 0; i < walls.length; i++) {
    walls[i].remove();
  }


  playSound("sound://category_explosion/melodic_loss_1.mp3", false);
  setTimeout(function() {
    stopSound("sound://category_explosion/melodic_loss_1.mp3");
  }, 1000); 

}


if (keyDown("R")) {
  stopSound("sound://category_achievements/lighthearted_bonus_objective_2.mp3");
  stopSound("sound://category_explosion/melodic_loss_1.mp3");
  resetGame();
}
;
  setTimeout(function() {
    stopSound("sound://category_achievements/lighthearted_bonus_objective_2.mp3");
  }, 1000);

} else if (gameLost) {

  textSize(30);
  fill("red");
  text("Game Over", 140, 200);
  textSize(20);
  text("Press 'R' to Restart", 120, 240);

  
  for (var i = 0; i < walls.length; i++) {
    walls[i].remove();
  }

  
  playSound("sound://category_explosion/melodic_loss_1.mp3", false);
  setTimeout(function() {
    stopSound("sound://category_explosion/melodic_loss_1.mp3");
  }, 1000); 

}

if (keyDown("R")) {
  stopSound("sound://category_achievements/lighthearted_bonus_objective_2.mp3");
  stopSound("sound://category_explosion/melodic_loss_1.mp3");
  resetGame();
}



 
  if (keyDown("R")) {
    resetGame();
  }

  drawSprites();
}


function movePlayer() {
  if (keyDown("LEFT_ARROW")) player.x -= 5;
  if (keyDown("RIGHT_ARROW")) player.x += 5;
  if (keyDown("UP_ARROW")) player.y -= 5;
  if (keyDown("DOWN_ARROW")) player.y += 5;
}


function resetPlayer() {
  player.x = 50;
  player.y = 50;
}


function loseLife() {
  lives--;
  if (lives <= 0) {
    gameLost = true;
  }
}


function setupLevel(level) {
  resetPlayer();
  timer = 30;


  for (var i = 0; i < walls.length; i++) walls[i].remove();
  walls = [];

 
  if (level === 1) {
    goal.x = 350;
    goal.y = 50;

    walls.push(createSprite(100, 100, 20, 200));
    walls.push(createSprite(200, 200, 100, 20));
    walls.push(createSprite(300, 150, 20, 200));
    walls.push(createSprite(150, 50, 100, 20));
    walls.push(createSprite(250, 300, 200, 20));
    walls.push(createSprite(50, 250, 20, 100));
    walls.push(createSprite(200, 100, 100, 20));
    walls.push(createSprite(50, 300, 100, 20));
    walls.push(createSprite(200, 350, 20, 200));
  } else if (level === 2) {
    goal.x = 350;
    goal.y = 350;

    walls.push(createSprite(100, 100, 200, 20));
    walls.push(createSprite(200, 200, 20, 200));
    walls.push(createSprite(300, 150, 100, 20));
    walls.push(createSprite(300, 250, 100, 20));
    walls.push(createSprite(50, 300, 100, 20));
    walls.push(createSprite(150, 350, 200, 20));
    walls.push(createSprite(50, 150, 20, 100));
    walls.push(createSprite(350, 100, 20, 200));
    walls.push(createSprite(250, 250, 100, 20));
  } else if (level === 3) {
    goal.x = 350;
    goal.y = 350;

    walls.push(createSprite(100, 100, 20, 200));
    walls.push(createSprite(200, 100, 100, 20));
    walls.push(createSprite(350, 150, 20, 200));
    walls.push(createSprite(100, 300, 200, 20));
    walls.push(createSprite(50, 200, 20, 100));
    walls.push(createSprite(250, 250, 100, 20));
    walls.push(createSprite(150, 150, 100, 20));
    walls.push(createSprite(200, 250, 20, 100));
    walls.push(createSprite(200, 350, 200, 20));
    walls.push(createSprite(250, 165, 20, 150));
    walls.push(createSprite(250, 50, 300, 20));
  } else if (level === 4) {
    goal.x = 50;
    goal.y = 380;

    walls.push(createSprite(250, 100, 200, 20));
    walls.push(createSprite(250, 50, 200, 20));
    walls.push(createSprite(350, 150, 150, 20));
    walls.push(createSprite(350, 250, 150, 20));
    walls.push(createSprite(100, 150, 20, 300));
    walls.push(createSprite(200, 350, 350, 20));
    walls.push(createSprite(200, 225, 20, 250));
    walls.push(createSprite(25, 200, 50, 20));
    walls.push(createSprite(150, 350, 200, 20));
    walls.push(createSprite(250, 100, 100, 20));
    walls.push(createSprite(25, 280, 20, 150));
    walls.push(createSprite(200, 250, 100, 20));
    walls.push(createSprite(300, 25, 20, 50));
  } else if (level === 5) {
    goal.x = 50;
    goal.y = 375;

   
    walls.push(createSprite(150, 50, 100, 20));
    walls.push(createSprite(50, 100, 100, 20));
    walls.push(createSprite(250, 150, 20, 150));
    walls.push(createSprite(150, 300, 200, 20));
    walls.push(createSprite(300, 50, 100, 20));
    walls.push(createSprite(50, 300, 20, 100));
    walls.push(createSprite(100, 150, 100, 20));
    walls.push(createSprite(200, 100, 20, 200));
    walls.push(createSprite(350, 200, 20, 200));
    walls.push(createSprite(150, 200, 100, 20));
    walls.push(createSprite(250, 250, 20, 100));
    walls.push(createSprite(100, 350, 200, 20));
    walls.push(createSprite(200, 250, 100, 20));
    walls.push(createSprite(50, 200, 20, 150));
    walls.push(createSprite(400, 200, 200, 20));
    walls.push(createSprite(250, 300, 100, 20));
    walls.push(createSprite(350, 350, 250, 20));
  }



  
  for ( i = 0; i < walls.length; i++) walls[i].shapeColor = "gray";
}

function resetGame() {
  gameWon = false;
  gameLost = false;
  level = 1;
  lives = 3;
  setupLevel(level);
}


function displayHUD() {
  textSize(20);
  fill("white");
  text("Level: " + level, 10, 20);
  text("Timer: " + timer, 10, 40);
  text("Lives: " + lives, 10, 60);
  
}
