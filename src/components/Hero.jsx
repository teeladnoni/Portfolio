import React from "react";
import profilepic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 pt-4 h-screen place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14 px-6">
      {/* Text Section */}
      <div className="max-w-[900px] min-w-[600px] space-y-6">
        <p className="text-gray-200 md:text-4xl text-2xl tracking-tight">
          Hey, I AM <br />
          <span className="text-white font-bold">OYETUNJI TAOFEEK</span> <br />
          <span>I Specialize in </span><br/>

          {/* Typewriter Animation */}
          <span className="inline-block">
            <TypeAnimation
              sequence={[
                "Python Development",
                1000,
                "Fullstack Development",
                1000,
                "Software Engineering",
                1000,
                "Bot Automation",
                1000,
                "Web Scraping",
                1000,
              ]}
              speed={40}
              repeat={Infinity}
              className="font-bold italic bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] bg-clip-text text-transparent"
            />
          </span>
        </p>
        <h2 className="text-gray-300 text-lg">With 2+ years of experience</h2>

        {/* Social Icons */}
        <div className="flex justify-start gap-6 my-4 text-purple-600">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} className="text-blue-700 hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={30} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={30} className="text-white hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size={30} className="text-blue-700 hover:scale-110 transition-transform" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={30} className="text-red-600 hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200 w-1/2 
          p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl"
          >
            Download CV
          </button>
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-gray-200 w-1/2 
          p-3 border border-gray-400 rounded-xl"
          >
            View Work
          </button>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          className="md:w-[300px] w-[200px] rounded-full border-4 border-purple-500 filter grayscale brightness-75 hover:filter hover:grayscale-0 hover:brightness-100 transition-all"
          src={profilepic}
          alt="Oyetunji Taofeek"
        />
      </div>
    </div>
  );
};
