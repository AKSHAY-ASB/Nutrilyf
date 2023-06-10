import React, { useState } from 'react';
import Cards1 from '../Gallery';
import JaggeryCandyCategory from '../SubCategory/JaggeryCandyCategory';
import Menu from '../SubCategory/Menu';
import MenuItems from '../SubCategory/MenuItems';
import SubCat from '../SubCategory/SubCat';
// import Candy from "../../images/Gallery/Jaggery.png"
// import jaggery_powder from "../../images/New/JaggeryPowder.jpg";
import img1 from '../../images/Gallery/jagg_candy.jpg'
import Footer from '../Footer/Footer';

const AllCatValues = [... new Set(JaggeryCandyCategory.map((CurEle) => CurEle.category))]

export default function JaggeryBlock() {

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


        <img src={img1} alt="image" style={{ width: '100%', borderRadius: '10px', marginTop: '30px', marginBottom: '30px' }} />
      </div>


      <Footer />
    </>
  );
}