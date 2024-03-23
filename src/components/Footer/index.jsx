import React from "react";

const Footer = () => {
  return (
    <div className="text-[#D9D6E5]  mt-20 bg-[#17181A]">
      {/* top-section */}
      <div className="flex justify-between p-8">
        {/* left-section */}
        <div className="flex gap-16 ">
          <div className="flex flex-col gap-3 font-bold text-sm">
            <h6 className="font-bold text-lg mb-2 text-white">Jio Cinema</h6>
            <p>For you</p>
            <p>Sports</p>
            <p>Movies</p>
            <p>Tv Shows</p>
          </div>
          <div className="flex flex-col gap-3 font-bold text-sm">
            <h6 className="font-bold text-lg mb-2 text-white">Support</h6>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Content Complaints</p>
          </div>
        </div>

        {/* right-section */}
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-4">
            <h6 className=" text-[28px] font-bold text-white">
              Connect With Us
            </h6>
            <div className="flex gap-2">
              <img
                className="p-4 bg-[#333436] rounded-full"
                src="https://www.jiocinema.com/images/facebook.svg"
              />
              <img
                className="p-4 bg-[#333436] rounded-full"
                src="https://www.jiocinema.com/images/x.svg"
              />
              <img
                className="p-4 bg-[#333436] rounded-full"
                src="https://www.jiocinema.com/images/instagram.svg"
              />
              <img
                className="p-4 bg-[#333436] rounded-full"
                src="https://www.jiocinema.com/images/youtube.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className=" text-[28px] font-bold text-white">
              Download the App
            </h6>
            <div className="flex gap-2 mt-2">
              <img
                className="w-24 "
                src="https://www.jiocinema.com/images/googlePlay.svg"
              />
              <img
                className="w-24"
                src="https://www.jiocinema.com/images/appleStore.svg"
              />
             
            </div>
          </div>
        </div>
      </div>
      {/* bottom-section */}
      <div className="flex justify-between items-center bg-[#202123] p-6 border-t border-[#3b3c3e]">
        <p className="text-[13px] font-semibold">Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.</p>
        <img className="w-12" src="https://www.jiocinema.com/images/payments/jio-logo.png"/>
      </div>
    </div>
  );
};

export default Footer;
