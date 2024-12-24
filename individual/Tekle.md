
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
  - Level One: Prediction
  - Level Two-Five: Skills Development
     - Level Two: 
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
     - Level Three:
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
     - Level Four:
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
     - Level Five:
        ```
         The answer is C
        ```
  - Level Six: Practice
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
  - Level Seven: Assessment
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
  - Level Eight: Challenges
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
  - Level One: Animated Scene Example
  - Level Two: Draw a Background
     ```
       background("green");
     ```
  - Level Three: Add Sprites
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
  - Level Four: Add Text
     ```
      fill("black");
      textSize(25);
      text("Ethiopian Jet", 50, 30);
      textSize(25);
      text("This my Car", 50, 200);
      textSize(25);
      text("This is my bro car", 250, 200);
     ```
  - Level Five: Add Movement
     ```
      sprite1.x = sprite1.x + randomNumber(1, 3);
      sprite2.x = sprite2.x + randomNumber(1, 3);
      sprite3.y = sprite3.y - randomNumber(1, 3);
     ```
  - Level Six: Check your Animated Scene
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
  - Level One: Prediction
  - Level Two: Quick Check
  - Level Three-Five: Skills Development
     - Level Three:
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
     - Level Four:
     - Level Five:
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
  - Level Six: Practice
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
  - Level Seven: Assessment
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
  - Level Eight: Challenges
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
  - Level One: Prediction
  - Level Two-Four: Skills Development
     - Level Two:
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
     - Level Three:
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
     - Level Four:
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
  - Level Five: Practice
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
  - Level Six: Assessment
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
  - Level Seven: Challenges
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
  - Level One: Prediction
  - Level Two-Five: Skills Development
     - Level Two:
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
     - Level Three:
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
     - Level Four:
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
     - Level Five:
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
  - Level Six: Practice
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
  - Level Seven: Assessment
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
  - Level Eight: Challenges
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
### Lesson 18: Project - Interactive Card
 **Question of the Day:** What skills and practices are important when creating an interactive program?

  - In this lesson, you will plan and develop an interactive greeting card using all the programming concepts and techniques you have learned so far!
  - Lesson One: Demo Application: Interactive Card
  - Lesson Two: Interactive Card Examples
  - Lesson Three-Seven: Project working
     - Lesson Three:
       ```
            var sprite = createSprite(100, 100);
            sprite.setAnimation("monstertruck_03_1");
            sprite.scale = 0.3;
            var sprite1 = createSprite(100, 200);
            sprite1.setAnimation("motoside_07_1");
            sprite1.scale = 0.4;
            var sprite2 = createSprite(100, 300);
            sprite2.setAnimation("ship15_1");
            sprite2.scale = 0.3;
            function draw() {
            if (keyDown("space")) {
               background(rgb(82, 168, 50));
               sprite.x = sprite.x + randomNumber(1, 3);
               sprite1.x = sprite1.x + randomNumber(1, 5);
               sprite2.x = sprite2.x + randomNumber(1, 4);
               drawSprites();
               if (sprite.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite1.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite2.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
            } else {
               background("green");
               stroke("white");
               textSize(35);
               text("Please Click ", 70, 200);
               textSize(35);
               text("or hold Space", 70, 250);
            }
            }
       ```
     - Lesson Four:
       ```
         var sprite = createSprite(100, 100);
         sprite.setAnimation("monstertruck_03_1");
         sprite.scale = 0.3;
         var sprite1 = createSprite(100, 200);
         sprite1.setAnimation("motoside_07_1");
         sprite1.scale = 0.4;
         var sprite2 = createSprite(100, 300);
         sprite2.setAnimation("ship15_1");
         sprite2.scale = 0.3;
         function draw() {
         if (keyDown("space")) {
            background(rgb(82, 168, 50));
            sprite.x = sprite.x + randomNumber(1, 3);
            sprite1.x = sprite1.x + randomNumber(1, 5);
            sprite2.x = sprite2.x + randomNumber(1, 4);
            drawSprites();
            if (sprite.x > 350) {
               stroke("red");
               textSize(30);
               text("Game Over", 100, 200);
            }
            if (sprite1.x > 350) {
               stroke("red");
               textSize(30);
               text("Game Over", 100, 200);
            }
            if (sprite2.x > 350) {
               stroke("red");
               textSize(30);
               text("Game Over", 100, 200);
            }
         } else {
            background("green");
            stroke("white");
            textSize(35);
            text("Please Click ", 70, 200);
            textSize(35);
            text("or hold Space", 70, 250);
         }
         }
       ```
     - Lesson Five:
       ```
            var sprite = createSprite(100, 100);
            sprite.setAnimation("monstertruck_03_1");
            sprite.scale = 0.3;
            var sprite1 = createSprite(100, 200);
            sprite1.setAnimation("motoside_07_1");
            sprite1.scale = 0.4;
            var sprite2 = createSprite(100, 300);
            sprite2.setAnimation("ship15_1");
            sprite2.scale = 0.3;
            function draw() {
            if (keyDown("space")) {
               background(rgb(82, 168, 50));
               sprite.x = sprite.x + randomNumber(1, 3);
               sprite1.x = sprite1.x + randomNumber(1, 5);
               sprite2.x = sprite2.x + randomNumber(1, 4);
               drawSprites();
               if (sprite.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite1.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite2.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
            } else {
               background("green");
               stroke("white");
               textSize(35);
               text("Please Click ", 70, 200);
               textSize(35);
               text("or hold Space", 70, 250);
            }
            }
       ```
     - Lesson Six:
     - Lesson Seven:
       ```
            var sprite = createSprite(100, 100);
            sprite.setAnimation("monstertruck_03_1");
            sprite.scale = 0.3;
            var sprite1 = createSprite(100, 200);
            sprite1.setAnimation("motoside_07_1");
            sprite1.scale = 0.4;
            var sprite2 = createSprite(100, 300);
            sprite2.setAnimation("ship15_1");
            sprite2.scale = 0.3;
            function draw() {
            if (keyDown("space")) {
               background(rgb(82, 168, 50));
               sprite.x = sprite.x + randomNumber(1, 3);
               sprite1.x = sprite1.x + randomNumber(1, 5);
               sprite2.x = sprite2.x + randomNumber(1, 4);
               drawSprites();
               if (sprite.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite1.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
               if (sprite2.x > 350) {
                  stroke("red");
                  textSize(30);
                  text("Game Over", 100, 200);
               }
            } else {
               background("green");
               stroke("white");
               textSize(35);
               text("Please Click ", 70, 200);
               textSize(35);
               text("or hold Space", 70, 250);
            }
            }
       ```
  - Lesson Eight: Reflection
