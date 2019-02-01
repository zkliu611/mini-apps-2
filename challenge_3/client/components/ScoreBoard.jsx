import React from 'react';

const ScoreBoard = ({score}) => {
  return (
    <div>
      <h3>ScoreBoard</h3>
      <br/>
      <table>
        <tr>
          <th colSpan="2">1</th>
          <th colSpan="2">2</th>
          <th colSpan="2">3</th>
          <th colSpan="2">4</th>
          <th colSpan="2">5</th>
          <th colSpan="2">6</th>
          <th colSpan="2">7</th>
          <th colSpan="2">8</th>
          <th colSpan="2">9</th>
          <th colSpan="3">10</th>
          <th >Score</th>
        </tr>
        <tr>

          <td>{score[0][0]}</td>
          <td>{score[0][1]}</td>
          <td>{score[1][0]}</td>
          <td>{score[1][1]}</td>
          <td>{score[2][0]}</td>
          <td>{score[2][1]}</td>
          <td>{score[3][0]}</td>
          <td>{score[3][1]}</td>
          <td>{score[4][0]}</td>
          <td>{score[4][1]}</td>
          <td>{score[5][0]}</td>
          <td>{score[5][1]}</td>
          <td>{score[6][0]}</td>
          <td>{score[6][1]}</td>
          <td>{score[7][0]}</td>
          <td>{score[7][1]}</td>
          <td>{score[8][0]}</td>
          <td>{score[8][1]}</td>
          <td>{score[9][0]}</td>
          <td>{score[9][1]}</td>
          <td>{score[9][2]}</td>
          <td rowSpan="2"></td>
    
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="3"></td>
          {/* <td rowSpan="2"></td> */}
        </tr>
  
     
      </table>
    </div>
  )
}

export default ScoreBoard;
