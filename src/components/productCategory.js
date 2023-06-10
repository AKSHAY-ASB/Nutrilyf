import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
// import './Cards.css';
import ImageSlider from './ImageSlider';
// import "../App.css" 


function CardTour({setSelectedlist,executeScroll}) {

    const onButtonClick=(mode)=>{
        executeScroll();
        setSelectedlist(mode)
        
    }
    return (
        <>
        <ImageSlider/>
        
        <h2 style={{textAlign:'center' ,margin:'30px 30px' }}>Our Products</h2>
        <CardDeck className="card-tour-items">
        {/* <Card  className="hok" onClick={()=>onButtonClick('kop')}> */}
        <Card>
            <Card.Img variant="top" 
              src="/images/jaggeryBlock/jaggeryBlock2.jpg"
            />
            <Card.Body style={{height:"100%",backgroundColor:'#fff'}}>
           
            <Card.Text className="">
            Good Life Cane Jaggery Block is extracted from sugarcane and is considered to be the best substitute of natural sugar. It is also used in few of the curries or biryani for a slight touch of sweetness. It is used in making your favourite sweet dish like gul poli.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <Card.Title ><p className='services-title'>Jaggery Block</p></Card.Title>
            </small>
            </Card.Footer>
        </Card>
       
        {/* <Card className="hok" onClick={()=>onButtonClick('southgoa')}> */}
        <Card>
            <Card.Img variant="top" 
            src="/images/jaggeryPowder/jaggeryPowder1.jpg"
            />
            <Card.Body style={{backgroundColor:'#fff'}}>
            {/* <Card.Title>South Goa</Card.Title> */}
            <Card.Text className="dj">
            Jaggery powder is made from the sap of sugarcane that contains high amounts of sucrose. It is a delicious sweetener that can be used to replace the sugar in a lot of foods. It can be stored in the form of blocks or powder which can be later mixed into a food item
            {/* When you miss the beach, head towards Goa! */}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <Card.Title ><p className='services-title'>Jaggery Powder</p></Card.Title>
            </small>
            </Card.Footer>
        </Card>
        {/* <Card className="hok" onClick={()=>onButtonClick('northgoa')}> */}
        <Card>
            <Card.Img variant="top" 
             
            src="/images/jaggeryCandy/jagg_candy.jpg"
            />
            <Card.Body style={{backgroundColor:'#fff'}}>
            {/* <Card.Title>North Goa</Card.Title> */}
            <Card.Text className="dj">
            Jaggery is a traditional non-centrifugal cane sugar consumed in the Indian Subcontinent, Southeast Asia, and Africa. It is a concentrated product of cane juice and often date or palm sap without separation of the molasses and crystals, and can vary from golden brown to dark brown in colour.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">
            <Card.Title ><p className='services-title'>Jaggery Candy</p></Card.Title>
            </small>
            </Card.Footer>
        </Card>
        </CardDeck>
     </>
    )
}

export default CardTour
