import React, { useEffect } from 'react'

import '../Cards.css'
import FigureImage from 'react-bootstrap/FigureImage'
import Figure from 'react-bootstrap/Figure'
import { Link } from 'react-router-dom';
import CardItems from '../CardItems';
import Footer from '../Footer/Footer';


function Gallery() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text='The interior of the new Innova Crysta is unequalled in its refinement and class.'

            />
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text='Be it the plush, camel tan seats, enhanced legroom or soft-touch materials.'

            />
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text='Be it the plush, camel tan seats, enhanced legroom or soft-touch materials.'

            />

          </ul>
          <ul className='cards__items'>
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text=' The new Innova spells unparalleled comfort and finesse.'

            />
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text='The new Innova Crysta is not only powerful and comfortable, it’s safe too. '

            />
            <CardItems
              src="/images/gallery_Photos/Gallery1.jpg"
              text='It protects you and your family with 7 SRS Airbags during any eventuality.'

            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery
