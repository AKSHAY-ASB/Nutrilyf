import React, { useRef, useState, useEffect } from "react";
import "./enquiry.css";
import bulb from "../../images/Gallery/gallery2.jpg";
import Logo from '../../images/Gallery/600.png'

const EnquiryForm = () => {
  const [valuesregi, setValuesregi] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [errorCreate, setErrorCreate] = useState({});

  const onChangeregi = (event) => {
    event.persist();
    setErrorCreate(validateregi(valuesregi));
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrorCreate(validateregi(valuesregi));
  //   //console.log('valuesregi'+JSON.stringify(valuesregi))
  //   // toast.success("Created successfully !");

  //   let errorCreate = {};
  //   if (!valuesregi.name) {
  //     errorCreate.name = "Name is required";
  //     console.log("valuesregi dsdads" + JSON.stringify(errorCreate.name));
  //   } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
  //     errorCreate.name = "Name is invalid";
  //   }
  //   if (!valuesregi.email) {
  //     errorCreate.email = "Email address is required";
  //   } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
  //     errorCreate.email = "Email address is invalid";
  //   }
  //   if (!valuesregi.phone) {
  //     errorCreate.phone = "phone number is required";
  //   } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
  //     errorCreate.phone = "phone number is invalid";
  //   } else {
  //     const payload = {
  //       name: valuesregi.name,
  //       email: valuesregi.email,
  //       phone: valuesregi.phone,
  //       website: valuesregi.website,
  //     };

  //     leadCreateApi(payload)
  //       .then((res) => {
  //         // console.log("response==>"+JSON.stringify(res))
  //         if (res?.status == 201) {
  //           toast.success("information submitted successfully !");
  //           setValuesregi({
  //             name: "",
  //             email: "",
  //             phone: "",
  //             website: "",
  //           });
  //         } else {
  //           toast.error("all fields is required");
  //         }
  //       })
  //       .catch((err) => {
  //         toast.error("email is required !" + err);
  //       });
  //   }
  // };

  return (
    <>
    <div className="getIn-div">
      <div class="container pb-5">
      <h1 className="component-title-text pt-5">Contact form</h1>

        <div className="row" >
          <div className="left col-md-6">
          {/* <div className="contact-box mt-5">
            <div className="c-heading">
              <h1>Get In Touch</h1>
              <p>Call Or Email Us Regarding Question Or Issues</p>
            </div>

            <div className="c-inputs">
              <h1>Contact Info</h1>
            <div style={{display:'flex'}}>
              <h2>
                <i className="fa fa-phone" aria-hidden="true"></i>Mobile No :
              </h2>
              <p>9172129781 </p>
              </div>
              <div style={{display:'flex'}}>
              <h2>
                <i className="fa fa-envelope" aria-hidden="true"></i> Firm :
              </h2>
              <p>Nutrilyf Agro Foods Products Pvt.Ltd.</p>
              </div>
              <div style={{display:'flex'}}>
              <h2>
                <i className="fa fa-map-marker" aria-hidden="true"></i> Address :
              </h2>
              <p>A.P Vandur, Tal:Kagal, Dist:Kolhapur, Maharashtra, India.</p>
          
              </div>
            </div>
          </div> */}  
            <div className="mt-5">
              <div>
              <img src={Logo} alt="img"/>
                {/* <h1 className="get-in-text pt-2">Let Dreampotential help</h1> */}
                <h1 className="get-in-textTitle">Always deliver more than expected</h1>
              </div>
              {/* <button
                  className="mt-5 member"
                  type="submit"
                 
                >
                  Be A Member !
                </button> */}
            </div>
          </div>
          <div className="right col-md-6">
            <form className="form-getInTouch mt-5">
              <div className="input-container-getIn">
              {/* <h1 className="get-in-text pt-5">Get In Touch</h1> */}
                <label className="label">Name* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="name"
                  onChange={onChangeregi}
                  value={valuesregi.name}
                  required
                />
                {errorCreate.name && (
                  <p className="err-msg">{errorCreate.name}</p>
                )}
              </div>

              <div className="input-container-getIn">
                <label className="label">Email* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="email"
                  onChange={onChangeregi}
                  value={valuesregi.email}
                  required
                />
                {errorCreate.email && (
                  <p className="err-msg">{errorCreate.email}</p>
                )}
              </div>
              <div className="input-container-getIn">
                <label className="label">Message</label>
                <textarea
                  style={{ height: "80px" }}
                  type="text"
                  name="phone"
                  onChange={onChangeregi}
                  value={valuesregi.phone}
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
                  className="mt-5 connect"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  {" "}
                  Send
                </button>
              {/* </div> */}
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
