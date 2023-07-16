// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, NavLink } from 'react-router-dom';
// import Logo from "../images/600.png";
// import "./ReactNavbar.css";

// function CollapsibleExample() {
//   const [selectedItem, setSelectedItem] = useState("");

//   const handleSelection = (text) => {
//     setSelectedItem(text);
//   };

//   return (
//   <>
//     <Navbar collapseOnSelect expand="lg" className='bg-navbar' variant="dark" fixed="top" >
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//             src={Logo}
//             alt="logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menu'/>
//         <Navbar.Collapse id="responsive-navbar-nav"  className='nav-design' >
//           <Nav className="me-auto">
//             <NavDropdown title="Products" id="collasible-nav-dropdown" className='nav-text-dropdown'>
//               <NavDropdown.Item as={NavLink} to="/jaggeryblocks" className='text-dropdown' onClick={() => handleSelection("Products")}>
//                 Jaggery Block
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/jaggerypowder" className='text-dropdown' onClick={() => handleSelection("Products")}>
//                 Jaggery Powder
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/jaggerycandy" className='text-dropdown' onClick={() => handleSelection("Products")}>
//                 Jaggery Candy
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={NavLink} to="/jaggeryliquid" className='text-dropdown' onClick={() => handleSelection("Products")}>
//                 Jaggery Liquid
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={NavLink} to="/gallery" className={selectedItem === "Gallery" ? "nav-text active" : "nav-text"}>
//               Gallery
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/about" className={selectedItem === "About" ? "nav-text active" : "nav-text"}>
//               About us
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/contact-us" className={selectedItem === "Contact" ? "nav-text active" : "nav-text"}>
//               Contact us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     </>
//   );
// }

// export default CollapsibleExample;


import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../images/600.png";
import "./ReactNavbar.css";

function CollapsibleExample() {
  const [selectedItem, setSelectedItem] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSelection = (text) => {
    setSelectedItem(text);
    setExpanded(false); // Close the menu after clicking a navigation item
  };

  const toggleNavbar = () => {
    setExpanded(!expanded); // Toggle the collapse state
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='bg-navbar' variant="dark" fixed="top" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menu' onClick={toggleNavbar} />
          <Navbar.Collapse id="responsive-navbar-nav" className='nav-design'>
            <Nav className="me-auto">
              <NavDropdown title="Products" id="collasible-nav-dropdown" className='nav-text-dropdown'>
                <NavDropdown.Item as={NavLink} to="/jaggeryblocks" className='text-dropdown' onClick={() => handleSelection("Products")}>
                  Jaggery Block
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/jaggerypowder" className='text-dropdown' onClick={() => handleSelection("Products")}>
                  Jaggery Powder
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/jaggerycandy" className='text-dropdown' onClick={() => handleSelection("Products")}>
                  Jaggery Candy
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/jaggeryliquid" className='text-dropdown' onClick={() => handleSelection("Products")}>
                  Jaggery Liquid
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/gallery" className={selectedItem === "Gallery" ? "nav-text active" : "nav-text"} onClick={() => handleSelection("Gallery")}>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={selectedItem === "About" ? "nav-text active" : "nav-text"} onClick={() => handleSelection("About")}>
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact-us" className={selectedItem === "Contact" ? "nav-text active" : "nav-text"} onClick={() => handleSelection("Contact")}>
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;



