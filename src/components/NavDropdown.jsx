import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from "react-icons/gr"

const NavDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // close the dropdown when user clicks outside the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const MenuItems = [
    { text: "Home", link: "/" },
    { text: "Music", link: "/" },
    { text: "Event", link: "/" },
    { text: "Blog", link: "/" },
    { text: "Shop", link: "/" },
  ];

  return (
    <div className="w-full flex items-center justify-between p-4">
      <a href="#">
        {" "}
        <img
          src="/assets/logo.svg"
          alt="muson logo"
          className="w-[60px]"
        />{" "}
      </a>
      <div ref={dropdownRef} className="flex">
        <div className="flex justify-center items-center ">
          <a href="#" className="w-[30px] mr-[5px]">
            <img src="/assets/notification.svg" alt="notification icon" />{" "}
          </a>
          <a href="#" className="w-[30px] ml-[5px]">
            <img src="/assets/profile.svg" alt="profile icon" />{" "}
          </a>
          <GiHamburgerMenu
            fontSize="3rem"
            class="p-[10px] pr-0 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <div
            active={showDropdown}
            class={`${
              showDropdown ? "flex" : "none"
            } absolute flex-col right-0 top-[16px] bg-white rounded-[8px]
                                          z-100 px-[0] py-[4px] overflow-hidden transition duration-[0.3s] ease ${
                                            showDropdown
                                              ? "visible"
                                              : "invisible"
                                          }
                                          ${
                                            showDropdown
                                              ? "opacity-100"
                                              : "opacity-0"
                                          } origin-top ${
              showDropdown ? "scale-y-100" : "scale-y-[0.3]"
            }`}
          >
            <div className="flex items-start justify-end px-[2rem]">
            <GrClose fontSize={'2rem'}  onClick={() => setShowDropdown(!showDropdown)}/>
            </div>
            {MenuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                class="w-full flex items-start cursor-pointer transition duration-[.3s] ease py-[12px] px-[16px]
                            hover:shadow-[0_3px_6px_3px_rgba(0,0,0,.3)] color-[#0f1624] text-[18px] text-start text-black"
              >
                {item.text}
              </a>
            ))}
            <a
              href="#"
              className="w-full flex items-start cursor-pointer bg-red-400 transition duration-[.3s] ease py-[12px] px-[16px]
                            hover:shadow-[0_3px_6px_3px_rgba(0,0,0,.3)] text-white text-[18px] text-start text-black"
            >
              Login / Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
