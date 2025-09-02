import { useState } from "react";
import pizzalog from "../../assets/pizzalogo.png";
import downarrow from "../../assets/downarrow.svg";
import bucketicon from "../../assets/bucketicon.svg";

import threelineicon from "../../assets/threelineicon.svg";

export const Nav = ({ select}:any) => {
  const [isOpen, setIsOpen] = useState(false);


  const menuItems = [
    { name: "Home", hasDropdown: false },
    { name: "About Us", hasDropdown: false },
    { name: "Shop", hasDropdown: false },
    { name: "Blog", hasDropdown: false },
    { name: "Pages", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  const handleClick = (name: string) => {
  if(select){
    select(name)
  }
  };

  return (
    <nav className="w-full bg-white shadow-[0_0_62px_0_rgba(0,22,89,0.17)]">
      <div className="flex justify-between items-center px-4 md:px-8 h-[63px] relative">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={pizzalog}
            alt="logo"
            className="w-[75px] md:w-[119px] h-auto"
          />
          <p className="font-['Fugaz_One'] text-[20px] md:text-[24px] text-[#EE3A43]">
            Pizza Hut
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <p className="font-[Oswald] font-medium text-[18px] text-[#212121] capitalize"
              >
               
                {item.name}
              </p>
              {item.hasDropdown && (
                <img src={downarrow} alt="" className="ml-1 w-3 h-3" />
              )}
            </div>
          ))}
        </div>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Bucket Icon with Zero */}
          <div className="relative cursor-pointer">
            <img src={bucketicon} alt="bucket" className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[black] rounded-full flex items-center justify-center text-white text-xs">
              0
            </div>
          </div>

          {/* Contact Us Button */}
          <button className="bg-[#FFC222] text-white px-4 py-2 rounded-md font-[Oswald] font-semibold text-[17px] cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          Bucket Icon
          <div className="relative cursor-pointer">
            <img src={bucketicon} alt="bucket" className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full flex items-center justify-center text-white text-xs">
              0
            </div>
          </div>
          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={threelineicon} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <p
                className="font-[Oswald] font-medium text-[18px] text-[#212121] capitalize"
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </p>
              {item.hasDropdown && (
                <img src={downarrow} alt="" className="w-3 h-3" />
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
