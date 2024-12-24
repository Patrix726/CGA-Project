#### Name: Hailegiorgis Wagaye

#### ID: UGR/26704/14

## **Lessons Summary**

## **Lesson One - Programming for a Purpose**

Question of the day: How can we design animations and games based on the needs of a user? Refer to your activity guide to recommend templates to clients.
- Checking out for the Templete
- On those Templete: 

  **Welcome Screen:** This template introduces users to the app or project. It usually includes a welcoming message, instructions on how to use the app, and a button to start or continue. It sets the tone and purpose of the project.
    
    **User Input Screen:** This template focuses on capturing user input, such as text fields or buttons that allow users to enter their name, select options, or answer questions. This input is often used to personalize the app experience.
    
    **Information Screen:** This template provides additional content or information to the user. It might contain instructions, educational facts, or the purpose of the app. This is often static text or images that provide context.
    
    **Feedback Screen:** This template is designed to give users feedback based on their input or actions within the app. It might display a "Thank You" message, show correct/incorrect answers in a quiz, or provide a summary of what the user has accomplished.
    
    **End/Exit Screen:** This template serves as the final screen of the app, often thanking the user for participating and providing options to restart the experience or exit the app.
- Complete the Survey
    
## **Lesson Two - Plotting Shapes**

**Question of the Day:** How can we clearly communicate how to draw something on a screen?

To clearly communicate how to draw something on a screen, we need to use precise and simple instructions.
  
  -The Drawing Shapes templete:
  
      Explore using this tool that lets you draw different colored shapes.
         - Choose a color to change the color of the shapes
         - Click on a shape EVERY TIME you want to draw a new shape
## **Lesson Three - Shapes and Coordinates**

**Question of the Day:** How can we use coordinates to position and size shapes on a canvas?

To position and size shapes effectively on a screen, we must understand how coordinates and dimensions work in a 2D grid system.

- **Key Concepts:**
  - **Canvas and Grid:** The canvas has a coordinate system starting at `(0, 0)` in the top-left corner. The x-axis increases to the right, and the y-axis increases downward.
  - **Rect Function:** The `rect(x, y)` function places a rectangle on the canvas with its top-left corner at `(x, y)`. Additional parameters can be used for width and height.
  - **Predicting Placement:** Experimenting with different `(x, y)` values helps visualize where shapes will appear.
  - **Default Dimensions:** If width and height are not specified, default values (e.g., 50x50 pixels) are used.

- **Activities:**
  - Draw shapes on the grid using coordinates.
  - Test various values to understand their effect on shape position and size.
  - Discuss with peers to predict shape placement based on given code.

