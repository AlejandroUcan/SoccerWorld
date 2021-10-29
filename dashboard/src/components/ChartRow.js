import React from 'react';

function ChartRow(props){
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.email}</td>
      <td>{props.estado}</td>
    </tr>
  )
}
            
export default ChartRow;