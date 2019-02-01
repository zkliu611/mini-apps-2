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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
          <td colSpan="2"></td>
        </tr>
  
     
      </table>
    </div>
  )
}

export default ScoreBoard;
