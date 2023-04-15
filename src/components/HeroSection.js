import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import Typed from "react-typed";

function HeroSection() {
  return (
    // <div className="hero-container">
    //   <video src="/Videos/JaggeryNew.mp4" autoPlay loop muted />
    //   {/* <h1 className="title-header">Nutrilyf Agro Food Products</h1> */}
    //   {/* <h2>IMPORT / EXPORT </h2> */}
    //   <p></p>
    //   {/* <div className="hero-btns"> */}
    //   {/* <h2 style={{backgroundColor:'#fccb00' }} >Welcome to Shree Mahalaxmi Tours And Travels Kolhapur.</h2> */}
    //   {/* <Typed
    //         className="typed-text"
    //         strings={["Welcome to Import Export Business."]}
    //         strings={["Always deliver more than expected."]}
    //         typeSpeed={40}
    //         backSpeed={60}
    //         loop
    //         /> */}
    //   {/* <Button className="btns"
    //                     buttonStyle="btn--outline"
    //                     buttonSize="btn--large">
    //                 GET STARTED
    //             </Button>
    //             <Button className="btns"
    //                     buttonStyle="btn--primary"
    //                     buttonSize="btn--large">
    //                 WATCH<i className="far fa-play-circle"/>
    //             </Button> */}
    //   {/* </div> */}
    // </div>

    <div id="player-overlay">
      <video src="/Videos/JaggeryNew.mp4" autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
