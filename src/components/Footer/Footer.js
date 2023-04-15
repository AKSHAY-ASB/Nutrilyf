import React from 'react'
import './Footer.css'
// import twitter from "../../assets/twitter.png";
// import In from "../../assets/in.png";
import In from "../../images/in.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import {Link} from 'react-router-dom';
// import logo from "../../assets/White.png";


const Footer = ({onClick}) => {
  return (
    <>
      <div className='footer py-5'>
        {/* <div>
          <h3 className='dream'>DREAM POTENTIAL</h3>
          <a href="mailto:hello@dreampotential.org" className='mobile_email'>hello@dreampotential.org</a>
        </div> */}
        {/* <a href="mailto:hello@dreampotential.org" className='email'>hello@dreampotential.org</a> */}
        {/* <div>
          <h3 className='follow'>Follow us on</h3>
       
          <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
          <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
          <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
          <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
      
        </div> */}
        <div className='container'>
        <h1 className='footer-subscription-heading text-center'>
        "LET’S WORK TOGETHER".
        </h1>
        <h3 className='footer-subscription-text text-center'>
        Relationship with a nice persons is like Sugercane , you break it, crush it, squeeze it, even beat or grind it still you will get only Sweetness.
        </h3>
          <div className='row'>
            {/* <div className='col-md-6'>
              <img className="logo-icon" src={logo} alt="icon" />
            </div> */}
            <div className='col-md-12'>
           
              <div className='row'>
                  <div className='col-md-3'>
                  <Link to='/about'>
                  <h4>About us</h4>
                  </Link>
                  </div>
                  <div className='col-md-3'>
                  <h4>Our Clients</h4>
                  <div style={{}}>
                    <h6 className='sub-text-footer'>Food and Ordinary Industries</h6>
                    <h6 className='sub-text-footer'>Retail Consumers</h6>
                    <h6 className='sub-text-footer'>Exporter and Traders</h6>

                  </div>
                  </div>
                  <div className='col-md-1'>
                    <div className="vl"></div>
                  </div>

                  <div className='col-md-5 text-center'>
                    <h4>Contact Us</h4>
                    <h6 className='sub-text-footer'>Nutrilyf Agro Foods Products Pvt.Ltd.</h6>
                    <h6 className='sub-text-footer'>A.P Vandur, Tal:Kagal, Dist:Kolhapur.</h6>
                    <h6 className='sub-text-footer'>9172129781</h6>

                  <div className='mt-5'>
                      <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
                      <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
                      <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
                      <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
                  </div>

                  </div>
              </div>
              
           
            </div>


            <div className='row' style={{color:"#fff"}}>
            <div className='col-md-12'>
              <h6>@2023 Nutrilyf.in, Inc.All rights reserved</h6>
            </div>
            <div className='col-md-12'>
              <h6>designed and developed by &&nbsp;
                <a href="https://leadpin.in/" target="_blank">leadpin.in</a>
              </h6>
            </div>
            </div>
          </div>
        </div>
       

      </div>
    </>
  )
}

export default Footer