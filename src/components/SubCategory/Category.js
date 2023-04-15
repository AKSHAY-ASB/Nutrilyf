import React from 'react'

const Category = ({filterItem , catItems}) => {
    return (
        <div>
             <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((CurEle, index) =>{
                            return <button className="btn btn-waring" key={index} onClick={() =>filterItem(CurEle)}>{CurEle}</button>
                        })
                    }
                    {/* <button className="btn btn-waring" onClick={() =>filterItem("Fruits")}>Fruits</button>
                    <button className="btn btn-waring" onClick={() =>filterItem("Vegetables")}>Vegetables</button>
                    <button className="btn btn-waring" onClick={() =>filterItem("Spices")}>Spices</button> */}
                </div>
            </div>
        </div>
    )
}

export default Category
