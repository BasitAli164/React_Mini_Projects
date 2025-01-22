import React, { useState } from 'react'
const initailProduct=[
    {id:0,name:"Baist Ali",count:3},
    {id:1,name:"Muhammad Ali",count:4},
    {id:2,name:"Sakina Batool",count:1},
    {id:3,name:"Khatija Batool",count:5},
    {id:4,name:"Kubra Batool",count:2},
]
const ChangeProductCount = () => {
    const [product,setProduct]=useState(initailProduct);
    console.log("the initail Product is:",product)
  return (
    <>
    <ul>
        {
            product.map((item,index)=>(
                <li>
                    {item.name}
                    {" "}
                    (<b>{count}</b>)
                    <button onClick={()=>}>+</button>
                </li>
            ))
        }
    </ul>

    </>
  )
}

export default ChangeProductCount
