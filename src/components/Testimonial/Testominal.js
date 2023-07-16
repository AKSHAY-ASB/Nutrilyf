import React from 'react'
import Testimonial from 'react-testimonial';
import Card from 'react-bootstrap/Card';

const Testominal = () => {
    return (
        <div className='container'>
            <h1 className='component-title-text'>Customer's reviews</h1>
            <Testimonial>
                {/* <div className=" content mx-auto text-center">
                    <div className="card-body">
                        <span className='get-in-text'>
                        Best Jaggery Powder. I use daily at my kitchen. Its Tasty.
                        </span>
                        <p className='pt-3'>-- Akshay Buchade --</p>
                    </div>
                </div> */}
                <div className="content mx-auto text-center cardWidth">
                    <div className="card-body">
                        <span className='get-in-text'>
                            <Card style={{backgroundColor:'blanchedalmond'}}>
                                <Card.Body>

                                    <Card.Title>Best Jaggery Powder. I use daily at my kitchen. Its Tasty. and I loved it.</Card.Title>
                                    <Card.Text>
                                      --  Akshay Buchade  --
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </span>
                    </div>
                </div>


                <div className="content mx-auto text-center cardWidth">
                    <div className="card-body">
                        <span className='get-in-text'>
                            <Card style={{backgroundColor:'blanchedalmond'}}>
                                <Card.Body>

                                    <Card.Title>I really like this product and it's good value of money try everyone .!!</Card.Title>
                                    <Card.Text>
                                      --  Akshay Buchade  --
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </span>
                    </div>
                </div>


                <div className="content mx-auto text-center cardWidth">
                    <div className="card-body">
                        <span className='get-in-text'>
                            <Card style={{backgroundColor:'blanchedalmond'}}>
                                <Card.Body>

                                    <Card.Title>This is the best brand for Jaggery and Jaggery products. Taste is great!!.</Card.Title>
                                    <Card.Text>
                                    -- Sandeep Sutar --
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </span>
                    </div>
                </div>


                <div className="content mx-auto text-center cardWidth">
                    <div className="card-body">
                        <span className='get-in-text'>
                            <Card style={{backgroundColor:'blanchedalmond'}}>
                                <Card.Body>

                                    <Card.Title> I bought jaggery candy for my kids. They loved it. Its healthy too.</Card.Title>
                                    <Card.Text>
                                    -- Swapnil Sutar --
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </span>
                    </div>
                </div>
                


                {/* <div className=" content mx-auto text-center">
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
                </div> */}
            </Testimonial>
        </div>

    )
}

export default Testominal
