import Square from "./Square";
import { calculateWinner } from "./calculateWinner.js";

export default function Board({ xIsNext, squares, onPlay }) {
	// Lift the state up to Game component; See `setHistory`, `setXIsNext`
	// const [xIsNext, setXIsNext] = useState(true);
	// const [squares, setSquares] = useState(Array(9).fill(null));

	// Set X on each square
	/* function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  } */

	// Set O after setting X
	function handleClick(i) {
		// To prevent the X being overwritten by an O when clicking on the same square multiple times!
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		// Immutability is important: call `.slice()` to create a copy of the squares array instead of modifying the existing array.
		const nextSquares = squares.slice();

		xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

		// Replace the following code with onPlay to be controlled fully by Game component
		// setSquares(nextSquares);
		// setXIsNext(!xIsNext);
		onPlay(nextSquares);
	}

	// Add status to display results of the game
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
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}
