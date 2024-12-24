#### Name: Milki Alemu

#### ID: UGR/25517/14

# Lessons Summary

## Lesson 1: Programming for a Purpose

Question of the day: How can we design animations and games based on the needs of a user? Refer to your activity guide to recommend templates to clients.
        Answer
        - Target Audience: Identify the age group, interests, and preferences.
                        Example: Educational games for children vs. immersive animations for gamers.
        Purpose: Is it for entertainment, education, marketing, or training?
                        Example: A business might need a branded game or explainer animation.
        Platform: Determine where the game/animation will be used (e.g., mobile, web, VR).


## Lesson 2: Plotting Shapes

Question of the Day: How can we clearly communicate how to draw something on a screen?
-    Use grids, axes, or dotted lines to help users place elements accurately.
-   Drew shapes on the Game Lab's grid per the instructions.

## Lesson 3: Drawing in Game Lab

Question of the Day: How can we communicate to a computer how to draw shapes on the screen?

-   Predicted the output of a shape coded in the game lab.
            My Prediction is that the rectancle is starts from top 100 and left 100
-   Explore Game Lab
        -Do This.
           Change the numbers inside the block, then try running the program again.
        Try to place the rectangle near the bottom right of the screen.  
 # Answer
    `rect(350,350);`

- Place two rectangles exactly in the corners of the screen, just like the picture.
    You will need to drag out a second rect() block!.
# Answer
    `rect(350,350);`
-Place two rectangles exactly in the corners of the screen, just like the picture.
        You will need to drag out a second rect() block!
   # Answer
    `rect(0,0);`
    `rect(350,350);`
 1) Change the color from blue to yellow.
    `fill("yellow");`
   ` rect(100,100);`
    `rect(250, 100);`
 2) Add a new square to the image
    `rect(200, 200);`
    `rect(300, 400);`
    `rect(100, 350);`

- Order Matters
In Game Lab, it matters what order your code is in. New shapes are drawn on top of the ones that came before, covering up the shapes that are drawn first. You can see the difference when you use more than one color in your code.

Do This
1) Look at the code that draws the two rectangles.
  The first is drawn red, and the second is drawn blue.
2) Change the red rectangle's color to green.
3) the order of the code so the green rectangle appears on top.
Remember you can always turn on the grid (Show Me Where) or hover with the mouse to help find the x and y position you want.
# Answer 

 `fill("blue");`
 `rect(175,175);`
 `fill("green");`
 `rect(200, 200);`

 ellipse
You can use ellipse() to make a circle.

Do This
1) Look at the code that makes the ellipse.
2) Add a new ellipse of a different color.
        Remember you can always turn on the grid (Show Me Where) or hover with the mouse to help find the x and y position you want.
