function UserChartRow(props){
    return (
      <tr>
        <td>{props.equipo}</td>
        <td>{props.liga}</td>
        <td>{props.marca}</td>
        <td>{props.tipo}</td>
        <td>{props.temporada}</td>
      </tr>
    )
  }
              
  export default UserChartRow;