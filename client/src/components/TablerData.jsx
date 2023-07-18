import Button from 'react-bootstrap/Button';
// import UpdForm from './UpdForm';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const TablerData=({data,del})=>{
    const id=data.id;
    const name =data.name;
    const phno=data.phno;
    const adrs = data.adrs;
    const city = data.city;
    const pincode = data.pincode;

    const navigate=useNavigate();
    return(
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.phno}</td>
          <td>{data.adrs}</td>
          <td>{data.city}</td>
          <td>{data.pincode}</td>
          <td><Button onClick={()=>{
            sessionStorage.setItem("update",JSON.stringify({id,name,phno,adrs,city,pincode}))
            navigate("/update")}}>Edit</Button></td>
          <td><Button style={{color:"white",backgroundColor:"red"}} onClick={()=>del(data.id)}>Delete</Button></td>
        </tr>
    )
}
export default TablerData