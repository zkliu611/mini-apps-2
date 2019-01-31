import React from 'react';

const Row = ({row}) => (
  <div>
      Date: {row.date}
      <br/>
      Event: {row.description}
      <hr/>
  </div>
)

export default Row;