import React from "react";
import {
  FaReact,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
const skills = [
  { name: "Python", icon: <FaPython className="text-green-400" /> }, // Softer green
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> }, // Softer yellow
  { name: "React", icon: <FaReact className="text-blue-400" /> }, // Light blue
  { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> }, // Softer orange
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> }, // Slightly lighter blue
  { name: "Git/GitHub", icon: <FaGithub className="text-gray-300" /> }, // Subtle gray
  { name: "MySql/Postgress", icon: <FaDatabase className="text-gray-300" /> }, // Subtle gray
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#232325] text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="span">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2b2b2e] rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r hover:from-[#dd32f3] hover:to-[#ce90cb]  hover:scale-105 transform transition duration-300"
          >
            <div className="text-5xl mb-4 transform transition hover:rotate-12">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-200 hover:text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
