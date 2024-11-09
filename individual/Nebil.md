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
