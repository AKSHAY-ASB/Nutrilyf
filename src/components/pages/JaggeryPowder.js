import React, { useState } from 'react';
import JaggeryPowderCategory from '../SubCategory/JaggeryPowderCategory';
import MenuItems from '../SubCategory/MenuItems';
import img1 from '../../images/Gallery/jaggeryPowder1.jpg'
import Footer from '../Footer/Footer';
const AllCatValues = [... new Set(JaggeryPowderCategory.map((CurEle) => CurEle.category))]


export default function JaggeryPowder() {
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
               
                <img src={img1} alt="image" style={{ width: '100%', borderRadius: '10px', marginTop: '30px', marginBottom: '30px' }} />
            </div>
            </div>


            <Footer />
        </>
    );
}





