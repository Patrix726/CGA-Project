#### Name: Yordanos Belayneh

#### ID: UGR/25426/14

### Lesson One: Programming with Purpose  

**Daily Question:**  
How can we create animations and games that meet user needs effectively?  

**Main Focus:**  
Utilize the activity guide to suggest appropriate templates for clients.  

**Template Categories:**  

1. **Welcome Screen**  
   - Greets users with a friendly introduction and instructions.  
   - Features a "start" or "continue" button to establish the app's purpose and set the mood.  

2. **User Input Screen**  
   - Gathers user information through text fields, buttons, or interactive elements.  
   - Adapts the app experience based on provided user data.  

3. **Information Screen**  
   - Presents static details, instructions, or key facts for users to refer to.  
   - Enhances understanding by including text and visuals.  

4. **Feedback Screen**  
   - Responds to user actions, such as showing quiz outcomes, "Thank You" notes, or summaries.  

5. **End/Exit Screen**  
   - Concludes with a message of appreciation.  
   - Offers options to restart or close the app.  

**Task:**  
Complete the assigned survey.  

---

### Lesson Two: Drawing Shapes  

**Daily Question:**  
How can we clearly explain the steps to draw shapes on a screen?  

**Main Focus:**  
Understand how to use the Drawing Shapes Template for creating visual designs.  

**Steps to Draw Shapes:**  
1. Pick a color for your shape.  
2. Click on a shape to place it on the canvas.  
3. Try different combinations to create unique designs.  

---

### Lesson Three: Shapes and Coordinate Systems  

**Daily Question:**  
How can coordinates help us accurately position and size shapes on a canvas?  

**Key Ideas:**  

1. **Canvas and Grid System:**  
   - The canvas operates on a 2D grid with (0, 0) as the top-left corner.  
   - The x-axis extends to the right, and the y-axis extends downward.  

2. **`rect()` Function:**  
   - `rect(x, y)` places a rectangle at coordinates (x, y), starting at its top-left corner.  
   - Additional parameters define the rectangle’s width and height.  

3. **Predicting Placement:**  
   - Experiment with various (x, y) values to understand where shapes will appear.  
   - If dimensions aren’t specified, default sizes (e.g., 50x50 pixels) are applied.  

**Activities:**  
- Use different coordinates to draw shapes.  
- Adjust parameters to observe changes in placement and size.  
- Work with peers to analyze code and predict shape positions.