# Answer
`fill(rgb(23,45,122));`
`ellipse(200, 300);`
![screenshot](https://github.com/user-attachments/assets/36c87a0f-e342-44e7-b2e5-bcae2ab92df9)

- Drawing a car
`fill("blue");`
`rect(150, 200);`
`fill("blue");`
`rect(200, 200);`
`fill("green");`
`rect(100, 250);`
`fill("green");`
`rect(150, 250);`
`fill("green");`
`rect(200, 250);`
`fill("green");`
`rect(250, 250);`
`fill("red");`
`ellipse(150, 300);`
`fill("red");`
`ellipse(250, 300);`
# note
   - i understand that the order of the object object decides which object should be in front

# Debugging 
`// 2) Change the code so it makes the picture in the instructions`

`fill("orange");`
`ellipse(150,150);`
`ellipse(200,150);`
`ellipse(150,200);`
`ellipse(200,200);`
`fill("purple");`
`rect(150, 150);`
# Drawing A Christmas Tree
   `noStroke();`  
  `fill("green");` 
  `triangle(200, 100, 150, 200, 250, 200);` 
  `triangle(200, 150, 125, 275, 275, 275);` 
  `triangle(200, 225, 100, 350, 300, 350);` 


  `fill("brown");` 
  `rect(180, 350, 40, 50);`
 
  `fill("red");` 
  `noStroke();`
  `ellipse(170, 190, 10, 10);` 
  `ellipse(230, 190, 10, 10);` 
  `ellipse(140, 260, 10, 10);` 
  `ellipse(260, 260, 10, 10);` 
  `ellipse(200, 320, 10, 10);` 
  `fill("yellow");` 
  `stroke("orange");` 
  `strokeWeight(5);`
  `ellipse(200, 85, 20, 20); `

# Lesson 4
- New Parameters!
The code below has familiar rect() blocks, but with additional values as part of the block. These additional values are called parameters - they let you customize and control the behavior of blocks.
the parameters below describe the starting point and the size of the object:
      `fill("blue");`
      `rect(100,100,100,200);`
      `fill("red");`
      `rect(250,100,100,150);`
- Rectangel parameters 
Change the numbers in the second rect() to make red rectangle longer than the blue one.
    `fill("blue");`
    `rect(100,100,100,200);`
   `fill("red");`
   `rect(250,100,100,250);`

- Ellipse Parameters
   `//1) Add an orange ellipse to the screen that is taller than the green one`
   `//2) Rearrange the blocks so the orange ellipse is behind the green one`
   `fill("orange");`
   `ellipse(200, 200, 200, 400);`
   `fill("green");`
   `ellipse(200,200,150,100);`
- Background
Challenge: There is a purple square that is covered up by the background. Can you change the order of the code so you can see both the purple and blue squares?
   `background("yellow");`
   `fill("purple");`
   `rect(50,50, 100,100);`
   `fill("blue");`
   `rect(250,250, 100, 100);`
- Make a black background behind the green circle.
   Drag out the background() block to add a background to your code 
   Make sure to order your code correctly!
`background("black");`
`fill("green");`
`ellipse(200,200,200,200);`
- Debug: Hidden Shapes
`fill("red");`
`ellipse(200, 200, 400, 400);`
`fill("orange");`
`ellipse(200, 200, 340, 340);`
`fill("yellow");`
`ellipse(200, 200, 280, 280);`
`fill("green");`
`ellipse(200, 200, 220, 220)`;
`fill("blue");`
`ellipse(200, 200, 160, 160);`
`fill("indigo");`
`ellipse(200, 200, 100, 100);`
`fill("violet");`
`ellipse(200, 200, 40, 40);`
`fill("red");`
`ellipse(200, 200, 400, 400);`
`fill("orange");`
`ellipse(200, 200, 340, 340);`
`fill("yellow");`
`ellipse(200, 200, 280, 280);`
`fill("green");`
`ellipse(200, 200, 220, 220);`
`fill("blue");`
`ellipse(200, 200, 160, 160);`
`fill("indigo");`
`ellipse(200, 200, 100, 100);`
`fill("violet");`
`ellipse(200, 200, 40, 40);`

- Debug this program to make the cloud wider than it is tall, like in the image
`//1) Debug this program to make the cloud wider than it is tall, like in the image.`
`// Draw sky`
`background("skyblue");`
`// Draw sun`
`fill("yellow");`
`ellipse(300,50,50,50);`
`// Draw grass`
`fill("green");`
`rect(0,300,400,100);`
`// Draw cloud`
`fill("white");`
`ellipse(150,100,200,100);`


- Regular Polygons`
`regularPolygon(50, 75, 3, 50);`
`regularPolygon(150, 75, 4, 50);`
`regularPolygon(250, 75, 5, 50);`
`regularPolygon(350, 75, 6, 50);`
`regularPolygon(50, 175, 7, 50);`
`regularPolygon(150, 175, 8, 50);`
`regularPolygon(250, 175, 9, 50);`
`regularPolygon(350, 175, 10, 50);`
`regularPolygon(50, 275, 11, 50);`
`regularPolygon(150, 275, 12, 50);`
`regularPolygon(250, 275, 13, 50);`
`regularPolygon(350, 275, 14, 50);`

![Uploading Screenshot-2.jpeg…]()

## Lesson 5
 - Debug: Naming Variables`
`var sizeofcircle = 150;`
`var dimension = 100;`
`var YLocation = 200;`

`fill("OrangeRed");`
`ellipse(dimension, YLocation, sizeofcircle, sizeofcircle);`

- Debug: Variable Names
`//1) Update the code to match the image`
`var x = 50;`
`var y = 200;`

`fill("deeppink");`
`ellipse(x, 100);`
`ellipse(350, y);`
`rect(x, y);`

- Change the program to use the eyeSize variable.
`var eyeSize = 27;`

`noStroke();`
`background("green"); `

`// Face`
`fill("yellow");`
`ellipse(200,200,200,200);`

`// Eyes`
`fill("black");`
`ellipse(160,170,eyeSize,eyeSize);`
`ellipse(240,170,eyeSize,eyeSize);`

`// Mouth`
`fill("white");`
`rect(160,240,80,20);`

## Lesson 6
- Random numbers

`background("tomato");`
`//1) Change the code so the ellipse can appear anywhere horizontally on the screen`
`fill("orange");`
`ellipse(randomNumber(50,400), 200, 50, 50);`

1) Make the eyes appear at random sizes
`var eyeSize = randomNumber(1, 40);`
`noStroke();`
`background("green");`
`// Face`
`fill("yellow");`
`ellipse(200,200,200,200);`
`// Eyes`
`fill("black");`
`ellipse(160,170,eyeSize,eyeSize);`
`ellipse(240,170,eyeSize,eyeSize);`
`// Mouth`
`fill("white");`
`rect(160,240,80,20);`

