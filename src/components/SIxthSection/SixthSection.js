// import React from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// // import people from '../../Assets/circle-of-people-new.png'
// // import JOIN from '../../Assets/JoinButton.png'
// // import RectangleSix from '../../Assets/RectangleSix.png'
// // import jaggery_cube  from "../../images/Jaggery/3.jpg"
// import jaggery from "../../images/New/about_img.jpg";

// import './SixthSection.css'

// const SixthSection = () => {
//   return (
//     <div className='six'>
//       {/* <Container> */}
//       <h1 className="component-title-text" >
//         About us
//       </h1>


//         <div class="row" style={{backgroundColor:"red"}}>
//           <div class="col">
//             <p className='six-title'>
//               The company is always engaged in the reasearch of processing and providing the top quality of various/ diverse range of agriculture products.
//               Nutrilyf agro food products is founded with goal of "Creating Healthier Lives" i.e producing and processing of natural superior quality ,
//               unique and innovative jaggery products such as flavoured jaggery, jaggery powder and jaggery candy, flavoured liquid jaggery and jaggery based products under the roof of domestic and international
//               customers as well as educating them.or making aware about various/diverse range of healthy and Nutritive agriculture
//               products essential in our daily diet.
//               The company is based in Kolhapur, and it's led by an agriculture professionals with an educational background
//               of agriculture and extensive experience in hyginically processing of agriculture produce.
//             </p>
//           </div>
//           <div class="col">
//             <img
//               style={{ width: "100%" }}
//               src={jaggery}
//               alt=""
//             />
//           </div>
//         </div>


//       <div className='col-md-6'>

//       </div>
//       <div className='col-md-6'>

//       </div>
//       <h1 className="component-title-text" >
//         Geographical indication of Kolhapur Jaggery
//       </h1>
//       <h2 className='six-title'>
//         Since 18th century , maharastra has been well known for its jaggery production.
//         Located in western part of largely accepted to be sugar capital of maharastra and turns into jaggery
//         that rank first in quality and quantity in india.
//         Kolhapur has wide and deep river and blessed with fertile allurial soil thus making it suitable for sugarcane
//         production,sugarcane seeds are conserved by farmers using traditional methods and this is one of many other factors.
//         For the the constantly sweet jaggery that is produced in Kolhapur.
//         Kolhapur jaggery or 'Gur' is processed using the age old techniques making it chemical free and completly Organic.
//         the alluring golden colour peculiar sweetness and distinctive features of the world famous Kolhapur.
//         Jaggery which has granted the Geographical indication tag (GI) in 2014.
//         It is exported in large quantities to europe , middle east and part of south-east asia.

//       </h2>

//       {/* </Container> */}
//        <div className="getIn-div">
//         <div className="container pb-5">
//           <div className="row">
//             <div className="left col-md-6">
//               <div className="mt-5">
//                 <h1 className="title-text" >Mission</h1>
//                 <h1 className="mission_text pt-2">"Creating Healthier Live" , We are committed to produce and supply best quality, unique and inovative products to the customers.</h1>

//               </div>
//             </div>
//             <div className="right col-md-6">
//               <div className="mt-5">
//                 <h1 className="title-text" >Vision</h1>
//                 <h1 className="mission_text pt-2">"We aim to become a pionner and a highly trusted brand by provinding consious healthy food products to customers."</h1>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SixthSection












import jaggery from "../../images/New/about_img.jpg";

import backAbout from "../../images/New/background_about1.jpg";
import Footer from "../Footer/Footer";

import './SixthSection.css'

const SixthSection = () => {
  return (
    <>
      <div className="about-us">
        <div className="content">
          <div className="about-text">
            <h2>About Us</h2>
            <p> The company is always engaged in the reasearch of processing and providing the top quality of various/ diverse range of agriculture products.
              Nutrilyf agro food products is founded with goal of "Creating Healthier Lives" i.e producing and processing of natural superior quality ,
              unique and innovative jaggery products such as flavoured jaggery, jaggery powder and jaggery candy, flavoured liquid jaggery and jaggery based products under the roof of domestic and international
              customers as well as educating them.or making aware about various/diverse range of healthy and Nutritive agriculture
              products essential in our daily diet.
              The company is based in Kolhapur, and it's led by an agriculture professionals with an educational background
              of agriculture and extensive experience in hyginically processing of agriculture produce.</p>
          </div>
          <div className="image">
            <img src={jaggery} alt="About Us" />
          </div>
        </div>
      </div>
      
      <div className="container">
        <h1 className="component-title-text pt-3" >
          Geographical indication of Kolhapur Jaggery
        </h1>
        <h2 className='about-text'>
          Since 18th century , maharastra has been well known for its jaggery production.
          Located in western part of largely accepted to be sugar capital of maharastra and turns into jaggery
          that rank first in quality and quantity in india.
          Kolhapur has wide and deep river and blessed with fertile allurial soil thus making it suitable for sugarcane
          production,sugarcane seeds are conserved by farmers using traditional methods and this is one of many other factors.
          For the the constantly sweet jaggery that is produced in Kolhapur.
          Kolhapur jaggery or 'Gur' is processed using the age old techniques making it chemical free and completly Organic.
          the alluring golden colour peculiar sweetness and distinctive features of the world famous Kolhapur.
          Jaggery which has granted the Geographical indication tag (GI) in 2014.
          It is exported in large quantities to europe , middle east and part of south-east asia.

        </h2>
      </div>

      <div className="getIn-div">
        <div className="container pb-5">
          <div className="row">
            <div className="left col-md-6">
              <div className="mt-5">
                <h1 className="component-title-text" >Mission</h1>
                <h1 className="mission_content pt-2">"Creating Healthier Live" , We are committed to produce and supply best quality, unique and inovative products to the customers.</h1>

              </div>
            </div>
            <div className="right col-md-6">
              <div className="mt-5">
                <h1 className="component-title-text" >Vision</h1>
                <h1 className="mission_content pt-2">"We aim to become a pionner and a highly trusted brand by provinding consious healthy food products to customers."</h1>

              </div>
            </div>
          </div>
        </div>
      </div>


    

      <Footer/>

    </>
  )
}

export default SixthSection