import React, { useState } from "react";
import Background from "./Background";
import Box from "./Box";

const initialPosition = {
  x: 0,
  y: 0,
};
const Parent = () => {
  const [shap, setShap] = useState({
    color: "orange",
    position: initialPosition,
  });

  const handleMove = (dx, dy) => {
    // shap.position.x += dx;
    // shap.position.y += dy;
    setShap({
        ...shap,
        position:{
            
            x:shap.position.x + dx,
            y:shap.position.y + dy
        }
    })
  };
  const handleColorChange = (e) => {
    setShap({
      ...shap,
      color: e.target.value,
    });
  };
  return (
    <>
      <select value={shap.color} onChange={handleColorChange}>
        <option value="orange">Orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shap.color} position={shap.position} onMove={handleMove}>
        Dark me !
      </Box>
    </>
  );
};

export default Parent;
