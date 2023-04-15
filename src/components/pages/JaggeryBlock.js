import React, { useState } from 'react';
import Cards1 from '../Gallery';
import JaggeryBlockCategory from '../SubCategory/JaggeryBlockCategory';
import Menu from '../SubCategory/Menu';
import MenuItems from '../SubCategory/MenuItems';
import SubCat from '../SubCategory/SubCat';

const AllCatValues = [... new Set(JaggeryBlockCategory.map((CurEle) =>  CurEle.category ))]

export default function JaggeryBlock(){

    const [items, setItems] = useState(JaggeryBlockCategory);

 
    return(
        <>
            <h1 className='component-title-text py-3'>Jaggery Block</h1>
            <MenuItems items={items}/>
        </>
    );
}