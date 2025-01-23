import React from 'react'
import CustomeSlider from './Projects/miniProject1/CustomeSlider'
import FeedbackSystem from './Projects/miniProject2/FeedbackSystem'
import TextColorChanger from './Projects/miniProject3/TextColorChanger'
import Parent from './Projects/miniProject4/Parent'
import ChangeProductCount from './Projects/miniProject5/ChangeProductCount'
import TodoParent from './Projects/miniProject6/TodoParent'
import Contact from './Projects/miniProject7/Contact'
import Project8 from './Projects/miniProject8/Project8'
import Counter from './Projects/miniProject9/Counter'


const App = () => {
  console.log("parente")
  const [key,setKey]=React.useState(0);
  return (
    <>
    {/* <CustomeSlider/> */}
    {/* <FeedbackSystem/> */}
    {/* <TextColorChanger/> */}
    {/* <Parent/> */}
    {/* <ChangeProductCount/> */}
    {/* <TodoParent/> Again */}
    {/* <Contact/> Again */}
    {/* <Project8/> */}
  <button className='px-10 py-2 mx-8 rounded-full bg-cyan-300' onClick={()=>{
    console.log("the key is",key)
    setKey(key+1)
  }}>Reset</button>
    <Counter/>


    </>
  )
}

export default App
