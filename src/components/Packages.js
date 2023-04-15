import React,{useState,useRef,useEffect} from 'react'
import CardTour from './productCategory'
import KopDarshan from './KopDarshan'
import './Cards.css'
import SubCat from './SubCategory/SubCat'


function Packages() {
    const myRef = useRef(null)

   const executeScroll = () => {
       myRef.current.scrollIntoView({behavior: "smooth", offset: { top: 1000 } })
    }

    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])
    
   const hi = () => { console.log("hi")}
    
    const [selectedlist, setSelectedlist] = useState('kop') 

    // console.log(selectedlist)
    return (
        <>
        <div className="tour" style={{backgroundColor:' #fff'}}>
        <CardTour setSelectedlist={setSelectedlist}  executeScroll={executeScroll} hi={hi}/>
        </div>
        {/* component */}
        <SubCat/>
        
        {/* <div className="m-4" ref={myRef}>
           <KopDarshan selectedlist={selectedlist} />
        </div> */}
        
        
        </>
    )
}

export default Packages
