

import img1 from "../../../images/Gallery/JS.jpg";
import color from "../../../images/Information_Icons/color.png"
import block from "../../../images/Information_Icons/block.png"
import Type from "../../../images/Information_Icons/type.png"
import box from "../../../images/Information_Icons/box.png"
import clock from "../../../images/Information_Icons/clock.png"
import purity from "../../../images/Information_Icons/purity.png"
import Footer from "../../Footer/Footer";
import { useEffect } from "react";



function JL() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='container pb-5'>

                <h1 className="component-title-text my-3">Jaggery Syrup</h1>

                <div className="product_content">
                    Liquid jaggery is a widely known as Indian Golden syrup as well, Indian substitute for mini syrup.
                    The product obtained from the concentrating sugar cane juice after clarification. It is semi liquid and is also known as sugar cane juice concentrate.
                    In Marathi it is popular with the name of Kakavi , the liquid jaggery contain water, sugar and non-sugar materials. The sugar is in the form of sucrose , glucose and fructose and non-sugar materials are organic and in organic material etc.
                    proteins amino acids , phenolic  compounds, salt of calcium, potassium, magnesium, phosphorus, iron, zinc and sulphur etc.
                </div>

                <div className="pt-3">
                <h3>How to use.</h3>
                <li className='product_subContent'>Healthier and tastier substitute to white refined sugar.</li>
                <li className='product_subContent'>Can be added to milk, breakfast cereals, baby food</li>
                <li className='product_subContent'>Food suppliments, Ice-cream, Cakes, Kheer, Healthy juice</li>

                <li className='product_subContent'>Can also used as a substitute to honey in a variety of herbal, ayurvedic and medicines like neam, tulsim, ginger powder.</li>
                <li className='product_subContent'>In daily diet it can be consumed with bread, chapati, jawar bhakri, millet bhakri, puran poli, roti etc.</li>
                </div>


                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                        <img src={img1} alt="image" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 pt-5">
                        <div style={{ border: '1px solid' }}>
                            <div className="titleHeader">
                                <h3>Jaggery Liquid Info</h3>
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
                                            <small className="subTitle">Liquid</small>
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
                                            <small className="subTitle">650 gm, 1 Kg</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="contents">
                                        <img src={clock} alt="shelf life" />
                                        <div>
                                            <h6 className="titleName">Shelf life</h6>
                                            <small className="subTitle">15 to 18 Months</small>
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

export default JL;