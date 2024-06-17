import React from "react";
import banner from "/image/banner.png";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4 z-0">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between gap-14 items-center">
        <div className="md:w-1/2">
          <img src={banner} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore and shop many different collections from various
            collections here.
          </p>
          <button className="bg-Black hover:text-orange-500 hover:rounded-2xl duration-300 px-6 py-2 text-white font-semibold rounded-md flex items-center gap-2">
            <FaShoppingBag /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
