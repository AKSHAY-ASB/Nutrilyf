

import img1 from "../../../images/Gallery/JB.jpg";
import color from "../../../images/Information_Icons/color.png"
import block from "../../../images/Information_Icons/block.png"
import Type from "../../../images/Information_Icons/type.png"
import box from "../../../images/Information_Icons/box.png"
import clock from "../../../images/Information_Icons/clock.png"
import purity from "../../../images/Information_Icons/purity.png"
import Footer from "../../Footer/Footer";
import './JaggeryBlock.css'
import { useEffect } from "react";


function JB() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <div className='container pb-5'>

            <h1 className="component-title-text my-3">Jaggery Block</h1>

            <div className="product_content">
                Jaggery (Gur) is the coarse unrefined pure sugar made from sugarcane juice.
                A years ago when white sugar was not a commanly used sweetener in household, 
                good gaggery was used in all the seasons to make sweet food items like Halwas, 
                ladoos etc. Even today many people use this sweetener for making the traditional
                gur ki roti, gur ke chawal and halwas. 

                <li className="product_subContent">Rich in minerals.</li>
                <li className="product_subContent">
                    Effective for throat and lung infection
                </li>
                <li className="product_subContent">
                    It increases haemoglobin level in blood
                </li>
                <li className="product_subContent">
                    Easily dissolved and balance the deficiency of sugar level
                </li>
                <li className="product_subContent">Easy to digest</li>
                <li className="product_subContent">
                    Easy to use for value addition of Sweet products
                </li>
                
            </div>


            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                    <img src={img1} alt="image" style={{ width: '100%' }} />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                    <div style={{border: '1px solid'}}>
                        <div className="titleHeader">
                            <h3>Jaggery Block Info</h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="contents">
                                    <img src={color} alt="color" />
                                    <div>
                                        <h6 className="titleName">Color</h6>
                                        <small className="subTitle">Golden Brown</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contents">
                                    <img src={block} alt="form" />
                                    <div>
                                        <h6 className="titleName">Form</h6>
                                        <small className="subTitle">Block</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contents">
                                    <img src={Type} alt="type" />
                                    <div>
                                        <h6 className="titleName">Type</h6>
                                        <small className="subTitle">Pure and Natural</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contents">
                                    <img src={box} alt="packaging" />
                                    <div>
                                        <h6 className="titleName">Packaging Size</h6>
                                        <small className="subTitle">500 gm, 1 Kg</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contents">
                                    <img src={clock} alt="shelf life" />
                                    <div>
                                        <h6 className="titleName">Shelf life</h6>
                                        <small className="subTitle">8 to 10 Months</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contents">
                                    <img src={purity} alt="purity" />
                                    <div>
                                        <h6 className="titleName">Purity</h6>
                                        <small className="subTitle">100%</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        <Footer />
        </>
    );
}

export default JB;