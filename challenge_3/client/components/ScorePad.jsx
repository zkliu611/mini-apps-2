import React from 'react';
import ScoreBtn from './ScoreBtn.jsx'

const ScorePad = ({knockDown, handleClick}) => {
  let btn = [];
  for (let i = 1; i <= 10 - knockDown; i++){
    btn.push(i);
  }
  return(
    <div>
      <h3>Click Number of Pins Knocked Down</h3>
      <div id='btnGroup'>
        {btn.map((num) => <ScoreBtn number={num} handleClick={handleClick} />)}
      </div>
    </div>
 
  )
}

export default ScorePad;
