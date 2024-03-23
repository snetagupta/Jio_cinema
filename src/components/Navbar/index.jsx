import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#050606] to-[#050606] w-full px-10 py-5 flex justify-between">
      {/* Left section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img
            src="https://www.jiocinema.com/images/jc_logo_v2.svg"
            alt="Jio"
          />
          <button className="text-yellow-400 text-[13px] font-semibold rounded-full border-2 border-yellow-400 px-4 h-7">
            Subscribe
          </button>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4 text-gray-200 font-semibold">
          <span>Home</span>
          <span>TATA WPL</span>
          <span>Movies</span>
          <span>TV Shows</span>
          <div className="flex items-center gap-2">
            <span>More</span> <RiArrowDropDownLine className="w-8 h-8 mt-1  text-gray-200" />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        {/* Serach */}
        <div className="bg-white/20 flex items-center gap-3 px-5 py-2 rounded-full">
        <IoIosSearch className="w-5 h-5  text-white" />
          <input type="text" placeholder="Movies, Shows & More"  className="bg-transparent font-semibold tracking-wide"/>
        </div>
        {/* User Icon */}
        <div className="">
          <div className="w-[40px] h-[40px] bg-gray-700 rounded-full flex items-center justify-center" >
          <FaUserAlt className="w-6 h-6 text-white " />
          </div>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
