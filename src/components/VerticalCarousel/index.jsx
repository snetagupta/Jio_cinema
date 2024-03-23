import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCrown } from "react-icons/fa";

const VerticalCarousel = () => {
  return (
    <div className="p-4">
      
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold ">Fresh Episodes 🆕</h2>
          <IoIosArrowForward className="text-white h-8 w-8" />
        </div>
     
      <div className="flex gap-3 relative">
        {[1,2,3,4,5,6].map(()=>(
        <div className="min-w-[180px] relative">
          <img className="rounded-lg" src="https://v3img.voot.com/resizeMedium,w_512,h_682/v3Storage/assets/abominable-3x4-1710742516555.jpg" alt=""/>
          
          <span className="bg-[#C3A76D] p-1 absolute top-3 left-3 rounded-full"><FaCrown className="w-5 h-5" /></span>
          </div>
        ))}
           <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>< IoIosArrowForward className='w-8 h-8 text-white'/></div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
