import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import SearchDisp from "./SearchDisp";
import Table from 'react-bootstrap/Table';
const  Searcher=({search,ndata})=>{
    const [val,setVal]=useState("")
    const [qry,setQry]=useState("")
    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        search(val,qry);
        

    }
    const Clear=()=>{
        setVal("");
        setQry("");
        
    }
    const stl={
        textAlign:"left",
        
    }

    return(
        <><Container>
          <Container fluid style={{border:"1px solid black",borderRadius:"10px",width:"30rem"}}>
            <h1 style={{textAlign:"center",paddingTop:"10%",color:"black"}}>Searcher</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px"}}>
            <Form onSubmit={HandleSubmission} style={{padding:"30px"}}>
            <select onChange={(e)=> setVal(e.target.value)}style={{width:"30%",borderRadius:"5px",marginBottom:"10px"}}>
                <option>Search by</option>
                <option value="id" >Id</option>
                <option value="name">Name</option>
                <option value="phno">Phone Number</option>
                <option value="adrs">Address</option>
                <option value="city">City</option>
                <option value="pincode">Pincode</option>
            </select>
                
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                {/* <Form.Label style={stl}>Enter Value</Form.Label> */}
                <Form.Control type="text" placeholder="Enter value" value={qry} onChange={(e)=> setQry(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
            <Button type="submit">Search</Button>
            <Button onClick={Clear} style={{marginTop:"10px"}}>Clear</Button>
            </Row>
            
            </Form>
            
            </Card>
         </Container>
         <Container width="18em" id="clear">
        <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>City</th>
          <th>PinCode</th>
        </tr>
      </thead>
      <tbody>
        {ndata.map((val)=><SearchDisp key={val.id} data={val}/>)}
      </tbody>
    </Table>
    
    </Container>
         </Container>
        </>
    )
}
export default Searcher