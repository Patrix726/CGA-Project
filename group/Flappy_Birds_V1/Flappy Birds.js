var bird;
var pipes = [];
var score = 0;
var isGameOver = false;
var isPaused = false;
var isMainMenu = true;
var isCharacterSelect = false;
var isHowToPlay = false;
var isCredits = false;
var pipeGap = 150;
var pipeWidth = 40;
var pipeSpeed = 2;
var gravity = 0.6;
var birdFlap = -10;
var pipeSpacing = 150;
var pipeCounter = 0;
var bgMusicPlaying = false;

var birdColors = ["flappy", "new_f"];
var selectedBirdColor = birdColors[0];

var flapSoundUrl = "sound://default.mp3";
var collisionSoundUrl = "sound://default.mp3";
var bgMusicUrl = "sound://default_bg_music.mp3";

function setup() {
  createCanvas(400, 400);

  bird = createSprite(100, height / 2, 20, 20);
  bird.setAnimation(selectedBirdColor);
  bird.velocityY = 0;
  bird.rotation = 0;

  if (!bgMusicPlaying) {
    playSound(bgMusicUrl, true);
    bgMusicPlaying = true;
  }
}

function draw() {
  background("skyblue");

  if (isMainMenu) {
    showMainMenu();
  } else if (isCharacterSelect) {
    showCharacterSelection();
  } else if (isHowToPlay) {
    showHowToPlay();
  } else if (isCredits) {
    showCredits();
  } else if (isPaused) {
    showPauseMenu();
  } else if (isGameOver) {
    showGameOver();
  } else {
    playGame();
  }

  drawSprites();
}

// Show the Main Menu
function showMainMenu() {
  background("lightblue");
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("The Double Flappy Birds", width / 2, height / 4);

  textSize(20);
  text("Press SPACE to Start", width / 1.5, height / 2 - 30);
  text("Press '1' to Select Bird", width / 1.5, height / 2 + 10);
  text("Press '2' for How to Play", width / 1.5, height / 2 + 50);
  text("Press '3' for Credits", width / 1.5, height / 2 + 90);

  textSize(15);
  text("Press 0 to return here from any screen", width / 2, height - 50);
}

function keyPressed() {
  if (isMainMenu) {
    if (key === " ") {
      startGame();
    } else if (key === "1") {
      enterCharacterSelection();
    } else if (key === "2") {
      enterHowToPlay();
    } else if (key === "3") {
      enterCredits();
    }
  } else if (isCharacterSelect) {
    handleCharacterSelection(key);
  } else if (isHowToPlay || isCredits) {
    if (key === "0") {
      returnToMainMenu();
    }
  } else if (!isMainMenu && key === "P" && !isGameOver) {
    isPaused = !isPaused;
  } else if (isGameOver && key === "R") {
    restartGame();
  } else if (key === "0") {
    returnToMainMenu();
  }
}

function startGame() {
  isMainMenu = false;
  isGameOver = false;
  isPaused = false;
  isHowToPlay = false;
  isCredits = false;
}

function returnToMainMenu() {
  isMainMenu = true;
  isPaused = false;
  isGameOver = false;
  isHowToPlay = false;
  isCredits = false;
  bird.rotation = 0;
  pipes = [];
  bird.position.y = height / 2;
  bird.velocityY = 0;
  score = 0;
}

function enterCharacterSelection() {
  isMainMenu = false;
  isCharacterSelect = true;
}

function enterHowToPlay() {
  isMainMenu = false;
  isHowToPlay = true;
}

function enterCredits() {
  isMainMenu = false;
  isCredits = true;
}

function showHowToPlay() {
  background("white");
  fill("black");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("How to Play", width / 2, height / 4);
  textSize(15);
  text(
    "Press SPACE to make \nthe bird flap.Avoid the pipes\n and keep flying!Press 'R' to restart \nwhen game over.",
    width / 1.5,
    height / 2
  );
  text("Press '0' to return to Main Menu", width / 2, height - 50);
}

function showCredits() {
  background("skyblue");
  fill("black");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Credits", width / 2, height / 4);
  textSize(15);
  text("Game Design: Patrix Game Dev\nMusic: On update version\nThanks for Playing!", width / 1.75, height / 2);
  text("Press '0' to return to Main Menu", width / 2, height - 50);
}

