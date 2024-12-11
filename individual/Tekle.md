
## Name : Tekliye Tamiru 

###   ID : ugr/25614/14   
##   Lesssons Summary 
   
### Lesson One : Programming for a purpose

 **Question of the Day**: How can we design animations and games based on the needs of users   

  **Animations and Game Design Templates**

 - One of activity guide to recommend of templates to  -each client based on their needs
    
    - To design animations and games based on user needs
          - Conduct User Research
          - Define Objectives
          - Create Personas
          - Develop Prototypes
          - Ensure Accessibility
          - Iterate Based on Feedback
### Lesson Two : Plotting Shapes
 **Question of the Day**: How can we clearly communicate how to draw something on a screen? #

     In this lesson, you will explore the challenges of communicating clear instructions using a Game 
       Lab tool to draw shapes on the Game Lab's grid! 
### Lesson Three : Drawing in Game Lab
 **Question of the Day:** How can we communicate to a computer how to draw shapes on the screen?
   - In this lesson, you will begin to use Game Lab to position shapes on the screen while working through the concepts of sequencing and debugging
- **Introduced Code**
   - ellipse(x, y, w, h)
   - fill(color)
   - rect(x, y, w, h)
- **Level One  :Introduction to Game Lab**
      `rect(100,100)`
      when it is run we view rectangle
- **Level Two - Six : Sklii Building**

   - Level Two :
      `rect(350,350,50,50);`
   - Level Three :
      ```
      rect(350,350,50,50);
      rect(300,350,50,50);
      ```
   -  Level Four :
      ```
      fill("yellow");
      rect(100,100,50,50);
      rect(250,100,50,50);
      rect(100,200,50,50);
      ```
   - Level Five :
       ```
      fill("blue");
      rect(200,200);
      fill("green");
      rect(175, 175);
      ```
   - Level Six :
      ```
      fill("blue");
      ellipse(100,100);
      fill("yellow");
      ellipse(200, 200);
      ```

- **Level Seven  :Practice**
   Choose from the following activities:
     I choose D that is "Draw a Car"
     ```
     fill("blue");
     rect(150, 150);
     rect(200, 150);
     fill("green");
     rect(100, 200);
     rect(150, 200);
     rect(200, 200);
     rect(250, 200);
     fill("red");
     ellipse(150, 250);
     ellipse(250, 250);
     ```
- **Level Eight  :Assessment**
      ```
      fill("orange");
      ellipse(150,150);
      ellipse(200,150);
      ellipse(150,200);
      ellipse(200,200);
      fill("purple");
      rect(150, 150);
      ```
- **Level Nine  :Challenges**
  Choose from the following activities:
   I choose D "Face"
   ```
   fill(rgb(66, 245, 230));
   ellipse(150, 100);
   ellipse(250, 100);
   fill("red");
   ellipse(200, 200);
   fill(rgb(66, 245, 135));
   rect(100, 250);
   rect(150, 275);
   rect(200, 275);
   rect(250, 250);
   ```
