

import img1 from "../../../images/Gallery/JC.jpg";
import color from "../../../images/Information_Icons/color.png"
import block from "../../../images/Information_Icons/block.png"
import Type from "../../../images/Information_Icons/type.png"
import box from "../../../images/Information_Icons/box.png"
import clock from "../../../images/Information_Icons/clock.png"
import purity from "../../../images/Information_Icons/purity.png"
import Footer from "../../Footer/Footer";
import { useEffect } from "react";



function JC() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='container pb-5'>

                <h1 className="component-title-text my-3">Jaggery Candy</h1>

                <div className="product_content">

                <h3>Jaggery Cube a Day "Maintains good intestinal health".</h3>                  

                    <li className="product_subContent">Boosts immunity.</li>
                    <li className="product_subContent">
                        Maintains good intestinal health
                    </li>

                    <li className='product_subContent'>Detoxifica Hon of the liver</li>
                    <li className='product_subContent'>Prevents constipation</li>
                    <li className='product_subContent'>pusifies blood</li>
                    <li className='product_subContent'>Helps with weight loss </li>
                    <li className='product_subContent'>fulfils 4% daily requirement mineral in our lives.</li>
                
                    <p className='pt-3'>Jaggery is reach in magnesium every 10 gm of food contains 16 mg of minerals so is one Consumes even 10 gram of it, her or she would
                        fulfilled 4% daily requirements of this mineral in our lives. Therefore, eating it on a daily
                        basis com lead to good intestinal health.Jaggery cube available in 8gm and 15 gm size.</p>

                </div>


                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                        <img src={img1} alt="image" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                        <div style={{ border: '1px solid' }}>
                            <div className="titleHeader">
                                <h3>Jaggery Candy Info</h3>
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
                                            <small className="subTitle">8gm, 15gm</small>
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

export default JC;