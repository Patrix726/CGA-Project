
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
### Lesson 8: Sprites
 **Question of the Day:** How can we use sprites to help us keep track of lots of information in our programs?

   - Today you will learn about sprites which will not only give you a way to keep track of various pieces of information in your programs but will also allow you to create more interesting and fun images!
   - Level One: Predict
      draw carrot and apple image
   - Level Two - Seven: Skill Building
      - Level Two:
         ```
         // Create a new sprite variable called sprite1
            var sprite1 = createSprite(200, 200);

         // Draw your sprites on the screen
            drawSprites();
         ```
      - Level Three:
         ```
         var leftSprite = createSprite(100, 200);
         var rightSprite = createSprite(300, 200);
         drawSprites();
         ```
      - Level Four:
         ```
            var fruit = createSprite(200, 150);
         // Update the fruit animation
            fruit.setAnimation("strawberry");

            var vegetable = createSprite(200, 300);
         // Update the vegetable animation
            vegetable.setAnimation("broccoli");

            drawSprites();
         ```
      - Level Five:
         ```
         // Create a sprite variable
            var student = createSprite(200, 200);

         // Set the animation
            student.setAnimation("Jim");

         // Draw the sprite on the screen
            drawSprites();
         ```
      - Level Six:
         ```
            var topLeftSprite = createSprite(100, 100);
            var topRightSprite = createSprite(300, 100);
            var bottomLeftSprite = createSprite(100, 300);
            var bottomRightSprite = createSprite(300,300);
            bottomRightSprite.setAnimation("alien");
            topLeftSprite.setAnimation("bunny");
            topRightSprite.setAnimation("flyBot");
            bottomLeftSprite.setAnimation("planeRed1");
            drawSprites();
         ```
      - Level Seven:
         ```
            var drink = createSprite(300, 200);
            drink.setAnimation("ice_cream");
            var dessert = createSprite(100, 200);
            dessert.setAnimation("soda");
            var message = createSprite(200, 200);
            message.setAnimation("textGetReady");
            drawSprites();
         ```
   - Level Eight: checking for Understanding
   - Level Nine: Practice
      ```
            var sprite = createSprite(300, 200);
            var sprite1 = createSprite(200, 275);
            var sprite2 = createSprite(100, 200);
            sprite.setAnimation("cherry");
            sprite1.setAnimation("cherry");
            sprite2.setAnimation("cherry");
            drawSprites();
      ```
   - Level Ten: Assessment
      ```
             // Go to the animation tab and add at least two animations to your project.
               var sprite = createSprite(100, 100);
               sprite.setAnimation("cuteanimals_hen_1");
               var sprite1 = createSprite(200, 200);
               sprite1.setAnimation("bluebird_1");
               var sprite2 = createSprite(300, 300);
               sprite2.setAnimation("pigeon_1");
               drawSprites();
      ```
   - Level Eleven: Challenges
      i choose B drawing their own image
      ```
      // Create character sprite and set animation
         var character = createSprite(200, 300);

      // Draw background
         background("skyblue");

      // Draw grass
         fill("green");
         noStroke();
         character.setAnimation("banana_1_1");

       // Draw sprite
         drawSprites();
      ```
      ![lesson1-8](https://github.com/user-attachments/assets/1948ed45-db25-41b9-8878-dba686ebaded)

### Lesson 9: Sprite Properties
 **Question of the Day:** How can we use sprite properties to change their appearance on the screen?

   - In this lesson, you will continue working with sprites, using their properties to change their appearance.
      - Level One: Prediction
         The Answer is B
            B a bee sprite in the bottom right corner
      - Level Two - Three: Skill Building
         - Level Two:
            ```
                  //1) Run the program to see where the sprites appear.
                        var palette = createSprite();
                        palette.setAnimation("paint_palette");
                        var brush = createSprite();
                        brush.setAnimation("paint_brush");
                        palette.x = 100;
                        palette.y = 300;
                  //2) Change the location of the paint brush to touch the paint palette.
                        brush.x= 150;
                        brush.y = 250;
                        drawSprites();
            ```
         - Level Three:
            ```
               // Run the program to see how what is different about the first two notes.
               // Use the same blocks on the last two notes to make them look different, too.
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
                  note3.scale = 0.5;
                  note3.rotation = -25;
                  var note4 = createSprite(350,50);
                  note4.scale = 0.5;
                  note4.rotation = -25;
                  note4.setAnimation("eighth_note");
                  drawSprites();
            ```
      - Level Four: Practice
         ``` 
               // I choose B that is Rotation property
               // Make all of the cars look like they are  traveling correctly down the roads
                  background("darkseagreen");
                  shape(150,0,250,0,250,130,400,-20,400,-15,400,121,250,271,250,400,150,400,150,250,0,250,0,150,150,150);
                  stroke("yellow");
                  line(200, 0, 200, 150);
                  line(0, 200, 150, 200);
                  line(200, 286, 200, 400);
                  line(250, 200, 400, 55);
                  var carTop = createSprite(225, 75);
                  carTop.setAnimation("car_green");
                  carTop.scale = 0.6;
                  var carLeft = createSprite(100, 225);
                  carLeft.setAnimation("car_red");
                  carLeft.scale = 0.6;
                  carLeft.rotation = 90;
                  var carBottom = createSprite(175, 350);
                  carBottom.setAnimation("car_blue");
                  carBottom.scale = 0.6;
                  carBottom.rotation = 180;
                  var carRight = createSprite(300, 185);
                  carRight.setAnimation("car_yellow");
                  carRight.scale = 0.6;
                  carRight.rotation = 45;
                  drawSprites();
         ```
      - Level Five: Assessment
         ```
               // Run the program to see how big the food is.
               // Use sprite properties to scale all of the food sprites down so they fit on the plate.
                  background("burlywood");
                  fill("white");
                  ellipse(200,200, 350);
                  var fries = createSprite(250,140);
                  fries.setAnimation("fries");
                  var x = 0.7;
                  fries.scale = x;
                  var burger = createSprite(110,200);
                  burger.setAnimation("burger");
                  burger.scale = x;
                  var dessert = createSprite(240,270);
                  dessert.setAnimation("watermelon");
                  dessert.scale = x;
                  drawSprites();
         ```
      - Level Six: Challenges
         ```
            // Using either the sprite already created for you or with any other sprites of your choosing, 
            //play around with the height and width properties and think about when you would want to use these properties 
            //versus using the scale property
               var sprite = createSprite(200, 200);
               sprite.height = 400;
               sprite.setAnimation("giraffe_tall");
               drawSprites();
         ```
### Lesson 10: Text
 **Question of the Day:** How can we use text to improve our scenes and animations?

   - In this lesson, you will learn how to use Game Lab's text commands to add captions to your scenes.
     - Level One: prediction
         I think i show on screen is two text that is hello and everyone! on different position
     - Level Two - Three: Skill Building
         - Level Two:
            ```
                  background("lightyellow");
               // Change the displayed text in the provided code.
                  text("hi every on good moring", 50, 200);
                  text("This addition text ", 200, 300);
               // Add another sentence in a different part of the screen.
            ```
         - Level Three: 
            ```
               //1) Run the code to see how it works.
                  background("lightblue");
                  textSize(20);
                  text("small", 170, 100);
                  textSize(40);
                  text("medium", 130, 200);
                  textSize(60);
               //2) Add code to make the word "large" the biggest.
                  text("large", 120, 300);
            ```   
     - Level Four: Practice
         ```
            // Run the code, and see the error message.
            // Look for clues as to where the bug is in the code.
            // Once you have found the bug, fix it.
               var backdrop = createSprite(200,200);
               backdrop.setAnimation("city");
               var flybot = createSprite(100,250);
               flybot.setAnimation("fly_bot");
               var wingbot = createSprite(300,150);
               wingbot.setAnimation("wing_bot");
               var speech1 = createSprite(120,80);
               speech1.setAnimation("speechLeft");
               var speech2 = createSprite(280,310);
               speech2.setAnimation("speechDown");
               drawSprites();
               textSize(20);
               stroke("black");
               text("What has" , 60, 40);
               text("wheels and flies," , 40, 65);
               text("but is not an" , 50, 90);
               text("aircraft?" , 70, 115);
               text("A garbage truck!", 220,320);
         ```
     - Level Five: Assessment
         ```
            //1) Add two pieces of text to the following scene.  
            //2) Make the two pieces of text different sizes.
               var grass = createSprite(200,200);
               grass.setAnimation("floating_grass");
               var alien = createSprite(180,100);
               alien.setAnimation("alien");
               alien.scale = 1.3;
               var robot = createSprite(300,300);
               robot.setAnimation("robot");
               robot.scale = 0.2;
               drawSprites();
               textSize(35);
               text("Floating Grass", 50, 50);
               textSize(35);
               text("Robot", 300, 200);
         ```
     - Level Six: Challenges
         ```
            I choose A color Change
            // Read the code to see how it works.
               var sky = createSprite(200,200);
               sky.setAnimation("rainbow");
               drawSprites();
               textSize(50);
               fill("red");
               text("Rainbows", 30, 50);
               fill("orange");
               text("in the" , 70, 100);
            // Add a new block to make the word "sky" a different color.
               fill("white");
               text("sky...", 110, 150);
            // Add more text with even more colors.
               fill(rgb(100,50,122));
               text("Good", 110, 250);
         ```
### Lesson 11: Mini-Project - Captioned Scenes
 **Question of the Day:** How can we use Game Lab to express our creativity?

   - In this lesson, you will get the opportunity to be creative by using the problem-solving process to design and program a scene of your choice.
   - Level One: Captioned Scene Example    
         Immersive Reader
         Sprite Scenes
         It's time to put everything together and make a fun scene.
   - Level Two: Create a Background
      ```
         background(rgb(102, 50, 168));
         var eragna = createSprite(50, 200);
         eragna.setAnimation("kid_17_1");
         var x = 0.5;
         eragna.scale = x;
         var dula = createSprite(35, 175);
         dula.setAnimation("recorder_1");
         dula.scale = x;
         dula.rotation = -140;
         var kebt = createSprite(250, 150);
         kebt.setAnimation("cow_1_1");
         kebt.scale = x;
         var ferse = createSprite(250, 250);
         ferse.setAnimation("horse_1");
         ferse.scale = x;
         drawSprites();
         textSize(40);
         text("This is Eragna new", 50, 50);
      ```
   - Level Three: Add Sprites
      ```
         background(rgb(102, 50, 168));
         var eragna = createSprite(50, 200);
         eragna.setAnimation("kid_17_1");
         var x = 0.5;
         eragna.scale = x;
         var dula = createSprite(35, 175);
         dula.setAnimation("recorder_1");
         dula.scale = x;
         dula.rotation = -140;
         var kebt = createSprite(250, 150);
         kebt.setAnimation("cow_1_1");
         kebt.scale = x;
         var ferse = createSprite(250, 250);
         ferse.setAnimation("horse_1");
         ferse.scale = x;
         drawSprites();
         textSize(40);
         text("This is Eragna new", 50, 50);
      ```
   - Level Four: Add Text
      ```
         background(rgb(102, 50, 168));
         var eragna = createSprite(50, 200);
         eragna.setAnimation("kid_17_1");
         var x = 0.5;
         eragna.scale = x;
         var dula = createSprite(35, 175);
         dula.setAnimation("recorder_1");
         dula.scale = x;
         dula.rotation = -140;
         var kebt = createSprite(250, 150);
         kebt.setAnimation("cow_1_1");
         kebt.scale = x;
         var ferse = createSprite(250, 250);
         ferse.setAnimation("horse_1");
         ferse.scale = x;
         drawSprites();
         textSize(40);
         text("This is Eragna new", 50, 50);
      ```
   - Level Five: Review Your Scene
      ```
         background(rgb(102, 50, 168));
         var eragna = createSprite(50, 200);
         eragna.setAnimation("kid_17_1");
         var x = 0.5;
         eragna.scale = x;
         var dula = createSprite(35, 175);
         dula.setAnimation("recorder_1");
         dula.scale = x;
         dula.rotation = -140;
         var kebt = createSprite(250, 150);
         kebt.setAnimation("cow_1_1");
         kebt.scale = x;
         var ferse = createSprite(250, 250);
         ferse.setAnimation("horse_1");
         ferse.scale = x;
         drawSprites();
         textSize(40);
         text("This is Eragna new", 50, 50);
      ```
### Lesson 12: The Draw Loop
 **Question of the Day:** How can we animate our images in Game Lab?
   - In this lesson, you will learn how to use the draw loop with random numbers to create your first simple animations.
   - Level One: Predict
      continuesly drawing ellipse shape
   - Level Two: Skill Building
       ```
         // Add code to this program so that your drawing has orange circles being drawn, too.
            noStroke();
            function draw(){
            fill("green");
            ellipse(randomNumber(0,400), randomNumber(0,400));
            fill("orange");
            ellipse(randomNumber(0,400), randomNumber(0,400));
            }
       ```
   - Level Three:Predict
      continousely randomly draw ellipse shape
   - Level Four and Five: Skill Building
      - Level Four:
         ```
            // Run the code to see how it works.
            // Discuss with your partner why some code is inside the draw loop and some code is outside.
               var sprite = createSprite(100,200);
               sprite.setAnimation("greenAlien");
               function draw() {
               background("orange");
               // Try changing the numbers in the random number block and running the program again.
               sprite.rotation = randomNumber(0, 45);
               drawSprites();
               }
         ```
      - Level Five:
         ```
            // Run the program to see how it works.
               var pencil = createSprite(100,200);
               pencil.setAnimation("pencil");

               var brush = createSprite(300,200);
               brush.setAnimation("brush");

               function draw(){
               background("white");
               pencil.x = randomNumber(100,110);
               // Edit the code in this program to make the second sprite shake like the first one.
               brush.x = randomNumber(295, 305);
               drawSprites();
               }
         ```
   - Level Six: Practice
      ```
         // Updating Rotation
         // Run the program to see how it works.

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
            
         // Add code to this program to make the other alien shake just like the first.
            pinkAlien.rotation = randomNumber(-5, 5);

            drawSprites();
            }
      ```
   - Level Seven: Assessment
      ```
         // Add the draw loop block to the bottom of this program.
         // Move any blocks that need to be inside the draw loop.

            var salt = createSprite(200,200);
            salt.setAnimation("salt");
            background("skyblue");
            function draw() {
            salt.y = randomNumber(205, 195);
            drawSprites();
            }
      ```
   - Level Eight: Challenges
      ```
         //Recreate Scene
         // Setting Frame Rate
            World.frameRate = 5;

         // Create your sprite for the background
            var back = createSprite(200, 200);
            back.setAnimation("background");

         // Create your sprites for the cow, elephant, and pig and set the x and y location for each.
            var elephat = createSprite(100, 200);
            var pigg = createSprite(200, 200);
            var coww = createSprite(300, 200);
         // Set the animation for each sprite.
            elephat.setAnimation("elephant");
            pigg.setAnimation("pig");
            coww.setAnimation("cow");

         // Resize your animals.
            elephat.scale = 0.4;
            pigg.scale = 0.4;
            coww.scale = 0.4;

         // Update the appropriate sprite property in the draw loop to 
         // make the animals appear like they are jumping on the couch like the image
            function draw() {
            elephat.y = randomNumber(225, 175);
            pigg.y = randomNumber(225, 175);
            coww.y = randomNumber(225, 175);
            drawSprites();
            }
      ```
      ![lesson 9-13](https://github.com/user-attachments/assets/b00de253-e230-4378-a756-f64adb1c4ca2)
### Lesson 13: Sprite Movement
**Question of the Day:** How can we control sprite movement in Game Lab?

  - In this lesson, you will learn how to control sprite movement using the counter pattern.
  - Lesson One: Prediction
  - Lesson Two-Five: Skills Development
     - Lesson Two: 
        ```
            var jet = createSprite(350, 350);
            jet.setAnimation("jet");
            var plane = createSprite(50, 200);
            plane.setAnimation("plane");
            function draw() {
            background("skyblue"); 
         // Read the code that makes the jet go up the screen
            jet.y = jet.y - 3;
         // Add code that makes the plane move to the right
            plane.x = plane.x + 3;
            drawSprites();
            }
        ```
     - Lesson Three:
        ```
            var fly = createSprite(350, 200);
            fly.setAnimation("fly");
            function draw() {
            background("skyblue");
         // Use the counter pattern to make the sprite move to the left.
            fly.x = fly.x - 10;
            drawSprites();
            }
        ```
     - Lesson Four:
        ```
         // Read the code that makes the mouse go down.
         // Run the program and look at the watchers to see what is happening 
            var mouse = createSprite(50, 50);
            mouse.setAnimation("mouse");
            mouse.scale = 0.5;
            function draw() {
            background("lightgreen");
            mouse.y = mouse.y + 2;
         // Add one more line of code to make the mouse move diagonally.
            mouse.x = mouse.x + 2;   
            drawSprites();
            }
         // Run your code again and look at the watchers.
        ```
     - Lesson Five:
        ```
         The answer is C
        ```
  - Lesson Six: Practice
      ```
      // Take a look at the value in the watcher
      // Add a watcher for the y property
      // Run the program to see what happens to the properties and why the motorcycle disappears
      // Debug the code so the program runs like the image
         var cycle = createSprite(0, 400);
         cycle.setAnimation("motorcycle");
         cycle.rotation = 45;
         function draw() {
         background("lightgrey");
         cycle.x = cycle.x + 4;
         cycle.y = cycle.y + -4;
         drawSprites();
         }
      ```
  - Lesson Seven: Assessment
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
         greenFish.x = greenFish.x - 1;     
      // Use the counter pattern to make the blue fish move across the screen faster than the other fish
         blueFish.x = blueFish.x + -3;
      // Use the counter pattern to make the green fish move across the screen slower than the other fish.  
      // Draw Animations
         drawSprites();
         }
      ```
  - Lesson Eight: Challenges
      ```
         var orangeFish = createSprite(400, randomNumber(0, 100));
         orangeFish.setAnimation("orange_fish");
         var blueFish = createSprite(250, randomNumber(0, 200));
         blueFish.setAnimation("blue_fish");
         var greenFish = createSprite(300, randomNumber(200, 300));
         greenFish.setAnimation("green_fish");
         var shark1 = createSprite(40, 360);
         shark1.setAnimation("shark_1");
         shark1.scale = 0.4;
         var purple1 = createSprite(200, 200);
         purple1.setAnimation("gameplayadventure_12_1");
         purple1.scale = 0.1;
         var counter = 0.1;
         function draw() {
      // Draw Background
         background("navy"); 
      // Update Values
         orangeFish.x = orangeFish.x - 2;
         blueFish.x = blueFish.x - 2;
         greenFish.x = greenFish.x + -2;
         shark1.x = shark1.x + 3;
         purple1.scale = counter;
         counter = counter + 0.005; 
      // Draw Animations
         drawSprites();
         }
      ```
### Lesson 14: Mini-Project - Animation
**Question of the Day:** How can we combine different programming patterns to make a complete animation?

  - In this lesson, you will combine all the concepts you have learned in the previous lessons to create your first animated scene of your own design!
  - Lesson One: Animated Scene Example
  - Lesson Two: Draw a Background
     ```
       background("green");
     ```
  - Lesson Three: Add Sprites
     ```
      sprite1.setAnimation("ship14_1");
      sprite1.scale = 0.3;
      var sprite2 = createSprite(100, 300);
      sprite2.setAnimation("boxcar_11_1");
      sprite2.scale = 0.3;
      var sprite3 = createSprite(300, 350);
      sprite3.setAnimation("boxcar_07_1");
      sprite3.scale = 0.3;
      sprite3.rotation = 90;
     ```
  - Lesson Four: Add Text
     ```
      fill("black");
      textSize(25);
      text("Ethiopian Jet", 50, 30);
      textSize(25);
      text("This my Car", 50, 200);
      textSize(25);
      text("This is my bro car", 250, 200);
     ```
  - Lesson Five: Add Movement
     ```
      sprite1.x = sprite1.x + randomNumber(1, 3);
      sprite2.x = sprite2.x + randomNumber(1, 3);
      sprite3.y = sprite3.y - randomNumber(1, 3);
     ```
  - Lesson Six: Check your Animated Scene
     ```
      var sprite1 = createSprite(100, 75);
      sprite1.setAnimation("ship14_1");
      sprite1.scale = 0.3;
      var sprite2 = createSprite(100, 300);
      sprite2.setAnimation("boxcar_11_1");
      sprite2.scale = 0.3;
      var sprite3 = createSprite(300, 350);
      sprite3.setAnimation("boxcar_07_1");
      sprite3.scale = 0.3;
      sprite3.rotation = 90;
      function draw() {
      background("green");
      fill("black");
      textSize(25);
      text("Ethiopian Jet", 50, 30);
      textSize(25);
      text("This my Car", 50, 200);
      textSize(25);
      text("This is my bro car", 250, 200);
      sprite1.x = sprite1.x + randomNumber(1, 3);
      sprite2.x = sprite2.x + randomNumber(1, 3);
      sprite3.y = sprite3.y - randomNumber(1, 3);
      drawSprites();
      }
     ```
### Lesson 15: Conditionals
 **Question of the Day:** How can programs react to changes as they are running?
  - In this lesson, you will learn about booleans and conditionals, which will allow you to create programs that run differently depending on whether a condition is true.
  - Lesson One: Prediction
  - Lesson Two: Quick Check
  - Lesson Three-Five: Skills Development
     - Lesson Three:
        ```
            var finishLine = createSprite(40, 200);
            finishLine.setAnimation("finish_line");
            var raceCar = createSprite(400, 200);
            raceCar.setAnimation("race_car");
            function draw() {
         // Draw Background
            background("white");  
         // Counter pattern to make car move across the screen
            raceCar.x = raceCar.x - 2; 
         //Program text
            fill("black");
            strokeWeight(5);
            textSize(25);
            text("The race car has crossed the finish line:", 100, 20, 300, 60);
            fill("blue");
         // Add blocks to the text command to print the boolean to the screen
            text(raceCar.x < finishLine.x, 100, 100);  
         // Draw Animations
            drawSprites();
            }
        ```
     - Lesson Four:
     - Lesson Five:
        ```
            var fruit = createSprite(200, 200);
            fruit.setAnimation("apple");
            fruit.scale = 0.1;
            function draw() {
            // Draw Background
            background("white");
         // Update Values
            fruit.scale = fruit.scale + 0.01;
         // Add a conditional to the draw loop.
         // Add code to the conditional statement that asks if the scale of the fruit greater than 2.
         // Add code inside the conditional to change the fruit to a pear.
            if (fruit.scale > 2) {
               fruit.setAnimation("pear");
            }
         // Draw Animations
            drawSprites();
            }
        ```
  - Lesson Six: Practice
     ```
         var scene = createSprite(200, 200);
         scene.setAnimation("background");
         var spaceship = createSprite(200, 200);
         spaceship.setAnimation("spaceship");
         var alien = createSprite(300, 350);
         alien.setAnimation("alien_standing");
         function draw() {
         spaceship.y = spaceship.y - 3;
         if (50 > spaceship.y) {
            alien.setAnimation("alien_dance");
         }  
      // Add a conditional that detects when the spaceship is in the sky.
      // Set the sprite's animation to be a dancing alien.
         drawSprites();
         }
     ```
  - Lesson Seven: Assessment
     ```
         var backdrop = createSprite(200,200);
         backdrop.setAnimation("sci_fi");
         var dinosaur = createSprite(200, 350);
         dinosaur.scale = 0.2;
         dinosaur.setAnimation("tyrannosaurus");
         function draw() {
         //move the dinosaur up
         dinosaur.y = dinosaur.y - 5;
      // Add a conditional that detects when the dinosaur is in the sky.
      // Set the sprite's animation to a pterodactyl when it reaches the sky.
         if (70 > dinosaur.y) {
            dinosaur.setAnimation("pterodactyl");
         }
         //draw everything
         drawSprites();
         }
     ```
  - Lesson Eight: Challenges
     ```
         var tree = createSprite(200, 220);
         tree.setAnimation("tree");
         tree.scale = 0.75;
         var ghost = createSprite(300, 320);
         ghost.setAnimation("ghost");
         var monster = createSprite(400, 320);
         monster.setAnimation("orange_monster");
         monster.scale = 0.35;
         function draw() {
      // Draw Background
         background("plum");
         fill("palegreen");
         rect(-5, 350, 405, 50);
      // Use the counter pattern to make the ghost and monster sprites both travel from right to left.
         ghost.x = ghost.x - 2;
         monster.x = monster.x - 2;
      // Add a conditional that checks to see if the ghost sprite has gone off the left side of the screen.
         if (50 > ghost.x) {
            ghost.x = 50;
         }
         if (50 > monster.x) {
            ghost.x = 50;
            ghost.x = ghost.x - 2;
            monster.x = monster.x - 2;
         }
      // Inside the conditional, reset the ghost sprite's location to the right side of the screen
      // Repeat steps 2 & 3 for the monster sprite
      // Draw Animations
         drawSprites();  
         }
     ```
### Lesson 16: Keyboard Input
 **Question of the Day:** How can our programs react to user input?
  - In this lesson, you will learn how to use the keyDown() block which will let your programs respond to user input.
  - Lesson One: Prediction
  - Lesson Two-Four: Skills Development
     - Lesson Two:
        ```
         // Run the code and try pressing the "p" and "h" keys.
            var sprite = createSprite(200, 200);
            sprite.setAnimation("giraffe");
            function draw() {
            background("white");
         // Look inside the first two conditional statements to see how the code works.
            if(keyDown("h")) {
               sprite.setAnimation("hippo");
            }
            if(keyDown("p")) {
               sprite.setAnimation("pig");
            }
            if(keyDown("r")) {
                  //3) Add code to change the sprite to a different animal when the "r" key is pressed.
                  sprite.setAnimation("rabbit");
            }
            drawSprites();
            }
        ```
     - Lesson Three:
        ```
            var bug = createSprite(200, 200);
            bug.setAnimation("ladybug");
            function draw() {
         // Draw Background
            background("white");
         // Add a conditional statement to check if the right arrow key has been pressed down.
            if (keyDown("right")) {
               bug.x = bug.x + 5;
            }
            if (keyDown("left")) {
               bug.x = bug.x + -5;
            }
         // Add code to move the sprite right if the right arrow is down.
         // Draw Animations
            drawSprites();
            }
        ```
     - Lesson Four:
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
            }
         // Add code that will check if the space key is being pressed down.
         // Adjust the program so that the gears only rotate when the space key is pressed down.
            drawSprites();
            }
        ```
  - Lesson Five: Practice
      ```
         var turtle = createSprite(200,200);
         turtle.setAnimation("turtle");
         turtle.scale = 0.5;
         function draw() {
         background("navy");
         if (keyDown("up")) {
            turtle.y = turtle.y - 3;
         }
         if (keyDown("down")) {
            turtle.y = turtle.y + 3;
         }
         if (keyDown("left")) {
            turtle.x = turtle.x - 3;
         }
         if (keyDown("right")) {
            turtle.x = turtle.x + 3;
         }
         drawSprites();
         }
      ```
  - Lesson Six: Assessment
      ```
         var backdrop = createSprite(200,200);
         backdrop.setAnimation("rainbow");
         var flyer = createSprite(200,200);
         flyer.setAnimation("wing_bot");
         function draw() {
      // Add code to move the sprite left when the left arrow is pressed
         if (keyDown("left")) {
         flyer.x = flyer.x - 5;
         }
      // Add code to move the sprite right when the right arrow is pressed
         if (keyDown("right")) {
         flyer.x = flyer.x + 5;
         }
      // Add code to move the sprite up when the up arrow is pressed
         if (keyDown("up")) {
         flyer.y = flyer.y - 5;
         }
      // Add code to move the sprite down when the down arrow is pressed
         if (keyDown("down")) {
         flyer.y = flyer.y + 5;
         }
         drawSprites();
         }
      ```
  - Lesson Seven: Challenges
      ```
      // Duplicate your chosen bug image four times in the animation tab.
      // Edit each of your images to point in one of the four directions.
         var bug = createSprite(200, 200);
         bug.setAnimation("fly");
         function draw() {
      // Draw Background
         background("white");
      // Add code to each of your conditionals 
         //to change the animation of the sprite if different arrow keys are pressed.
         if(keyDown("up")){
            bug.y = bug.y - 5;
            bug.rotation = 90;
         }
         if(keyDown("down")){
            bug.y = bug.y + 5;
            bug.rotation = -90;
         }
         if(keyDown("left")){
            bug.x = bug.x - 5;
            bug.rotation = 0;
         }
         if(keyDown("right")){
            bug.x = bug.x + 5;
            bug.rotation = 180;
         }
      // Draw Animations
         drawSprites();
         }
      ```
### Lesson 17: Mouse Input
 **Question of the Day:** What are more ways that the computer can react to user input?
  - In this lesson, you will expand on what you have learned about if statements and explore if-else statements as well as learn about how to use the mouse to get input from your user that you can use in your conditional statements.
  - Lesson One: Prediction
  - Lesson Two-Five: Skills Development
     - Lesson Two:
        ```
            var blueGear = createSprite(100, 220);
            blueGear.setAnimation("blue_gear");
            var greenGear = createSprite(183, 298);
            greenGear.setAnimation("green_gear");
            var redGear = createSprite(185, 145);
            redGear.setAnimation("red_gear");
            function draw() {
            background("white"); 
         // Make the gears spin the opposite way when the space bar is **not** being pressed.
            if (keyDown("space")) {
               blueGear.rotation = blueGear.rotation - 1;
               greenGear.rotation = greenGear.rotation + 1;
               redGear.rotation = redGear.rotation + 1;
            } else {
               blueGear.rotation = blueGear.rotation - (-1);
               greenGear.rotation = greenGear.rotation + -1;
               redGear.rotation = redGear.rotation + -1;
            }  
            drawSprites();
            }
        ```
     - Lesson Three:
        ```
            var balloon = createSprite(200, 50);
            balloon.setAnimation("balloon");
            balloon.scale = 0.1;
            function draw() {
            background("white"); 
         // Add code that checks whether the mouse is being pressed.
         // Move the balloon up the screen if the mouse is being pressed.
         // Otherwise, move the balloon down the screen.
            if (mouseDown("leftButton")) {
               balloon.y = balloon.y - 1;
            } else {
               balloon.y = balloon.y + 1;
            }
            drawSprites();
            }
        ```
     - Lesson Four:
        ```
            var blender = createSprite(100, 300);
            blender.setAnimation("blender");
            var mixer = createSprite(300, 300);
            mixer.setAnimation("mixer");
            function draw() {
            background("lightyellow");
            fill("burlywood");
            rect(0, 350, 400, 50);
         // Add to the conditional so that when the mouse is on the other side of the screen, the mixer shakes instead.
            if (World.mouseX < 200) {
               blender.x = randomNumber(95, 105);
               blender.y = randomNumber(295, 305);
            } else {
               mixer.x = randomNumber(295, 305);
               mixer.y = randomNumber(295, 305);
            }
            drawSprites();
            }
        ```
     - Lesson Five:
        ```
            var blender = createSprite(100, 300);
            blender.setAnimation("blender");
            var mixer = createSprite(300, 300);
            mixer.setAnimation("mixer");
            function draw() {
            background("lightyellow");
            fill("burlywood");
            rect(0, 350, 400, 50);
         // Add to the conditional so that when the mouse is on the other side of the screen, the mixer shakes instead.
            if (World.mouseX < 200) {
               blender.x = randomNumber(95, 105);
               blender.y = randomNumber(295, 305);
            } else {
               mixer.x = randomNumber(295, 305);
               mixer.y = randomNumber(295, 305);
            }
            drawSprites();
            }
        ```
  - Lesson Six: Practice
     ```
         var emoji = createSprite(200, 200);
         emoji.setAnimation("smileEmoji");
         function draw() {
         background("white");
      // If the mouse is pressed down, change the emoji to a different emoji
         if (mouseDown("leftButton")) {
            emoji.setAnimation("glassesEmoji");
         } else {
            emoji.setAnimation("smileEmoji");
         } 
      // Otherwise, keep the emoji as a smile emoji 
         drawSprites();
         }
     ```
  - Lesson Seven: Assessment
     ```
         var backdrop = createSprite(200,200);
         backdrop.setAnimation("sky");
         var creature = createSprite(200,250);
         creature.setAnimation("creature");
         creature.scale = 0.2;
         function draw() {
      // Change the code so that the creature only shakes when the mouse is pressed.
         if (mouseDown("leftButton")) {
            creature.rotation = randomNumber(-5,5);
         }
         drawSprites();
      // Change the code so the directions ("Press the mouse to shake the creature.") **only show** 
      // when the user is **NOT** pressing the mouse.
         fill("black");
         textSize(40);
         text("Press the mouse to shake the creature.", 20, 50, 360, 100);
         }
     ```
  - Lesson Eight: Challenges
     ```
      //Create a bee sprite
         var bee1 = createSprite(200, 200);
         bee1.setAnimation("bee");
         function draw(){
         background("white");
      //Update the position of the bee to the position of the mouse
         if (mouseDown("leftButton")) {
         bee1.x = World.mouseX;
         bee1.y = World.mouseY;
         }
         drawSprites();
         }
     ```



