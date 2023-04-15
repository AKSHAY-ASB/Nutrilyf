import React from 'react'
import {Link} from 'react-router-dom'


const MenuItems = ({items}) => {
    return (
        <>
                     {/* Menu Items  */}

                     <div className="Menu-items container-fluid mt-2">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">

                            {
                                items.map((CurE) => {
                                    const {id,text,name, image} = CurE;

                                    return(
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4"  key={id}>
                                     
                                        <Link className="cards__item__link1" to="/">
                                            <figure className="cards__item__pic-wrap1" data-category={name}>
                                                <img src={image} alt="Image" className="cards__item__img1"/>
                                            </figure>
                                            <div className="cards__item__info">
                                                <h5 className="cards__item__text1">{text}</h5>
                                            </div>
                                        </Link>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default MenuItems
