import React from 'react'
import img1 from '../../images/Gallery/JaggeryLiquid.jpg'

const JaggeryLiquid = () => {
  return (
    <>
      <h1 className='component-title-text my-3'>Jaggery Liquid</h1>

      <img src={img1} alt="image" style={{ width: '100%' }} />
      <div className='container'>
        <div className='six-title pt-5'>
          Liquid jaggery is a widely known as Indian Golden syrup as well, Indian substitute for mini syrup.
          The product obtained from the concentrating sugar cane juice after clarification. It is semi liquid and is also known as sugar cane juice concentrate.
          In Marathi it is popular with the name of Kakavi , the liquid jaggery contain water, sugar and non-sugar materials. The sugar is in the form of sucrose , glucose and fructose and non-sugar materials are organic and in organic material etc. proteins amino acids , phenolic  compounds, salt of calcium, potassium, magnesium, phosphorus, iron, zinc and sulphur etc.
        </div>

      </div>
    </>
  )
}

export default JaggeryLiquid