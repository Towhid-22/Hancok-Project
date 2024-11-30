import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="pt-[25px] fixed w-full z-[999] px-2.5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-[60px]">
            <img src="images/logo.png" alt="logo" />
            <ul className="hidden lg:flex gap-[30px]">
              <li className="font-oswald text-base font-normal text-primaryWhite">
                Home
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                About us
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                Tornament
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                Store
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                Team
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                FAQ
              </li>
              <li className="font-oswald text-base font-normal text-primaryWhite">
                Contact Us
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex items-center gap-[26px]">
            <li className="text-primaryWhite">
              <TbWorld />
            </li>
            <li className="text-primaryWhite flex items-center gap-[7px]">
              <FaSignOutAlt />
              <span className="text-base font-oswald font-normal signIn">
                Sign In
              </span>
            </li>
            <li className="text-primaryWhite">
              <IoMdSearch />
            </li>
          </ul>
          <FaBarsProgress className="text-white lg:hidden text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