- Rainbow Snake
`background("skyBlue");`

`fill("red");`
`ellipse(100, randomNumber(190,210), 50, 50);`

`fill("orange");`
`ellipse(140, randomNumber(190,210), 50, 50);`

`fill("yellow");`
`ellipse(180, randomNumber(190,210), 50, 50);`
`
`fill("green");`
`ellipse(220, randomNumber(190,210), 50, 50);`

`fill("blue");`
`ellipse(260, randomNumber(190,210), 50, 50);`

`fill("violet");`
`ellipse(300, randomNumber(190,210), 50, 50);`

- Random Rainbow Challenge
`//1) Update the background to be a random color`
`background(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`

`//2) Update each arc of the rainbow to a random color`
`fill((rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255))));`
`ellipse(200, 200, 400, 400);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 340, 340);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 280, 280);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 220, 220);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 160, 160);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 100, 100);`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`ellipse(200, 200, 40, 40);`

`//3) Update the ground to a random color`
`fill(rgb(randomNumber(0,255), randomNumber(0,255),randomNumber(0,255)));`
`rect(0, 200, 400, 200);`

# Lesson 7
- Mini Project Robot Face
`background("yellow");`
`var eyeSize = 40 ;`
`var irisSize = 5;`
`var earWidth = 20;`
`var earHeight = 120;`
`fill("grey");`
`rect(100, 100, 200, 230);`
`ellipse(160, 170, eyeSize, eyeSize);`
`ellipse(250, 170, eyeSize, eyeSize);`
`shape(200, 200, 180, 250, 220, 250);`
`stroke("black");`
`strokeWeight(irisSize);`
`point(160, 170);`
`stroke("black");`
`strokeWeight(irisSize);`
`point(250, 170);`
`rect(150, 280, 100, 20);`
`rect(80, 150, earWidth, earHeight);`
`rect(300, 150, earWidth, earHeight);`


# Lesson 8 
- Sprite
Sprites are like containers - they can hold several properties that make it easier to manage our animations and make more complex drawings. 
Right now, our sprites are just gray rectangular containers.

createSprite() - this block creates a new sprite variable.
setAnimation() - this block tells the sprite which image to use.
drawSprites() - this block tells the animation to draw the sprites on the screen. If you forget it, nothing will appear!

- Debug Missing Sprite
`var sprite1 = createSprite(50, 50);`
`sprite1.setAnimation("planeRed");`
`var sprite2 = createSprite(50, 150);`
`sprite2.setAnimation("planeBlue");`
`var sprite3 = createSprite(50, 250);`
`sprite3.setAnimation("planeGreen");`
`var sprite4 = createSprite(50, 350);`
`sprite4.setAnimation("planeYellow");`
`var sprite5 = createSprite(300, 200);`
`sprite5.setAnimation("bunny");`
`drawSprites();`

![Uploading Screenshot_14-12-2024_124254_studio.code.org.jpeg…]()

# Lesson 9
### Sprite Properties
  - Sprite properties keep track of all the information your program needs to know about a sprite, such as its size and location. You can change the values of these         properties just like you do variables, and see the results when your sprite is drawn to the screen.
