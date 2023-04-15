import React,{useEffect} from 'react'
import {Carousel,Container,Row,Col} from 'react-bootstrap';

import "./ImageSlider.css"
import Slider1  from "../images/Slider/slider1.jpg"
import Slider2  from "../images/Slider/slider2.jpg"
import Slider3  from "../images/Slider/slider3.jpg"
import Slider4  from "../images/Slider/slider4.jpg"


// componentDidMount(){
//     this.myRef.current.scrollTo(0, 0);
//     window.scrollTo(0, 0);
//   } 

function ImageSlider() {
    // this.myRef = React.createRef()
    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])
    
    return (
        <>
            {/* <Container className=""> */}
            <div>
                <Row className="">
                    <Col style={{background:""}}>
                        <Carousel fade>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Slider1}
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h1 className="text">Fresh Organic jaggary</h1>
                                <p className="p">All types of product Available.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-md-block w-100 "
                            src={Slider2}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h1 className="text">Fresh Organic jaggary</h1>
                                <p>All types of product Available.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Slider3}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h1 className="text">Fresh Organic jaggary </h1>
                                <p>All types of product Available.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Slider4}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h1 className="text">Fresh Organic jaggary </h1>
                                <p>All types of product Available.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        </Carousel>
                    </Col>
                </Row>
                
                </div>
            {/* </Container>     */}
        </>
    )
}

export default ImageSlider;
