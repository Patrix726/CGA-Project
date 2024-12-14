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