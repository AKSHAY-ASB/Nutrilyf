import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "../../App.css";
import Footer from "../Footer/Footer";
import img from "../../images/Gallery/gallery1.jpg";
import ContactForm from "./getQuote";

import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Contact() {

const [errorCreate, setErrorCreate] = useState({});

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [mobile, setMobile] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = (event) => {
  
    event.preventDefault();
  
    emailjs
      .sendForm(
        "service_kiiiiyl",
        "template_al9ffpy",
        event.target,
        "X92muHCcyRJQii-Co"
      )
      .then(
        (result) => {
          console.log("uuuuuuuuuuu", result.text);
          toast('Your feedback has been send successfully, we will reach you . ')
        },
        (error) => {
          console.log("kkkkkkkkkkkkkkkk", error.text);
        }
      );
  
    setEmail("");
    setName("");
    setMessage("");
    setMobile("");
  };;



  return (
    <>
      <div className="container">
        <section id="contact">
          <div className="right col-md-6 contact-box">
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div className="c-inputs">
            <h1>Contact Info</h1>
            <h2>
                <i className="fa fa-envelope" aria-hidden="true"></i> Firm :
              </h2>
              <p>Nutrilyf Agro Foods Products Pvt.Ltd.</p>
              <h2 className="py-3">
                <i className="fa fa-map-marker" aria-hidden="true"></i> Address
                :
              </h2>
              <p className="py-3">A.P Vandur, Tal:Kagal, Dist:Kolhapur.</p>
              <p>Maharashtra, India.</p>
              
              <h2 className="py-3">
                <i className="fa fa-phone" aria-hidden="true"></i>Mobile No :
              </h2>
              <p>9172129781</p>
              
            </div>
          </div>

        
            <div className="right col-md-6 cardInfo">
              <h3 style={{alignItems:'center',textAlign:'center'}}  className="my-5">Enquiry Form</h3>
              <form className="form-getInTouch mt-5" onSubmit={handleSubmit}>
                <div className="input-container-getIn">
                  {/* <h1 className="get-in-text pt-5">Get In Touch</h1> */}
                  <label className="label">Name* </label>
                  <input
                    style={{ height: "40px", paddingLeft: ".6rem" }}
                    type="text"
                    name="name"
                    placeholder="Enter your Name *"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  {errorCreate.name && (
                    <p className="err-msg">{errorCreate.name}</p>
                  )}
                </div>

                <div className="input-container-getIn">
                  <label className="label">Mobile* </label>
                  <input
                    style={{ height: "40px", paddingLeft: "0.6rem" }}
                    type="text"
                    name="mobile"
                    placeholder="Enter your Mobile Number *"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                    required
                  />
                  {/* {errorCreate.mobile && (
                    <p className="err-msg">{errorCreate.mobile}</p>
                  )} */}
                </div>
                <div className="input-container-getIn">
                  <label className="label">Email* </label>
                  <input
                    style={{ height: "40px", paddingLeft: "0.6rem" }}
                    type="text"
                    name="email"
                    placeholder="Enter your Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  {errorCreate.email && (
                    <p className="err-msg">{errorCreate.email}</p>
                  )}
                </div>
                <div className="input-container-getIn">
                  <label className="label">Message</label>
                  <textarea
                    style={{ height: "80px", padding: ".5rem" }}
                    type="text"
                    name="message"
                    placeholder="Enter your Message *"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                  {errorCreate.phone && (
                    <p className="err-msg">{errorCreate.phone}</p>
                  )}
                </div>
                {/* <div className="input-container-getIn">
                <label className="label">Website*</label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="website"
                  onChange={onChangeregi}
                  value={valuesregi.website}
                  required
                />
              </div> */}
                {/* <div className="button-container pb-5"> */}
                <button
                  className="mt-3 connect"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  {" "}
                  Submit
                </button>

              </form>
            </div>
         
        </section>
      </div>
      <Footer />
    </>
  );
}




function validateregi(valuesregi) {
  console.log("valuesregi :- " + JSON.stringify(valuesregi));
  let errorCreate = {};
  if (!valuesregi.name) {
    errorCreate.name = "Name is required";
  } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
    errorCreate.name = "Name is invalid";
  }
  if (!valuesregi.email) {
    errorCreate.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
    errorCreate.email = "Email address is invalid";
  }
  return errorCreate;
}



export default Contact;