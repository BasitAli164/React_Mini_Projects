import React, { useState } from 'react'
import {dummyProducts} from '../assets/Data.js'
import {ChevronLeft,ChevronRight,ChevronUp,ChevronDown} from 'react-feather'

const CustomeSlider = () => {
  const [showMore,setShowMore]=useState(false);
  const [index,setIndex]=useState(0);

  const handleToggle=()=>{
    setShowMore(!showMore)
  }
  const handleNext=()=>{
    setIndex((currentIndex)=>(currentIndex+1)%dummyProducts.length)
  }
  const handlePrevious=()=>[
    setIndex((currentIndex)=>(currentIndex-1 + dummyProducts.length)% dummyProducts.length)
  ]

  const product=dummyProducts[index]
    
  return (
    <>
    <section className='flex flex-col justify-center items-center bg-[#E8F9FF] w-full h-screen gap-2  '>
       <div className='flex justify-center items-center mt-[-120px] bg-[#C5BAFF] w-[800px] h-[400px]'>
       <div>
        <button onClick={handlePrevious}> 
        <ChevronLeft/>
        </button>
        </div>
        <div className='flex justify-center items-center'>
            <img className='w-[50%]' src={product.images[3]} alt="Product-Image" />
        </div>
        <div>
          <button onClick={handleNext}>
          <ChevronRight/>

          </button>
        </div>

       </div>
       <div>
        <button onClick={handleToggle}>
          {showMore?<ChevronUp/>:<ChevronDown/>}
        </button>
       </div>
    </section>
      
    </>
  )
}

export default CustomeSlider
