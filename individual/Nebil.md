#### Name: Nebil Rahmeto

#### ID: UGR/25275/14

# Lessons Summary

## Lesson 1: Programming for a Purpose

Question of the day: How can we design animations and games based on the needs of a user? Refer to your activity guide to recommend templates to clients.

-   Checked out the activity guide
-   Answer to templates for clients
    -   Maria - Template A (Since the aliens are fun and cute and the text block can be used to show a dialogue for reading.)
    -   Richard - Template B (Since we can change the junk food with trash and healthy food with plastics to teach recycling)
    -   Layla - Template E (Since it is a nice greeting card format with fun interactions with the characters)
    -   Emma - Template D (Since we can change the rabbit with a shark and carrots with fish and bugs with people to teach kids about sharks)
    -   Levi - Template C (Since there are already characters interacting with their surroundings)
-   Completed the survey

## Lesson 2: Plotting Shapes

Question of the Day: How can we clearly communicate how to draw something on a screen?

-   Drew shapes on the Game Lab's grid per the instructions.

## Lesson 3: Drawing in Game Lab

Question of the Day: How can we communicate to a computer how to draw shapes on the screen?

-   Predicted the output of a shape coded in the game lab.
-   Changed the parameters of the previous code to place the shape (rectangle) to the bottom right of the screen.

    `rect(350,350);`

-   Placed two rectangles exactly in the corners of the screen, just as previewed in the picture.

    ```
    rect(0,0);
    rect(350,350);
    ```

-   Followed the instructions to make the rectangles yellow, and added a third rectangle beneath the two rectangles.

    ```
    fill("yellow");
    rect(175,200);
    rect(100,100);
    rect(250, 100);
    ```

-   Learned that the order of the code determines which rectangle appears on top. Then continued to change the color of the first rectangle to green, as well as make it on top of the blue rectangle.

    ```
    fill("blue");
    rect(200, 200);
    fill("green");
    rect(175,175);
    ```

-   Learned new syntax for creating circles. Added a circle to the screen with a different color.

    ```
    fill("teal");
    ellipse(100,100);
    fill("red");
    ellipse(200,200);
    ```

-   Chose Debugging: Fix the spotlight from the list of exercises. Corrected the color errors.

    ```
    fill("black");
    rect(175,100);
    rect(175,150);
    rect(175,200);
    fill("red");
    ellipse(200,125);
    fill("yellow");
    ellipse(200,175);
    fill("green");
    ellipse(200,225);
    ```

-   Debugging: Fixed the flower by changing the rectangles order as well as position.

    ```
    fill("orange");
    ellipse(150,150);
    ellipse(200,150);
    ellipse(150,200);
    ellipse(200,200);
    fill("purple");
    rect(150, 150);
    ```

-   Created a smiling emoji face as a final exercise.

    ```
    fill(rgb(245,195,5));
    ellipse(200, 200, 300);
    fill(rgb(0, 0, 0));
    ellipse(155, 175, 20);
    ellipse(245, 175, 20);
    rect(125,235,20);
    rect(145,255,20);
    rect(165,265,20);
    rect(175,265,20);
    rect(195,265,20);
    rect(215,265,20);
    rect(235,255,20);
    rect(255,235,20);
    ```

## Lesson 4: Shapes and Parameters

Question of the Day: How can we use parameters to give the computer more specific instructions?

-   Correctly predicted that the additional parameters for the `rect()` blocks specify the width and height of the rectangle.
-   Adjusted the size of the red rectangle to be longer than the blue rectangle.

    ```
    fill("blue");
    rect(100,100,100,200);

    fill("red");
    rect(250,100,100,250);
    ```

-   Learned new parameters for the `ellipse()` block.
    -   Created two ellipses with differing sizes.
        ```
        fill("orange");
        ellipse(200,200,250,300);
        fill("green");
        ellipse(200,200,200,150);
        ```
-   Learned a new command to change background color `background()` that takes color as parameter.
    -   Changed the background as an exercise and made the purple box visible.
        ```
        background("orange");
        fill("blue");
        rect(250,250, 100, 100);
        fill("purple");
        rect(50,50, 100,100);
        ```
-   Learned that the `background()` method draws on top of everything already in the drawing.
    ```
    background("black");
    fill("green");
    ellipse(200,200,200,200);
    ```
-   Debugging: Fixed an error where the width of the grass rectangle is short.

    ```
    // Draw sky
    background("skyblue");

    // Draw sun
    fill("yellow");
    ellipse(350,50,50,50);

    // Draw grass
    fill("green");
    rect(0,300,400,100);
    ```

