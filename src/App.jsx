import './App.css';

function Square(){
  return (
    <>
      <div className="board">
        <div className="board-row">
          <button className="square">o</button>
          <button className="square">x</button>
          <button className="square">x</button>
        </div>
        <div className="board-row">
          <button className="square">x</button>
          <button className="square">x</button>
          <button className="square">x</button>
        </div>
        <div className="board-row">
          <button className="square">x</button>
          <button className="square">x</button>
          <button className="square">x</button>
        </div>
      </div>

    </>
  );
}


export default function Board(){
  
  return (
    <>
      <Square></Square>
    </>
  );
}