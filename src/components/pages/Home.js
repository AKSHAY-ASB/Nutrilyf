import React, {useEffect} from 'react';

import HeroSection from '../HeroSection';
import Cards1 from '../Gallery'
import Contact from './Contact';
import About from './About';
import Counter from '../Counter';
import Services from '../Products/Services';
import Footer from '../Footer/Footer';
import NewNav from '../Nav/Nav';
import Testominal from '../Testimonial/Testominal';
import ContactForm from './getQuote';
import EnquiryForm from '../getQuote/EnquiryForm';
import NutritionFactsTable from '../NutritionFactsTable'
import Benefits from '../Benefits/Benefits';
import ImageSlider from '../ImageSlider';

export default function Home(){

    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])

    return(
        <>
     
            <ImageSlider/>

            <Services/>
            {/* <Cards1/> */}
            <hr/>
            <Testominal/>
            
                <hr/>
            <NutritionFactsTable/>
            <hr/>
            <EnquiryForm/>
            <Counter/>
            <Benefits/>

            {/* <ContactForm/> */}
            {/* <About/> */}
            
            {/* <Contact/> */}
            <Footer/>
        </>
    );
}