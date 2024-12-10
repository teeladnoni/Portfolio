import React from "react";
import project1 from "../assets/project1.png";

const About = () => {
  const aboutMe =
    "I am a passionate developer with expertise in building user-friendly web and desktop applications. I love creating solutions that enhance productivity and solve real-world problems.";
  const dashboard = [
    { number: 11, text: "project", id: 1 },
    { number: 2, text: "years of experience", id: 2 },
    { number: 10, text: "happy clients", id: 3 },
  ];
  return (
    <div id="about" className="flex flex-col md:flex-row md:py-5 bg-[#232325] items-center gap-10 px-4">
  {/* Left Section (Image) */}
  <div className="w-full md:w-1/2  flex justify-center">
    <img
      src={project1}
      alt="About me"
      className="object-cover rounded-xl h-[280px] w-full max-w-[400px] filter grayscale brightness-50"
    />
  </div>

  {/* Right Section (Text and Stats) */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-4xl text-white font-bold mb-4">
      About <span className="text-primary-color">Me</span>
    </h2>
    <p className="text-gray-200 text-lg leading-8 mb-6 font-medium">{aboutMe}</p>


    {/* Stats Section */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
      {dashboard.map((item) => (
        <div
          key={item.id}
          className="bg-[#333333]/50 p-4 rounded-lg mb-2 text-center w-full max-w-[200px] mx-auto"
        >
          <h3 className="text-2xl font-bold text-white">{item.number}+</h3>
          <p className="text-sm text-gray-400 span">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default About;
