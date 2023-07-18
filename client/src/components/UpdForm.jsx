import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const UpdForm=({upder,setChange})=>{
    const navigate=useNavigate();

    const sId=JSON.parse(sessionStorage.getItem('update'))["id"];
    const sName=JSON.parse(sessionStorage.getItem('update'))["name"];
    const sPhno=JSON.parse(sessionStorage.getItem('update'))["phno"];
    const sAddr=JSON.parse(sessionStorage.getItem('update'))["adrs"];
    const sCity=JSON.parse(sessionStorage.getItem('update'))["city"];
    const sPincode=JSON.parse(sessionStorage.getItem('update'))["pincode"];

    const [name,setName]=useState(sName);
    const [phno,setPhno]=useState(sPhno);
    const [adrs,setAdrs]=useState(sAddr);
    const [city,setCity]=useState(sCity);
    const [pincode,setPincode]=useState(sPincode);

    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        upder({name,phno,adrs,city,pincode},sId);

        setName("")
        setPhno("")
        setAdrs("")
        setCity("")
        setPincode("")
        setChange(true)
        navigate("/");
    }
    const stl={
        textAlign:"left",
        
    }

    
    return (
        <><Container>
          <Container fluid style={{border:"1px solid black",borderRadius:"10px",width:"30rem"}}>
            <h1 style={{textAlign:"center",paddingTop:"10%",color:"black"}}>Updater</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px"}}>
            <Form onSubmit={HandleSubmission} style={{padding:"30px"}}>
                
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phno" value={phno} onChange={(e)=> setPhno(e.target.value)} required/>
                </Form.Group>          
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" value={adrs} onChange={(e)=> setAdrs(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" value={city} onChange={(e)=> setCity(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Pincode</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode" value={pincode} onChange={(e)=> setPincode(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
            <Button type="submit" >Update</Button>
            </Row>
            
            </Form>
            </Card>
         </Container>
         </Container>
        </>
      );
}
export default UpdForm