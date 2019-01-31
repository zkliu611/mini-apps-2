import React from 'react';

const Row = ({row}) => (
  <div>
    <tr>
      <td class='year'>{row.date}</td>
      <td class='description'>{row.description}</td>
    </tr>
  </div>
)

export default Row;