-   Debugging Exercise: Fixed an error where a big ellipse covered the other ellipses.
    ```
    fill("red");
    ellipse(200, 200, 400, 400);
    fill("orange");
    ellipse(200, 200, 340, 340);
    fill("yellow");
    ellipse(200, 200, 280, 280);
    fill("green");
    ellipse(200, 200, 220, 220);
    fill("blue");
    ellipse(200, 200, 160, 160);
    fill("indigo");
    ellipse(200, 200, 100, 100);
    fill("violet");
    ellipse(200, 200, 40, 40);
    ```
-   Debugging: Fixed the size of the cloud to be wider than it is tall.

    ```
    //1 Debug this program to make the cloud wider than it is tall, like in the image.

    // Draw sky
    background("skyblue");

    // Draw sun
    fill("yellow");
    ellipse(300,50,50,50);

    // Draw grass
    fill("green");
    rect(0,300,400,100);

    // Draw cloud
    fill("white");
    ellipse(150,100,200,100);
    ```

-   Learned a new block to help draw other shapes, `regularPolygon()`.
    -   Made polygon shapes with sides from 3 to 14.
        ```
        regularPolygon(50, 75, 3, 50);
        regularPolygon(150, 75, 4, 50);
        regularPolygon(250, 75, 5, 50);
        regularPolygon(350, 75, 6, 50);
        regularPolygon(50, 175, 7, 50);
        regularPolygon(150, 175, 8, 50);
        regularPolygon(250, 175, 9, 50);
        regularPolygon(350, 175, 10, 50);
        regularPolygon(50, 275, 11, 50);
        regularPolygon(150, 275, 12, 50);
        regularPolygon(250, 275, 13, 50);
        regularPolygon(350, 275, 14, 50);
        ```
-   Learned a new block to make arcs, `arc()`, that takes 6 parameters.

    ```
    arc(50, 100, 100, 100, 0, 360);
    arc(200, 100, 100, 100, 0, 300);
    fill("green");
    arc(350, 100, 100, 100, 90, 180);
    noFill();
    arc(50, 200, 100, 100, 0, 180);
    arc(200, 200, 100, 100, 30, 210);
    fill("yellow");
    noStroke();
    arc(300,200,100,100,295,180);
    arc(50,300,100,100,25,335);
    ```

-   Learned a new block to make any shape using x and y coordinates, `shape()`.
    ```
    fill("red");
    shape(200, 200, 0, 400, 400, 400);
    fill("blue");
    shape(200, 200, 0, 0, 400, 0);
    fill("green");
    shape(0, 0, 200, 200, 0, 400);
    fill("yellow");
    shape(400, 0, 200, 200, 400, 400);
    ```
-   Learned a new block to draw lines, `line()`. Completed the given exercise:
    ```
    line(0, 0, 50, 400);
    line(0, 50, 100, 400);
    line(0, 100, 150, 400);
    line(0, 150, 200, 400);
    line(0, 200, 250, 400);
    line(0, 250, 300, 400);
    line(0, 300, 350, 400);
    line(0, 350, 400, 400);
    line(0, 0,400,50);
    line(50, 0,400,100);
    line(100, 0,400,150);
    line(150, 0,400,200);
    line(200, 0,400,250);
    line(250, 0,400,300);
    line(300, 0,400,350);
    line(350, 0,400,400);
    ```

## Lesson 5: Variables

Question of the Day: How can we use variables to store information in our programs?

-   Correctly predicted the center of the circle.
-   Changed the variables' values to output the circle in the bottom-center of the screen
-   Debugging: Fixed errors caused by bad variable labels.
-   Changed values with variables for better control.

    ```
    var eyeSize = 50;

    noStroke();
    background("green");

    // Face
    fill("yellow");
    ellipse(200,200,200,200);

    // Eyes
    fill("black");
    ellipse(160,170,eyeSize,eyeSize);
    ellipse(240,170,eyeSize,eyeSize);

    // Mouth
    fill("white");
    rect(160,240,80,20);
    ```

-   Challenge: Draw a changing image.

    -   Made a car outline that uses variables of starting coordinates and tire size.

    ```
    var xdi = 100;
    var ydi = 200;
    var tireSize = 30;
    fill(rgb(0,100,200));

    //car outline
    shape(xdi,ydi,xdi,ydi-30,xdi+30,ydi-60,xdi+100,ydi-60,xdi+130,ydi-30,xdi+160,ydi-30,xdi+160,ydi);

    fill("gray");

    //left window
    shape(xdi+10,ydi-30,xdi+30,ydi-50,xdi+60,ydi-50,xdi+60,ydi-30);

    //right window
    shape(xdi+70,ydi-30,xdi+70,ydi-50,xdi+100,ydi-50,xdi+120,ydi-30);

    //left tire
    ellipse(xdi+40,ydi+(tireSize/3),tireSize,tireSize);

    //right tire
    ellipse(xdi+120,ydi+(tireSize/3),tireSize,tireSize);

    ```

## Lesson 6: Random Numbers

Question of the Day: How can we make our programs behave differently each time they are run?

