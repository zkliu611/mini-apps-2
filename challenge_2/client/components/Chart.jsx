import React from 'react';

const Charts = ({date, data}) => {
  if (date && data) {
    date.unshift('x')
    data.unshift('bitcoin price $USD')
    var chart = c3.generate({
      bindto: '#chart',
      data: {
          x: 'x',
          columns: [date, data]
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y-%m-%d'
              }
          }
      }
    });

    return (
      <div id='chart'>chart</div>
    )

  } else {
    return <div></div>
  }
}

export default Charts;
