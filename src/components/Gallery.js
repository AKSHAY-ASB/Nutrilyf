import React , {useEffect} from 'react'
import CardItems from './CardItems'
import './Cards.css'
import FigureImage from 'react-bootstrap/FigureImage'
import Figure from 'react-bootstrap/Figure'
import {Link} from 'react-router-dom';


function Cards1() {
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
               src="/images/Nepo/4.jpg"
              text='The interior of the new Innova Crysta is unequalled in its refinement and class.'
              // label='Innova'
              // path='/services'
            />
            <CardItems
              src="/images/Nepo/5.jpg"
              text='Be it the plush, camel tan seats, enhanced legroom or soft-touch materials.'
              // label='Luxury'
              // path='/services'
            />
            <CardItems
               src="/images/Nepo/6.jpg"
              text='Be it the plush, camel tan seats, enhanced legroom or soft-touch materials.'
              // label='Luxury'
              // path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItems
             src="/images/Nepo/7.jpg"
              text=' The new Innova spells unparalleled comfort and finesse.'
              // label='Comfort'
              // path='/services'
            />
            <CardItems
              src="/images/Nepo/8.jpg"
              text='The new Innova Crysta is not only powerful and comfortable, it’s safe too. '
              // label='Powerful'
              // path='/products'
            />
            <CardItems
              src="/images/Nepo/9.jpg"
              text='It protects you and your family with 7 SRS Airbags during any eventuality.'
              // label='Relax'
              // path='/sign-up'
            />
          </ul>
        
        
        
        <button className="btn1">
          <Link to="/products" >
            <h1>See all Products</h1>
          </Link>
        </button>

       



        </div>
  
    </div>
    </>
    )
}

export default Cards1
