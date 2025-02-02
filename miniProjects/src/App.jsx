import React from "react";
import CustomeSlider from "./Projects/miniProject1/CustomeSlider";
import FeedbackSystem from "./Projects/miniProject2/FeedbackSystem";
import TextColorChanger from "./Projects/miniProject3/TextColorChanger";
import Parent from "./Projects/miniProject4/Parent";
import ChangeProductCount from "./Projects/miniProject5/ChangeProductCount";
import TodoParent from "./Projects/miniProject6/TodoParent";
import Contact from "./Projects/miniProject7/Contact";
import Project8 from "./Projects/miniProject8/Project8";
import Counter from "./Projects/miniProject9/Counter";
import Profile from "./Projects/miniProject10/Profile";
import Project11 from "./Projects/miniProject11/Project11";
import Todo from "./Projects/miniProject12/Todo";
import Todo2 from "./Projects/miniProject12/Todo2";
import Todo3 from "./Projects/miniProject13/Todo3";
import Project14 from "./Projects/miniProject14/Project14";
import Project15 from "./Projects/miniProject15/Project15";
import CounterProvider from "./Projects/miniProject16/CounterProvider";
import CounterExample from "./Projects/miniProject16/Counter";

const App = () => {
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
      {/* <Counter/> */}
      {/* <Profile/> */}
      {/* <Project11/> */}
      {/* <Todo/> */}
      {/* <Todo2/> */}
      {/* <Todo3/> */}
      {/* <Project14 userName={"Basit"}/> */}
      {/* <Project15/> */}
      <CounterProvider>
        <CounterExample />
      </CounterProvider>
    </>
  );
};

export default App;
