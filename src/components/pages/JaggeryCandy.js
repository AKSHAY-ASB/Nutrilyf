import React, { useState } from 'react';
import Cards1 from '../Gallery';
import JaggeryCandyCategory from '../SubCategory/JaggeryCandyCategory';
import Menu from '../SubCategory/Menu';
import MenuItems from '../SubCategory/MenuItems';
import SubCat from '../SubCategory/SubCat';
// import Candy from "../../images/Gallery/Jaggery.png"
// import jaggery_powder from "../../images/New/JaggeryPowder.jpg";
import img1 from '../../images/Gallery/Jaggery.jpg'

const AllCatValues = [... new Set(JaggeryCandyCategory.map((CurEle) => CurEle.category))]

export default function JaggeryBlock() {

  const [items, setItems] = useState(JaggeryCandyCategory);


  return (
    <>
      <h1 className='component-title-text my-3'>Jaggery Candy</h1>

      <img src={img1} alt="image" style={{ width: '100%' }} />
      <div className='container'>
        <div className='six-title pt-5'>
        <p className='six-title text-center'>Jaggery Cube a Day "Maintains good intestinal health"</p>

          <li>Boosts immunity </li>
          <li>Maintains good intestinal health</li>
          <li>Detoxifica Hon of the liver</li>
          <li>Prevents constipation</li>
          <li>pusifies blood</li>
          <li>Helps with weight loss </li>
          <li className='pb-3'>fulfils 4% daily requirement mineral in our lives.</li>


          Jaggery is reach in magnesium every 10 gm of food contains 16 mg of minerals so is one Consumes even 10 gram of it, her or she would
          fulfilled 4% daily requirements of this mineral in our lives. Therefore, eating it on a daily
          basis com lead to good intestinal health.Jaggery cube available in 8gm and 15 gm size.</div>
        
      </div>
    </>
  );
}