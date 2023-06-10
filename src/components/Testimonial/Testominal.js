import React from 'react'
import Testimonial from 'react-testimonial';


const Testominal = () => {
    return (
        <div className='container'>
            <h1 className='component-title-text'>Customer's reviews</h1>
            <Testimonial>
                <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                        Best Jaggery Powder. I use daily at my kitchen. Its Tasty.
                        </span>
                        <p className='pt-3'>-- Akshay Buchade --</p>
                    </div>
                </div>
                <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                        This is the best brand for Jaggery and Jaggery products. Taste is great!!.
                        </span>
                        <p className='pt-3'>-- Sandeep Sutar --</p>
                    </div>
                </div>
                
                <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                        I bought jaggery candy for my kids. They loved it. Its healthy too.
                        </span>
                        <p className='pt-3'>-- Swapnil Sutar --</p>
                    </div>
                </div>
            </Testimonial>
        </div>
            
    )
}

export default Testominal