### Lesson 19: Velocity
 **Question of the Day:** How can programming languages hide complicated patterns so that it is easier to program?

  - In this lesson, you will learn how to set a sprite's velocity which uses the counter pattern to move your sprites.
  - Level One: Predict
  - Level Two-Seven: Skills Development
     - Level Two:
        ```
            fish.setAnimation("orange_fish");
         // Add the new movement block outside of the draw loop.
            fish.velocityX = 1;
         // Assign the velocity a value of 1.
            function draw() {
         // draw the background
            background(rgb(0,50,250));
            fill(rgb(250,250,250, 80));
            noStroke();
            ellipse(60, 20, 50, 50);
            ellipse(150, 100, 50, 50);
            ellipse(300, 130, 50, 50);
            ellipse(250, 200, 50, 50);
            ellipse(20, 250, 50, 50);
            ellipse(370, 330, 50, 50);
            fill(rgb(219, 208, 125));
            noStroke();
            ellipse(100, 400, 300, 100);
            ellipse(300, 400, 300, 75);
            drawSprites();
            }
        ```
     - Level Three:
        ```
         // Find the block that will make the feather sprite go down the screen

            var feather = createSprite(200, 50);
            feather.setAnimation("feather");
         // Use that block outside of the draw loop.
            feather.velocityY = 1;
         // Give the block a value to make the feather move down the screen.
            function draw() {
            background("skyblue");
            drawSprites();
            }
        ```
     - Level Four:
        ```
            var sun = createSprite(200, 200);
            sun.setAnimation("sun");
         // Make the sun rotate by 3 degrees each time it's drawn.
            sun.rotationSpeed = 3;
            function draw() {
            background("blue");
            drawSprites();
            }
        ```
     - Level Five:
        ```
            var wheel = createSprite(200, 200);
            wheel.setAnimation("wheel");
            function draw() {
            background("blue");
            if (keyWentDown("space")) {
               // Make the color wheel start spinning when the user presses the space bar.
               wheel.rotationSpeed = 3;
            }
            drawSprites();
            }
        ```
     - Level Seven:
        ```
            var field = createSprite(200,200);
            field.setAnimation("field");
            var ball = createSprite(200, 50);
            ball.setAnimation("ball");
            ball.scale = 0.2;
            ball.velocityY = 5;
            function draw() {
         // Look at how conditionals and velocity are used to make the ball bounce at the bottom of the screen.
            if (ball.y > 380) {
               ball.velocityY = -5;
            }
         // Add code to make the ball bounce at the top of the screen.
            if (20 > ball.y) {
               ball.velocityY = 5;
            }
            drawSprites();
            }
        ```
    
  - Level Eight: Practice
     ```
         var palatte = createSprite(180, 350);
         palatte.setAnimation("paint_pallette");
         var brush = createSprite(220, 50);
         brush.setAnimation("paint_brush");
         function draw() {
         background("skyblue");
      // Use a conditional to send the paint brush down if the down arrow is pressed.
         if (keyWentDown("down")) {
            brush.velocityY = 2;
         }
      // Use a different conditional to send the paint brush up if it reaches the palette.
         if (brush.y > 255) {
            brush.velocityY = -3;
         }
         drawSprites();
         }
     ```
  - Level Nine: Assessment
     ```
         var fish = createSprite(200, 200);
         fish.setAnimation("fishR");
         function draw() {
         background("blue");
      // Use a the correct block inside each conditional statement to make the three following movements:
      // If the user presses the right arrow key, move the fish to the right.
         if (keyWentDown("right")) {
         fish.velocityX = 3;
         }
      // If the fish gets to the right-hand side of the screen, move the fish to the left.
         if (fish.x > 400) {
         fish.velocityX = -3;
         }
         //If the fish gets to the left-hand side of the screen, move the fish to the right.
         if (fish.x < 0) {
         fish.velocityX = 3;
         }
      // The fish should always be facing the same direction it's moving, so you will also need to
      // update the fish's animation inside each of the conditional statements.
      // Draw the fish.
         drawSprites();
         }
     ```
  - Level Ten: Challenges
     ```
         var alien = createSprite(50,200);
         alien.setAnimation("alien");
         alien.velocityX = 0;
         alien.velocityY = -3;
         function draw() {
      // Add the appropriate velocity blocks to each conditional 
      // to make the alien complete the full circuit.
         if (alien.y < 50) {
         alien.velocityX = 3;
         alien.velocityY = 0;
         }
         if (alien.x > 350) {
         alien.velocityX = 0;
         alien.velocityY = 3;
         }
         if (alien.y > 350) {
         alien.velocityX = -3;
         alien.velocityY = 0;
         }
         if (alien.x < 50) {
         alien.velocityX = 0;
         alien.velocityY = -3;
         }        
         drawSprites();
         }
         var space = createSprite(200, 200);
         space.setAnimation("space");
         var flag1 = createSprite(50, 50);
         flag1.setAnimation("yellow_flag");
         var flag2 = createSprite(350, 50);
         flag2.setAnimation("yellow_flag");
         var flag3 = createSprite(350, 350);
         flag3.setAnimation("yellow_flag");
         var flag4 = createSprite(50, 350);
         flag4.setAnimation("yellow_flag");
         alien.depth=7;
     ```
### Lesson 20: Collision Detection
 **Question of the Day:** How can programming help make complicated problems more simple?
  - In this lesson, you will learn about collision detection by exploring how a computer could use math, the sprite location, and size to detect whether sprites are touching.
  - Level One: Sample game
  - Level Two-Five: Skills Development
     - Level Two:
     - Level Three:
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
         // Check if the bunny is touching the dinner.
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
     - Level Four:
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
         // Check if the bunny is touching the dinner.
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
     - Level Five:
        ```
            var balloon = createSprite(200,200);
            balloon.setAnimation("balloon");
         // Change the code on line 4 from false to true.
            balloon.debug = true;
         // Debug the tack sprite.
            var tack = createSprite(350, 50);
            tack.setAnimation("tack");
            tack.debug = true;
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
  - Level Six: Practice
      ```
         var coin1 = createSprite(100, 100);
         coin1.setAnimation("bronze_coin");
         coin1.velocityX = 1;
         coin1.velocityY = 1;
      // Change the collider of each coin to a circle.
         coin1.setCollider("circle");
         coin1.debug=true;
         var coin2 = createSprite(300, 300);
         coin2.setAnimation("bronze_coin");
         coin2.velocityX = -1;
         coin2.velocityY = -1;
      // Change the collider of each coin to a circle.
         coin2.setCollider("circle");
         coin2.debug=true;
         function draw() {
         background("teal");
         if (coin1.isTouching(coin2)) {
            coin1.velocityX = 0;
            coin1.velocityY = 0;
            coin2.velocityX = 0;
            coin2.velocityY = 0;
         }
         drawSprites();
         }
      ```
  - Level Seven: Assessment
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
         // Change the horse into a unicorn when the rainbow touches it.
            if (rainbow.isTouching(horse)) {
               horse.velocityX = 2;
               horse.velocityY = -2;
            } 
            drawSprites();
            }
      ```
  - Level Eight: Challenges
      ```
        // Read and run the code to understand how it works, and what is going wrong.
            var points = 0;
            var coin = createSprite(200, 100);
            coin.setAnimation("coin");
            var ghost = createSprite(200, 300);
            ghost.setAnimation("ghost");
            function draw() {
         // Identify the code that increases the score.
            if (ghost.isTouching(coin)) {
               points = points + 1;
            // Add a line of code so that at least one sprite moves to a new location.
               coin.x = randomNumber(1, 400);
               coin.y = randomNumber(1, 400);
            }
            background("lightblue");
            text("Points: " + points, 25, 25);
            if(keyDown("up")) {
               ghost.y = ghost.y - 5;
            }
            if(keyDown("down")) {
               ghost.y = ghost.y + 5;
            }
            if(keyDown("left")) {
               ghost.x = ghost.x - 5;
            }
            if(keyDown("right")) {
               ghost.x = ghost.x + 5;
            }
            drawSprites();
            }
      ```
