import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useCategory from "../../hooks/adminHook/adminCategory/useCategory";
import LanguageSwitcher from "../LanguageSwitcher";
import category from '../../hooks/frotendHook/category'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Spa Menu State
  const [isMenuMedia, setIsMenuMedia] = useState(false); // Media Dropdown State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Mobile Menu State
  // const {categories} = useCategory();
  const {categoriesFront} = category();
  console.log('header category' , categoriesFront)
  const mediaMenus = ["Video", "Gallery"];


  return (
    <header className="w-full relative z-[100] font-josefin top-0">
       <div className="h-8 flex md:flex px-4 justify-end items-center w-full bg-gray-100 text-black fixed z-10 p-6 top-0">
        <div className="container mx-auto flex items-center justify-end gap-6 text-[12px] font-medium">
          <span className="lg:text-[15px] xl:text-[15px]">+855 070542973</span>
          <span className="uppercase tracking-wider md:text-[10px] lg:text-[15px] xl:text-[15px]">Phnom Penh, Cambodia</span>
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* --- MAIN NAVBAR --- */}
      <nav className="w-full h-16  bg-gray-900 text-white px-6 fixed mt-12 top-0">
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <div className="text-[#aa9fc7] text-xl font-bold flex flex-col leading-tight tracking-widest">
              <span>MUDITA</span>
              <span className="text-[10px] text-center tracking-[0.4em] font-light text-white">
                SPA
              </span>
            </div>
          </div>
          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
            <Link
              to={"/"}
              className="hover:text-[#aa9fc7] transition-colors cursor-pointer text-white"
            >
              HOME
            </Link>
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center hover:text-[#aa9fc7] uppercase">
                Spa Menu
                <svg
                  className={`w-4 h-4 ml-1 -mt-1 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {isMenuOpen && (
                <div className="absolute top-full left-0 pt-4 w-56">
                  <div className="bg-white text-gray-800 shadow-2xl py-2 border-t-2 border-[#aa9fc7]">
                    {categoriesFront.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-5 py-3 border-b border-gray-200 last:border-none
                       hover:bg-gray-50 hover:text-[#aa9fc7] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <Link
              to={"/location"}
              className="hover:text-[#aa9fc7] cursor-pointer uppercase"
            >
              Location
            </Link>

            {/* Desktop Media Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenuMedia(true)}
              onMouseLeave={() => setIsMenuMedia(false)}
            >
              <div className="flex items-center hover:text-[#aa9fc7] uppercase">
                Media
                <svg
                  className={`w-4 h-4 ml-1 -mt-1 transition-transform ${isMenuMedia ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {/* Desktop Media Dropdown */}
              {isMenuMedia && (
                <div className="absolute top-full left-0 pt-4 w-44">
                  <div className="bg-white text-gray-800 shadow-2xl py-2 border-t-2 border-[#aa9fc7]">
                    {mediaMenus.map((item, i) => (
                      <Link
                        key={i}
                        // Since item is just a string like "Video", we create the path /video
                        to={`/${item.toLowerCase()}`}
                        className="block px-5 py-3 border-b border-gray-100 last:border-none hover:bg-gray-50 hover:text-[#aa9fc7] transition-colors"
                      >
                        {item}{" "}
                        {/* item is a string ("Video"), so this is safe */}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <Link
              to={"/contact"}
              className="hover:text-[#aa9fc7] cursor-pointer uppercase"
            >
              Contact
            </Link>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-gray-100 text-[13px] hover:bg-[#000000] hover:text-white cursor-pointer text-black px-7 py-2.5 rounded-full font-semibold transition-all">
              <Link to={'/booking'}>Book Now</Link>
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DROPDOWN (Top-to-Bottom) --- */}
      <div className="h-8 flex md:flex px-4 justify-end items-center w-full bg-gray-100 text-black fixed z-10 p-6 top-0">
        <div className="container mx-auto flex items-center justify-end gap-6 text-[12px] font-medium">
          <span className="text-[10px] md:text-[15px] lg:text-[15px] xl:text-[15px]">+855 070542973</span>
          <span className="uppercase tracking-wider text-[10px] md:text-[15px] lg:text-[13px] xl:text-[13px] font-semibold">Phnom Penh, Cambodia</span>
          <LanguageSwitcher />
        </div>
      </div>
      <div
        className={`
        md:hidden fixed absolute top-28 left-0 w-full bg-[#2D2D2D] shadow-2xl overflow-hidden transition-all duration-500 ease-in-out z-50
        ${isMobileNavOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <ul className="flex flex-col p-6 space-y-4 text-white uppercase text-sm font-medium">
          <Link
            to={"/"}
            className="text-[#aa9fc7] py-2 border-b border-gray-800"
          >
            Home
          </Link>

          {/* Mobile Spa Menu Accordion */}
          <li>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex justify-between items-center w-full py-2 border-b border-gray-800 uppercase"
            >
              Spa Menu
              <svg
                className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
              <ul className="pl-4 space-y-3 lowercase text-gray-400 border-l border-[#aa9fc7]">
                {service.map((item, i) => <Link key={i}>{item.label}</Link>)}
              </ul>
            </div> */}

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMenuOpen ? "h-auto opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-4 space-y-3 lowercase text-gray-300 border-l border-[#aa9fc7]">
                {categoriesFront.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="block hover:text-[#aa9fc7] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Mobile Media Accordion */}
          <li>
            <button
              onClick={() => setIsMenuMedia(!isMenuMedia)}
              className="flex justify-between items-center w-full py-2 border-b border-gray-800 uppercase"
            >
              Media
              <svg
                className={`w-4 h-4 transition-transform ${isMenuMedia ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Mobile Media Accordion */}
            <div
              className={`overflow-hidden transition-all duration-300 ${isMenuMedia ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <ul className="pl-4 space-y-3 lowercase text-gray-400 border-l border-[#aa9fc7]">
                {mediaMenus.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="block hover:text-[#aa9fc7] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <Link to = {'/location'} className="py-2 border-b border-gray-800">Location</Link>
          <Link to ={'/contact'} className="py-2 border-b border-gray-800">Contact</Link>

          <li className="pt-4">
            <button className="w-full bg-[#aa9fc7] py-4 rounded-full text-white font-bold tracking-widest uppercase">
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
