const canvas = document.querySelector("canvas");
const highscoreContainer = document.querySelector(".highscores");
const nameInput = document.querySelector("form");
const highscoreList = JSON.parse(localStorage.getItem("highscores")) || [];
const dialog = document.querySelector("dialog");

nameInput.addEventListener("submit", handlesubmit);

const generateHighscores = () => {
	highscoreContainer.innerHTML = "";

	highscoreList.forEach((highscore, ind) => {
		const row = document.createElement("div");
		const num = document.createElement("span");
		const name = document.createElement("span");
		const score = document.createElement("span");
		num.innerText = ind + 1;
		name.innerText = highscore.name;
		score.innerText = highscore.score;
		row.appendChild(num);
		row.appendChild(name);
		row.appendChild(score);
		highscoreContainer.appendChild(row);
	});
};
generateHighscores();

const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 420;
canvas.height = 690;
const cols = 14;
const rows = 23;
const blockSize = 30;
let grid = [];
let currentPiece;
let score = 0;
let gameOver = false;

// Tetromino shapes
const tetrominoes = [
	[[1, 1, 1, 1]], // I
	[
		[1, 1],
		[1, 1],
	], // O
	[
		[0, 1, 0],
		[1, 1, 1],
	], // T
	[
		[1, 1, 0],
		[0, 1, 1],
	], // S
	[
		[0, 1, 1],
		[1, 1, 0],
	], // Z
	[
		[1, 1, 1],
		[1, 0, 0],
	], // L
	[
		[1, 1, 1],
		[0, 0, 1],
	], // J
];

function createGrid() {
	for (let r = 0; r < rows; r++) {
		grid[r] = [];
		for (let c = 0; c < cols; c++) {
			grid[r][c] = 0;
		}
	}
}

function drawGrid() {
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			ctx.fillStyle = grid[r][c] === 0 ? "black" : "blue";
			ctx.fillRect(c * blockSize, r * blockSize, blockSize, blockSize);
			ctx.strokeStyle = "gray";
			ctx.strokeRect(c * blockSize, r * blockSize, blockSize, blockSize);
		}
	}
}

// Generate a random Tetromino
function randomTetromino() {
	const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
	return { shape, x: Math.floor(cols / 2) - 1, y: 0 };
}

function drawPiece(piece) {
	for (let r = 0; r < piece.shape.length; r++) {
		for (let c = 0; c < piece.shape[r].length; c++) {
			if (piece.shape[r][c] === 1) {
				ctx.fillStyle = "red";
				ctx.fillRect(
					(piece.x + c) * blockSize,
					(piece.y + r) * blockSize,
					blockSize,
					blockSize
				);
				ctx.strokeStyle = "gray";
				ctx.strokeRect(
					(piece.x + c) * blockSize,
					(piece.y + r) * blockSize,
					blockSize,
					blockSize
				);
			}
		}
	}
}

function canMove(piece, dx, dy) {
	for (let r = 0; r < piece.shape.length; r++) {
		for (let c = 0; c < piece.shape[r].length; c++) {
			if (piece.shape[r][c] === 1) {
				const newX = piece.x + c + dx;
				const newY = piece.y + r + dy;
				if (
					newX < 0 ||
					newX >= cols ||
					newY >= rows ||
					(newY >= 0 && grid[newY][newX] === 1)
				) {
					return false;
				}
			}
		}
	}
	return true;
}

function placePiece(piece) {
	for (let r = 0; r < piece.shape.length; r++) {
		for (let c = 0; c < piece.shape[r].length; c++) {
			if (piece.shape[r][c] === 1) {
				grid[piece.y + r][piece.x + c] = 1;
			}
		}
	}
}

function clearRows() {
	for (let r = rows - 1; r >= 0; r--) {
		if (grid[r].every((cell) => cell === 1)) {
			grid.splice(r, 1);
			grid.unshift(Array(cols).fill(0));
			score += 10;
			r++;
		}
	}
}

function update() {
	if (gameOver) return;

	if (canMove(currentPiece, 0, 1)) {
		currentPiece.y++;
	} else {
		placePiece(currentPiece);
		clearRows();
		currentPiece = randomTetromino();
		if (!canMove(currentPiece, 0, 0)) {
			gameOver = true;
		}
	}

	draw();
}

// Draw the game
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawGrid();
	drawPiece(currentPiece);

	ctx.fillStyle = "white";
	ctx.font = "16px Arial";
	ctx.fillText(`Score: ${score}`, 10, 20);

	if (gameOver) {
		ctx.fillStyle = "white";
		ctx.font = "32px Arial";
		ctx.fillText(
			"Game Over!",
			canvas.width / 2 - 80,
			canvas.height / 2 - 50
		);
		ctx.font = "16px Arial";
		ctx.fillText(
			"Press space to play again!",
			canvas.width / 2 - 80,
			canvas.height / 2
		);
		if (highscoreList.length <= 10 || score >= highscoreList[9].score) {
			dialog.open = true;
		}
	}
}

// Handle key presses
document.addEventListener("keydown", (event) => {
	if (gameOver) {
		if (event.key === " " || event.code === "Space") {
			gameOver = false;
			reset();
		}
		return;
	}

	if (event.key === "ArrowLeft" && canMove(currentPiece, -1, 0)) {
		currentPiece.x--;
	} else if (event.key === "ArrowRight" && canMove(currentPiece, 1, 0)) {
		currentPiece.x++;
	} else if (event.key === "ArrowDown" && canMove(currentPiece, 0, 1)) {
		currentPiece.y++;
	} else if (event.key === "ArrowUp") {
		// Rotate the piece
		const rotated = currentPiece.shape[0].map((_, i) =>
			currentPiece.shape.map((row) => row[i]).reverse()
		);
		if (canMove({ ...currentPiece, shape: rotated }, 0, 0)) {
			currentPiece.shape = rotated;
		}
	}

	draw();
});
function reset() {
	createGrid();
	currentPiece = randomTetromino();
}
// Initialize the game
function init() {
	createGrid();
	currentPiece = randomTetromino();
	setInterval(update, 500);
}

init();

function handlesubmit(e) {
	e.preventDefault();
	const name = e.target.name.value;
	if (highscoreList.length <= 10 || highscoreList[9].score <= score) {
		highscoreList.push({ name, score });
		highscoreList.sort((a, b) => b.score - a.score);

		if (highscoreList.length > 10) highscoreList.pop();

		localStorage.setItem("highscores", JSON.stringify(highscoreList));
		generateHighscores();
		dialog.close();
	}
}
