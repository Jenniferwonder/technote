import "./style.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}
// Parent Component
function Board({ xIsNext, squares, onPlay }) {
	// const [xIsNext, setXIsNext] = useState(true);
	// const [squares, setSquares] = useState(Array(9).fill(null));

	function handleClick(i, j) {
		if (squares[i][j] || calculateWinner(squares)) {
			return;
		}
		// const nextSquares = squares.slice();
		// Deep copy of squares
		const nextSquares = JSON.parse(JSON.stringify(squares));

		if (xIsNext) {
			nextSquares[i][j] = "X";
		} else {
			nextSquares[i][j] = "O";
		}
		// setSquares(nextSquares);
		// setXIsNext(!xIsNext);
		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}
	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0][0]} onSquareClick={() => handleClick(0, 0)} />
				<Square value={squares[1][0]} onSquareClick={() => handleClick(1, 0)} />
				<Square value={squares[2][0]} onSquareClick={() => handleClick(2, 0)} />
			</div>
			<div className="board-row">
				<Square value={squares[0][1]} onSquareClick={() => handleClick(0, 1)} />
				<Square value={squares[1][1]} onSquareClick={() => handleClick(1, 1)} />
				<Square value={squares[2][1]} onSquareClick={() => handleClick(2, 1)} />
			</div>
			<div className="board-row">
				<Square value={squares[0][2]} onSquareClick={() => handleClick(0, 2)} />
				<Square value={squares[1][2]} onSquareClick={() => handleClick(1, 2)} />
				<Square value={squares[2][2]} onSquareClick={() => handleClick(2, 2)} />
			</div>
		</>
	);
}

export default function Game() {
	// const [xIsNext, setXIsNext] = useState(true);

	// Create an empty 3*3 two-dimensional array
	const [history, setHistory] = useState([
		Array(3)
			.fill()
			.map(() => Array(3).fill(null)),
	]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];
	// const currentSquares = history[history.length - 1];

	function handlePlay(nextSquares) {
		// setHistory([...history, nextSquares]);
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		// setXIsNext(!xIsNext);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
		// setXIsNext(nextMove % 2 === 0);
	}
	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});
	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	for (let i = 0; i < 3; i++) {
		if (
			squares[0][i] &&
			squares[0][i] === squares[1][i] &&
			squares[0][i] === squares[2][i]
		) {
			return squares[0][i];
		} else if (
			squares[i][0] &&
			squares[i][0] === squares[i][1] &&
			squares[i][0] === squares[i][2]
		) {
			return squares[i][0];
		}
	}
	if (
		squares[0][0] &&
		squares[0][0] === squares[1][1] &&
		squares[0][0] === squares[2][2]
	) {
		return squares[0][0];
	} else if (
		squares[0][2] &&
		squares[0][2] === squares[1][1] &&
		squares[0][2] === squares[2][0]
	) {
		return squares[0][2];
	}
	return null;
}