```
 1. Add blocks to the code to make the alien, astronaut, and comet look like they are floating in space similar to the image

var space = createSprite(200, 200);
space.setAnimation("space");
var comet = createSprite(200, 180);
comet.setAnimation("comet");
comet.scale = 0.5;
var alien = createSprite(250, 300);
alien.setAnimation("alien");
alien.scale = 1;
alien.rotation = randomNumber(1, 360);
var astronaut = createSprite(100, 120);
astronaut.setAnimation("astronaut");
astronaut.scale = 0.5;
astronaut.rotation = randomNumber(1, 360);

drawSprites();
```
### Alpha
  - alpha is a property that can control the transparency of a sprite. It uses decimal values to represent transparency:

      * sprite.alpha = 1; would be not transparent at all - it will look like a normal sprite.

      * sprite.alpha = 0; would be completely transparent - it will look invisible!

      * sprite.alpha = 0.5; would be 50% transparent (partially transparent, like it's see-through) 

```
// 1) Using either the sprite already created for you or with any other sprites of your choosing, 
//play around with the transparency and 
//see how it works and how it changes on different sprites!
var house = createSprite(200, 200);
house.setAnimation("front_of_house_1");
var ghost = createSprite(200, 200);
ghost.setAnimation("ghost_1");
ghost.scale = 2;
ghost.alpha = 0.5;
drawSprites();
```

# Lesson 10 
   ### Text
You can put text anywhere you'd like on the screen using the text block. Read the documentation by clicking on the block in the toolbox to see how to change the size and color of your text.
 ### Text Size
 Text Size
You can change the size of the text using the  `textSize` block.
```
//1) Run the code to see how it works.
background("lightblue");
textSize(20);
text("small", 170, 100);
textSize(40);
text("medium", 130, 200);
//2) Add code to make the word "large" the biggest.
`textSize(60)
text("large", 120, 300);
```

# Lesson 12 
  ### The Draw Loop
```
 //1) Run the program to see how it works.
var pencil = createSprite(100,200);
pencil.setAnimation("pencil");

var brush = createSprite(300,200);
brush.setAnimation("brush");

function draw(){
  background("white");
  pencil.x = randomNumber(100,110);
  //2) Edit the code in this program to make the second sprite shake like the first one.
  brush.x = randomNumber(200, 320);
  drawSprites();
}
```

```
// Creating Alien Sprites
var greenAlien = createSprite(100, 200);
greenAlien.setAnimation("greenAlien");

var pinkAlien = createSprite(300, 200);
pinkAlien.setAnimation("pinkAlien");

// Setting Up Drawing
noStroke();
fill("green");

function draw() {
  background("black");
  ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
  
  greenAlien.rotation = randomNumber(-5,5);
  
  pinkAlien.rotation = randomNumber(-5, 10);

  drawSprites():
}
```
```
//1) Add the draw loop block to the bottom of this program.
//2) Move any blocks that need to be inside the draw loop.
World.frameRate = 10;

var salt = createSprite(200,200);
salt.setAnimation("salt");
function draw() {
  background("skyblue");
  salt.y = randomNumber(200, 250);
  drawSprites();
}
```
### Create An Animated Scene
```
// Setting Frame Rate
World.frameRate = 5;

//1) Create your sprite for the background
var couch = createSprite(200, 200);
couch.setAnimation("background");

//2) Create your sprites for the cow, elephant, and pig and set the x and y location for each.
var elephant = createSprite(100, 200);
elephant.setAnimation("elephant");
var pig = createSprite(210, 220);
pig.setAnimation("pig");
var cow = createSprite(310, 200);
cow.setAnimation("cow");
//3) Set the animation for each sprite.


//4) Resize your animals.
elephant.scale = 0.5;
pig.scale = 0.4;
cow.scale = 0.5;

//5) Update the appropriate sprite property in the draw loop to 
function draw() {
  elephant.y = randomNumber(150, 250);
  pig.y = randomNumber(150, 250);
  cow.y = randomNumber(150, 250);
  drawSprites();
}
```
# Lesson 13
### The Sprite Movement
Sprite Movement
Using the counter pattern, you can write programs that animate sprites smoothly. Adding to or removing from a sprite's x or y property in the draw loop makes your sprite move just a bit each time it is redrawn.

```
var jet = createSprite(350, 350);
jet.setAnimation("jet");
var plane = createSprite(50, 200);
plane.setAnimation("plane");

function draw() {
  background("skyblue");
  
  //1) Read the code that makes the jet go up the screen
  jet.y = jet.y - 3;
  
  //2) Add code that makes the plane move to the right
  plane.x = plane.x + 3;

  drawSprites();
}
```
- Moving to the Left

   ` sprite.x = sprite.x - 3`

- Diagonal Movement

Updating both the x or y properties of a sprite can make it move diagonally. You can use the watchers under the code area to see how each property is changing.
```
     sprite.x = sprite.x + 3 
     sprite.y = sprite.y + 3  
```
- Rotate the Gears
```var blueGear = createSprite(100, 220);
blueGear.setAnimation("blue_gear");

var greenGear = createSprite(183, 298);
greenGear.setAnimation("green_gear");

var redGear = createSprite(185, 145);
redGear.setAnimation("red_gear");

function draw() {
  background("white");
  //1) Make the gears rotate so they look like they are working as one system
  blueGear.rotation = blueGear.rotation - 3;
  redGear.rotation = redGear.rotation + 3;
  greenGear.rotation = greenGear.rotation + 3;
  
  drawSprites();
}
```
- Fish Animation
```
var orangeFish = createSprite(400, randomNumber(0, 100));
orangeFish.setAnimation("orange_fish");
var blueFish = createSprite(250, randomNumber(0, 200));
blueFish.setAnimation("blue_fish");
var greenFish = createSprite(300, randomNumber(200, 300));
greenFish.setAnimation("green_fish");

function draw() {
  // Draw Background
  background("navy");
  
  // Update Values
  orangeFish.x = orangeFish.x - 2;
  
  
  //1) Use the counter pattern to make the blue fish move across the screen faster than the other fish
blueFish.x = blueFish.x - 4;
  //2) Use the counter pattern to make the green fish move across the screen slower than the other fish.
  greenFish.x = greenFish.x - 1;
  
  // Draw Animations
  drawSprites();
}
```

###  Screenshot
![Screenshot_16-12-2024_145613_studio code org](https://github.com/user-attachments/assets/26dc0877-9190-4dc4-a01d-4e82197f8833)

# Lesson 15 
### Conditionals
- Dropped soup
```
var soup =  createSprite(200,200);
soup.setAnimation("stew");

function draw() {
  background("lightgreen");
  soup.rotation = soup.rotation + 3;
  
  //2) Add a conditional that detects when the bowl is upside down.
  if (soup.rotation > 90) {
    //3) Set the sprite's animation to be an empty bowl when the bowl is upside down.
    soup.setAnimation("bowl");
  }
  
  
  drawSprites();
}
```
# Lesson 16
### Keyboard Input
- This program uses the keyDown() block to detect whether a specific keys are being pressed down.
```
//1) Run the code and try pressing the "p" and "h" keys.
var sprite = createSprite(200, 200);
sprite.setAnimation("giraffe");

function draw() {
  background("white");

  //2) Look inside the first two conditional statements to see how the code works.
  if(keyDown("h")) {
     sprite.setAnimation("hippo");
  }

  if(keyDown("p")) {
     sprite.setAnimation("pig");
  }

  if(keyDown("r")) {
      //3) Add code to change the sprite to a different animal when the "r" key is pressed.
      sprite.setAnimation("giraffe");

  }

  drawSprites();
}
```
- Gears with Conditionals
```
var blueGear = createSprite(100, 220);
blueGear.setAnimation("blue_gear");

var greenGear = createSprite(183, 298);
greenGear.setAnimation("green_gear");

var redGear = createSprite(185, 145);
redGear.setAnimation("red_gear");

function draw() {
  background("white");
  if (keyDown("up")) {
    blueGear.rotation = blueGear.rotation - 1;
  }
  if (keyDown("down")) {
    greenGear.rotation = greenGear.rotation + 1;
  }
  if (keyDown("left")) {
    redGear.rotation = redGear.rotation + 1;
  }

  //1) Add code that will check if the space key is being pressed down.
  //2) Adjust the program so that the gears only rotate when the space key is pressed down.

  drawSprites();
}
```
- Move in all direction
```
var backdrop = createSprite(200,200);
backdrop.setAnimation("rainbow");
var flyer = createSprite(200,200);
flyer.setAnimation("wing_bot");

function draw() {
background("white");

  //1) Add code to move the sprite left when the left arrow is pressed
if (keyDown("left")) {
  flyer.x = flyer.x - 1;
}

  //2) Add code to move the sprite right when the right arrow is pressed
if (keyDown("right")) {
  flyer.x = flyer.x + 1;
}
  //3) Add code to move the sprite up when the up arrow is pressed
if (keyDown("up")) {
  flyer.y = flyer.y - 1;
}
  //4) Add code to move the sprite down when the down arrow is pressed
if (keyDown("down")) {
  flyer.y = flyer.y + 1;
}
drawSprites();
}
```
- The block keyWentDown() will only give a point for new presses, so it's a better choice for this program.

# Lesson 17
## Mouse Input
```
var balloon = createSprite(200, 50);
balloon.setAnimation("balloon");
balloon.scale = 0.1;

function draw() {
  background("white");
  
  //1) Add code that checks whether the mouse is being pressed.
  if (mouseDown("leftButton")) {
    balloon.y = balloon.y + 1;
  } else {
    balloon.y = balloon.y + -1;
  }
  
  drawSprites();
}
```
```
var blender = createSprite(100, 300);
blender.setAnimation("blender");
var mixer = createSprite(300, 300);
mixer.setAnimation("mixer");

function draw() {
  background("lightyellow");
  fill("burlywood");
  rect(0, 350, 400, 50);
  if (World.mouseX < 200) {
    blender.x = randomNumber(95, 105);
    blender.y = randomNumber(295, 305);
  }
  //2) Add to the conditional so that when the mouse is on the other side of the screen, the mixer shakes instead.
  if (World.mouseX > 200) {
    mixer.x = randomNumber(295, 305);
    mixer.y = randomNumber(295, 305);
  }

  drawSprites();
}
```
# Lesson 18
 ## Project Interactive Card
Example Project


- Which elements appear to use drawing commands?
    
   - ellipse, line
- Which elements appear to be sprites?
  - balloon, bicycle, dog, present
- For each sprite, which properties are being updated?
    - roation , sprite.x and sprite.y

- Where do you see conditionals being used?
    - present dog and bicycle sprite
- Are there elements that you don’t understand?
  no

  ### Game
```
var score = 0;
var lives = 3;
var person = createSprite(200, 350);
person.setAnimation("black_haori_1");
person.scale = 0.25;
var block1 = createSprite(0, 0);
block1.setAnimation("gameplayobject_item_03_1");
block1.scale = 0.25;
var block2 = createSprite(200, 0);
block2.setAnimation("gameplayobject_item_03_1");
block2.scale = 0.25;
var block3 = createSprite(350, 0);
block3.setAnimation("gameplayobject_item_03_1");
// 
block3.scale = 0.25;
function draw() {
  background("white");
  textSize(20);
  text("Score: "+ score, 300, 30);
  textSize(20);
  text("Lives"+ lives, 300, 50);
  if (keyDown("right")) {
    person.x = person.x + 5;
  }
  if (keyDown("left")) {
    person.x = person.x - 5;
  }
  blockMovement(block1);
  blockMovement(block2);
  blockMovement(block3);
  function blockMovement(block) {
    block.y = block.y + 6;
    if (block.y > 400) {
      block.x = randomNumber(1, 400);
      block.y = 0;
      score = score+10;
    }
  }
  touch(block1);
  touch(block2);
  touch(block3);
  function touch(block) {
    if (person.isTouching(block)) {
      lives = lives-1;
      block.x = randomNumber(1, 400);
      block.y = 0;
    }
  }
  if (lives<1) {
    person.visible = false;
    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    textSize(20);
    text("Game Over", 200, 200);
  }
  drawSprites();
}
```
![Screenshot_23-12-2024_22293_studio code org](https://github.com/user-attachments/assets/75fc586e-83c6-4abc-bd20-4aeb3b308510)

# Lesson 19
### Velocity

- velocityX
One way to move sprites in Game Lab is with the counter pattern. For example `sprite.x=sprite.x+1` moves a sprite by 1 pixel each frame of the draw loop. This pattern is so common that sprites have a velocityX property that does this for you.

- You can use rotationSpeed to make your sprites spin. If you want your sun to rotate by two degrees each time it's drawn, you can use sun.rotationSpeed = 2; outside of the draw loop, after you create your sprite.
```
var field = createSprite(200,200);
field.setAnimation("field");
var ball = createSprite(200, 50);
ball.setAnimation("ball");
ball.scale = 0.2;
ball.velocityY = 5;

function draw() {
  //2) Look at how conditionals and velocity are used to make the ball bounce at the bottom of the screen.
  if (ball.y > 380) {
    ball.velocityY = -5;
  }
  //3) Add code to make the ball bounce at the top of the screen.
  if (ball.y < 0) {
    ball.velocityY = 5;
  }

  drawSprites();
}
```

# Lesson 20
## Collision Detection
```

// Create the sprites and start them moving
var backdrop = createSprite(200,200);
backdrop.setAnimation("meadow");
var bunny = createSprite(50, 300);
bunny.setAnimation("bunny");
bunny.velocityX = 3;
var robot = createSprite(400, 320);
robot.setAnimation("robot");
robot.scale = 0.2;
robot.velocityX = -3;
var dinner = createSprite(370, 350);
dinner.setAnimation("stew");
dinner.velocityX = -3;

function draw() {
  //1) Check if the bunny is touching the dinner.
  if (bunny.isTouching(dinner)) {
    // stop everything and change to empty bowl
    bunny.velocityX = 0;
    dinner.velocityX = 0;
    robot.velocityX = 0;
    dinner.setAnimation("bowl");
  }
  drawSprites();
}
```

```
// create the sprites
var horse = createSprite(200, 150);
horse.setAnimation("horse");
var rainbow = createSprite(400, 370);
rainbow.setAnimation("rainbow");
rainbow.velocityX = -5;
rainbow.velocityY = -5;
rainbow.rotateToDirection = true;

function draw() {
  // draw the background
  background("skyblue");

  //1) Change the horse into a unicorn when the rainbow touches it.
  if (horse.isTouching(rainbow)) {
    horse.setAnimation("unicorn");
  }


  
  drawSprites();
}
```

# Lesson 21  
### Mini-Project Side-Scroller
```
// GAME SETUP
// Create the sprites
var frog = createSprite(200, 300);
frog.setAnimation("frog");
var target = createSprite(300, 100);
target.setAnimation("fly");
var obstacle = createSprite(350, 310);
obstacle.setAnimation("mushroom");
obstacle.scale = 0.7;

// set velocity for the obstacle and the target
obstacle.velocityX = -5;
target.velocityX = -4;

// create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background(rgb(0, 150, 250));
  // draw the ground and other background
  noStroke();
  fill("white");
  ellipse(50, 50, 200, 50);
 
  fill(rgb(255, 140, 0));
  rect(0, 325, 400, 320);
 
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (frog.isTouching(obstacle)) {
    health -= 1; // Decrease health
    obstacle.rotation += 15; // Rotate the obstacle
  }
 
  // if the player touches the target
  // the score goes up, the target resets
  if (frog.isTouching(target)) {
    score += 1; // Increase score
    target.x = 400; // Reset target position
  }
 
  // JUMPING
  if (keyWentDown("up") && frog.y >= 300) {
    frog.velocityY = -14; // Move the frog up
  }
 
  frog.velocityY += 0.5; // Gravity effect
 
  if (frog.y > 300) { // If the frog is on the ground
    frog.y = 300;
    frog.velocityY = 0; // Stop the frog from falling
  }
 
  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (obstacle.x < 0) {
    obstacle.x = 400;
  }
 
  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (target.x < 0) {
    target.x = 400;
  }
 
  // DRAW SPRITES
  drawSprites();
 
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text(health, 350, 30);
  text("Score:", 20, 30);
  text(score, 90, 30);
 
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!", 40, 200);
  }
}
```

# Lesson 22
## Complex Sprite Movement
- Velocity and the Counter Pattern
This program already makes a car move across the screen, but it's going very slowly. By using the velocityX property with the counter pattern, you can change the sprite's speed during the program.

`car.velocityX = car.velocityX + 0.5;`

```
var scenery = createSprite(200, 200);
scenery.setAnimation("park_view");
var cat = createSprite(50, 250);
cat.setAnimation("brown_cat");
cat.scale = 0.5;

