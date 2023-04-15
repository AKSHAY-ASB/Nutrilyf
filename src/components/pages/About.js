import React , {useEffect} from 'react';
import {Carousel,Container,Row,Col,Jumbotron} from 'react-bootstrap'
import GetIn from '../GetIn/GetIn';
import SixthSection from '../SIxthSection/SixthSection';

export default function About(){

    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])

    return(
        <>
       
        <div >
        {/* <h1>About Us</h1> */}
        
        <SixthSection/>
        <GetIn/>
            {/* <Container className="mt-2" >
               
                <Row className = "mt-2">
                <Jumbotron style={{backgroundColor:'white'}}>
                    <h2>Import / Export Business</h2>
                    <p>
                       
                    NUTRILYF, the name is derived from initials of 3 directors of company in partnership. S for Shelke, O for Omase, T for Tarmale and ex stands for Export.

 

Our vision is to provide precious things to the world with highest quality. We are exporting our products in countries like Bangladesh, Saudi  Arabia, United Arab Emirates, Sri Lanka, Oman, Spain, Brazil, Malaysia And Indonesia.

 

We have 2 state-of-the-art warehousing facilities for better storage and distribution of the products. We are proud to say that our customers are satisfied with our service and we have excellent track record of delivering consignments in time. Our high quality and reputed suppliers ensure that you get best quality products. 
                        <ul className="list-group list-group-flush mt-2">
                            <li className="list-group-item" style={{backgroundColor:""}}>- from Kolhapur to anywhere </li>
                            <li className="list-group-item mt-1" style={{backgroundColor:""}}>-  from Kolhapur</li>
                            <li className="list-group-item mt-1" style={{backgroundColor:""}}>- from Kolhapur or other stations</li>
                            <li className="list-group-item mt-1 list-group-item-warning" style={{backgroundColor:""}}>NOTE - </li> 
                        </ul>
                    </p>
                  
                </Jumbotron>
                </Row>
            </Container> */}
        </div> 
        </>
    );
}