### Lesson 21: Mini-Project - Side Scroller
 **Question of the Day:** How can the new types of sprite movement and collision detection be used to create a game?

  - In this lesson, you will use what you have learned about collision detection and velocity to create a simple side-scroller game!
  - Level One: Page Scroller Example
  - Level Two: Draw your background
      ```
         // BACKGROUND
         // draw the ground and other background
            background(rgb(52,159,235));
      ```
  - Level Three: Crea tus Sprites
      ```
      / /GAME SETUP
      // Create the sprites
      // set velocity for the obstacle and the target
         var frog1 = createSprite(150, 370);
         frog1.setAnimation("frog");
         var mush = createSprite(370, 370);
         mush.setAnimation("mushroom");
         var fly1 = createSprite(370, 200);
         fly1.setAnimation("fly");
         mush.scale = 0.8;
         fly1.velocityX = -3;
         fly1.velocityY = 0;
         mush.velocityX = -3;
         mush.velocityY = 0;
      ```
  - Level Four: Player Controls
      ```
        
      // JUMPING
      // if the player has reached the ground
      // stop moving down
         if (frog1.y > 370) {
         frog1.x = 150;
         frog1.y = 370;
         }
      // if the player presses the up arrow
      // start moving up
         if (keyDown("up")) {
         frog1.velocityX = 0;
         frog1.velocityY = -3;
         }

      // if the player reaches the top of the jump
      // start moving down

         if (200 > frog1.y) {
         frog1.velocityX = 0;
         frog1.velocityY = 2;
         }

      ```
  - Level Five: Making 
      ```
      // LOOPING
      // if the obstacle has gone off the left hand side of the screen, 
      // move it to the right hand side of the screen
         if (20 > mush.x) {
         mush.x = 370;
         }

      // if the target has gone off the left hand side of the screen,
      // move it to the right hand side of the screen
         if (20 > fly1.x) {
         fly1.x = 370;
         fly1.y = randomNumber(100, 370);
         }

      ```
  - Level Six: Sprite 
      
      ```
         // SPRITE INTERACTIONS
         // if the player touches the obstacle
         // the health goes down, and the obstacle turns
            if (frog1.isTouching(mush)) {
            health = health - 1;
            mush.rotation = 30;
            } else {
            mush.rotation = 0;
            }

         // if the player touches the target
         // the score goes up, the target resets
            if (frog1.isTouching(fly1)) {
            score = score + 1;
            fly1.x = 400;
            fly1.y = randomNumber(100, 400);
            }
      ```
  - Level Seven: Score and Marker
      ```
         // SCOREBOARD
         // add scoreboard and health meter
            fill("black");
            textSize(20);
            text("Health:", 280, 30);
            text (health, 350, 30);
            fill("black");
            textSize(20);
            text("Score:", 50, 30);
            text (score, 120, 30);
         // GAME OVER
         // if health runs out
         // show Game over
            if (health < 0) {
            background("black");
            fill("green");
            textSize(50);
            text("Game Over!" , 40, 200);
            textSize(50);
            text("Score:", 70, 250);
            text (score, 230, 250);
            }
      ```
  - Level Eight: Check your game
      ``` 
         //GAME SETUP
         // Create the sprites
         // set velocity for the obstacle and the target
            var frog1 = createSprite(150, 370);
            frog1.setAnimation("frog");
            var mush = createSprite(370, 370);
            mush.setAnimation("mushroom");
            var fly1 = createSprite(370, 200);
            fly1.setAnimation("fly");
            mush.scale = 0.8;
            fly1.velocityX = -3;
            fly1.velocityY = 0;
            mush.velocityX = -3;
            mush.velocityY = 0;


         //create the variables
            var score = 0;
            var health = 100;

            function draw() {
         // BACKGROUND
         // draw the ground and other background
            background(rgb(52,159,235));


         // SPRITE INTERACTIONS
         // if the player touches the obstacle
         // the health goes down, and the obstacle turns
            if (frog1.isTouching(mush)) {
               health = health - 1;
               mush.rotation = 30;
            } else {
               mush.rotation = 0;
            }

         // if the player touches the target
         // the score goes up, the target resets
            if (frog1.isTouching(fly1)) {
               score = score + 1;
               fly1.x = 400;
               fly1.y = randomNumber(100, 400);
            }


         // JUMPING
         // if the player has reached the ground
         // stop moving down
            if (frog1.y > 370) {
               frog1.x = 150;
               frog1.y = 370;
            }

         // if the player presses the up arrow
         // start moving up
            if (keyDown("up")) {
               frog1.velocityX = 0;
               frog1.velocityY = -3;
            }

         // if the player reaches the top of the jump
         // start moving down

            if (200 > frog1.y) {
               frog1.velocityX = 0;
               frog1.velocityY = 2;
            }

         // LOOPING
         // if the obstacle has gone off the left hand side of the screen, 
         // move it to the right hand side of the screen
            if (20 > mush.x) {
               mush.x = 370;
            }

         // if the target has gone off the left hand side of the screen,
         // move it to the right hand side of the screen
            if (20 > fly1.x) {
               fly1.x = 370;
               fly1.y = randomNumber(100, 370);
            }

         // DRAW SPRITES
            drawSprites();
            
         // SCOREBOARD
         // add scoreboard and health meter
            fill("black");
            textSize(20);
            text("Health:", 280, 30);
            text (health, 350, 30);
            fill("black");
            textSize(20);
            text("Score:", 50, 30);
            text (score, 120, 30);
         // GAME OVER
         // if health runs out
         // show Game over
            if (health < 0) {
               background("black");
               fill("green");
               textSize(50);
               text("Game Over!" , 40, 200);
               textSize(50);
               text("Score:", 70, 250);
               text (score, 230, 250);
            }
            }
      ```