var mouse = createSprite(375, 325);
mouse.setAnimation("mouse");
//1) Take a look at the code that makes the mouse move.
mouse.velocityX = -20;

function draw() {
  //2) Add code to make the mouse change directions when it reaches the cat.
  mouse.velocityX = mouse.velocityX + 1;


  drawSprites();
}
```
# Lesson 23
## Collision
- Sprite Interactions
So far you've been able to create simple sprite interactions by using the sprite.isTouching() block. For example, you've reset a coin to a different location on the screen when a character touches it.

```
// Create giraffe sprite
var giraffe = createSprite(30,200);
giraffe.setAnimation("giraffe");
giraffe.velocityX = 1;
giraffe.scale = 0.3;

// Create monkey sprite
var monkey = createSprite(300,200);
monkey.setAnimation("monkey");
monkey.scale = 0.3;

function draw(){
  // Draw background
  background("white");
  
  //1) Program the giraffe to push the monkey off the screen.
  if (giraffe.isTouching(monkey)) {
    monkey.velocityX = 1;
  }

  
  drawSprites();
}
```
- Displace
  - This type of sprite interaction from the previous levels is so common that there's a block for it: `sprite.displace()`


- More Collision Blocks

    - Three new types of sprite interactions have been added to the toolbox, sprite.collide(), sprite.bounce(), and sprite.bounceOff().
```
// create sprites
var giraffe = createSprite(50, 50);
giraffe.setAnimation("giraffe");
giraffe.velocityX = 3;
var hippo = createSprite(50, 150);
hippo.setAnimation("hippo");
hippo.velocityX = 3;
var rabbit = createSprite(50, 250);
rabbit.setAnimation("rabbit");
rabbit.velocityX = 3;
var snake = createSprite(50, 350);
snake.setAnimation("snake");
snake.velocityX = 3;
var parrot = createSprite(350, 50);
parrot.setAnimation("parrot");
parrot.velocityX = -3;
var elephant = createSprite(350, 150);
elephant.setAnimation("elephant");
elephant.velocityX = -3;
var monkey = createSprite(350, 250);
monkey.setAnimation("monkey");
monkey.velocityX = -3;
var pig = createSprite(350, 350);
pig.setAnimation("pig");
pig.velocityX = -3;


