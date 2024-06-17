import React from "react";
import { companyLogo } from "../../constants/page";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/*Branch logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* category grid*/}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <p className="font-semibold flex items-center md:mt-56 uppercase text-center mx-auto px-4 h-16 text-white md:-rotate-90 bg-black md:p-1.5 rounded-md">
          Explore New And Popular Styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/public/image/category/image1.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/public/image/category/image2.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/image/category/image3.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/image/category/image4.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/image/category/image4.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
