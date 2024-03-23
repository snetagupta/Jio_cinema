import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Cards = () => {
    const data = [{
        id:1,
        url:"https://v3img.voot.com/resizeMedium,w_450,h_450/v3Storage/assets/1x1-1710860240926.jpg"
    },
    {
        id:2,
        url:"https://v3img.voot.com/resizeMedium,w_450,h_450/v3Storage/assets/1x1-1710860240926.jpg"
    },
    {
        id:3,
        url:"https://v3img.voot.com/resizeMedium,w_450,h_450/v3Storage/assets/1x1-1710860240926.jpg"
    },
    {
        id:4,
        url:"https://v3img.voot.com/resizeMedium,w_450,h_450/v3Storage/assets/1x1-1710860240926.jpg"
    },
  
]
  return (
    <div className='flex  p-4 relative'>
        <div className='flex gap-2'>
            {data.map((url)=>(
             <img  src={url.url} key={url.id} className=' w-[275px] rounded-md opacity-80 hover:opacity-100 object-cover'/>  
            ))} 
        </div>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>< IoIosArrowForward className='w-8 h-8 text-white'/></div>
        
    </div>
  )
}

export default Cards;