import './App.css';

export default function Board(){
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