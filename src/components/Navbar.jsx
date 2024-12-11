import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setHamburger] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle Mobile Menu
  const toggleMenu = () => setHamburger((prevState) => !prevState);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navbar items
  const navItems = [
    { name: "About", links: "about", id: 0 },
    { name: "Projects", links: "projects", id: 1 },
    { name: "Skills", links: "skills", id: 2 },
    { name: "Contact", links: "contact", id: 3 },
  ];

  return (
    <div
  className={`fixed top-0 left-0 w-full z-50 bg-[#232323] text-white transition-transform duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <div className="flex text-lg justify-between text-gray-200 items-center  px-4 max-w-full h-16 mx-auto">
    <h1 className="text-primary-color text-2xl font-bold">PureCoders</h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 z-10 cursor-pointer">
      {navItems.map((items) => (
        <li key={items.id} className="relative group">
          <Link
            to={items.links}
            smooth={true}
            offset={30}
            duration={500}
            className="active:text-pink-500"
            activeClass="text-pink-500"
          >
            {items.name}
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      ))}
    </ul>

    {/* Mobile Menu Icon */}
    <div
      onClick={toggleMenu}
      className="md:hidden z-30"
      aria-label="Toggle navigation menu"
    >
      {isOpen ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
    </div>

   {/* Mobile Menu */}
<div
  className={`${
    isOpen
      ? "text-right z-20 fixed h-screen top-0 left-1/3 right-0"
      : "fixed top-0 right-[-100%] md:hidden"
  } transition-all duration-300`}
>
<ul className="font-semibold text-xl px-8 h-full bg-[#232323] shadow-lg border-l border-gray-600 space-y-4 pt-[65px]">
  {navItems.map((item) => (
    <li
      className="cursor-pointer py-3 hover:text-white hover:underline transition-all duration-200"
      key={item.id}
    >
      <Link
        onClick={toggleMenu}
        to={item.links}
        smooth={true}
        offset={50}
        duration={500}
        className="active:text-pink-500"
        activeClass="text-pink-500"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

</div>

  </div>
</div>

  );
};
