import React, { useRef, useState, useEffect } from "react";
import "./enquiry.css";
import bulb from "../../images/Gallery/gallery2.jpg";
import Logo from "../../images/Gallery/600.png";
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const EnquiryForm = () => {
  const [errorCreate, setErrorCreate] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");

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
  };

  return (
    <>
      <div className="getIn-div">
        <div class="container pb-5">
          <h1 className="component-title-text pb-5">Enquiry form</h1>

          <div className="row">
            <div className="left col-md-6">
              <div className="mt-5">
                <div>
                  <img src={Logo} alt="img" />
                  <h1 className="get-in-textTitle">
                    Always deliver more than expected
                  </h1>
                </div>
              </div>
            </div>
            <div className="right col-md-6 cardInfo">
              <form className="form-getInTouch mt-5" onSubmit={handleSubmit}>
                <div className="input-container-getIn">
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
                <button
                  className="mt-3 connect"
                  type="submit"
                >
                  {" "}
                  Submit
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default EnquiryForm;
