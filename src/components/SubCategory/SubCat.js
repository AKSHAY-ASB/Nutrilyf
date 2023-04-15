import React, {useState} from 'react'
import Menu from './Menu'
import MenuItems from './MenuItems';
import Category from './Category';
import '../Cards1.css'

const AllCatValues = [... new Set(Menu.map((CurEle) =>  CurEle.category ))]

console.log(AllCatValues);

const SubCat = ({}) => {

    const [items, setItems] = useState(Menu);
    const [catItems , setCatItems] = useState(AllCatValues);

    const filterItem = (para_CatItem) => {
            const UpdatedItem = Menu.filter((CurEle) => {
                return CurEle.category === para_CatItem;
            })
            setItems(UpdatedItem);
    }

    return (
        <>
            {/* <h1>Change Category On Selected Items</h1> */}
            <hr/>

            <Category filterItem={filterItem} catItems={catItems}/>  
       
            {/* component */}
            <MenuItems items={items}/>
        </>
    )
}

export default SubCat
