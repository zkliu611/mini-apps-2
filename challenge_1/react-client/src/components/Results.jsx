import React from 'react';
import ResultsRow from './ResultsRow.jsx';

const Results = ({data}) => {
  if (data) {
    return (
      <div>
        <table >
          <tr>
            <td>Date</td>
            <td>Description</td>
          </tr>
          {data.map((data) => <ResultsRow row={data}/>)}
        </table>
      </div>
    )
  } else {
    return <div></div>
  }
}
  

export default Results;