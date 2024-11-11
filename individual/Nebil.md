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