function showCharacterSelection() {
  background("skyblue");
  fill("black");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Select Your Bird", width / 2, height / 4);

  textSize(15);
  text("Press 'A' for Flappy", width / 1.5, height / 2 - 30);
  text("Press 'B' for New Flappy Bird", width / 1.5, height / 2);
  text("Press 0 to return to Main Menu", width / 2, height - 50);
}

function handleCharacterSelection(key) {
  if (key === "A" || key === "a") {
    selectedBirdColor = birdColors[0];
  } else if (key === "B" || key === "b") {
    selectedBirdColor = birdColors[1];
  } 

  bird.setAnimation(selectedBirdColor);
  isCharacterSelect = false;
  returnToMainMenu();
}


function playGame() {
  if (keyWentDown("space") || mouseWentDown()) {
    bird.velocityY = birdFlap;
    playSound(flapSoundUrl, false);
  }

  bird.velocityY += gravity;

  if (bird.position.y > height - bird.height / 2) {
    bird.position.y = height - bird.height / 2;
    bird.velocityY = 0;
    gameOver();
  }

  if (bird.position.y < bird.height / 2) {
    bird.position.y = bird.height / 2;
    bird.velocityY = 0;
  }

  if (bird.velocityY > 0) {
    bird.rotation = constrain(bird.rotation + 5, 0, 35);
  } else if (bird.velocityY < 0) {
    bird.rotation = constrain(bird.rotation - 5, -35, 0);
  }

  pipeCounter++;
  if (pipeCounter >= pipeSpacing / pipeSpeed && !isGameOver) {
    pipes.push(createPipe());
    pipeCounter = 0;
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    var pipe = pipes[i];
    pipe.x -= pipeSpeed;

    if (pipe.x < -pipeWidth) {
      pipes.splice(i, 1);
      score++;
    }

    fill("green");
    rect(pipe.x, 0, pipeWidth, pipe.topHeight);
    rect(pipe.x, pipe.bottomY, pipeWidth, height - pipe.bottomY);

    if (isColliding(bird, pipe.x, 0, pipeWidth, pipe.topHeight)) {
      playSound(collisionSoundUrl, false);
      gameOver();
    }

    if (isColliding(bird, pipe.x, pipe.bottomY, pipeWidth, height - pipe.bottomY)) {
      playSound(collisionSoundUrl, false);
      gameOver();
    }
  }

  fill("black");
  textSize(20);
  text("Score: " + score, width / 2, 30);
}


function createPipe() {
  var topHeight = random(50, 200);
  var bottomY = topHeight + pipeGap;
  return { x: width, topHeight: topHeight, bottomY: bottomY };
}

function restartGame() {
  score = 0;
  bird.position.y = height / 2;
  bird.velocityY = 0;
  bird.rotation = 0;
  pipes = [];
  pipeCounter = 0;
  isGameOver = false;
  isPaused = false;
  playSound(bgMusicUrl, true);
}

function isColliding(sprite, x, y, w, h) {
  var birdLeft = bird.position.x - bird.width / 2;
  var birdRight = bird.position.x + bird.width / 2;
  var birdTop = bird.position.y - bird.height / 2;
  var birdBottom = bird.position.y + bird.height / 2;

  var pipeLeft = x;
  var pipeRight = x + w;
  var pipeTop = y;
  var pipeBottom = y + h;

  return !(birdRight < pipeLeft || birdLeft > pipeRight || birdBottom < pipeTop || birdTop > pipeBottom);
}

function gameOver() {
  isGameOver = true;
}

function showPauseMenu() {
  fill("black");
  bird.position.y = height / 2;
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Paused", width / 2, height / 3);
  textSize(15);
  text("Press 'P' to Resume", width / 2, height / 1.75);
  text("Press '0' to Main Menu", width / 2, height / 1.5);
}

function showGameOver() {
  fill("red");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 3);
  textSize(15);
  text("Score: " + score, width / 2, height / 2);
  text("Press 'R' to Restart", width / 2, height / 1.75);
  text("Press '0' to Main Menu", width / 2, height / 1.5);
}
