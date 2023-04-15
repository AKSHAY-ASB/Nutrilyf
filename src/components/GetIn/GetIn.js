import React, { useRef, useState, useEffect } from "react";
import "./GetIn.css";

const GetIn = () => {


  return (
    <>
      <div className="getIn-div">
        <div className="container pb-5">
          <div className="row">
            <div className="left col-md-6">
              <div className="mt-5">
                <h1 className="component-title-text" >Mission</h1>
                <h1 className="get-in-text pt-2">"Creating Healthier Live" , We are committed to produce and supply best quality, unique and inovative products to the customers.</h1>

              </div>
            </div>
            <div className="right col-md-6">
              <div className="mt-5">
                <h1 className="component-title-text" >Vision</h1>
                <h1 className="get-in-text pt-2">"We aim to become a pionner and a highly trusted brand by provinding consious healthy food products to customers."</h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default GetIn;
