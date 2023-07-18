import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TablerData from './TablerData';
import Container from 'react-bootstrap/Container';
import UpdForm from './UpdForm';
const Tabler=({data,clear})=>{
    
    return(
        <Container width="18em">
        <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>City</th>
          <th>PinCode</th>
          <th>Update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val)=><TablerData key={val.id} data={val} del={clear}/>)}
      </tbody>
    </Table>
    
    </Container>
    )
}
export default Tabler