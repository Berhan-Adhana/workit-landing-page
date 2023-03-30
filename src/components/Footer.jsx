import React from "react";
import logo from "../assets/images/logo-dark.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-[100px] gap-y-[57px] pb-5  app-container">
      <img src={logo} alt="logo" className="w-[100px]" />
      <div className="flex gap-x-4 transition-colors duration-500">
        <AiFillFacebook
          size={24}
          className="cursor-pointer  text-davesgrey hover:text-darkPurple "
        />
        <AiOutlineTwitter
          size={24}
          className="cursor-pointer text-davesgrey hover:text-darkPurple "
        />
        <AiOutlineInstagram
          size={24}
          className="cursor-pointer text-davesgrey hover:text-darkPurple "
        />
      </div>
    </footer>
  );
};

export default Footer;
