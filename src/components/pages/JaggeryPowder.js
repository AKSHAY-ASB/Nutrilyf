import React, { useState } from 'react';
import JaggeryPowderCategory from '../SubCategory/JaggeryPowderCategory';
import MenuItems from '../SubCategory/MenuItems';
import img1 from '../../images/Gallery/jaggeryPowder1.jpg'
const AllCatValues = [... new Set(JaggeryPowderCategory.map((CurEle) => CurEle.category))]


export default function JaggeryPowder() {
    const [items, setItems] = useState(JaggeryPowderCategory);
    return (
        <>
            <h1 className='component-title-text my-3'>Jaggery Powder</h1>

            <img src={img1} alt="image" style={{ width: '100%' }} />
            <div className='container'>
                <div className='six-title pt-5'>
                    We offer good quality natural jaggery powder which is used for adding sweet taste to variety of recipes and dishes.
                    Jaggery powder is made by concentrating wholesome richness of sugarcane juice after removing the impurities from the resulting syrup. The nutrients of natural sugar cane juice make it healthy and natural sweeter.

                    <li>Rich in minerals.</li>
                    <li>Effective for throat and lung infection</li>
                    <li>It increases haemoglobin level in blood</li>
                    <li>Easily dissolved and balance the deficiency of sugar level</li>
                    <li>Easy to digest</li>
                    <li>Easy to use for value addition of Sweet products</li>

                    In addition to this, we provide availability of jaggery powder in different packing and quantities as per preference of customers.
                </div>
            </div>
        </>
    );
}





