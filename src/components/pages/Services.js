import React , {useEffect} from 'react';

export default function Services(){

    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])

    return(
        <>
            <h1 className="services">SERVICES</h1>
        </>
    );
} 