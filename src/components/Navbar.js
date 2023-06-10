import React, { useState } from "react";
import { Button } from "./Button";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
// import {Logo} from '../images/nutrilyf_Logo.svg';
// import Logo from "../images/nitrilyf_Logops.jpg";
import Logo from "../images/600.png";


// import Logo from '../images/right_arrow.png'

function Navbar1() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const CloseMobileMenu = () => {
    // setClick(false);
    setDropdown(!dropdown);
  };

  const [isSelected, setIsSelected] = useState("");
  const handleSelection = (text) => {
    setIsSelected(text);
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar ">
        <Link to="/" className="navbar-logo">
          <div>
            <img
              src={Logo}
              alt="logo"
              // className={isSelected === "Logo" ? "active" : ""}
              onClick={() => handleSelection("Logo")}
            />
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
                        <Link to="/"
                        // className="nav-links"
                        className={
                        isSelected === "Home" ? "nav-links active" : "nav-links"
                        }
                        onClick={() => handleSelection("Home")}
                        // onClick={CloseMobileMenu}
                        >
                            Home
                        </Link>
                    </li> */}
          <li className="nav-item">
            <Link
              to="/products"
              // className="nav-links"
              // onClick={CloseMobileMenu}
              className={
                isSelected === "Products" ? "nav-links active" : "nav-links"
              }
              onClick={() => handleSelection("Products")}
            >
              Products
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" 
             className={
                isSelected === "Category" ? "nav-links active" : "nav-links"
              }
              // onClick={() => handleSelection("Category")}
            // className="nav-links"
            onClick={CloseMobileMenu}
            >
              Category <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown setClickModal={setClick} />}
          </li>

          <li className="nav-item">
            <Link
              to="/gallery"
              // className="nav-links"
              // onClick={CloseMobileMenu}
              className={
                isSelected === "Gallery" ? "nav-links active" : "nav-links"
              }
              onClick={() => handleSelection("Gallery")}
            >
              Gallery
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              // className="nav-links" onClick={CloseMobileMenu}
              className={
                isSelected === "AboutUs" ? "nav-links active" : "nav-links"
              }
              onClick={() => handleSelection("AboutUs")}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              // className="nav-links" onClick={CloseMobileMenu}
              className={
                isSelected === "Contact" ? "nav-links active" : "nav-links"
              }
              onClick={() => handleSelection("Contact")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <Button/> */}
      </nav>
    </>
  );
}

export default Navbar1;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
// import Logo from "../images/nitrilyf_Logops.jpg";

// function Navbar1() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <div>
//           <Link to="/" className="navbar-logo">
//             <div>
//               <img
//                 src={Logo}
//                 alt="logo"
//                 // className={isSelected === "Logo" ? "active" : ""}
//                 // onClick={() => handleSelection("Logo")}
//               />
//             </div>
//           </Link>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav " />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav>
//             <Link
//               to="/products"
//               // className="nav-links"
//               // onClick={CloseMobileMenu}
//               // className={
//               //   isSelected === "Products" ? "nav-links active" : "nav-links"
//               // }
//               // onClick={() => handleSelection("Products")}
//             >
//               Products
//             </Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbar1;
