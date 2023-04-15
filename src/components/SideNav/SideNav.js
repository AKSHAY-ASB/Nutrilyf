import React from "react";
// import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './SideNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from 'react-bootstrap';

const Side = props => {
    // console.log(props.match.path)

    return (
        <>
    
            <Nav className="col-md-1  sidebar"
            activeKey="/home">
                
            <Nav.Item>
                <Nav.Link href={`${props.match.path}/packages`} style={{color:'white'}}>TOUR PACKAGES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${props.match.path}/Rents`} style={{color:'white'}}>RENTAL CAR</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${props.match.path}/pickup-drop`} style={{color:'white'}}>PICKUP/DROP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${props.match.path}/TicketBook`} style={{color:'white'}}>TICKET BOOKING</Nav.Link>
            </Nav.Item>
            
            
            </Nav>
            
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar