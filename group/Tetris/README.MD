# Tetris Game

A simple yet engaging Tetris game implemented in JavaScript using the Canvas API. This game includes additional functionality for leaderboards and user registration, enhancing the classic gameplay experience.

## Features

-   **Classic Tetris Gameplay**: Enjoy the timeless mechanics of Tetris with smooth controls and intuitive gameplay.
-   **Dynamic Leaderboard**: The game keeps track of high scores, allowing players to compete for the top positions.
-   **User Registration**: Players can register their name if they achieve a score that qualifies for the leaderboard.

## How to Play

1. **Controls**:
    - Use the arrow keys to move and rotate the Tetriminos:
        - `ArrowLeft`: Move left
        - `ArrowRight`: Move right
        - `ArrowDown`: Move down faster
        - `ArrowUp`: Rotate the piece
        - `Space`: To start the game again after the game is over
2. **Objective**:
    - Align the Tetriminos to create full rows, which will clear those rows and increase your score.
    - Prevent the Tetriminos from stacking up to the top of the grid.

## Additional Functionality

### Leaderboard

-   The game maintains a leaderboard of the top scores.
-   Players can view the leaderboard to see the highest scores achieved.
-   If a player's score qualifies for the leaderboard, they will be prompted to register their name after completing the game.

### User Registration

-   Players are asked to register their name **only if their score beats a score on the leaderboard**.
-   Upon achieving a qualifying score, a form will appear for the player to input their name.
-   The leaderboard is then updated to reflect the new entry.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Patrix726/CGA-Project/
    ```
2. Navigate to the project directory:
    ```bash
    cd ./group/Tetris/
    ```
3. Open the `index.html` file in a web browser to start playing.

## Code Structure

-   **`index.html`**: The main HTML file for the game interface.
-   **`style.css`**: Contains the styles for the game layout.
-   **`script.js`**: The JavaScript file implementing the game logic, leaderboard, and user registration.

## Possible Future Enhancements

-   Add sound effects for a more immersive experience.
-   Include difficulty levels that adjust game speed and complexity.
