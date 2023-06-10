import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "../../App.css";
import Footer from "../Footer/Footer";
import img from '../../images/Gallery/gallery1.jpg'
import ContactForm from "./getQuote";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="back m-4" style={{ backgroundColor: "#fff " }}>
        <section id="contact" className="m-1">
          <div className="contact-box">
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div className="c-inputs">
              <h1>Contact Info</h1>
              <h2>
                <i className="fa fa-phone" aria-hidden="true"></i>Mobile No :
              </h2>
              <p>9172129781 </p>
              <h2>
                <i className="fa fa-envelope" aria-hidden="true"></i> Firm :
              </h2>
              <p>Nutrilyf Agro Foods Products Pvt.Ltd.</p>
              <h2>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Address :
              </h2>
              <p>A.P Vandur, Tal:Kagal, Dist:Kolhapur.</p>
              <p>Maharashtra, India.</p>
            </div>
          </div>
          {/* <ContactForm/> */}
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
