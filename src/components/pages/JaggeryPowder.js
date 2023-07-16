import React, { useEffect, useState } from 'react';
import JaggeryPowderCategory from '../SubCategory/JaggeryPowderCategory';
import MenuItems from '../SubCategory/MenuItems';
import img1 from '../../images/Gallery/np.JPG'
import Footer from '../Footer/Footer';
import color from "../../images/Information_Icons/color.png"
import block from "../../images/Information_Icons/block.png"
import Type from "../../images/Information_Icons/type.png"
import box from "../../images/Information_Icons/box.png"
import clock from "../../images/Information_Icons/clock.png"
import purity from "../../images/Information_Icons/purity.png"


const AllCatValues = [... new Set(JaggeryPowderCategory.map((CurEle) => CurEle.category))]


export default function JaggeryPowder() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    const [items, setItems] = useState(JaggeryPowderCategory);
    return (
        <>
            <h1 className='component-title-text my-3'>Jaggery Powder</h1>


            <div className='container'>
                <div className='product_content'>
                    We offer good quality natural jaggery powder which is used for adding sweet taste to variety of recipes and dishes.
                    Jaggery powder is made by concentrating wholesome richness of sugarcane juice after removing the impurities from the resulting syrup. The nutrients of natural sugar cane juice make it healthy and natural sweeter.

                    <li className='product_subContent'>Rich in minerals.</li>
                    <li className='product_subContent'>Effective for throat and lung infection</li>
                    <li className='product_subContent'>It increases haemoglobin level in blood</li>
                    <li className='product_subContent'>Easily dissolved and balance the deficiency of sugar level</li>
                    <li className='product_subContent'>Easy to digest</li>
                    <li className='product_subContent'>Easy to use for value addition of Sweet products</li>
                    <p className='pt-3'>In addition to this, we provide availability of jaggery powder in different packing and quantities as per preference of customers.</p>
                </div>

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
                    <h3>Jaggery Powder Information</h3>
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
                    <small className="subTitle">Powder</small>
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
    );
}