### Lesson 22: Complex Sprite Movement
  **Question of the Day:** How can previous blocks be combined in new patterns to make interesting movements?

  - In this lesson, you will learn to combine the velocity properties of sprites with the counter pattern to create more complex sprite movements.
  - Level One: Prediction
  - Level Two-Four: Skills Development
     - Level Two:
         ```
               var car = createSprite(50, 200);
               car.setAnimation("red_car");
               car.velocityX = 0.2;

               function draw() {
               background("gray");
               
            // Add code to make the car speed up.
               car.velocityX = car.velocityX + 0.1;
               drawSprites();
               } 
         ```
     - Level Three:
        ```
            var rock = createSprite(200, 50);
            rock.setAnimation("rock");
            rock.velocityY = 0.5;

            function draw() {
            background("skyblue");
            
         // Add code to make the rock speed up as it falls.
            rock.velocityY = rock.velocityY + 0.1;
            
            drawSprites();
            }
        ```
     - Level Four:
        ```
            var car = createSprite(50, 200);
            car.setAnimation("blue_car");
            car.velocityX =  10;
            noStroke();
            function draw() {
            background("burlywood");
            fill("blue");
            rect(350,0,100,400);     
         // Add code to slow the car down before it goes into the water.
            car.velocityX = car.velocityX - 0.25;
            drawSprites();
            }
        ```
  - Level Five: Practice
      ```
         var balloon = createSprite(200, 40);
         balloon.setAnimation("balloon");
         balloon.scale = 0.15;
      // Take a look at the code that makes the balloon move.
         balloon.velocityY =  8;


         function draw() {
         background("skyblue");
         fill("green");
         rect(0, 350, 400, 50);

      // Add code to make the balloon slow down and float away.
         balloon.velocityY = balloon.velocityY - 0.2;


         drawSprites();
         }
      ```
  - Level Six: Assessment
      ```
         var rock = createSprite(200, 350);
         rock.setAnimation("rock");
         rock.velocityY =  -10;
         rock.rotationSpeed = 2;

         function draw() {
         background("skyblue");
         
      // Add code to make the rock slow down and then fall.
         rock.velocityY = rock.velocityY + 0.2;
 
         drawSprites();
         }
      ```
  - Level Seven: Challenges
      ```
         var plane = createSprite(50, 350);
         plane.setAnimation("plane");
         var rock = createSprite(150, 350);
         rock.setAnimation("rock");
         var rockdown = createSprite(350, 100);
         rockdown.setAnimation("rock_down");

      // You might want to change these 
         plane.velocityY = -15;
         plane.velocityX = 1;

         function draw() {
         background("lightblue");
         
      // Add code that moves the plane down.
         plane.velocityX = plane.velocityX + 0.5;
         plane.velocityY = plane.velocityY + 0.8;

         
         drawSprites();
         }
      ```
