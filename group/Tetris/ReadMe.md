# T-Rex Runner Game

This project is a simple 2D side-scrolling game inspired by the classic T-Rex runner game. The game involves a running T-Rex that the player must control to avoid obstacles and collect points.

---

## Features

- **Game States**: The game includes three states: `start`, `play`, and `over`.
  - **Start**: Displays instructions to press space to start the game.
  - **Play**: The T-Rex runs, and the player earns points by surviving while avoiding obstacles.
  - **Over**: The game stops when the T-Rex collides with a cactus. The player can restart by clicking the reset button.
- **Score System**: Tracks and displays the player's score.
- **Animations**: Includes animations for the T-Rex, ground, and clouds for a lively visual experience.
- **Dynamic Obstacles**: Randomly generated cacti appear on the ground to challenge the player.
- **Gravity and Physics**: Implements basic gravity for realistic jumping mechanics.
- **Clouds**: Randomly generated clouds for a dynamic background.

---

## How to Play

1. **Start the Game**: Press the spacebar to start.
2. **Jump**: Press the spacebar to make the T-Rex jump over obstacles.
3. **Avoid Obstacles**: Keep the T-Rex from colliding with the cacti.
4. **Restart**: If the game ends, click the reset button to play again.

---

## Code Overview

### Game Components

- **Sprites**:
  - T-Rex: Controlled by the player.
  - Ground: Moves continuously to create a running effect.
  - Invisible Ground: Ensures the T-Rex doesn't fall below the screen.
  - Clouds: Appear randomly in the background.
  - Cacti: Obstacles the player must avoid.
  - Game Over and Reset Button: Displayed when the game ends.

- **Groups**:
  - `cactusGrp`: Group for all cactus obstacles.
  - `cloudGrp`: Group for all clouds.

- **Score**:
  - The player's score increases over time while in the `play` state.

### Key Functions

- **`draw()`**: Main game loop that handles rendering and game state logic.
- **`Gravity()`**: Adds a downward force to the T-Rex for jumping mechanics.
- **`Ground_Move()`**: Moves the ground to create a running effect.
- **`Jump()`**: Allows the T-Rex to jump when the spacebar is pressed.
- **`Clouds()`**: Spawns random clouds for the background.
- **`Cactus()`**: Spawns random cactus obstacles.
- **`Over()`**: Handles the game-over logic, such as stopping movement and showing reset options.

---

## How to Set Up

1. Include all required assets (animations, sounds) in your project.
2. Ensure your project setup allows for sprite creation, sound, and collision handling.
3. Add this JavaScript code to your project file.
4. Run the game in a browser or compatible environment.

---

## Controls

- **Spacebar**: Jump and start the game.
- **Mouse Click**: Reset the game after a game-over.

---

## Assets

- **T-Rex Animations**: Rest, run, collide.
- **Ground and Obstacles**: Animated ground and multiple cactus designs.
- **Background Elements**: Dynamic clouds.
- **UI Elements**: Game over screen and reset button.

---

## Improvements to Consider

- Add power-ups or bonus items for variety.
- Introduce difficulty levels by increasing cactus speed or spawn rate.
- Implement high-score tracking.

---

Enjoy the challenge of guiding the T-Rex to safety and achieving the highest score! 🎮