function draw() {
  background("lightblue");

  //1) For each pair of animals, choose the sprite interaction 
  // that matches the target image.
  giraffe.bounce(parrot);
  elephant.collide(hippo);
  monkey.displace(rabbit);
  snake.bounceOff(pig);


  drawSprites();
}
```
# Lesson 24
## Mini-Project flyer game
```
// GAME SETUP
// create player, target, and obstacles
var player = createSprite(200, 100);
player.setAnimation("fly_bot");
player.scale = 0.8;

// Create target sprite
var target = createSprite(150, 200);
target.setAnimation("coin");
target.scale = 0.5;

// Create obstacle sprites
var obstacle1 = createSprite(50, 50);
obstacle1.setAnimation("rock");
obstacle1.scale = 0.6;

var obstacle2 = createSprite(350, 350);
obstacle2.setAnimation("rock");
obstacle2.scale = 0.6;

// Set starting velocities for obstacles
obstacle1.velocityX = 2;
obstacle1.velocityY = 1;

obstacle2.velocityX = -2;
obstacle2.velocityY = -1;

function draw() {
  background("lightblue");
  
  // FALLING: Simulate gravity for the player
  player.velocityY += 0.5;

  // PLAYER CONTROLS
  if (keyDown("up")) {
    player.velocityY = -10; // Player jumps upwards
  }
  if (keyDown("left")) {
    player.velocityX -= 0.5; // Decrease x velocity to move left
  }
  if (keyDown("right")) {
    player.velocityX += 0.5; // Increase x velocity to move right
  }

  // SPRITE INTERACTIONS
  // Reset the coin when the player touches it
  if (player.isTouching(target)) {
    target.x = random(50, 350);
    target.y = random(50, 350);
  }

  // Make the obstacles push the player
  if (player.isTouching(obstacle1)) {
    // Push player in the direction of the obstacle
    player.velocityX += 2; // Push to the right
    player.velocityY += 2; // Push downwards
  }
  
  if (player.isTouching(obstacle2)) {
    // Push player in the opposite direction of the second obstacle
    player.velocityX -= 2; // Push to the left
    player.velocityY -= 2; // Push upwards
  }

  // LOOPING: Make obstacles wrap around the screen
  if (obstacle1.x > 400) {
    obstacle1.x = 0;
    obstacle1.y = random(50, 350);
  }
  if (obstacle1.x < 0) {
    obstacle1.x = 400;
    obstacle1.y = random(50, 350);
  }

  if (obstacle2.x > 400) {
    obstacle2.x = 0;
    obstacle2.y = random(50, 350);
  }
  if (obstacle2.x < 0) {
    obstacle2.x = 400;
    obstacle2.y = random(50, 350);
  }

  if (obstacle1.y > 400) {
    obstacle1.y = 0;
    obstacle1.x = random(50, 350);
  }
  if (obstacle1.y < 0) {
    obstacle1.y = 400;
    obstacle1.x = random(50, 350);
  }

  if (obstacle2.y > 400) {
    obstacle2.y = 0;
    obstacle2.x = random(50, 350);
  }
  if (obstacle2.y < 0) {
    obstacle2.y = 400;
    obstacle2.x = random(50, 350);
  }

  // DRAW SPRITES
  drawSprites();
  
  // GAME OVER
  if (player.x < -50 || player.x > 450 || player.y < -50 || player.y > 450) {
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
  }
}
```
# Lesson 25
## Functions
- Calling Functions
Functions let you build your own blocks and decide what code goes inside of them. This program has already created two functions, but only one of them is being called.
```
var coin = createSprite(200, 10);
coin.setAnimation("coin_gold_1");
setCoin();

var bunny = createSprite(200, 350);
bunny.setAnimation("bunny1_ready_1");

var score = 0;

function setCoin() {
  // Set the coin's y position to the top of the screen
  coin.y = 10;
  
  // Randomize the coin's x position
  coin.x = random(50, 350); // Ensures the coin falls between x positions 50 and 350
  
  // Randomize the coin's velocityY for varied falling speed
  coin.velocityY = random(3, 7); // Coin will fall at a random speed between 3 and 7
}

function draw() {
  background("white");
  
  if(keyDown("left")){
    bunny.x = bunny.x - 2;
  }
  
  if(keyDown("right")){
    bunny.x = bunny.x + 2;
  }
  
  // Check if bunny is touching the coin
  if(bunny.isTouching(coin)) {
    score++;         // Increase the score
    setCoin();       // Reset the coin
  }
  
  // Reset coin if it goes off screen
  if(coin.y > 400){
    setCoin();
  }

  // Display the score
  textSize(20);
  text("Score: " + score, 10, 10, 100, 100);
  
  drawSprites();
}
```
![Screenshot_24-12-2024_131613_studio code org](https://github.com/user-attachments/assets/738a0a3e-d6c2-4dbe-baf3-af442dbf3286)