### Lesson Four : Shapes and Parameters
  **Question of the Day:** How can we use parameters to give the computer more specific instructions?

   - In this lesson, you will continue working in Game Lab and increasing your familiarity with drawing shapes to the screen by manipulating the "parameters" of the shapes you are using to draw.
     - Level One : Predict 
     Two rectangle that is parallel
     - Level Two - Six : Skil building
        - Level two :
         ```
           fill("blue");
           rect(100,100,100,150);
           fill("red");
           rect(250,100,100,200); 
         ```
        - Level Three :
          -  Add an orange ellipse to the screen that is taller than the green one
          -  Rearrange the blocks so the orange ellipse is behind the green one
            ```
            fill("yellow");
            ellipse(200, 200, 250, 400);
            fill("green");
            ellipse(200,200,200,150);
            ```
        - Level Four : 
            -  Change the background from yellow to orange.
            ```
            background("orange");
            fill("purple");
            rect(50,50, 100,100);
            fill("blue");
            rect(250,250, 100, 100);
            ```
        - Level Five :
           -  Make a black background behind the green circle.
            ```
            background("black");
            fill("green");
            ellipse(200,200,200,200);
            ```
        - Level Six :
         ```
         // Draw sky
            `background("skyblue");`
         // Draw sun
            fill("yellow");
            ellipse(350,50,50,50);
         // Draw grass
            fill("green");
            rect(0,300,400,100);
            ```
     - Level Seven : Practice with parameters
         I choose B that **"Debug: Missing Shapes"**
          ```
            fill("black");
            rect(25, 50, 300, 300);
            fill("white");
            rect(40, 65, 250, 250);
            fill("black");
            rect(55, 80, 200, 200);
            fill("white");
            rect(70, 95, 150, 150);
            fill("black");
            rect(85, 110, 100, 100);
            fill("white");
            rect(100, 125, 50, 50);
            ```
     - Level Eight : Assessment
         Debug - Using 4 Parameters
         ```
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
     - Level nine : Challenges 
         I select B "Shape"
         ```
         fill("red");
         shape(200, 200, 0, 400, 400, 400);
         fill("blue");
         shape(200, 200, 0, 0, 400, 0);
         fill("green");
         shape(0, 0, 200, 200, 0, 400);
         fill("yellow");
         shape(200, 200, 400, 0, 400, 400);
         ```
### Lesson Five : Variables 
  **Question of the Day:** How can we use variables to store information in our programs?

 - In this lesson, you will be introduced to variables - an important concept in programming used to store values for your programs!
     - Level One: Prediction
        Drawing ellipse shape at bottom left corner
     - Level Two: Predict
        In the corner of x=300 and y=100
     - Level Three - Five: Skill Building
        - Level Three: Changing Variables
            ```
            var xPosition = 200;
            var whatsTheY = 300;
            ellipse(xPosition, whatsTheY);
            ```
        - Level Four: Naming Variables
             ```
             var sizeofcircle = 150;
             var dimension = 100;
             var location = 200;
             fill("OrangeRed");
             ellipse(dimension, location, sizeofcircle, sizeofcircle);
             ```
        - Level Five:Using a Variables many times
            -  Update the code so the red petals touch each other
            ```
               var petalSize = 72;

            // Set Up
               background("ForestGreen");
               noStroke();

            // Petals
               fill("red");
               ellipse(150,200,petalSize,petalSize);
               ellipse(200,150,petalSize,petalSize);
               ellipse(250,200,petalSize,petalSize);
               ellipse(200,250,petalSize,petalSize);

            // Flower Center
               fill("black");
               ellipse(200,200,50,50);
            ```
         - Level Six: Practice
            - I Select D Adding Variables
              ```
               var size = 100;
               var color3 = "green";
               var color1 = "red";
               var color2 = "orange";
               fill(color1);
               ellipse(200, 100, size, size);
               noFill();
               rect(150, 50, size, size);
               fill(color2);
               ellipse(200, 200, size, size);
               noFill();
               rect(150, 150, size, size);
               fill(color3);
               ellipse(200, 300, size, size);
               noFill();
               rect(150, 250, size, size);
               ``` 
         - Level Seven: Assessment
            -  Change the program to use the eyeSize variable.
             ```
               var eyeSize = 27;
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
         - Level Eight: Challenges Updating Variables
             ```
               var x = 50;
               var y = 50;
               fill("red");
               ellipse(x, y);
               // Increase x by 50, now x is 100
               x = x + 50;
               y = y + 50;
               ellipse(x, y);
               // Increase x by 50, now x is 150
               y = y + 50;
               x = x + 50;
               ellipse(x, y);
               // Increase x by 50, now x is 150
               y = y + 50;
               x = x + 50;
               ellipse(x, y);
               y = y + 50;
               x = x + 50;
               ellipse(x, y);
               y = y + 50;
               x = x + 50;
               ellipse(x, y);
               y = y + 50;
               x = x + 50;
               ellipse(x, y);
            ```
