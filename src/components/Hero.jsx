import React from "react";
import profilepic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const Hero = () => {
  const [linkedin, twitter, github, facebook, youtube] = [
    "http://www.linkedin.com/in/purecoders",
    "https://x.com/Pure_Coders",
    "https://github.com/teeladnoni",
    "https://www.facebook.com/Oyetunjiteelad",
    "https://www.youtube.com/@pure_coders",
  ];

  return (
    <div
      id="home"
      className="grid md:grid-cols-2 pt-4 h-screen place-items-center max-w-[1250] mx-auto mb-8 md:mb-32 mt-14"
    >
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-4xl text-2xl tracking-tight">
          Hey, I AM <br />
          <span className="text-white">OYETUNJI TAOFEEK</span> <br />
          <span>I Specialize in </span>
          <br />
          <TypeAnimation
            sequence={[
              "Python Developement",
              1000,
              "Fullstack Development",
              1000,
              "Software Enginearing",
              1000,
              "Bot Automation",
              1000,
              "Web Scrapping",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic bg-gradient-to-r  from-[#dd32f3] to-[#ce90cb] bg-clip-text text-transparent"
          />
        </p>
        <h2 className="text-gray-300"> with 2+ years of experience</h2>

        <div className="flex justify-start gap-10 my-2 text-purple-600">
          <AiFillLinkedin
            onClick={() => window.open(linkedin, "_blank")}
            size={30}
            className="text-blue-700 hover:scale-150"
          />
          <AiFillTwitterSquare
            onClick={() => window.open(twitter, "_blank")}
            size={30}
            className="text-white hover:scale-150"
          />
          <AiFillGithub
            onClick={() => window.open(github, "_blank")}
            size={30}
            className="text-white hover:scale-150"
          />
          <AiFillFacebook
            onClick={() => window.open(facebook, "_blank")}
            size={30}
            className="text-blue-700 hover:scale-150"
          />
          <AiFillYoutube
            onClick={() => window.open(youtube, "_blank")}
            size={30}
            className="text-red-600 hover:scale-150"
          />
        </div>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 
          p-2 bg-primary-color rounded-xl"
          >
            Download cv
          </button>
          <button
            className="relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 
                      p-2 border border-gray-400 rounded-xl  group"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#6b2b72] to-[#a5079d] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
              aria-hidden="true"
            ></span>
            <span className="relative z-10">View Work</span>
          </button>
        </div>
      </div>
      <img
        className="md:w-[300px] w-[200px] filter grayscale brightness-50 hover:filter hover:grayscale-0 hover:brightness-100"
        src={profilepic}
      ></img>
    </div>
  );
};
