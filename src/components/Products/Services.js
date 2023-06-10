import React, { useState } from "react";
import "./Services.css";
// import stream_meeting from "../../assets/stream_meeting.png";
// import Setting from "../../assets/Setting.png";
// import Circle from "../../assets/Circle.png";
// import Conference_base from "../../assets/Conference_base_New.png";
// import teacher_ui_logo from "../../assets/teacher-ui-new.png";
// import chrome_extension from "../../assets/chrome-extension.png";
// import Socket_Link from "../../assets/Socket_Link_New.png";
// import right_arrow from "../../assets/right_arrow.png";
import right_arrow from "../../images/right_arrow.png";
import Socket_Link from "../../images/Socket_Link_New.png";
import Conference_base from "../../images/Conference_base_New.png";
import teacher_ui_logo from "../../images/teacher-ui-new.png";

import jaggery from "../../images/New/Jaggery.jpg";
import jaggery_powder from "../../images/New/JaggeryPowder.jpg";
import jaggery_cube from "../../images/New/JaggeryCubes.jpg";
import jaggery_Liquid from "../../images/New/JaggeryLiquid.jpg";
import jaggery_Candy from "../../images/New/JaggeryCandy.jpg";

// src="/images/Nepo/4.jpg"

// import TitleandText from "../TitleandText/TitleandText";
// import checkmark from "../../assets/checkmark.png";

import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductModel from "./Modal";
import { modalData } from "./ModalData";

const Services = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState("");

  const handleOpen = (item) => {
    setModalItem(item);
    setModalShow(true);
  };

  return (
    <>
      <div className="product-back">
        <div className="container">
          {/* <TitleandText
            // title="Services"
            content="We create software solutions that make jobs easier"
            className="abc"
          /> */}

          <h1 className="pt-5 component-title-text">Our Products</h1>

          <div className="row">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Jaggery</h3>
                <div className="">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={50} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Jaggery is a sweetener that’s becoming popular as a
                        “healthy” replacement for sugar.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={35} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        What’s more, this sweetener has been given a serious
                        health halo.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        It’s often referred to as a “superfood sweetener.”
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">Fresh Jaggery</p>
                    </div>
                  </div>
                </div>
                <Link to="/jaggeryblocks" >
                <div className="mt-3">
                <button
                  type="button"
                  className="btn-learn-more"
                  // onClick={() => handleOpen(modalData[0])}
                  
                >
                  SEE MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
                </div>

                </Link>
              </div>
            </div>
            <div className="col-md-6 product-left mt-5">
              <div>
                <img
                  style={{ width: "100%", borderRadius: 10 }}
                  src={jaggery}
                  alt=""
                />
              </div>
            </div>
          </div>

          <ProductModel
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={modalItem}
          />

          <div className="row py-5">
            <div className="col-md-6 product-left">
              <div>
                <img
                  style={{ width: "100%", borderRadius: 10 }}
                  src={jaggery_powder}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Jaggery Powder</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={50} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Jaggery powder is a storehouse of carbohydrates which
                        helps to produce energy in the body.
                      </p>
                    </div>
                  </div>
                  {/* <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text"> Being rich in fibre, jaggery powder helps to activate digestive enzymes and thus improves
the digestive system.</p>
                  </div>
                </div> */}
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={40} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Jaggery powder may help purify the blood and flush out
                        toxins from the body.
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">Boosts Immunity</p>
                    </div>
                  </div>
                </div>
                <Link to="/jaggerypowder" >
                <button
                  type="button"
                  className="btn-learn-more"
                  // onClick={() => handleOpen(modalData[1])}
                >
                  SEE MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Jaggery Cubes</h3>
                <div className="my-4">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={25} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">Fresh Jaggery Cube</p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={50} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Jaggery cubes are made by evaporating the water from
                        sugar cane juice or palm sapwhich are then sold as
                        blocks.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        A little amount of jaggery can cleanse and detoxify your
                        body.
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/jaggerycandy">
                <button
                  type="button"
                  className="btn-learn-more"
                  // onClick={() => handleOpen(modalData[2])}
                >
                  SEE MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>

                </Link>
              </div>
            </div>
            <div className="col-md-6 product-left">
              <div>
                <img
                  style={{ width: "100%", borderRadius: 10 }}
                  src={jaggery_cube}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 product-left">
              <div>
                <img
                  style={{ width: "100%", borderRadius: 10 }}
                  src={jaggery_Liquid}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Jaggery liquid ( Kakvi )</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Helps in blood purification.
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        It controls the acidity as well as creates energy in the
                        human body.
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        It increases Hemoglobin level in blood.
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        {" "}
                        It is highly nutritious & lite to digest.
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/jaggeryliquid" >
                <button
                  type="button"
                  className="btn-learn-more"
                  // onClick={() => handleOpen(modalData[3])}
                >
                  SEE MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="row py-5">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Jaggery candy</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Jaggery blocks or in powdered form can be taken with
                        peanuts
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        It can be replaced with sugar in sweets, health drinks.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        It can be taken with pure organic turmeric to fight
                        infections.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-learn-more"
                  onClick={() => handleOpen(modalData[4])}
                >
                  SEE MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 product-left">
              <div>
                <img
                  style={{ width: "100%", borderRadius: 10 }}
                  src={jaggery_Candy}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
