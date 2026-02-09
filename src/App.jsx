import { useState } from 'react';
import './style.css';

function Square(){

  const [value, setValue] = useState(null);

  // Click Handelfunction here
  function clikHandle(){
    setValue("x");
  }


  return (
    <>
      <button className="square" onClick={clikHandle}>{value}</button>
    </>
  );
}


export default function Board(){
  
  return (
    <>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}