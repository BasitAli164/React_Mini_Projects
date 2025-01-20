import React, { useState } from "react";
import { dummyProducts } from "../assets/Data.js";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "react-feather";

const CustomeSlider = () => {
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const handleNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % dummyProducts.length);
  };
  const handlePrevious = () => [
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + dummyProducts.length) % dummyProducts.length
    ),
  ];

  const product = dummyProducts[index];

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#E8F9FF] w-full h-screen gap-2  ">
        <div className="flex justify-center items-center gap-20 mt-[-100px]">
          <div>
            <button onClick={handlePrevious}>
              <ChevronLeft />
            </button>
          </div>
          <div className="flex justify-center items-center w-[300px] h-[300px] bg-blue-200 shadow-2xl rounded-md hover:scale-[1.1] duration-[3s]" >
            <div className="flex items-center justify-center">
              <img className="w-3/4" src={product.images[1]} alt="Product-Image" />
            </div>
          </div>
          <div>
            <button onClick={handleNext}>
              <ChevronRight />
            </button>
          </div>
        </div>

        <div  className="flex flex-col justify-center items-center mt-10">
          <button onClick={handleToggle}>
            {showMore ? <ChevronUp /> : <ChevronDown />}
          </button>
         {
          showMore && (
            <div  className="flex flex-col justify-center items-center w-[900px] bg-red-300 ">
              <h2 className="text-3xl font-bold">Product Detail</h2>
              <table className="bg-white w-full flex flex-col ">
                <thead className="bg-gray-400 w-full ">
                  <th className="flex justify-between items-center text-xl uppercase font-normal">
                    <td>Name</td>
                    <td className="ml-32">price</td>
                    <td>Category</td>
                    <td className="ml-5">Size</td>
                    <td>Rating</td>
                  </th>
                </thead>
                <tbody className="w-full bg-stone-500 mx-auto ">
                  <tr className="flex justify-between">
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.availableSizes[0]}</td>
                    <td>{product.rating}</td>


                  </tr>
                </tbody>
              </table>
          </div>
          )
         }
        </div>
      </section>
    </>
  );
};

export default CustomeSlider;
