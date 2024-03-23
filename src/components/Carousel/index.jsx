import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CarouselImage = ({ imageUrl }) => {
  return (
    <div>
      <img
        className="w-full h-80 rounded-lg object-cover"
        src="https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/final_wpl_2024_dc_vs_rcb_clean_ctv-1710583348411.jpg"
        alt="show"
      />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="  relative">
      <div className=" w-full flex gap-3 justify-between py-4 pb-6 ">
        <div className="w-[27%] brightness-50">
          <CarouselImage />
        </div>
        <div className="w-[45%] shadow-2xl ">
          <CarouselImage />
        </div>
        <div className="w-[27%] brightness-50">
          <CarouselImage />
        </div>
      </div>
      <div className="  flex gap-4 text-white absolute bottom-2 right-24">
        <div className="rounded-full bg-zinc-600 p-2 flex items-center">
          <IoIosArrowBack className="w-6 h-6 rounded-full" />
        </div>
        <div className="rounded-full  bg-zinc-600 p-2 flex items-center">
          <IoIosArrowForward className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
