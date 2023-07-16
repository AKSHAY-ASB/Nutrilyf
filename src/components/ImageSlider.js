// import Carousel from 'react-bootstrap/Carousel';
// import Slider2  from "../images/Slider/newSlider1.jpg";
// import Slider3  from "../images/Slider/newSlider2.jpg";
// function ImageSlider() {
//   return (
//     <Carousel>
    
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={Slider2}
//           alt="Second slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={Slider3}
//           alt="Third slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ImageSlider;



import Carousel from 'react-bootstrap/Carousel';
import Slider1 from "../images/Slider/newSlider1.jpg";
import Slider2 from "../images/Slider/newSlider1.jpg";
import Slider3 from "../images/Slider/newSlider2.jpg";

import newSliderFP from "../images/Slider/newSliderFP.jpg";
import newSliderFP1 from "../images/Slider/newSliderFP1.jpg";
import newSliderFP2 from "../images/Slider/newSliderFP2.jpg";

import "./ImageSlider.css";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={Slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={Slider3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={newSliderFP}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={newSliderFP1}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={newSliderFP2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;



