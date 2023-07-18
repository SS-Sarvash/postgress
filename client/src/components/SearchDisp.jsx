import Table from 'react-bootstrap/Table';
const SearchDisp=({data})=>{
    return(
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.phno}</td>
          <td>{data.adrs}</td>
          <td>{data.city}</td>
          <td>{data.pincode}</td>
        </tr>
    )
}
export default SearchDisp