import React from 'react';
import { IoIosArrowForward } from "react-icons/io";



const HorizontalCard = () => {
  return (
    <div className="p-4">
      
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold ">Top Global Studios</h2>
          <IoIosArrowForward className="text-white h-8 w-8" />
        </div>
     
      <div className="flex gap-5 relative">
        {[1,2,3].map(()=>(
        <div className="min-w-[230px] max-w-[230px]">
          <img className="rounded-lg" src="https://v3img.voot.com/resizeMedium,w_512,h_288/v3Storage/assets/peacock-logo16x9-1686372123165.jpg" alt=""/>
          
         
          </div>
        ))}
           <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>< IoIosArrowForward className='w-8 h-8 text-white'/></div>
      </div>
    </div>
  )
}

export default HorizontalCard