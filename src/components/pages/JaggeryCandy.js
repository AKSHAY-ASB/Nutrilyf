import React, { useEffect, useState } from 'react';
import Cards1 from '../Gallery';
import JaggeryCandyCategory from '../SubCategory/JaggeryCandyCategory';
import Menu from '../SubCategory/Menu';
import MenuItems from '../SubCategory/MenuItems';
import SubCat from '../SubCategory/SubCat';
// import Candy from "../../images/Gallery/Jaggery.png"
// import jaggery_powder from "../../images/New/JaggeryPowder.jpg";
import img1 from '../../images/Gallery/np14.JPG'
import Footer from '../Footer/Footer';
import color from "../../images/Information_Icons/color.png"
import block from "../../images/Information_Icons/block.png"
import Type from "../../images/Information_Icons/type.png"
import box from "../../images/Information_Icons/box.png"
import clock from "../../images/Information_Icons/clock.png"
import purity from "../../images/Information_Icons/purity.png"

const AllCatValues = [... new Set(JaggeryCandyCategory.map((CurEle) => CurEle.category))]

export default function JaggeryBlock() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [items, setItems] = useState(JaggeryCandyCategory);


  return (
    <>
      <h1 className='component-title-text my-3'>Jaggery Candy</h1>


      <div className='container'>

        <p className='product_content'>Jaggery Cube a Day "Maintains good intestinal health"</p>
        <li className='product_subContent'>Boosts immunity </li>
        <li className='product_subContent'>Maintains good intestinal health</li>
        <li className='product_subContent'>Detoxifica Hon of the liver</li>
        <li className='product_subContent'>Prevents constipation</li>
        <li className='product_subContent'>pusifies blood</li>
        <li className='product_subContent'>Helps with weight loss </li>
        <li className='product_subContent'>fulfils 4% daily requirement mineral in our lives.</li>

        <p className='pt-3'>Jaggery is reach in magnesium every 10 gm of food contains 16 mg of minerals so is one Consumes even 10 gram of it, her or she would
          fulfilled 4% daily requirements of this mineral in our lives. Therefore, eating it on a daily
          basis com lead to good intestinal health.Jaggery cube available in 8gm and 15 gm size.</p>

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
                    <h3>Jaggery Candy Information</h3>
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
                    <small className="subTitle">8gm, 15gm</small>
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
                    <small className="subTitle">500 gm, 1 Kg</small>
                    </div>
                </div>
                <div className="contents">
                    <img src={clock} />
                    <div>
                    <h6 className="tilteName">Shelf life</h6>
                    <small className="subTitle">8 to 10 Months</small>
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
  );
}