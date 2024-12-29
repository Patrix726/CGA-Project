

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8d7e44bb-4c87-41d2-a6d8-070a8f657950","c089be54-efbc-4c17-a590-925baaa53017","b39f9b31-ae76-4adf-ba43-87ba58d59d02"],"propsByKey":{"8d7e44bb-4c87-41d2-a6d8-070a8f657950":{"name":"spaceship","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 18:38:15 UTC","pngLastModified":"2021-01-07 19:29:50 UTC","version":"6Rzpwj0jbv0pr.VgwfbaYOQkl0UpZfPA","sourceUrl":null,"sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/8d7e44bb-4c87-41d2-a6d8-070a8f657950.png"},"c089be54-efbc-4c17-a590-925baaa53017":{"name":"star","categories":["icons"],"frameCount":1,"frameSize":{"x":396,"y":376},"looping":true,"frameDelay":60,"jsonLastModified":"2021-01-05 19:20:15 UTC","pngLastModified":"2021-01-05 19:20:37 UTC","version":"8f7cS5lKBH4zeYJdcqDCM8aBZlwu4lem","sourceUrl":null,"sourceSize":{"x":396,"y":376},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/c089be54-efbc-4c17-a590-925baaa53017.png"},"b39f9b31-ae76-4adf-ba43-87ba58d59d02":{"name":"asteroid","categories":["icons"],"frameCount":1,"frameSize":{"x":328,"y":394},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:20:43 UTC","pngLastModified":"2021-01-05 19:21:09 UTC","version":"xdQ0BtGZr7vpwfcmbQL4jrD.kK8biNw0","sourceUrl":null,"sourceSize":{"x":328,"y":394},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/b39f9b31-ae76-4adf-ba43-87ba58d59d02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var x;
var snake = [{x: 200, y: 200}];
var food = {x: randomNumber(0, 19) * 20, y: randomNumber(0, 19) * 20};
var direction = "RIGHT";
var score = 0;
var gameOver = false;
var gridSize = 20;

function draw() {
  if (gameOver) {
    endGame();
    return;
  }

  changeDirection();
  createGradientBackground("teal", "darkgreen");

  fill("red");
  rect(food.x, food.y, gridSize, gridSize);

  for (var i = 0; i < snake.length; i++) {
    fill(i % 2 === 0 ? "limegreen" : "yellowgreen");
    rect(snake[i].x, snake[i].y, gridSize, gridSize);
  }

  fill("white");
  textSize(20);
  text("Score: " + score, 10, 20);

  moveSnake();
  checkSelfCollision();
}

function moveSnake() {
  var head = snake[0];
  var newHead;

  if (direction === "RIGHT") {
    newHead = {x: head.x + gridSize, y: head.y};
  } else if (direction === "LEFT") {
    newHead = {x: head.x - gridSize, y: head.y};
  } else if (direction === "UP") {
    newHead = {x: head.x, y: head.y - gridSize};
  } else if (direction === "DOWN") {
    newHead = {x: head.x, y: head.y + gridSize};
  }

  newHead.x = (newHead.x + 400) % 400;
  newHead.y = (newHead.y + 400) % 400;

  snake.unshift(newHead);

  if (newHead.x === food.x && newHead.y === food.y) {
    score += 10;
    spawnFood();
  } else {
    snake.pop();
  }
}

function changeDirection() {
  if (keyDown("right") && direction !== "LEFT") {
    direction = "RIGHT";
  } else if (keyDown("left") && direction !== "RIGHT") {
    direction = "LEFT";
  } else if (keyDown("up") && direction !== "DOWN") {
    direction = "UP";
  } else if (keyDown("down") && direction !== "UP") {
    direction = "DOWN";
  }
}

function checkSelfCollision() {
  var head = snake[0];

  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver = true;
    }
  }
}

function spawnFood() {
  food.x = randomNumber(0, 19) * gridSize;
  food.y = randomNumber(0, 19) * gridSize;
}

function createGradientBackground(color1, color2) {
  noStroke();
  for (var i = 0; i < height; i++) {
    var inter = map(i, 0, height, 0, 1);
    var c = lerpColor(color(color1), color(color2), inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function endGame() {
  background("black");
  fill("red");
  textSize(30);
  textAlign("center");
  text("Game Over!", 200, 180);
  text("Final Score: " + score, 200, 220);
  noLoop();
}

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function drawGame() {
  draw();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
