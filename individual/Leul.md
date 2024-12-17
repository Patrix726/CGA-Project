**Name:** Leul Gedion  
**ID:** UGR/25630/14  

---

### **Lessons Summary**

---

#### **Lesson One: Programming for a Purpose**  
**Question of the Day:**  
*How can we design animations and games that cater to the needs of users?*  

**Key Focus:**  
Use your activity guide to recommend suitable templates to clients.  

**Template Types:**  

1. **Welcome Screen**  
   - Introduces the app or project with a friendly message and instructions.  
   - Includes a start or continue button to set the tone and purpose.  

2. **User Input Screen**  
   - Collects user inputs using text fields, buttons, or interactive elements.  
   - Customizes the app experience based on user data.  

3. **Information Screen**  
   - Displays static content, instructions, or facts for user reference.  
   - Adds context with text and images.  

4. **Feedback Screen**  
   - Provides responses based on user actions, such as quiz results, "Thank You" notes, or summaries.  

5. **End/Exit Screen**  
   - Marks the conclusion with gratitude messages.  
   - Offers options to restart or exit the app.  

**Task:**  
Complete the survey provided.  

---

#### **Lesson Two: Plotting Shapes**  
**Question of the Day:**  
*How can we effectively communicate instructions for drawing shapes on a screen?*  

**Key Focus:**  
Learn to use the **Drawing Shapes Template** for visual elements.  

**Steps to Draw Shapes:**  
1. Choose a color for the shape.  
2. Click on a shape to add it to the canvas.  
3. Experiment with different options to create designs.  

---

#### **Lesson Three: Shapes and Coordinates**  
**Question of the Day:**  
*How can coordinates help us position and size shapes on a canvas?*  

**Key Concepts:**  

1. **Canvas and Grid:**  
   - The canvas uses a 2D coordinate system starting at (0, 0) in the top-left.  
   - The x-axis extends to the right, and the y-axis extends downward.  

2. **`rect()` Function:**  
   - `rect(x, y)` places a rectangle at the top-left corner (x, y).  
   - Additional parameters specify the width and height.  

3. **Predicting Placement:**  
   - Experiment with (x, y) values to understand shape positioning.  
   - Default dimensions are applied if width and height are not specified (e.g., 50x50 pixels).  

**Activities:**  
- Draw shapes using different coordinates.  
- Change parameters to observe effects on placement and size.  
- Collaborate with peers to predict shape positions through code analysis.  

