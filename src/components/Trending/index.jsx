import React from "react";

const TrendingButton = ({ text }) => {
  return <button className="text-white text-xs font-semibold px-3 py-[7px] bg-white/20 rounded-full">{text}</button>;
};

const Trending = () => {
  return (
    <div className="bg-gradient-to-r from-[#030303] to-[#030303] border-t border-[#3b3c3e]">
    <div className="bg-white/10 px-10 py-5 flex gap-2">
      {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14].map(() => (
        <TrendingButton text="Sneta"  />
      ))}
    </div>
    </div>
  );
};

export default Trending;
