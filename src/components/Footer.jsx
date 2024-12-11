import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "About", links: "#about", id: 0 },
    { name: "Projects", links: "#projects", id: 1 },
    { name: "Skills", links: "#skills", id: 2 },
    { name: "Contact", links: "#contact", id: 3 },
    { name: "Privacy Policy", links: "#", id: 3 },
  ];

  const socialApps = [
    { name: "Facebook", icon: <FaFacebook size={20}/>, link: "#" },
    { name: "Twitter", icon: <FaTwitter size={20}/>, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn size={20}/>, link: "#" },
  ];

  return (
    <footer className=" text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg span font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              We are passionate about creating high-quality solutions tailored
              to meet the needs of our users.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold span mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.links} className=" hover:text-[#dd32f3] ">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold span mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li>Email: taofeekoyetunji01.com</li>
              <li>Phone: +234 9069579704</li>
              <li>Address: Osun State, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-sm">
            &copy; 2024 PureCoders. All rights reserved.
          </p>
          <div className="space-x-4 flex">
            {socialApps.map((items, index) => (
              <a href={items.link} key={index} className="text-gray-400 flex gap-2 hover:text-[#dd32f3]">
                {items.icon} {items.name}
              </a>
            ))}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
