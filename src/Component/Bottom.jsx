import React, { useState } from 'react';
import leftarrow from '../assets/leftarrow.svg';
import rightarrow from '../assets/rightarrow.svg';
import question from '../assets/question.svg';
import dash from '../assets/dash.svg';
import image from '../image';
import { IoMdAdd } from "react-icons/io";

const Bottom = () => {
  const [images, setImages] = useState(image);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(images.length - 3, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
     
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[330px] w-[720px] bg-[#363c43] mt-6 px-8 py-4 relative rounded-xl shadow-custom">
      {/*Bottom [Side Icon] */}
      <img src={question} alt="question-icon"  className="absolute top-4 left-3" />
      <img  src={dash} alt="dash-icon" className="absolute left-3 top-1/2 " />
       
       
      
      {/*-------- Bottom [Nav] ---------*/}
      <div className="mx-2">
        <div className="flex items-center justify-between w-[94%]">
          <h1 className="w-[149px] h-[54px]  text-white bg-[#171717] rounded-2xl  py-3 text-xl mx-4 font-bold text-center">
            Gallery
          </h1>

          <div className="flex items-center gap-8">

            <label className="bg-[#FFFFFF08] text-white p-3 h-11 w-[130px] rounded-full flex items-center justify-center gap-1  uppercase font-semibold cursor-pointer add  ">
              <IoMdAdd />
              <span className='text-[12px]'>Add Image</span>
              <input
                type="file"
                onChange={handleAddImage}
                className="hidden"
              />
            </label>

            <div className="flex gap-5">
              <button
                onClick={handlePrev}
                className="bg-[#28292f] h-11 w-11 rounded-full flex items-center justify-center scale-[1.1] arrowbtn"
              >
                <img src={leftarrow} alt="left-arrow" />
              </button>

              <button
                onClick={handleNext}
                className="bg-[#28292f] h-11 w-11 rounded-full flex items-center justify-center scale-[1.1] arrowbtn"
              >
                <img src={rightarrow} alt="right-arrow" />
              </button>

            </div>
            
          </div>
        </div>
      </div>

      {/*------- Gallery-Box ---------*/}
      <div className="relative mt-8 mb-3 w-[92%] overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[200px] h-[179px] px-2"
            >
              <img
                src={img}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 hover:rotate-[-2deg]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