-   Correctly predicted what the code outputs.
-   Updated the code to output the ellipse anywhere horizontally on the screen.
    ```
    fill("orange");
    ellipse(randomNumber(0,400), 200, 50, 50);
    ```
-   Updated the code to make the ellipse appear anywhere on the screen, random x and y coordinates.
    ```
    fill("orange");
    ellipse(randomNumber(0,400), randomNumber(0,400), 50, 50);
    ```
-   Combined random numbers with variables.
-   Called `randomNumber()` twice and stored it in a variable to show different random sizes for ellipse size.

    ```
    var petalSize;
    background("green");

    petalSize = randomNumber(15,65);
    // petals
    fill("purple");
    ellipse(75,100,petalSize,petalSize);
    ellipse(125,100,petalSize,petalSize);
    ellipse(100,75,petalSize,petalSize);
    ellipse(100,125,petalSize,petalSize);
    // center
    fill("yellow");
    ellipse(100,100, 50, 50);

    petalSize = randomNumber(15,65);
    // petals
    fill("purple");
    ellipse(275,300,petalSize,petalSize);
    ellipse(325,300,petalSize,petalSize);
    ellipse(300,275,petalSize,petalSize);
    ellipse(300,325,petalSize,petalSize);
    // center
    fill("yellow");
    ellipse(300,300, 50, 50);
    ```

-   Debugging: Fixed the code making each rectangle appear in a different random x coordinate instead of the flag appearing in a random x coordinate.
    ```
    // Update the code so the rectangles appear stacked at random x positions
    var xPosition = randomNumber(0,200);
    fill("pink");
    rect(xPosition, 100, 250, 50);
    fill("purple");
    rect(xPosition, 150, 250, 50);
    fill("firebrick");
    rect(xPosition, 200, 250, 50);
    ```
-   Completed the rainbow snake. And as a challenge made the size of the circles random as well.

    ```
    // Add at least three new different colored circles to your rainbow snake.
    // Use randomNumber to make the rest of the snake's body move up and down like the first three.

    background("skyBlue");
    var size= randomNumber(40,60);
    fill("red");
    ellipse(100, randomNumber(190,210), size, size);

    size= randomNumber(40,60);

    fill("orange");
    ellipse(140, randomNumber(190,210), size, size);

    size= randomNumber(40,60);

    fill("yellow");
    ellipse(180, randomNumber(190,210), size, size);

    size= randomNumber(40,60);

    fill("green");
    ellipse(220, randomNumber(190,210), size, size);

    size= randomNumber(40,60);

    fill("blue");
    ellipse(260, randomNumber(190,210), size, size);

    size= randomNumber(40,60);

    fill("purple");
    ellipse(300, randomNumber(190,210), size, size);
    ```

-   Final Exercise: Random Rainbow. Made all the fill colors to be random.

    ```
    //1 Update the background to be a random color
    var red = randomNumber(0,255);
    var green = randomNumber(0,255);
    var blue = randomNumber(0,255);
    background(rgb(red,green,blue));

    //2 Update each arc of the rainbow to a random color
    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 400, 400);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 340, 340);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 280, 280);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 220, 220);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 160, 160);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 100, 100);

    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    ellipse(200, 200, 40, 40);

    //3 Update the ground to a random color
    red = randomNumber(0,255);
    green = randomNumber(0,255);
    blue = randomNumber(0,255);
    fill(rgb(red,green,blue));
    rect(0, 200, 400, 200);

    ```

---

