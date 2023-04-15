import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from "../images/nitrilyf_Logops1-removebg-preview.png";
import "./ReactNavbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-navbar' variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"end"}}>
          <Nav className="me-auto">
            <Nav.Link href="/products" className='nav-text'
            >Products</Nav.Link>
            
            <NavDropdown title="Category" id="collasible-nav-dropdown" className='nav-text'>
                {/* <Link to="/gallery" className='nav-text'>Gallery</Link> */}
              <NavDropdown.Item href="/jaggeryblocks">Jaggery Block</NavDropdown.Item>
              <NavDropdown.Item href="/jaggerypowder">
                Jaggery Powder
              </NavDropdown.Item>
              <NavDropdown.Item href="/jaggerycandy">Jaggery Candy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/jaggeryliquid">
                Jaggery Liquid
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gallery" className='nav-text'>Gallery</Nav.Link>
            <Nav.Link href="/about" className='nav-text'>About</Nav.Link>
            <Nav.Link href="/contact-us" className='nav-text'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;