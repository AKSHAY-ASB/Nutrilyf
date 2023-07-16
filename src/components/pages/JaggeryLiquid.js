import React, { useEffect } from 'react'
import img1 from '../../images/Gallery/np16.JPG'
import Footer from '../Footer/Footer'
import color from "../../images/Information_Icons/color.png"
import block from "../../images/Information_Icons/block.png"
import Type from "../../images/Information_Icons/type.png"
import box from "../../images/Information_Icons/box.png"
import clock from "../../images/Information_Icons/clock.png"
import purity from "../../images/Information_Icons/purity.png"

const JaggeryLiquid = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <h1 className='component-title-text my-3'>Jaggery Liquid</h1>


      <div className='container product_content'>
        Liquid jaggery is a widely known as Indian Golden syrup as well, Indian substitute for mini syrup.
        The product obtained from the concentrating sugar cane juice after clarification. It is semi liquid and is also known as sugar cane juice concentrate.
        In Marathi it is popular with the name of Kakavi , the liquid jaggery contain water, sugar and non-sugar materials. The sugar is in the form of sucrose , glucose and fructose and non-sugar materials are organic and in organic material etc. proteins amino acids , phenolic  compounds, salt of calcium, potassium, magnesium, phosphorus, iron, zinc and sulphur etc.


        <div className="mainContainer">
                <div>
                    <img
                        src={img1}
                        alt="image"
                        style={{
                        width: "90%",
                        height: "70vh",
                        // borderRadius: "10px",
                        marginTop: "30px",
                        marginBottom: "30px",
                        }}
                    />
                </div>

                <div className="contentCard">
                <div className="titleHeader">
                    <h3>Jaggery Liquid Information</h3>
                </div>
                <div className="contents">
                    <img src={color} />
                    <div>
                    <h6 className="tilteName">Color</h6>
                    <small className="subTitle">Golden Brown</small>
                    </div>
                </div>
                <div className="contents">
                    <img src={block} />
                    <div>
                    <h6 className="tilteName">Form</h6>
                    <small className="subTitle">Liquid</small>
                    </div>
                </div>
                <div className="contents">

                    <img src={Type} />
                    <div>
                    <h6 className="tilteName">Type</h6>
                    <small className="subTitle">Pure and Natural Jaggery</small>
                    </div>
                </div>
                <div className="contents">
                    <img src={box} />
                    <div>
                    <h6 className="tilteName">Packaging Size</h6>
                    <small className="subTitle">650 gm, 1 Kg</small>
                    </div>
                </div>
                <div className="contents">
                    <img src={clock} />
                    <div>
                    <h6 className="tilteName">Shelf life</h6>
                    <small className="subTitle">15 to 18 Months</small>
                    </div>
                </div>
                <div className="contents">
                    <img src={purity} />
                    <div>
                    <h6 className="tilteName">Purity</h6>
                    <small className="subTitle">100%</small>
                    </div>
                </div>
                </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default JaggeryLiquid