![image](https://github.com/user-attachments/assets/0d2c4acc-7ee1-4efd-a86a-34bea5acbb6c)

## Lesson 7: Mini-Project - Robot Faces

-   Reviewed about the `point()` block. Filled the remaining points like in the picture.
    ```
    strokeWeight(35);
    point(200, 170);
    strokeWeight(5);
    fill("red");
    ellipse(200, 200);
    point(200, 190);
    point(210, 200);
    point(190, 200);
    point(200, 210);
    ```
-   Made a silly robot face using 6 variables with random values.

    ```
    var robotPosX = randomNumber(50,200);
    var leftEyePosX = randomNumber(robotPosX+40,robotPosX+60);
    var leftEyePosY = randomNumber(140,160);
    var rightEyePosX = randomNumber(robotPosX+140,robotPosX+160);
    var rightEyePosY = randomNumber(140,160);
    var mouthHeight = randomNumber(10,30);

    fill(rgb(200,200,200));
    rect(robotPosX,100,200,200);

    // Left Eye white
    fill("white");
    ellipse(robotPosX+50,150,35,35);

    // Right Eye white
    fill("white");
    ellipse(robotPosX+150,150,35,35);

    // Left Iris
    fill("black");
    ellipse(leftEyePosX,leftEyePosY,20,20);

    // Right Iris
    fill("black");
    ellipse(rightEyePosX,rightEyePosY,20,20);

    // Mouth Lines
    rect(robotPosX+50,230,10,mouthHeight);
    rect(robotPosX+70,230,10,mouthHeight);
    rect(robotPosX+90,230,10,mouthHeight);
    rect(robotPosX+110,230,10,mouthHeight);
    rect(robotPosX+130,230,10,mouthHeight);
    ```

## Lesson 8: Sprites

-   Learned how to create sprites
    ```
    var sprite = createSprite(100, 200);
    drawSprites();
    ```
-   Learned about setAnimation block to change sprite appearance.

    ```
    var fruit = createSprite(200, 100);

    //1 Update the fruit animation
    fruit.setAnimation("strawberry");

    var vegetable = createSprite(200, 300);
    //2 Update the vegetable animation
    vegetable.setAnimation("broccoli");

    drawSprites();
    ```

-   Debugged some sprites and learned that order matters in showing sprites.
    ```
    var drink = createSprite(100, 200);
    drink.setAnimation("soda");
    var dessert = createSprite(300, 200);
    dessert.setAnimation("ice_cream");
    var message = createSprite(200, 200);
    message.setAnimation("textGetReady");
    drawSprites();
    ```

## Lesson 9: Sprite Properties

-   Learned how to change the position of sprites
    ```
    //1 Run the program to see where the sprites appear.
    var palette = createSprite();
    palette.setAnimation("paint_palette");
    var brush = createSprite();
    brush.setAnimation("paint_brush");
    palette.x = 150;
    palette.y = 350;
    //2 Change the location of the paint brush to touch the paint palette.
    brush.x= 200;
    brush.y = 150;
    drawSprites();
    ```
-   Learned about new properties `rotate` and `scale` to change sprites.

    ```
    //1 Run the program to see how what is different about the first two notes.
    //2 Use the same blocks on the last two notes to make them look different, too.
    background("skyblue");
    var drums = createSprite(200,290);
    drums.setAnimation("drum_set");
    var note1 = createSprite(50,50);
    note1.setAnimation("eighth_note");
    note1.scale = 0.3;
    note1.rotation = 20;
    var note2 = createSprite(150,50);
    note2.setAnimation("eighth_note");
    note2.scale = 0.7;
    note2.rotation = -30;
    var note3 = createSprite(250,50);
    note3.setAnimation("eighth_note");
    note3.scale = 0.4;
    note3.rotation = 30;
    var note4 = createSprite(350,50);
    note4.scale = 0.6;
    note4.rotation = 120;
    note4.setAnimation("eighth_note");
    drawSprites();
    ```

-   Learned the tint property to overlay a color on sprites.
    ```
    //1 Using either the sprite already created for you or with any other sprites of your choosing,
    //play around with the tint property and
    //see how it works and how it changes on different colored sprites
    var creature = createSprite(200, 200);
    creature.setAnimation("crowned_creature_1");
    creature.scale = 0.3;
    creature.tint = "green";
    drawSprites();
    ```
-   Learned the alpha property to change the opacity (transparency) of sprites.
    ```
    //1 Using either the sprite already created for you or with any other sprites of your choosing,
    //play around with the transparency and
    //see how it works and how it changes on different sprites!
    var house = createSprite(200, 200);
    house.setAnimation("front_of_house_1");
    var ghost = createSprite(200, 200);
    ghost.setAnimation("ghost_1");
    ghost.scale = 2;
    ghost.alpha = 0.6;
    drawSprites();
    ```

## Lesson 10: Text

-   Learned how to create a text block.

    ```
    background("lightyellow");

    //1 Change the displayed text in the provided code.
    text("Sure!", 50, 200);
    text("Here is another one!", 150, 300);

    ```

-   Learned about `textSize` block to change the size of text blocks.

    ```
    //1 Run the code to see how it works.
    background("lightblue");
    textSize(20);
    text("small", 170, 100);
    textSize(40);
    text("medium", 130, 200);
    //2 Add code to make the word "large" the biggest.
    textSize(60);
    text("large", 120, 300);
    ```

-   Learned to change the color of text blocks.
    ```
    //1 Read the code to see how it works.
    var sky = createSprite(200,200);
    sky.setAnimation("rainbow");
    drawSprites();
    textSize(50);
    fill("red");
    text("Rainbows", 30, 50);
    fill("orange");
    text("in the" , 70, 100);
    //2 Add a new block to make the word "sky" a different color.
    fill("blue");
    text("sky...", 110, 150);
    //3 Add more text with even more colors.
    fill("pink");
    text("Here is another text",120,180);
    ```

## Lesson 11: Mini-project - Captioned Scenes

-   Created the background features for my scene.

    ```
    background(rgb(40,0,0));
    var landscape = createSprite(240, 240);

    landscape.setAnimation("landscape");
    landscape.scale = 1.4;
    landscape.tint = "red";

    drawSprites();

    ```

-   Created my main characters.

    ```
    var higher = createSprite(300, 90);
    var lower = createSprite(100, 300);

    higher.setAnimation("higher_robot");
    lower.setAnimation("lower_robot");

    higher.scale = 0.4;
    lower.scale = 0.2;

    higher.tint = "blue";
    lower.tint = "brown";

    drawSprites();

    ```

-   Added text for the scene.
    ```
    textSize(26);
    fill("white");
    text("It is over Anakin!", 100, 360);
    text("I have the high ground", 65, 390);
    ```

## Lesson 12: The draw loop

-   Learned how to utilize the draw loop.

    ```
    //1 Add code to this program so that your drawing has orange circles being drawn, too.
    noStroke();

    function draw(){
    fill("green");
    ellipse(randomNumber(0,400), randomNumber(0,400));
    fill("orange");
    ellipse(randomNumber(0,400), randomNumber(0,400));
    }

    ```

-   Learned to use the `background` block inside the `draw` function to erase previous sprites or shapes.

    ```
    //1 Run the code to see how it works.
    background("lightblue");
    textSize(20);
    text("small", 170, 100);
    textSize(40);
    text("medium", 130, 200);
    //2 Add code to make the word "large" the biggest.
    textSize(60);
    text("large", 120, 300);
    ```

-   Learned updating the properties of sprites inside the draw function creates animations.
    ```
    var blender = createSprite(200,200);
    blender.setAnimation("blender");
    function draw() {
        background("lightyellow");
        blender.x = 200 + randomNumber(-5,5);
        blender.y = 200 + randomNumber(-5,5);
        drawSprites();
    }
    ```

## Lesson 13: Sprite Movement

-   Learned how to animate sprite movement;

    ```
    var jet = createSprite(350, 350);
    jet.setAnimation("jet");
    var plane = createSprite(50, 200);
    plane.setAnimation("plane");

    function draw() {
    background("skyblue");

    //1 Read the code that makes the jet go up the screen
    jet.y = jet.y - 3;

    //2 Add code that makes the plane move to the right
    plane.x = plane.x + 3;
    drawSprites();
    }
    ```

-   Learned to use the counter pattern not just in movement but in rotation as well.

    ```
    var pan = createSprite(200, 200);
    pan.setAnimation("pan");

    function draw() {
    background("palegreen");
    //1 Make the pan spin like in the image
    pan.rotation = pan.rotation + 5;
    drawSprites();
    }
    ```

## Lesson 14: Mini-project - Animation

-   Added animation to my previous mini-project

    ```
    background(rgb(40,0,0));
    var landscape = createSprite(200, 170);
    var higher = createSprite(300, 240);
    var lower = createSprite(100, 300);

    higher.setAnimation("higher_robot");
    lower.setAnimation("lower_robot");

    higher.scale = 0.3;
    lower.scale = 0.2;

    higher.tint = "blue";
    lower.tint = "brown";

    landscape.setAnimation("landscape");
    landscape.scale = 1.13;
    landscape.tint = "red";

    function draw() {
        background("white");
        higher.y = higher.y -0.4;
        lower.rotation = randomNumber(5,-5);
        drawSprites();
        textSize(26);
        fill("white");
        text("It is over Anakin!", 100, 360);
        text("I have the high ground", 65, 390);
    }


    ```

## Lesson 15: Conditionals

-   Learned how to use conditionals in Game Lab.

    ```
    var fruit = createSprite(200, 200);
    fruit.setAnimation("apple");
    fruit.scale = 0.1;

    function draw() {
    // Draw Background
    background("white");

    // Update Values
    fruit.scale = fruit.scale + 0.01;

    //1 Add a conditional to the draw loop.
    //2 Add code to the conditional statement that asks if the scale of the fruit greater than 2.

    if (fruit.scale > 2) {

        //3 Add code inside the conditional to change the fruit to a pear.
        fruit.setAnimation("pear") ;
    }

    // Draw Animations
    drawSprites();
    }

    ```

-   Learned about the `visibility` property of sprites.

    ```
    var balloon = createSprite(200, 200);
    balloon.setAnimation("balloon");
    balloon.scale = 0.1;

    //1 Create a pop sprite which uses the "pop" visual in the animation tab.
    var pop = createSprite(200, 200);
    pop.setAnimation("pop");



    //2 Set the pop sprite to be hidden at the beginning.
    pop.visible = false;

    function draw() {
    // Draw Background
    background("white");

    // Update Values
    balloon.scale = balloon.scale + 0.01;

    pop.visible = balloon.scale > 0.8;
    //3 Add a conditional that checks the size of the balloon to see when it touches the edge of the screen.
    //4 Inside your conditional, set the balloon sprite to be hidden *and* set the pop sprite to appear.



    // Draw Animations
    drawSprites();
    }
    ```

## Lesson 16: Keyboard Input

-   Learned how to detect key press using the `keyDown` block.

    ```
    var bug = createSprite(200, 200);
    bug.setAnimation("ladybug");

    function draw() {
    //Draw Background
    background("white");

    //1 Add a conditional statement to check if the right arrow key has been pressed down.
    if (keyDown("right")) {
        //2 Add code to move the sprite right if the right arrow is down.
        bug.x = bug.x + 5;
    }
    if (keyDown("left")) {
        bug.x = bug.x - 5;
    }
    //Draw Animations
    drawSprites();
    }


    ```

-   Made sprite movement accessible using the four direction arrows on keyboard.

    ```
    var backdrop = createSprite(200,200);
    backdrop.setAnimation("rainbow");
    var flyer = createSprite(200,200);
    flyer.setAnimation("wing_bot");

    function draw() {

    //1) Add code to move the sprite left when the left arrow is pressed
    if (keyDown("left")){
        flyer.x = flyer.x -5;
    }
    //2) Add code to move the sprite right when the right arrow is pressed
    if (keyDown("right")){
        flyer.x = flyer.x+5;
    }
    //3) Add code to move the sprite up when the up arrow is pressed
    if (keyDown("up")){
        flyer.y = flyer.y -5;
    }
    //4) Add code to move the sprite down when the down arrow is pressed
    if (keyDown("down")){
        flyer.y = flyer.y+5;
    }



    drawSprites();
    }
    ```

-   Learned about the block `keyWentDown` and its difference with `keyDown`.

    ```
    var clicks = 0;

    function draw() {
    // 2 Change the code to use the new block, so the program only gives you a point for new clicks.
    if (keyWentDown("space")) {
        clicks = clicks + 1;
    }
    background("white");
    textSize(100);
    fill("red");
    text(clicks, 165, 175);
    }
    ```

## Lesson 17: Mouse Input

-   Learned how to use if-else statement for cool animation effects.

    ```
    var blueGear = createSprite(100, 220);
    blueGear.setAnimation("blue_gear");

    var greenGear = createSprite(183, 298);
    greenGear.setAnimation("green_gear");

    var redGear = createSprite(185, 145);
    redGear.setAnimation("red_gear");

    function draw() {
    background("white");

    if (keyDown("space")) {
        blueGear.rotation = blueGear.rotation - 1;
        greenGear.rotation = greenGear.rotation + 1;
        redGear.rotation = redGear.rotation + 1;
    } else {

    //1) Make the gears spin the opposite way when the space bar is **not** being pressed.
        blueGear.rotation = blueGear.rotation + 1;
        greenGear.rotation = greenGear.rotation - 1;
        redGear.rotation = redGear.rotation - 1;
    }

    drawSprites();
    }
    ```

-   Learned to use mouse events using `mouseDown` block.

    ```
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
    //3) Make the gears spin the opposite way when there is no user input.


    drawSprites();
    }
    ```

-   Learned about the blocks `World.mouseX` and `World.mouseY` to find the position of mouth.

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
    } else {
        mixer.x = randomNumber(295, 305);
        mixer.y = randomNumber(295, 305);

    }
    //2 Add to the conditional so that when the mouse is on the other side of the screen, the mixer shakes instead.

    drawSprites();
    }

    ```

## Lesson 18: Project - Interactive Card

-   Learned how to detect key press using the `keyDown` block.

    ```
    var backgroundSprite = createSprite(200,200);
    backgroundSprite.setAnimation("space");

    var vase = createSprite(350, 350);
    var flower1 = createSprite(50, 300);
    var flower2 = createSprite(150, 300);
    var flower3 = createSprite(250, 300);

    vase.setAnimation("vase");
    vase.visible = false;
    flower1.setAnimation("flower");
    flower2.setAnimation("flower");
    flower3.setAnimation("flower");

    flower1.tint= 'red';
    flower2.tint= 'blue';
    flower3.tint= 'green';

    flower1.scale = 0.4;
    flower2.scale = 0.4;
    flower3.scale = 0.4;

    function draw() {
    background("white");
    if (mouseDown("leftButton")){
        if (World.mouseX > 0 && World.mouseX < 100 && World.mouseY > 250 && World.mouseY < 350){
        flower1.visible= false;
        }
        if (World.mouseX > 100 && World.mouseX < 200 && World.mouseY > 250 && World.mouseY < 350){
        flower2.visible= false;
        }
        if (World.mouseX > 200 && World.mouseX < 300 && World.mouseY > 250 && World.mouseY < 350){
        flower3.visible= false;
        }
    }
    if (!flower1.visible && !flower2.visible && !flower3.visible){
        vase.visible = true;
        flower1.x = 340;
        flower2.x = 350;
        flower3.x = 360;
        flower1.visible= true;
        flower2.visible= true;
        flower3.visible= true;
        flower1.scale= 0.2;
        flower2.scale= 0.2;
        flower3.scale= 0.2;
    }
    drawSprites();
    }
    ```

## Lesson 19: Velocity

-   Learned about the block `velocityX` and `velocityY` that replace the counter pattern.

    ```
    //1) Find the block that will make the feather sprite go down the screen

    var feather = createSprite(200, 50);
    feather.setAnimation("feather");
    //2) Use that block outside of the draw loop.
    feather.velocityY = 2;
    //3) Give the block a value to make the feather move down the screen.

    function draw() {
    background("skyblue");
    drawSprites();
    }

    ```

-   Learned how to rotate a sprite by setting `rotationspeed` block;

    ```
    var sun = createSprite(200, 200);
    sun.setAnimation("sun");
    sun.rotationSpeed = 3;
    //1) Make the sun rotate by 3 degrees each time it's drawn.


    function draw() {
    background("blue");
    drawSprites();
    }

    ```

## Lesson 20: Collision Detection

-   Learned to use `isTouching` to detect if two sprites are colliding.

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

-   Learned to use the `debug` block to detect bugs in Game Lab.

    ```
    var balloon = createSprite(200,200);
    balloon.setAnimation("balloon");
    //2) Change the code on line 4 from false to true.
    balloon.debug = true;
    //3) Debug the tack sprite.


    var tack = createSprite(350, 50);
    tack.setAnimation("tack");

    function draw() {
    background("gray");

    // check if tack is touching balloon
    if (balloon.isTouching(tack)) {
        // replace balloon image
        balloon.setAnimation("popped");
    }
    // make tack move with arrow keys
    if (keyDown("up")) {
        tack.y = tack.y - 1;
    }
    if (keyDown("down")) {
        tack.y = tack.y + 1;
    }
    if (keyDown("left")) {
        tack.x = tack.x - 1;
    }
    if (keyDown("right")) {
        tack.x = tack.x + 1;
    }

    drawSprites();
    }

    ```

-   Learned how to set custom collider parameters using `setCollider` block.

    ```
    var roller = createSprite(200, 200);
    roller.scale = 2;
    roller.setAnimation("roller_1");
    //1) Use .setCollider() with all 6 parameters.
    roller.debug = true;
    roller.setCollider("rectangle",0,0,45,180,30);
    drawSprites();

    ```

## Lesson 21: Mini-Project - Side Scroller

-   Made a mini-project with everything I learned in the past 3 lessons.

    ```
    //GAME SETUP
    // Create the sprites
    var frog = createSprite(100, 320);
    var fly = createSprite(400, 200);
    var mushroom = createSprite(420,320);

    frog.setAnimation("frog");
    fly.setAnimation("fly");
    mushroom.setAnimation("mushroom");
    // set velocity for the obstacle and the target
    fly.velocityX = -3;
    mushroom.velocityX = -2;

    //create the variables
    var score = 0;
    var health = 100;

    function draw() {
    // BACKGROUND
    background("skyblue");
    // draw the ground and other background
    fill("brown");
    rect(0,300,400,100);

    // SPRITE INTERACTIONS
    // if the player touches the obstacle
    // the health goes down, and the obstacle turns
    if (frog.isTouching(mushroom)) {
        health = health - 1;
        mushroom.rotation = 10;
    }
    // if the player touches the target
    // the score goes up, the target resets
    if (frog.isTouching(fly)) {
        score = score + 1;
        fly.x = 405;
    }

    // JUMPING
    // if the player has reached the ground
    // stop moving down
    if (frog.y >= 320) {
        frog.velocityY = 0;
    }

    // if the player presses the up arrow
    // start moving up
    if (keyWentDown("up")) {
        frog.velocityY = -3;
    }
    // if the player reaches the top of the jump
    // start moving down
    if (frog.y <= 220) {
        frog.velocityY = 3;
    }


    // LOOPING
    // if the obstacle has gone off the left hand side of the screen,
    // move it to the right hand side of the screen
    if (fly.x < 0) {
        fly.x = 405;
    }
    if (mushroom.x < 0) {
        mushroom.x = 405;
        mushroom.rotation = 0;
    }

    // if the target has gone off the left hand side of the screen,
    // move it to the right hand side of the screen

    // DRAW SPRITES
    drawSprites();

    // SCOREBOARD
    // add scoreboard and health meter
    fill("black");
    textSize(20);
    text("Health:", 280, 30);
    text (health, 350, 30);
    text("Score:", 280, 50);
    text (score, 350, 50);
    // GAME OVER
    // if health runs out
    // show Game over
    if (health < 0) {
        background("black");
        fill("green");
        textSize(50);
        text("Game Over!" , 40, 200);
    }
    }

    ```

## Lesson 22: Complex Sprite Movement

-   Learned to use the counter pattern with the `velocityX` block to mimic acceleration and decceleration.

    ```
    var rock = createSprite(200, 50);
    rock.setAnimation("rock");
    rock.velocityY = 0.5;

    function draw() {
    background("skyblue");

    //1) Add code to make the rock speed up as it falls.
    rock.velocityY = rock.velocityY + 0.1;
    drawSprites();
    }

    ```

## Lesson 23: Collisions

-   Learned to use `sprite.displace()` block to mimic a displace collision between to sprites.

    ```
    // Create elephant sprite
    var elephant = createSprite(200, 350);
    elephant.setAnimation("elephant");
    elephant.scale = 0.5;
    elephant.velocityY = randomNumber(-3,-1);

    // Create hippo sprite
    var hippo = createSprite(200,50);
    hippo.setAnimation("hippo");
    hippo.scale = 0.5;
    hippo.velocityY = randomNumber(1,3);

    function draw(){
    // Draw background
    background("white");

    //2) Take a look at the new block and how it is being used.
    //3) Fix the block so that the elephant is pushing the hippo.
    elephant.displace(hippo);

    drawSprites();
    }
    ```

-   Learned the difference between `displace()`,`collide()`,`bounce()` and `bounceOff()` blocks to mimic real-life collisions.

-   Learned the effect of the `collider` boundaries in the above blocks.

## Lesson 24: Mini-Project - Flyer Game

-   Created a flyer game using the lessons learnt in previous 2 lessons.

    ```
    // GAME SETUP
    // create player, target, and obstacles
    var player = createSprite(200, 100);
    player.setAnimation("fly_bot");
    player.scale = 0.8;
    var coin = createSprite(300, 300);
    coin.setAnimation("coin");
    coin.scale = 0.8;
    var rock1 = createSprite(-20, 50);
    rock1.setAnimation("rock");
    rock1.scale = 0.8;
    rock1.velocityX = 5;
    var rock2 = createSprite(50, -20);
    rock2.setAnimation("rock");
    rock2.scale = 0.8;
    rock2.velocityY = 5;


    function draw() {
    background("lightblue");

    // FALLING
    player.velocityY = player.velocityY + 0.5;
    // LOOPING
    if (rock1.x > 400) {
        rock1.x = -5;
        rock1.y = randomNumber(50,350);
    }
    if (rock2.y > 400) {
        rock2.x = randomNumber(50,350);
        rock2.y = -5;
    }

    // PLAYER CONTROLS
    // change the y velocity when the user clicks "up"
    if (keyWentDown("up")) {
        player.velocityY = -5;
    }
    // decrease the x velocity when user clicks "left"
    if (keyDown("left")) {
        player.velocityX = player.velocityX - 0.1;
    }
    // increase the x velocity when the user clicks "right"
    if (keyDown("right")) {
        player.velocityX = player.velocityX + 0.1;
    }

    // SPRITE INTERACTIONS
    // reset the coin when the player touches it
    if (player.isTouching(coin)) {
        coin.x = randomNumber(0,200);
        coin.y = randomNumber(0,200);
    }
    // make the obstacles push the player
    rock1.displace(player);
    rock2.displace(player);

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

## Lesson 25: Functions

-   Learned that functions work in Game Lab using `function` block to create them.

    ```
    //1) Read the 4 functions to understand what each one does.
    //2) Call the functions in an order that draws the scene in the way that looks best to you.
    drawBackground();
    drawClouds();
    drawTrees();
    drawFence();


    function drawBackground(){
    noStroke();
    background(rgb(0,200,255));
    fill("green");
    rect(0,380,400,20);
    }

    function drawTrees(){
    noStroke();
    //Draw All Trunks
    fill(rgb(150,100,0));
    rect(210,330,30,50);
    rect(290,330,30,50);
    rect(360,330,30,50);
    //Draw All Branches
    fill("green");
    regularPolygon(225,280,3,100);
    regularPolygon(305,280,3,110);
    regularPolygon(375,290,3,95);
    }

    function drawClouds(){
    noStroke();
    fill(rgb(255,255,255,100));
    ellipse(300,200,200,50);
    ellipse(320,200,200,70);
    ellipse(340,200,200,50);

    ellipse(100,100,200,50);
    ellipse(120,100,200,70);
    ellipse(140,100,200,50);
    }

    function drawFence(){
    stroke("white");
    strokeWeight(5);
    line(0,360,400,360);
    line(20,350,20,380);
    line(50,350,50,380);
    line(80,350,80,380);
    line(110,350,110,380);
    line(140,350,140,380);
    line(170,350,170,380);
    line(200,350,200,380);
    line(230,350,230,380);
    line(260,350,260,380);
    line(290,350,290,380);
    line(320,350,320,380);
    line(350,350,350,380);
    line(380,350,380,380);
    }
    ```
