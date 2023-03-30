import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";
const Navbar = () => {
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`z-[10000] fixed top-0 left-0 right-0 transition-colors duration-500 ${
        isTop
          ? "bg-darkPurple border-primary border-solid border-b-2"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`app-container  flex justify-between items-center  p-4  `}
      >
        <a
          href="/"
          className="cursor-pointer focus:outline-none focus:border-none"
        >
          <img src={logo} alt="logo" />
        </a>
        <button className={`btn btn-secondary`}>Apply for access</button>
      </nav>
    </header>
  );
};

export default Navbar;
