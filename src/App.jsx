import { useState } from 'react';
import './style.css';

function Square({ value, onSquareClick }){



  return (
    <>
      <button className="square" onClick={onSquareClick}>{value}</button>
    </>
  );
}


export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const[squares, setSquares] = useState(Array(9).fill(null));


  


  function clickHandel(i) {
    if (squares[i] || calculateWinner(squares)) {
    return;
  }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    
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

      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => clickHandel(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => clickHandel(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => clickHandel(2)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => clickHandel(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => clickHandel(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => clickHandel(5)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => clickHandel(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => clickHandel(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => clickHandel(8)}></Square>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}