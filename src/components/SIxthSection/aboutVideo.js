import { Col, Row } from 'react-bootstrap';

function AboutUs() {
  return (
    <Row>
      <Col sm={9}>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            The company is always engaged in the research of processing and providing the top quality of various/diverse range of agriculture products.
            Nutrilyf agro food products is founded with the goal of "Creating Healthier Lives," i.e., producing and processing natural superior quality,
            unique and innovative jaggery products such as flavored jaggery, jaggery powder and jaggery candy, flavored liquid jaggery, and jaggery-based products
            under the roof of domestic and international customers as well as educating them or making them aware of various/diverse range of healthy and nutritive
            agriculture products essential in our daily diet.
            The company is based in Kolhapur and is led by agriculture professionals with an educational background in agriculture and extensive experience in hygienically
            processing agricultural produce.
          </p>
        </div>
      </Col>
      <Col sm={3}>
        <div className="video-container">
          <video style={{width:'100%'}} src="/Videos/aboutus.mp4" autoPlay loop muted />
        </div>
      </Col>
    </Row>
  );
}

export default AboutUs;
