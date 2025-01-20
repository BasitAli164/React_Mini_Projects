import React from 'react'
import {dummyProducts} from '../assets/Data.js'

const CustomeSlider = () => {

  const product=dummyProducts[0]
    
  return (
    <>
    <section className='flex flex-col justify-center items-center'>
       <div className='flex justify-center items-center mt-[-100px]'>
       <div>
            <button>Prev</button>
        </div>
        <div>
            <img src={product.images[3]} alt="Product-Image" />
        </div>
        <div>
            <button>Nexr</button>
        </div>

       </div>
       <div>
        <button> Detail</button>
       </div>
    </section>
      
    </>
  )
}

export default CustomeSlider