![progress from lesson 1 upto 3](https://i.ibb.co/qdFVCbY/Screenshot-2024-11-26-141504.png)


## Lesson 4: Parameters in Functions

**Question:** How do parameters make functions adaptable?

### Key Ideas:
- Parameters allow functions to take inputs and create different outputs.
- They make code flexible and reusable.

### Activities:
- Write functions with parameters to change behaviors (e.g., colors, sizes).

---

## Lesson 5: Variables

**xPosition = 300**

### Key Ideas:
- By reading the code with one variable, I make a prediction about where the circle belongs.
- By reading the code with two variables, I make a prediction about where the circle belongs.
- I update the values of the two variables to change the circle's position.

### Rules for Naming Variables:
- Labels can't have spaces.
- Labels can't start with a number.
- Capitalization and spelling must be exactly the same.
- Variables store data that can change, like scores or settings.
- I use one variable many times in one code.

### Activities:
- Use variables in animations or games.
- Make programs interactive (e.g., count events).

---

## Lesson 6: Random Numbers

**x = randomNumber(min, max)**

### Key Ideas:
- Random numbers add variation and unpredictability.
- They’re great for random movements, challenges, or color changes.

### Activities:
- Generate random values within a range.
- Add randomness to animations or games.

---

## Lesson 7: Mini-Project: Robot Face

### Key Ideas:
- I create a robot face using variables with `randomNumber`, `regularPolygon`, `ellipse`, and `fill`.
- Use randomness to adjust shapes and positions for a dynamic design.

---

## Lesson 8: Sprites

### Steps to Create Sprites:
1. **Create a new sprite variable called `sprite1`:**
   - Drag out a `createSprite()` block and give it the variable name `sprite1`.
2. **Draw your sprites on the screen:**
   - Drag out a `drawSprites()` block.

### Key Ideas:
- Sprites are graphic elements that move and interact.
- They simplify complex animations.

### Activities:
- Create and customize sprites in Game Lab.
- Add sprites to interactive projects.

---

## Lesson 9: Sprite Properties

**Question:** How do sprite properties improve animations?

### Key Ideas:
- Sprites have attributes like position, size, and speed.
- Changing these makes animations dynamic and interactive.

### Activities:
- Modify sprite properties over time.
- Create behaviors like bouncing or path-following.

![progress from lesson 4 upto 9](https://i.ibb.co/gyKPM6N/Screenshot-2024-12-03-134050.png)



# Programming Lessons Summary

## Lesson 10: Text
- We can put text anywhere we'd like on the screen using the text block:
  ```javascript
  text("first text", 30, 200);
  text("second text", 50, 100);
  ```
- We can change the size of the text using the `textSize` block:
  ```javascript
  textSize(40);
  ```
- We can change the color of the text using the `fill` block:
  ```javascript
  fill("red");
  ```
- We can add a border to your text using the `stroke` command:
  ```javascript
  stroke("black");
  ```

---

## Lesson 11: Mini-Project
```javascript
background("lightBlue");
shape(0,200, 200,0, 400,0, 400,200);
fill("darkBlue");
shape(0, 200, 400,200, 400,400, 0, 400 );
fill("green");
ellipse(100, 200, 100, 150);
fill("white");
ellipse(95, 160, 15,15);
ellipse(125, 160, 15,15);
fill("green");
ellipse(300, 200, 100, 150);
fill("white");
ellipse(275,160, 15,15);
ellipse(305, 160, 15,15);
ellipse(115,240, 30,15);
ellipse(290,240, 30,15);
ellipse(290,200, 10,30);
ellipse(115,200, 10,30);
fill("red");
textSize(30);
text("first person", 10, 100);
fill("yellow");
textSize(30);
text("second person", 180, 100);
```

---

## Lesson 12: Draw Loop
- All your code outside the `draw` loop is run first, one time.
- All your code inside the `draw` loop is run over and over forever.

### Example
```javascript
noStroke();
function draw(){
  background("Red");
  ellipse(randomNumber(0,400), randomNumber(0,400));
}
```
- The code below can change its background and draw an ellipse over and over again:
  ```javascript
  World.frameRate = 5;
  noStroke();
  background("blue");
  fill("Yellow");

  function draw(){
    background("Red");
    ellipse(randomNumber(0,400), randomNumber(0,400));
  }
  ```

---

## Practice
### A) Updating Rotation
```javascript
// Setting Frame Rate
World.frameRate = 10;
// Creating Alien Sprites
var greenAlien = createSprite(100, 200);
greenAlien.setAnimation("greenAlien");

var pinkAlien = createSprite(300, 200);
pinkAlien.setAnimation("pinkAlien");
// Setting Up Drawing
noStroke();
fill("white");
function draw() {
  background("black");
  ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
  greenAlien.rotation = randomNumber(-5,5);
  pinkAlien.rotation = randomNumber(-5,5);
  drawSprites();
}
```

### B) Debug: Blurry Sprite
```javascript
var blender = createSprite(200,200);
blender.setAnimation("blender");

function draw() {
  background("lightyellow");
  blender.x = 200 + randomNumber(-5,5);
  blender.y = 200 + randomNumber(-5,5);
  drawSprites();
}
```

### C) Debug: Sprite Not Moving
```javascript
var blender = createSprite(200,200);
blender.setAnimation("blender");

function draw() {
  background("lightyellow");
  blender.x = randomNumber(195,205);
  blender.y = randomNumber(195,205);
  drawSprites();
}
```

---

## Lesson 13: Sprite Movement
### The Counter Pattern
- This pattern is one of the most important ones in all of programming:
  ```javascript
  X = X + 1;
  ```
- It is used to increase the value of a variable by 1. You might call it the counter pattern since it can be used to make a variable that counts up. You'll use this pattern a lot, especially with the draw loop:
  ```javascript
  var counter = 0;
  function draw(){
    background("white");
    textSize(counter);
    text(counter, 0, 400);
    counter = counter + 1;
  }
  ```
- This program creates a variable `counter` and then uses the counter pattern to make it count up.

---

## Lesson 14: Mini-Project – Animation
```javascript
background(rgb(25, 100, 40))
shape(200, 0, 0, 400, 400, 400);
shape(0, 0, 0, 400, 400, 400);
var greenAlien = createSprite(100, 200);
greenAlien.setAnimation("Alien");
var blueAlien = createSprite(300, 200);
blueAlien.setAnimation("Alien");
text("first alien", 100, 100);
text("second alien", 300,100);
var count = 0;
function draw(){
  greenAlien.rotation = randomNumber(-10, 10);
  blueAlien.y = blueAlien.y - count;
  count = count + 0.3;
}
drawSprites();
```

---

## Lesson 15: Conditionals
### Boolean Expressions
- A **Boolean expression** is an expression that can only evaluate to `TRUE` or `FALSE`.
```javascript
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not greater than 10");
}
```

![progress from lesson 10 - 15](https://i.postimg.cc/qqcwkv8z/Screenshot-2024-12-10-133455.png)


```
## Lesson 16: Keyboard Input

### Key Features
- Detects when specific keys are pressed using the `keyDown()` block.

### Example: Fish with Arrows
```javascript
var orangeFish = createSprite(400, randomNumber(0, 100));
orangeFish.setAnimation("orange_fish");
var blueFish = createSprite(250, randomNumber(0, 200));
blueFish.setAnimation("blue_fish");
var greenFish = createSprite(300, randomNumber(200, 300));
greenFish.setAnimation("green_fish");
var counter1 = 0;
var counter2 = 0;

function draw() {
  background("navy");
  if (keyDown("space")) {
    orangeFish.x = orangeFish.x - 2;
    blueFish.x = blueFish.x - counter1;
    counter1 = counter1 + 1;
    greenFish.x = greenFish.x - counter2;
    counter2 = counter2 + 0.5;
  }
  drawSprites();
}
```

### Practice: Move in All Directions
```javascript
var backdrop = createSprite(200, 200);
backdrop.setAnimation("rainbow");
var flyer = createSprite(200, 200);
flyer.setAnimation("wing_bot");

function draw() {
  if (keyDown("up")) flyer.y = flyer.y - 2;
  if (keyDown("down")) flyer.y = flyer.y + 2;
  if (keyDown("left")) flyer.x = flyer.x - 2;
  if (keyDown("right")) flyer.x = flyer.x + 2;
  drawSprites();
}
```

### Responding to a Single Click
- Uses `keyWentDown()` to detect new key presses.
```javascript
var clicks = 0;

function draw() {
  if (keyWentDown("space")) {
    clicks = clicks + 1;
  }
  background("white");
  textSize(50);
  text(clicks, 165, 175, 70, 50);
}
```

---

## Lesson 17: Mouse Input

### Example: Reverse the Gears
```javascript
var blueGear = createSprite(100, 220);
blueGear.setAnimation("blue_gear");
var greenGear = createSprite(183, 298);
greenGear.setAnimation("green_gear");
var redGear = createSprite(185, 145);
redGear.setAnimation("red_gear");

function draw() {
  background("white");
  if (mouseDown("leftButton")) {
    blueGear.rotation = blueGear.rotation - 1;
    greenGear.rotation = greenGear.rotation + 1;
    redGear.rotation = redGear.rotation + 1;
  } else {
    blueGear.rotation = blueGear.rotation + 1;
    greenGear.rotation = greenGear.rotation - 1;
    redGear.rotation = redGear.rotation - 1;
  }
  drawSprites();
}
```

### Example: Mouse Clicks
```javascript
var balloon = createSprite(200, 50);
balloon.setAnimation("balloon");
balloon.scale = 0.1;

function draw() {
  background("white");
  if (mouseDown("leftButton")) {
    balloon.y = balloon.y - 1;
  } else {
    balloon.y = balloon.y + 1;
  }
  drawSprites();
}
```

### Practice Examples
#### Ladybug Walk
```javascript
var outside = createSprite(200, 200);
outside.setAnimation("pine_trees");
var bug = createSprite(350, 350);
bug.setAnimation("ladybug");

function draw() {
  if (World.mouseY > 300) {
    bug.x = bug.x - 3;
  }
  drawSprites();
}
```

#### Ghost Moving with the Mouse
```javascript
var outside = createSprite(200, 200);
outside.setAnimation("meadow");
var ghost = createSprite(200, 300);
ghost.setAnimation("ghost");

function draw() {
  if (World.mouseX > 200) {
    ghost.x = ghost.x + 2;
  }
  if (World.mouseX < 200) {
    ghost.x = ghost.x - 2;
  }
  drawSprites();
}
```

---

## Twin Spirals
```javascript
var spiral = createSprite(100, 200);
spiral.setAnimation("lollipop");
var spiral2 = createSprite(300, 200);
spiral2.setAnimation("lollipop2");

function draw() {
  background("pink");
  spiral.scale = spiral.scale / 1.01;
  spiral.rotation = spiral.rotation + 3;
  spiral2.scale = spiral2.scale * 1.01;
  spiral2.rotation = spiral2.rotation - 3;

  if (mouseDown("leftButton")) {
    spiral.scale = spiral.scale * 1.02;
    spiral2.scale = spiral2.scale / 1.02;
  }
  drawSprites();
}
```
![progress from lesson 16-18](https://i.postimg.cc/fR9wx7rQ/Screenshot-2024-12-17-132713.png)