### Lesson 6: Random Numbers
**Question of the Day:** How can we make our programs behave differently each time they are run?

 -In this lesson, you will learn how to use the randomNumber() block to create new behaviors in your programs!
   - Level One: Predict
      display the ellipse shape when we run at different place
   - Level Two - Five: Skill Building
      - Level Two:
         ```
         background("tomato");

         // Change the code so the ellipse can appear anywhere horizontally on the screen
         fill("orange");
         ellipse(randomNumber(0,400), 200, 50, 50);
         ```
      - Level Three:
         ```
           background("tomato");
         // Make the ellipse appear at random y coordinates
           fill("orange");
           ellipse(randomNumber(0,400), randomNumber(0, 400), 50, 50);
         ```
      - Level Four:
         ```
         // Make the eyes appear at random sizes
            var eyeSize = 27;

            noStroke();
            background("green");

         // Face
            fill("yellow");
            ellipse(200,200,200,200);

         // Eyes
            fill("black");
            ellipse(160,170,randomNumber(5, 30),randomNumber(5, 30));
            ellipse(240,170,randomNumber(5, 30),randomNumber(5, 30));

         // Mouth
            fill("white");
            rect(160,240,80,20);
         ```
      - Level Five:
         ```
           //  Update the first flower's petals to be a random size
              petalSize = randomNumber(10, 50);
           // petals
              fill("purple");
              ellipse(75,100,petalSize,petalSize);
              ellipse(125,100,petalSize,petalSize);
              ellipse(100,75,petalSize,petalSize);
              ellipse(100,125,petalSize,petalSize);
           // center
              fill("yellow");
              ellipse(100,100, 50, 50);
           // Update the second flower's petals to be a random size
              petalSize = randomNumber(30, 80);
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
   - Level Six: Practice
      ```
           // Update the code so the rectangles appear stacked at random x positions
            var xPosition = randomNumber(0, 200);
            fill("pink");
            rect(xPosition, 100, 250, 50);
            fill("purple");
            rect(xPosition, 150, 250, 50);
            fill("firebrick");
            rect(xPosition, 200, 250, 50);
      ```
   - Level Seven: Assessment
      ```
         // Add at least three new different colored circles to your rainbow snake.
         // Use randomNumber to make the rest of the snake's body move up and down like the first three.
            background("skyBlue");
            fill("red");
            ellipse(100, randomNumber(190,210), 50, 50);
            fill("orange");
            ellipse(140, randomNumber(190,210), 50, 50);
            fill("yellow");
            ellipse(180, randomNumber(190,210), 50, 50);
            fill("green");
            ellipse(220, randomNumber(190,210), 50, 50);
            fill("blue");
            ellipse(260, randomNumber(190,210), 50, 50);
            fill("purpule");
            ellipse(300, randomNumber(190,210), 50, 50);
      ```
   - Level Eight: Challenges
      i choose A random RGB
      ```
         // Update the background to be a random color
            background(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));

         // Update each arc of the rainbow to a random color
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 400, 400);
            fill(rgb(randomNumber(0, 2),randomNumber(0, 10),randomNumber(0, 10)));
            ellipse(200, 200, 340, 340);
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 280, 280);
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 220, 220);
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 160, 160);
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 100, 100);
            fill(__);
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            ellipse(200, 200, 40, 40);

         // Update the ground to a random color
            fill(rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
            rect(0, 200, 400, 200);
      ```
### Lesson 7: Mini-Project - Robot Faces
   - Level One: Review Shape Blocks
       i choose A regular polygons
      ```
      regularPolygon(50, 75, 3, 50);
      regularPolygon(150, 75, 4, 50);
      regularPolygon(50, 175, 7, 50);
      regularPolygon(50, 275, 11, 50);
      regularPolygon(250, 75, 5, 50);
      regularPolygon(350, 75, 6, 50);
      regularPolygon(150, 175, 7, 50);
      regularPolygon(250, 175, 8, 50);
      regularPolygon(350, 175, 9, 50);
      regularPolygon(150, 275, 10, 50);
      regularPolygon(250, 275, 11, 50);
      regularPolygon(350, 275, 12, 50);
      ```
   - Level Two: Create Your Robot Face
      ```
      background(rgb(3, 252, 61));
      fill(rgb(252, 148, 3));
      ellipse(200, 200, 250, 250);
      fill("black");
      ellipse(150, 150, 45, 25);
      fill("white");
      ellipse(150, 150, 10, 5);
      fill("black");
      ellipse(250, 150, 45, 25);
      fill("white");
      ellipse(250, 150, 10, 5);
      rect(150, 225, 90, 30);
      ```

        
