import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUserAlt,
} from "react-icons/fa";
import logo from "/logo.png";
import { navItems } from "../constants/page";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 sticky bg-[white] z-10 top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block hover:text-orange-500 " />

        {/* logo*/}
        <a href="/">
          <p className="bg-[whitesmoke] text-2xl rounded-2xl px-5 py-2 font-semibold hover:text-orange-500 duration-500 hover:scale-105 transition-all">
            PAULWEARs
          </p>
        </a>

        {/* account and shopping btn */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-orange-500 "
          >
            <FaUserAlt />
            Account
          </a>
          <a
            href="/"
            className="flex items-center gap-2 hover:text-orange-500 "
          >
            <FaShoppingBag />
            Shoping
          </a>
        </div>

        {/* mobile navbar */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* category items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-orange-500 hover:scale-75 duration-300 mb-4"
            >
              <Link to="/">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/*only mobile menu items */}

      <div className="">
        <ul
          className={`bg-[whitesmoke] text-Black h-[55vh] px-4 py-2 rounded ${
            isMenuOpen ? "grid grid-cols-2 gap-6 font-semibold" : "hidden"
          }`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-orange-500 hover:scale-75 duration-300 my-3 cursor-pointer"
            >
              <Link to="/">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
