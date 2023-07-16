import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../../images/Gallery/np15.JPG";
import img2 from "../../images/Gallery/np14.JPG";
import img3 from "../../images/Gallery/np15.JPG";
import face from "../../images/Information_Icons/face.png";
import digestion from "../../images/Information_Icons/digestion.png";
import blood from "../../images/Information_Icons/blood.png";
import weightloss from "../../images/Information_Icons/weightloss.png";
import other from "../../images/Information_Icons/other.png";


const Benefits = () => {
    return (
        <div className='container py-5'>
            <h1 className='pb-5'>Benefits of Jaggery</h1>
            <Row  >
                <Col sm style={{textAlign:'center'}}>
                    <img src={face} alt=''/>
                    <h2>For Skin </h2>
                    <p>Nourishes the skin</p>
                    <p>Treats Acne and Pimples</p>
                    <img src={digestion} alt=''/>
                    <h2>For Digestion </h2>
                    <p>Prevents Digestive</p>
                    <p>Disorders</p>
                    <p>Boosts Intestinal Health</p>
                    <img src={blood} alt=''/>
                    <h2>For Blood </h2>
                    <p>Purifies Blood</p>
                    <p>Prevents Anemia</p>
                    <p>Detoxifies the body</p>
                </Col>
                <Col sm>
                    <img src={img1} alt="img" style={{width:'100%'}}/>
                    <img src={img2} alt="img" style={{width:'100%'}}/>
                    <img src={img3} alt="img" style={{width:'100%'}}/>
                </Col>
                <Col sm style={{textAlign:'center'}}>
                    <img src={weightloss} alt=''/>
                    <h2>For Weight Loss</h2>
                    <p>Boosts Body Metabolism</p>
                    <p>Boosts Iron absorption</p>
                    <img src={other} alt=''/>
                    <h2>Other Benefits</h2>
                    <p>Provides Instant energy</p>
                    <p>Reduces Retention of Water</p>
                    <p>Boosts Immunity</p>
                    <p>Boosts Iron absorption</p>
                    <p>Treats cough & cold</p>
                    <p>Prevents Asthma</p>
                    <p>Relives joint pain</p>
                    <p>Regulates liver function</p>
                    <p>Prevents  Nervous system</p>
                    <p>Helps anti-aging</p>

                </Col>
            </Row>
        </div>
    )
}

export default Benefits
