import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const Hot = () => {
  return (
    <div className='p-4'>
         <div className='flex justify-between items-center'>
        <h2 className='text-white text-2xl font-bold '>Hot Right Now 🔥</h2>
        <IoIosArrowForward className='text-white h-8 w-8'/>
        </div>
    </div>
  )
}

export default Hot;