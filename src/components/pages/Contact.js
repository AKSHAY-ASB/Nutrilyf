import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "../../App.css";

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
          <div className="social">
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-dribbble"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-behance"></i>
            </Link>
          </div>

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
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160170.74878656826!2d74.1628013222957!3d16.643677574326947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f90cefc32733%3A0xbed2a32f5792e6a7!2sVandur%2C%20Maharashtra%20416216!5e0!3m2!1sen!2sin!4v1675602180050!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              title="Office Location"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
