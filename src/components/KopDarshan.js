import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'


const KopDarshan = ({selectedlist}) => {
  
 const items = {
   
  kop : [
    {
      id: 1,
      header: 'Onion',
      description:
        'Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels — all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.',
      image: '/images/Nepo/Onions/pexels-pixabay-533342.jpg'
    },
    {
      id: 2,
      header: 'Potato',
      description:
        'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae. Wild potato species, originating in modern-day Peru, can be found throughout the Americas, from Canada to southern Chile.',
      image: '/images/Nepo/Potatoes/annie-spratt-_SHdelGzAp8-unsplash.jpg'
    },
    {
      id: 3,
      header: 'Lemon',
      description:
        'The lemon is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily Northeast India. The trees ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses.',
      image: '/images/Nepo/Lemons/L3.jpg'
    },
    {
      id: 4,
      header: 'Brocoli',
      description:
        'Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.',
      image: '/images/Nepo/Brocoli/b3.jpg'
    }
    
  ],

   southgoa : [
    {
      id: 1,
      header: 'Engineering Product',
      description:
        'Examples of products that mechanical engineers can design and develop are: transmissions; engine parts; aircraft engines; control systems; prosthetic devices; disk drives; printers; semiconductor tools; sensors; gas turbines; wind turbines; fuel cells; compressors; robots; and machine tools.',
      image: '/images/Nepo/Engg/Engineering1.jpg'
    }
    
  ],


  northgoa : [
    {
      id: 1,
      header: 'Textile product mills',
      description:
        'Textile product mills convert raw textiles into finished products other than apparel. Some of the items made in this sector include household items, such as carpets and rugs, towels, curtains and sheets, cord and twine, furniture and automotive upholstery, and industrial belts and fire hoses.',

      image: '/images/Nepo/Textile/pexels-mike-van-schoonderwalt-5503174.jpg'
    },
     ]
}
  // var items
  // console.log(selectedlist)
  // items = kop
  // if (selectedlist == 'kop'){
  //   items = kop
  //   console.log('its kop')
  // } else if (selectedlist == 'kokan'){
  //   items = kokan
  //   console.log('its kokan')
  // }else{
  //   items = ashtavinayak
  //   console.log('ashtavinayak')
  // }

  // var a = kop
  // console.log(a)
  
  return (
    <CardView
      
      items={items[selectedlist]}
      activeColor='green'
      imageHeight='400px'
      imageWidth='430px'
    />
  )
}

export default KopDarshan