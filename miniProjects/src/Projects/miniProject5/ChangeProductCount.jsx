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
    const handleClick=(productId)=>{
        setProduct(product.map((item)=>{
            if(item.id===productId) return {...item,count:item.count+1}
            else return item               
        }))
    }
  return (
    <>
    <ul>
        {
            product.map((item,index)=>(
                <li key={item.id}>
                    {item.name}
                    {" "}
                    (<b>{item.count}</b>)
                    <button onClick={()=>{
                        console.log("item inside of the button",item)
                        handleClick(item.id)
                        }}>+</button>
                </li>
            ))
        }
    </ul>

    </>
  )
}

export default ChangeProductCount
