import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Ipl = () => {
  return (
    <div>
      <div>
        <h2 className="text-white text-2xl font-bold p-4">
          TATA IPL 2024 Fixtures
        </h2>
      </div>
      <div className="flex gap-2 m-4  relative">
        {[1, 2, 3, 4].map(() => (
          <div className="bg-[#343536] rounded-2xl w-[320px] h-[180px] p-3">
            <p className="font-semibold text-[#A3A4A4]">Match 1 .TATA IPL 2024</p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2">
             <img className="w-6 h-6" src="https://v3img.voot.com/sports18/sticky/5970/1108.png" alt="hi"/>
             <p className="text-white font-bold">KKR</p>
             </div>
             <div className="flex gap-2">
             <img className="w-6 h-6" src="https://v3img.voot.com/sports18/sticky/5970/1105.png"/>
             <p className="text-white font-bold">RCB</p>
             </div>
             </div>
             <p className=" text-[#FCE2B2] text-xs font-semibold mt-3">22nd March . Match begins at 8:00 pm</p>
             <hr className="mt-2 text-[#848687]"/>
             <div className="flex justify-between items-center m-1 mt-2">
              <p className="bg-black text-white text-[12px] font-bold uppercase px-2">UpComing</p>
              <div className="flex gap-4">
                <p className=" text-white font-bold">Schedule</p>
                <p className=" text-white font-bold">Time</p>
              </div>
             </div>
            
          </div>
        ))}
         <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>< IoIosArrowForward className='w-8 h-8 text-white'/></div>
      </div>
    </div>
  );
};

export default Ipl;