### Lesson 23: Collisions
 **Question of the Day:** How can programmers build on abstractions to create further abstractions?

  - In this lesson, you will learn how to use the new collision blocks (collide, displace, bounce, and bounceOff) to make your sprite interact in new ways.
  - Level One: Code Prediction
  - Level Two- Five: Skills Development
     - Level Two:
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
            
         // Program the giraffe to push the monkey off the screen.
            if (monkey.isTouching(giraffe)) {
               monkey.velocityX = 1;
            }         
            drawSprites();
            }
        ```
     - Level Three:
        ```
         // Create elephant sprite
            var elephant = createSprite(200, 400);
            elephant.setAnimation("elephant");
            elephant.scale = 0.5;
            elephant.velocityY = randomNumber(-3,-1);

         // Create hippo sprite
            var hippo = createSprite(200,100);
            hippo.setAnimation("hippo");
            hippo.scale = 0.5;

            function draw(){
         // Draw background
            background("white");
            
         // Add code to make the elephant push the hippo off the screen.
            if (hippo.isTouching(elephant)) {
               hippo.velocityY = randomNumber(-3,-1);
            }

            
            drawSprites();
            }
        ```
     - Level Four:
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
         // Take a look at the new block and how it is being used.
         // Fix the block so that the elephant is pushing the hippo.
            elephant.displace(hippo); 
            drawSprites();
            }
        ```
     - Level Five:
        ```
            var parrot = createSprite(50,200);
            parrot.setAnimation("parrot");
            parrot.velocityX = 2;
            parrot.scale = 0.3;

            var penguin = createSprite(350,200);
            penguin.setAnimation("penguin");
            penguin.velocityX = -2;
            penguin.scale = 0.3;

            function draw() {
         // Switch out the displace block for the new blocks, one at a time 
         // to see what each one does.
            penguin.displace(parrot);
            
            background("white");
            drawSprites();
            }
        ```
  - Level Six: Practice
     ```
         var scenery = createSprite(200, 200);
         scenery.setAnimation("subway");

         var kid = createSprite(350, 250);
         kid.setAnimation("kid");
         kid.velocityX = -2.5;
         kid.scale = 0.6;

         var suitcase = createSprite(150, 280);
         suitcase.setAnimation("suitcase");
         suitcase.scale = 0.8;

         function draw() {
      // Choose the best block to make the child push the suitcase.
         kid.displace(suitcase);
         
         drawSprites();
         }
     ```
  - Level Seven: Assessment
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

      // For each pair of animals, choose the sprite interaction 
      // that matches the target image.

         giraffe.bounce(parrot);
         hippo.displace(elephant);
         monkey.displace(rabbit);

         snake.bounce(pig);
         drawSprites();
         }
     ```
  - Level Eight: Challenges
     ```
      // Read the code below and then run the program to 
      // see the behavior of the basketball and pool ball.

         var basketball = createSprite(100, 0);
         basketball.setAnimation("basketball");
         basketball.bounciness = 0.8;

         var poolball = createSprite(325, 0);
         poolball.setAnimation("poolball");
         poolball.bounciness = 0.4;

         var soccerball = createSprite(225, 0);
         soccerball.setAnimation("soccerball");
         //2) Use the new block to set the **bounciness** of your soccer ball.
         soccerball.bounciness = 0.7;

         var wood = createSprite(200, 375);
         wood.setAnimation("floor");


         function draw() {
         background("skyblue");
         
         basketball.bounceOff(wood);
         soccerball.bounceOff(wood);
         poolball.bounceOff(wood);
         
         basketball.velocityY = basketball.velocityY + 0.2;
         soccerball.velocityY = soccerball.velocityY + 0.2;
         poolball.velocityY = poolball.velocityY + 0.2;
         
         drawSprites();
}
     ```
### Lesson 24: Mini-Project - Flyer Game
 **Question of the Day:** How can the new types of collisions and modeling movement be used to create a game?

  - In this lesson, you will use what you have learned about simulating gravity and the different types of collisions to create a simple flyer game!
  - Level One: Flyer Game Example
  - Level Two: Crea tus Sprites
      ```
         // GAME SETUP
         // create player, target, and obstacles
            var player = createSprite(200, 100);
            player.setAnimation("fly_bot");
            player.scale = 0.6;
            var target = createSprite(350, 350);
            target.setAnimation("coin");
            target.scale = 0.6;
            var rock1 = createSprite(0, randomNumber(50, 350));
            rock1.setAnimation("rock");
            rock1.scale = 0.7;
            rock1.velocityX = 3.5;
            var rock2 = createSprite(randomNumber(50, 350), 0);
            rock2.setAnimation("rock");
            rock2.scale = 0.7;
            rock2.velocityY = 3.5;


            function draw() {
            background("lightblue");
            
         // FALLING
            player.velocityY = 3;
            
         // LOOPING
            if (rock1.x > 350) {
               rock1.x = 50;
            }
            if (rock2.y > 350) {
               rock2.y = 50;
            }
            
            
         // PLAYER CONTROLS
         // change the y velocity when the user clicks "up"
            if (keyDown("up")) {
               player.y = player.y - 7;
            }
            
         // decrease the x velocity when user clicks "left"
            
            if (keyDown("left")) {
               player.x = player.x - 3;
            }
         // increase the x velocity when the user clicks "right"
            if (keyDown("right")) {
               player.x = player.x + 3;
            }
            
         // SPRITE INTERACTIONS
         // reset the coin when the player touches it
            if (player.isTouching(target)) {
               target.x = randomNumber(50, 350);
               target.y = randomNumber(50, 350);
            }
            
         // make the obstacles push the player
            player.bounce(rock1);
            
            player.bounce(rock2);
            
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
  - Level Three - Five: Player Controls
     - Level Three:
        ```
         // FALLING
            player.velocityY = 3;
        ```
     - Level Four:
        ```
         // change the y velocity when the user clicks "up"
            if (keyDown("up")) {
            player.y = player.y - 7;
            }

         // decrease the x velocity when user clicks "left"

            if (keyDown("left")) {
            player.x = player.x - 3;
            }
         // increase the x velocity when the user clicks "right"
            if (keyDown("right")) {
            player.x = player.x + 3;
            }  

        ```
     - Level Five:
        ```
         // PLAYER CONTROLS
         // change the y velocity when the user clicks "up"
            if (keyDown("up")) {
            player.y = player.y - 7;
            }

         // decrease the x velocity when user clicks "left"

            if (keyDown("left")) {
            player.x = player.x - 3;
            }
         // increase the x velocity when the user clicks "right"
            if (keyDown("right")) {
            player.x = player.x + 3;
            }
        ```
  - Level Six: Sprite movement
     ```
      // LOOPING
         if (rock1.x > 350) {
         rock1.x = 50;
         }
         if (rock2.y > 350) {
         rock2.y = 50;
         }
     ```
  - Level Seven: Sprite interactions
     ```
      // SPRITE INTERACTIONS
      // reset the coin when the player touches it
         if (player.isTouching(target)) {
         target.x = randomNumber(50, 350);
         target.y = randomNumber(50, 350);
         }
     ```
  - Level Eight: Check your game
     ```
      // GAME SETUP
      // create player, target, and obstacles
         var player = createSprite(200, 100);
         player.setAnimation("fly_bot");
         player.scale = 0.6;
         var target = createSprite(350, 350);
         target.setAnimation("coin");
         target.scale = 0.6;
         var rock1 = createSprite(0, randomNumber(50, 350));
         rock1.setAnimation("rock");
         rock1.scale = 0.7;
         rock1.velocityX = 3.5;
         var rock2 = createSprite(randomNumber(50, 350), 0);
         rock2.setAnimation("rock");
         rock2.scale = 0.7;
         rock2.velocityY = 3.5;


         function draw() {
         background("lightblue");
         
      // FALLING
         player.velocityY = 3;
         
      // LOOPING
         if (rock1.x > 350) {
            rock1.x = 50;
         }
         if (rock2.y > 350) {
            rock2.y = 50;
         }
         
         
      // PLAYER CONTROLS
      // change the y velocity when the user clicks "up"
         if (keyDown("up")) {
            player.y = player.y - 7;
         }
         
      // decrease the x velocity when user clicks "left"
         
         if (keyDown("left")) {
            player.x = player.x - 3;
         }
      // increase the x velocity when the user clicks "right"
         if (keyDown("right")) {
            player.x = player.x + 3;
         }
         
      // SPRITE INTERACTIONS
      // reset the coin when the player touches it
         if (player.isTouching(target)) {
            target.x = randomNumber(50, 350);
            target.y = randomNumber(50, 350);
         }
         
      // make the obstacles push the player
         player.bounce(rock1);
         
         player.bounce(rock2);
         
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
### Lesson 25: Functions
 **Question of the Day:** How can programmers use functions to create their own abstractions?

  - In this lesson, you will learn how to better organize your code using functions to make your program code more readable and remove repeated blocks of code.
  - Level One: Predict
  - Level Two-Three: Skills Development
     - Level Two:
        ```
         // Call the drawBalloons function to reveal the full image. 
            drawBalloons();
        ```
     - Level Three:
        ```
         // Read the 4 functions to understand what each one does.
         // Call the functions in an order that draws the scene in the way that looks best to you.
            drawBackground();
            drawTrees();
            drawClouds();

            drawFence();
        ```
  - Level Four: Predict
      ```
        Answer is C
      ```
  - Level Five: Practice
      ```
         var flyer = createSprite();
         flyer.setAnimation("flyer");
         setFlyer();

         function draw(){
         treesBackground();
         if(flyer.x < -50){

         }
         drawSprites();
         }

         function setFlyer(){
         flyer.x = 450;
         flyer.y = randomNumber(0, 400);
         flyer.velocityX = randomNumber(-1, -3);
         }
      ```
  - Level Six:Quick Check
  - Level Seven - Nine: Collector's Game
     - Level Seven:
         ```
            var coin = createSprite(200,10);
            coin.setAnimation("coin_gold_1");
            setCoin();

            var bunny = createSprite(200,350);
            bunny.setAnimation("bunny1_ready_1");

            var score = 0;

            function draw() {
            background("white");
            
            if(keyDown("left")){
               bunny.x = bunny.x - 2;
            }
            
            if(keyDown("right")){
               bunny.x = bunny.x + 2;
            }
            
            if(coin.y > 400){
               setCoin();
            }
            if (bunny.isTouching(coin)) {
               score = score + 1;
            }
            
            textSize(20);
            text("Score: " + score, 10, 10, 100, 100);
            drawSprites();
            }
         ```
     - Level Eight:
         ```
            var coin = createSprite(200,10);
            coin.setAnimation("coin_gold_1");
            setCoin();

            var bunny = createSprite(200,350);
            bunny.setAnimation("bunny1_ready_1");

            var score = 0;

            function draw() {
            background("white");
            
            if(keyDown("left")){
               bunny.x = bunny.x - 2;
            }
            
            if(keyDown("right")){
               bunny.x = bunny.x + 2;
            }
            
            if(coin.y > 400){
               setCoin();
            }
            if (bunny.isTouching(coin)) {
               score = score + 1;
            }
            
            textSize(20);
            text("Score: " + score, 10, 10, 100, 100);
            drawSprites();
            }

            function setCoin(){
            coin.velocityY = 3;
            }
         ```
     - Level Nine:
        ```
            var coin = createSprite(200,10);
            coin.setAnimation("coin_gold_1");
            setCoin();

            var bunny = createSprite(200,350);
            bunny.setAnimation("bunny1_ready_1");

            var score = 0;

            function draw() {
            background("white");
            
            if(keyDown("left")){
               bunny.x = bunny.x - 2;
            }
            
            if(keyDown("right")){
               bunny.x = bunny.x + 2;
            }
            
            if(coin.y > 400){
               setCoin();
            }
            if (bunny.isTouching(coin)) {
               score = score + 1;
            }
            
            textSize(20);
            text("Score: " + score, 10, 10, 100, 100);
            drawSprites();
            }

            function setCoin(){
            coin.velocityY = 3;
            }
        ```
  - Level Ten: Challenges
      ```
         var ball = createSprite(200, 200);
         ball.setAnimation("ball");
         ball.scale = 0.10;
         ball.velocityY = 5;
         ball.velocityX = 10;
         var paddle = createSprite(200, 380);
         paddle.setAnimation("paddle");
         paddle.width = 200;
         var brick1 = createSprite(100, 150);
         brick1.setAnimation("brick");
         var brick2 = createSprite(300, 75);
         brick2.setAnimation("brick");
         var star = createSprite(54, 95);
         star.setAnimation("redstar");
         var star2 = createSprite(302, 25);
         star2.setAnimation("redstar");

      //Creates an invisible sprite around the edges
         createEdgeSprites();
         function draw() {
      //Call Functions
         background1();
         move();
         ballBounce();
         collectStar();
         drawSprites();
         }
      //Create the gameBackground Function
         function background1() {
         background("white");
         }
      //Create the movePaddle Function
         function move() {
         if (keyDown("left")) {
            sprite.x = __;
         }
         if (keyDown("right")) {     
         }
         }


      //Create the ballBounce Function
         function ballBounce() {
         ball.bounceOff(paddle);
         ball.bounceOff(brick1);
         ball.bounceOff(brick2);
         ball.bounceOff(topEdge);
         ball.bounceOff(bottomEdge);
         ball.bounceOff(leftEdge);
         ball.bounceOff(rightEdge);
         }

      //Create the collectStar Function
         function collectStar() {
         if (ball.isTouching(star)) {
            star.x = 450;
            star.y = 450;
         }
         if (ball.isTouching(star2)) {
            star2.x = 450;
            star2.y = 450;
         }
         }
      //Bonus Function: setScore
      ```
### Lesson 26: The Game Design Process
 **Question of the Day:** How does having a plan help to make a large project easier?
   - In this lesson, you will explore the process you will use for the remainder of the unit when designing games.
   - Level One: Same Game
   - Level Two: Plan your Project
   - Level Three-Four: Set Up Sprites
       ```
         // Variables
            var score = 0;
         // Create Sprites
            var cake = createSprite(350,200);

            cake.setAnimation("cake");
            var player = createSprite(200,200);
            player.setAnimation("alienWalkRight");

            var enemy1 = createSprite();
            enemy1.setAnimation("ladybug");
       ```
   - Level Five-seven: Control Your Player
       ```
          var enemy2 = createSprite();

         function draw() {
      // draw the background
         gameBackground();
      // update the sprites
         enemiesTouchCake();
         movePlayer();
         displaceEnemies();
         enemiesTouchWater();
         showScore();
         drawSprites();
         }
       ```
   - Level Eight-Twelve: Sprite Interactions
       ```
         // Variables
            var score = 0;
         // Create Sprites
            var cake = createSprite(350,200);

            cake.setAnimation("cake");
            var player = createSprite(200,200);
            player.setAnimation("alienWalkRight");

            var enemy1 = createSprite();
            enemy1.setAnimation("ladybug");

            var enemy2 = createSprite();

            function draw() {
         // draw the background
            gameBackground();
         // update the sprites
            enemiesTouchCake();
            movePlayer();
            displaceEnemies();
            enemiesTouchWater();
            showScore();
            drawSprites();
            }

         // Functions
            function gameBackground() {
            noStroke();
            background(rgb(0,100,255));
            fill(rgb(100,100,100));
            rect(0,150,400,100);
            fill(rgb(80,80,80));
            rect(0,140,400,10);
            rect(0,250,400,10);
            }
       ```
   - Level 13: Challenges
       ```
         // Variables
            var score = 0;
         // Create Sprites
            var cake = createSprite(350,200);

            cake.setAnimation("cake");
            var player = createSprite(200,200);
            player.setAnimation("alienWalkRight");

            var enemy1 = createSprite();
            enemy1.setAnimation("ladybug");

            var enemy2 = createSprite();

            function draw() {
         // draw the background
            gameBackground();
         // update the sprites
            enemiesTouchCake();
            movePlayer();
            displaceEnemies();
            enemiesTouchWater();
            showScore();
            drawSprites();
            }

         // Functions
            function gameBackground() {
            noStroke();
            background(rgb(0,100,255));
            fill(rgb(100,100,100));
            rect(0,150,400,100);
            fill(rgb(80,80,80));
            rect(0,140,400,10);
            rect(0,250,400,10);
            }

            function enemiesTouchCake(){
            
            }

            function movePlayer(){
            
            }

            function displaceEnemies(){

            }

            function enemiesTouchWater(){
            
            }

            function showScore() {
            fill("white");
            textSize(20);
            text("Score",20,20,200,100);
            text(score,20,40,200,100);
            }
       ```
### Lessson 27 Using the Game Design Process
 **Question of the Day:** How can the problem-solving process help programmers to manage large projects?

   - In this multi-day lesson, you will use the problem-solving process to create a platform jumper game!
   - Level One: Sample Platform Jumper Game
   - Level Two: Build a Platform Jumper
   - Level Three-Six: Platform Jumper - Background and Variables
        ```
            function background2() {
            background("white");
            }
        ```
   - Level Seven - Nine: Platform Jumper - Jumper
        ```
            function draw() {
         // draw the background
            background1();
         // update the sprites
            
            drawSprites();
            }
        ```
   - Level Ten - Twelve: Platform Jumper - Items
   - Level Threen - Sixteen: Platform Jumper - Player
        ```
         // Variables

         // Create Sprites

            function draw() {
         // draw the background
            background1();
         // update the sprites
            
            drawSprites();
            }

         // Functions
            function background1() {
            background("darkBlue");
            noStroke();
            fill("yellow");
            ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
            ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
            ellipse(340, 50, 60, 60);
            fill("darkBlue");
            ellipse(320, 30, 60, 60);
            }
            function background2() {
            background("white");
            }
            function showScore() {
            fill("white");
            textSize(20);
            text("Score: ",10, 10, 80, 20);
            }
        ```
   - Level Seventeen: Platform Jumper Review
        ```
         // Variables

         // Create Sprites

            function draw() {
         // draw the background
            background1();
         // update the sprites
            
            drawSprites();
            }

         // Functions
            function background1() {
            background("darkBlue");
            noStroke();
            fill("yellow");
            ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
            ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
            ellipse(340, 50, 60, 60);
            fill("darkBlue");
            ellipse(320, 30, 60, 60);
            }
            function background2() {
            background("white");
            }
            function showScore() {
            fill("white");
            textSize(20);
            text("Score: ",10, 10, 80, 20);
            }
        ```
   - Level 18: challenges





