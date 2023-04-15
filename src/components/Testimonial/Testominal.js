import React from 'react'
import Testimonial from 'react-testimonial';


const Testominal = () => {
  return (
    <div className='container'>
    <h1 className='component-title-text'>People Say's</h1>
      <Testimonial>
                <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                            I had the pleasure of working with him on an exciting project for over 18 months.
                            We have shared some highs, lows and some real head scratching moments.
                            He has been a real asset to the team and to me personally.
                        </span>
                        <p className='pt-3'>-- Akshay Buchade --</p>
                    </div>
                </div>
                <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                            He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                        </span>
                        <p className='pt-3'>-- Sandeep Sutar --</p>
                    </div>
                </div>
            </Testimonial>
    </div>
  )
}

export default Testominal