--- 
![Screenshot Of lesson1-3](https://i.ibb.co/yqKBTd2/Screenshot-2024-11-26-141242.png)


**Lesson 4: Parameters in Functions**  
*Question of the Day:* How do parameters make functions more adaptable?  
**Key Concepts:**  
- Parameters enable functions to take inputs and generate varied outputs.  
- They are crucial for creating flexible and reusable code.  
**Activities:**  
- Writing functions with parameters to adjust behaviors.  
- Examples include modifying colors or sizes based on input values.  

**Lesson 5: Variables**  
*Question of the Day:* How do variables help manage data in programs?  
**Key Concepts:**  
- Variables store information that can change as the program runs.  
- They are used for tasks such as tracking scores, user inputs, or program settings.  
**Activities:**  
- Creating and updating variables in animations and games.  
- Using variables for interactivity, such as event counting.  

**Lesson 6: Random Numbers**  
*Question of the Day:* How do random numbers add dynamism to programs?  
**Key Concepts:**  
- Random numbers introduce variation and unpredictability.  
- They are useful for randomizing movements, creating challenges, or changing colors.  
**Activities:**  
- Generating random values within a range using `randomNumber(min, max)`.  
- Incorporating randomness in animations or interactive features.  

**Lesson 7: Mini-Project: Robot Face**  
*Question of the Day:* How can randomness enhance creative projects?  
**Key Concepts:**  
- Combines randomness with drawing shapes and positioning elements.  
- Allows for dynamic changes to a robot face design.  
**Activities:**  
- Designing a robot face with randomly changing features.  
- Using random numbers to adjust positions or sizes of elements.  

**Lesson 8: Sprites**  
*Question of the Day:* How are sprites used to represent objects in animations or games?  
**Key Concepts:**  
- Sprites are graphical elements that can move and interact in programs.  
- They simplify complex animations and improve visuals.  
**Activities:**  
- Creating and customizing sprites in Game Lab.  
- Integrating sprites into interactive projects.  

**Lesson 9: Sprite Properties**  
*Question of the Day:* How do sprite properties enhance animations?  
**Key Concepts:**  
- Sprites have attributes like position, size, and speed that can be modified.  
- Manipulating these properties allows for dynamic animations and interactivity.  
**Activities:**  
- Modifying sprite properties over time.  
- Exploring behaviors like bouncing or following paths.  

**Lesson 10: Testing and Debugging**  
*Question of the Day:* Why is testing essential, and how can it improve programs?  
**Key Concepts:**  
- Testing ensures programs work correctly and identifies issues.  
- Debugging involves finding and fixing errors for better functionality.  
**Activities:**  
- Testing programs with user interactions.  
- Refining code to enhance performance and user experience.

  ![Screenshot Of lesson4-10](https://i.ibb.co/tDJCxHb/Screenshot-2024-12-03-113706.png)


# README: Lessons 10-15 - Understanding Random Numbers and Visual Dynamics

## Overview:
In lessons 10-15, we focused on using random numbers in our programs to create dynamic, unpredictable visuals and behaviors. By leveraging the `randomNumber()` function, we were able to manipulate properties like size, position, and color to make our code generate different outcomes each time it is executed. This approach helps us create visually engaging graphics and animations that change every run, enhancing the interactivity and creativity of our projects.

---

## Lesson Breakdown:

### **Lesson 10: Random Ellipse Positioning**
**Key Concept**: Randomly positioning an ellipse on the screen.

- **Goal**: We used the `randomNumber()` function to randomly place an ellipse on the horizontal axis of the screen. This simple exercise helped us understand how to apply randomness to the positioning of shapes in a 2D space.
  
  **Code Example**:
  ```javascript
  fill("orange");
  ellipse(randomNumber(0, 400), 200, 50, 50);
  ```

### **Lesson 11: Random X and Y Positioning**
**Key Concept**: Making the ellipse appear anywhere on the screen by randomizing both `x` and `y` coordinates.

- **Goal**: We expanded on the previous exercise by applying randomness to both the `x` and `y` positions of the ellipse, making it appear at different locations across the screen each time the program runs.

  **Code Example**:
  ```javascript
  fill("orange");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 50, 50);
  ```

### **Lesson 12: Random Size for Shapes**
**Key Concept**: Using random numbers to change the size of shapes dynamically.

- **Goal**: We used random numbers to modify the size of elements (e.g., petals of a flower). Each petal had a different random size, creating a more organic and dynamic look.

  **Code Example**:
  ```javascript
  var petalSize;
  petalSize = randomNumber(15, 65);
  // Petals
  ellipse(75, 100, petalSize, petalSize);
  ellipse(125, 100, petalSize, petalSize);
  ellipse(100, 75, petalSize, petalSize);
  ellipse(100, 125, petalSize, petalSize);
  // Center
  fill("yellow");
  ellipse(100, 100, 50, 50);
  ```

### **Lesson 13: Debugging with Random Rectangles**
**Key Concept**: Debugging and correctly stacking random rectangles.

- **Goal**: We corrected an issue where rectangles were not appearing at random `x` positions. We fixed the code so that the rectangles stacked at different random positions, creating a varied visual effect.
  
  **Code Example**:
  ```javascript
  var xPosition = randomNumber(0, 200);
  fill("pink");
  rect(xPosition, 100, 250, 50);
  fill("purple");
  rect(xPosition, 150, 250, 50);
  fill("firebrick");
  rect(xPosition, 200, 250, 50);
  ```

### **Lesson 14: Rainbow Snake with Random Sizes**
**Key Concept**: Creating a dynamic rainbow snake using random sizes for each segment.

- **Goal**: We made the rainbow snake dynamic by randomizing the size of each segment, making the snake's appearance change each time the program is run. Each segment's position also moved randomly on the vertical axis.

  **Code Example**:
  ```javascript
  background("skyBlue");
  var size = randomNumber(40, 60);
  fill("red");
  ellipse(100, randomNumber(190, 210), size, size);

  size = randomNumber(40, 60);
  fill("orange");
  ellipse(140, randomNumber(190, 210), size, size);

  size = randomNumber(40, 60);
  fill("yellow");
  ellipse(180, randomNumber(190, 210), size, size);

  size = randomNumber(40, 60);
  fill("green");
  ellipse(220, randomNumber(190, 210), size, size);

  size = randomNumber(40, 60);
  fill("blue");
  ellipse(260, randomNumber(190, 210), size, size);

  size = randomNumber(40, 60);
  fill("purple");
  ellipse(300, randomNumber(190, 210), size, size);
  ```

### **Lesson 15: Random Rainbow and Random Colors**
**Key Concept**: Using random numbers to change colors and create dynamic visuals.

- **Goal**: We updated the background, rainbow arcs, and ground colors to be randomly generated each time the program is run, adding an extra layer of unpredictability. This involved using `randomNumber()` to generate random values for RGB color components.

  **Code Example**:
  ```javascript
  // 1. Update the background to a random color
  var red = randomNumber(0, 255);
  var green = randomNumber(0, 255);
  var blue = randomNumber(0, 255);
  background(rgb(red, green, blue));

  // 2. Update each arc of the rainbow to a random color
  red = randomNumber(0, 255);
  green = randomNumber(0, 255);
  blue = randomNumber(0, 255);
  fill(rgb(red, green, blue));
  ellipse(200, 200, 400, 400);

  red = randomNumber(0, 255);
  green = randomNumber(0, 255);
  blue = randomNumber(0, 255);
  fill(rgb(red, green, blue));
  ellipse(200, 200, 340, 340);

  // More rainbow arcs...

  // 3. Update the ground to a random color
  red = randomNumber(0, 255);
  green = randomNumber(0, 255);
  blue = randomNumber(0, 255);
  fill(rgb(red, green, blue));
  rect(0, 200, 400, 200);
  ```

---

## Summary:
In lessons 10-15, we explored the power of random numbers in programming to create dynamic, interactive visuals. Using the `randomNumber()` function, we learned how to:
- Randomly position shapes and ellipses on the screen.
- Change the size of shapes randomly.
- Debug code that involves random placement.
- Create dynamic animations such as a rainbow snake.
- Randomize colors for various elements like the background, rainbow arcs, and ground.

These techniques allow us to create more engaging and unpredictable graphics, improving the interactivity of our programs and making each execution feel unique.

![Image of Finished lessons](https://i.ibb.co/dMF7c9z/Screenshot-2024-12-10-104830.png)

Lesson 16: Keyboard Input
Question of the Day: How can our programs react to user input?

Lesson Resources
Key Concepts:

The keyDown() block enables interaction with the keyboard.
Responding to user input creates dynamic and interactive programs.
Activities:
Prediction: Predict how keyboard input could enhance interactivity.
2-4. Skill Building: Learn to use the keyDown() block to respond to user actions.
Practice: Create programs that respond to various key inputs.
Assessment: Show mastery by designing an interactive program using keyboard input.
Challenges: Explore creative and advanced applications of keyboard interactivity.

![lesson 16-19](https://i.ibb.co/S6GdDdL/Screenshot-2024-12-17-132335.png)
