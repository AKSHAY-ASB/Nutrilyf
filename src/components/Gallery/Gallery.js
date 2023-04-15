import React from 'react'
import './Gallery.css'
// import group_img from "../../assets/group-img.png";
// import laptop_img from "../../assets/laptop-img.png";
// import laptop from "../../assets/laptop.png";
// import network_img from "../../assets/network-img.png";
// import TitleandText from '../TitleandText/TitleandText';

import img1 from '../../images/Gallery/jaggeryBlock8.jpg'
import img2 from '../../images/Gallery/jaggeryBlock3.jpg'
import img3 from '../../images/Gallery/gallery1.jpg'
import img4 from '../../images/Gallery/JaggeryCubes.jpg'
import img5 from '../../images/Gallery/gallery6.jpg'
import img6 from '../../images/Gallery/gallery16.jpg'
import img7 from '../../images/Gallery/gallery5.jpg'
import img8 from '../../images/Gallery/gallery15.jpg'
import img9 from '../../images/Gallery/gallery13.jpg'
import img10 from '../../images/Gallery/gallery10.jpg'


const Gallery = () => {
  return (
    <>
    <div className='lorem'>
      <div className="container">
         <div className="row">
                <div className="side-1 col-md-8">
                <img
                  className="common_img img-fluid"
                  src={img1}
                  alt="icon"
                />
                </div>
                <div className="side-2 col-md-4">
                <img
                  className="common_img img-fluid"
                  src={img2}
                  alt="icon"
                />
                  <img
                  className="pt-3 common_img img-fluid"
                  src={img3}
                  alt="icon"
                />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={img9}
                  alt="icon"
                />
                </div>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={img10}
                  alt="icon"
                />
                </div>
            </div>

            {/* <div className="row">
                <div className="side-2 col-md-4">
                <img
                  className="common_img img-fluid"
                  src={img4}
                  alt="icon"
                />
                 <img
                  className="pt-2 common_img img-fluid"
                  src={img5}
                  alt="icon"
                />
                </div>
                <div className="side-1 col-md-8">
                <img
                  className="common_img img-fluid"
                  src={img8}
                  alt="icon"
                />
                
                </div>
            </div> */}


            <div className='row py-3'>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={img7}
                  alt="icon"
                />
                </div>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={img6}
                  alt="icon"
                />
                </div>
            </div>
            
            

      </div>
    </div>
    </>
  )
}

export default Gallery