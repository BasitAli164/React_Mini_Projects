import React from 'react'
import { useTheme } from './ThemeContext'

const BackGroundChanger = () => {
    const{theme,setTheme}=useTheme();
  return (
    <section className={`h-full w-full bg-[${theme}] flex justify-center items-center`}>
        <button className='px-10 py-2 rounded-full bg-red-600' onClick={()=>setTheme('black')}>Click</button>      
    </section>
  )
}

export default BackGroundChanger
