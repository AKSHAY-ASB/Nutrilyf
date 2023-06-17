// import React, { useState } from 'react';
// import Cards1 from '../Gallery';
// import JaggeryBlockCategory from '../SubCategory/JaggeryBlockCategory';
// import Menu from '../SubCategory/Menu';
// import MenuItems from '../SubCategory/MenuItems';
// import SubCat from '../SubCategory/SubCat';

// const AllCatValues = [... new Set(JaggeryBlockCategory.map((CurEle) =>  CurEle.category ))]

// export default function JaggeryBlock(){

//     const [items, setItems] = useState(JaggeryBlockCategory);


//     return(
//         <>
//             <h1 className='component-title-text py-3'>Jaggery Block</h1>
//             <MenuItems items={items}/>
//         </>
//     );
// }







import React, { useEffect, useState } from 'react';
import JaggeryPowderCategory from '../SubCategory/JaggeryPowderCategory';
import MenuItems from '../SubCategory/MenuItems';
import img1 from '../../images/Gallery/jaggeryBlock2.jpg'
import Footer from '../Footer/Footer';
const AllCatValues = [... new Set(JaggeryPowderCategory.map((CurEle) => CurEle.category))]


export default function JaggeryBlock() {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const [items, setItems] = useState(JaggeryPowderCategory);
    return (
        <>
            <h1 className='component-title-text my-3'>Jaggery Block</h1>


            <div className='container'>
                <div className='product_content'>
                    Good Life Cane Jaggery Block is extracted from sugarcane and is considered to be the best substitute of natural sugar. It is also used in biryani for a slight touch of sweetness. It is used in making your favourite sweet dish like gul poli.

                    <li className='product_subContent'>Rich in minerals.</li>
                    <li className='product_subContent'>Effective for throat and lung infection</li>
                    <li className='product_subContent'>It increases haemoglobin level in blood</li>
                    <li className='product_subContent'>Easily dissolved and balance the deficiency of sugar level</li>
                    <li className='product_subContent'>Easy to digest</li>
                    <li className='product_subContent'>Easy to use for value addition of Sweet products</li>

                    In addition to this, we provide availability of jaggery powder in different packing and quantities as per preference of customers.
                </div>


                <div>
                    <img src={img1} alt="image" style={{ width: '100%', borderRadius: '10px',marginTop:'30px',marginBottom:'30px' }} />
                </div>

            </div>

            <Footer />
        </>
    );
}





