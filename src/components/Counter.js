import React from 'react'
import CountUp from 'react-countup';
import {Row,Container,Col} from 'react-bootstrap'
// import './counter.css'

function Counter() {
    return (
        <div className="fx" style={{color:'white', background:'#751D60' ,height:'100px'}}>
        <Container  className="pt-4">
        <Row className="" >
          <Col className="text-center"><CountUp delay={2} duration={2.75} end={100} />+</Col>
          <Col className="text-center"><CountUp delay={2} duration={2.75} end={20} />+</Col>
          <Col className="text-center"><CountUp delay={2} duration={2.75} end={10} />+</Col>
        </Row>
        <Row>
          <Col className="text-center text-uppercase" >Customers</Col>
          <Col className="text-center text-uppercase">Happy Clients</Col>
          <Col className="text-center text-uppercase">Products</Col>
        </Row>
      </Container>
        </div>
       
    )
}

export default Counter