![Screenshot of 3 Lessons](https://i.ibb.co/R3mj9Dp/Screenshot-3-lesson.png)




### **Lesson 4: Parameters in Functions**
- **Question of the Day:** How can we make functions more flexible using parameters?
- **Key Concepts:**
  - Parameters allow functions to take inputs and produce different outputs based on those inputs.
  - They are essential for creating reusable and dynamic code.
- **Activities:** 
  - Writing functions with parameters to customize behaviors.
  - Using examples like changing colors or sizes based on input values.

---

### **Lesson 5: Variables**
- **Question of the Day:** How do variables help us store and manage information in programs?
- **Key Concepts:**
  - Variables hold data that can change as the program runs.
  - They are used for tracking scores, user input, or settings in a program.
- **Activities:**
  - Creating and updating variables in animations and games.
  - Using variables for interactivity, like keeping count of events.

---

### **Lesson 6: Random Numbers**
- **Question of the Day:** How can we use random numbers to make programs dynamic?
- **Key Concepts:**
  - Random numbers introduce unpredictability and variation.
  - They are used for tasks like randomizing movement, generating game challenges, or changing colors.
- **Activities:**
  - Using `randomNumber(min, max)` to generate values within a range.
  - Applying randomness in animations or interactive features.

---

### **Lesson 7: Mini-Project: Robot Face**
- **Question of the Day:** How can we use randomness creatively in projects?
- **Key Concepts:**
  - Combines randomness with shape drawing and coordinates.
  - Randomly places or modifies elements of a robot face design.
- **Activities:**
  - Building a custom robot face that changes features randomly.
  - Applying random number generation to positioning or sizing elements.

---

### **Lesson 8: Sprites**
- **Question of the Day:** How can we use sprites to represent objects in animations or games?
- **Key Concepts:**
  - Sprites are visual elements that can move or interact in programs.
  - They simplify complex animations and enhance graphics.
- **Activities:**
  - Creating and customizing sprites using the Game Lab.
  - Incorporating sprites into interactive projects.

---

### **Lesson 9: Sprite Properties**
- **Question of the Day:** How can sprite properties make animations more dynamic?
- **Key Concepts:**
  - Sprites have properties like position, size, and speed that can be manipulated.
  - Understanding and modifying properties allow for advanced animations and interactivity.
- **Activities:**
  - Changing sprite properties over time.
  - Experimenting with behaviors like bouncing or following paths.

---

### **Lesson 10: Testing and Debugging**
- **Question of the Day:** Why is testing important in programming, and how can we improve our programs?
- **Key Concepts:**
  - Testing ensures programs work as intended and identifies bugs.
  - Debugging involves finding and fixing errors to improve performance.
- **Activities:**
  - Testing interactive programs with users.
  - Refining code for functionality and user experience.


![Screenshot of 4-10 Lessons](https://i.ibb.co/QMhHbg5/Capture.png)



**Lets Write the Summary in short and simple statment**

11. **Mini-Project - Captioned Scenes:** Focuses on creating scenes with captions, allowing for dynamic storytelling through visual elements.
12. **The Draw Loop:** Introduces the draw loop to continually update animations and logic, enabling ongoing visual changes in the program.
13. **Sprite Movement:** Teaches how to move sprites on the screen, using variables and logic to control their behavior.
14. **Mini-Project - Animation:** Encourages applying learned skills to create a full animation, using sprite properties and motion.
15. **Conditionals:** Explores how to use if-statements to control actions based on conditions, enhancing program interactivity and responsiveness.

- **Code Example**:
  ```javascript

      if (bird.x < 0) bird.x = 400;


  ```

![Screenshot of 11-15 Lessons](https://i.ibb.co/PYPz49y/Capture.png)




---

### **Lesson 16: Debugging**
- **Objective**: Identify and fix bugs to ensure smooth gameplay and performance.
- **Key Points**:
  - Use `console.log()` for debugging.
  - Trace errors in sprite movement, collisions, and animations.
- **Code Example**:
  ```javascript

      console.log("Ball Position: " + ball.x); // Debugging log

  ```

---

### **Lesson 17: Functions and Loops**
- **Objective**: Create reusable functions and use loops to streamline repetitive tasks.
- **Key Points**:
  - Define and call custom functions for modularity.
  - Use loops for repetitive actions like spawning multiple enemies.
- **Code Example**:
  ```javascript
  function spawnEnemy() {}
  ```

---

### **Lesson 18: Animation States**
- **Objective**: Switch between different animation states based on user input or game conditions.
- **Key Points**:
  - Use conditional statements to change sprite animations.
  - Represent different states like idle, running, or jumping.
- **Code Example**:

  ```javascript

      if (keyDown("RIGHT_ARROW")) {
          player.x += 5;
          player.shapeColor = "blue"; // Running state
      } 
  ```

---

### **Lesson 19: Timer and Scoring**
- **Objective**: Add score and timer elements to games.
- **Key Points**:
  - Update score dynamically.
  - Display timers to create challenges.

---

### **Lesson 20: Collision Basics**
- **Objective**: Handle sprite collisions to add interaction.
- **Key Points**:
  - Use `isTouching()` for collision detection.
  - Use `bounceOff()` or `collide()` for specific collision effects.
- **Code Example**:
  ```javascript

      if (ball.isTouching(wall)) {
          ball.velocityX = -2; // Reverse direction on collision
      }
  ```

---


![Screenshot of 15-20 Lessons](https://i.ibb.co/T1tzXgs/20.png)


### **Lesson 21: Mini-Project - Side Scroller**
- **Objective**: Build a side-scrolling game where the player avoids obstacles.
- **Key Points**:
  - Use background movement for scrolling effect.
  - Create obstacles that move toward the player.
- **Code Example**:
  ```javascript
      ground.x -= 5; // Scroll the ground
      if (ground.x < 0) ground.x = 400; // Reset position
      drawSprites();
  
  ```

---

### **Lesson 22: Complex Sprite Movement**
- **Objective**: Implement advanced sprite movement using physics or custom algorithms.
- **Key Points**:
  - Add gravity, acceleration, and friction to sprites.
- **Code Example**:
  ```javascript

      if (keyDown("SPACE")) player.velocityY = -10; // Jump
      player.collide(ground); // Prevent falling through

  ```

---

### **Lesson 23: Collisions**
- **Objective**: Detect and handle collisions with more precision.
- **Key Points**:
  - Use `overlap()` for actions on collision.
  - Destroy or trigger events on collision.
- **Code Example**:
  ```javascript

      if (bullet.overlap(enemy)) {
          enemy.destroy(); // Destroy enemy on collision
      }
  ```

---

### **Lesson 24: Mini-Project - Flyer Game**
- **Objective**: Create a game where the player controls a flying object.
- **Key Points**:
  - Implement upward movement with gravity pull-down.
- **Code Example**:
  ```javascript

      bird.velocityY += gravity;
      if (keyDown("SPACE")) bird.velocityY = -5; // Fly up

  ```

---

### **Lesson 25: Functions**
- **Objective**: Refactor code using reusable functions.
- **Key Points**:
  - Simplify tasks by defining functions for repeating logic.
- **Code Example**:
  ```javascript
  function spawnCloud() {
  //user define func
  }

  function draw() {
     //draw func
  }
  ```

---

### **Lesson 26: The Game Design Process**
- **Objective**: Introduce steps to design a complete game.
- **Steps**:
  1. Brainstorm ideas.
  2. Create a prototype.
  3. Test and iterate.
  4. Finalize and polish.

---

### **Lesson 27: Using the Game Design Process**
- **Objective**: Apply the design process to refine game mechanics.
- **Example**:
  - Testing player controls and enemy interactions.
  - Adding feedback like sound effects and visual cues.

---

### **Lesson 28: Project - Design a Game**
- **Objective**: Create a custom game incorporating all learned concepts.
- **Key Points**:
  - Combine movement, collisions, scoring, and animations.
  - Use polished sprites and backgrounds for final touches.


![Screenshot of 21-28 Lessons](https://i.ibb.co/HpNZrrz/Capture.png)





