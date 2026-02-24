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
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    
  }


  return (
    <>
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