import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "../../App.css";
import Footer from "../Footer/Footer";
import img from '../../images/Gallery/gallery1.jpg';
import ContactForm from "./getQuote";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const onChangeregi = (event) => {
    // handle onChange logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <>
      <div className="container my-5">
        <section id="contact">
          <div className="right col-md-6 contact-box">
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div className="c-inputs">
              <h1>Contact Info</h1>
              <h2>
                <i className="fa fa-phone" aria-hidden="true"></i>Mobile No :
              </h2>
              <p>9172129781</p>
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

         

          <div className="right col-md-6">

          <h1>Contact Form</h1>

            <form className="form-getInTouch mt-5" onSubmit={handleSubmit}>
              <div className="input-container-getIn">
                <label className="label">Name* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="name"
                  onChange={onChangeregi}
                  required
                />
                {/* Render error message if errorCreate.name exists */}
                {/* {errorCreate.name && (
                  <p className="err-msg">{errorCreate.name}</p>
                )} */}
              </div>

              <div className="input-container-getIn">
                <label className="label">Email* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="email"
                  onChange={onChangeregi}
                  required
                />
                {/* Render error message if errorCreate.email exists */}
                {/* {errorCreate.email && (
                  <p className="err-msg">{errorCreate.email}</p>
                )} */}
              </div>

              <div className="input-container-getIn">
                <label className="label">Message</label>
                <textarea
                  style={{ height: "80px" }}
                  type="text"
                  name="phone"
                  onChange={onChangeregi}
                  required
                />
                {/* Render error message if errorCreate.phone exists */}
                {/* {errorCreate.phone && (
                  <p className="err-msg">{errorCreate.phone}</p>
                )} */}
              </div>
              <div className="sendMsg">
              <button className="mt-5 connect" type="submit">
                Send Message
              </button>
              </div>
            </form>
          </div>

        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
