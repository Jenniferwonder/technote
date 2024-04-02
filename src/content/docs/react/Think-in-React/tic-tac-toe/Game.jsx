// 02-tic-tac-toe
import { useState } from "react";
import { React } from "react";
import Board from "./Board";

// Lift state up again to add time travel
export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	// To keep track of which step the user is currently viewing
	const [currentMove, setCurrentMove] = useState(0);

	// Remove redundant state
	// const [xIsNext, setXIsNext] = useState(true);
	const xIsNext = currentMove % 2 === 0;

	// Read the last squares array from the history
	// const currentSquares = history[history.length - 1];
	// to render the currently selected move, instead of always rendering the final move
	const currentSquares = history[currentMove];

	// Function to update the game
	function handlePlay(nextSquares) {
		// setHistory([...history, nextSquares]);
		// If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point.
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		// setXIsNext(!xIsNext);
	}

	function jumpTo(nextMove) {
		// set xIsNext to true if the number that you’re changing currentMove to is even (偶数)
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
			// it’s safe to use the move index as a key
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
