import React, { useState } from "react";
import { projectsData, categories } from "./Project";
import project1 from "../assets/project1.png"

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  return (
    <section
      id="projects"
      className="  bg-gradient-to-r from-[#232325] to-[#2b2b2e] py-16 px-8"
    >
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        My <span className="span">Projects</span>
      </h2>

      {/* tabs section */}
      <div className="grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={category + index}
            className={`py-2 px-4 rounded-full text-sm font-semibold transition-all ${
              activeTab === category
                ? "bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] text-white"
                : "bg-gray-700 text-gray-200 hover:bg-gradient-to-r hover:from-[#dd32f3] hover:to-[#ce90cb]"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-gray-800 card rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech + index}
                    className="text-xs bg-purple-600 text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  target="_blank"
                  href={project.github}
                  className="bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] hover:scale-105  text-white py-1 px-3 rounded"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  href={project.demo}
                  className="bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] hover:scale-105  text-white py-1 px-3 rounded"
                >
                  {project.live? 'Live' : 'Demo'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
