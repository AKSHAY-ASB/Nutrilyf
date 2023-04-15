import React , {useEffect} from 'react';

export default function Products(){

    useEffect(() => { 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
      }, [])

    return(
        <>
            <h1 className="products">Products</h1>
        </>
    );
}