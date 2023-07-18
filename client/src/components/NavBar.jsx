import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{
        border:"1px solid black",
        borderRadius: "10px",
        margin:"10px",  
    }}>

        <Navbar.Brand href="#home" style={{paddingLeft:"10px"}}>Address Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" class="nav-item" style={{color:"black"}}>View</Link></Nav.Link>
            <Nav.Link><Link to="/insert" class="nav-item" style={{color:"black"}}>Manage</Link></Nav.Link>
            <Nav.Link><Link to="/search" class="nav-item" style={{color:"black"}}>Search</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;