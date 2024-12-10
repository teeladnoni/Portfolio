import React from "react";
import udemlogo from "../assets/udemlogo.png";

const certifications = [
  {
    courseName: "Course Title 1",
    platform: "Udemy",
    date: "December 2024",
    description:
      "This course focused on [brief course content]. I learned [skills].",
    certificateLink: "#", // link to your certificate if available
  },
  {
    courseName: "Course Title 2",
    platform: "Udemy",
    date: "November 2024",
    description:
      "This course focused on [brief course content]. I learned [skills].",
    certificateLink: "#", // link to your certificate if available
  },
];

const Credentials = () => {
  return (
    <div className="py-10 px-5  bg-gradient-to-r from-[#232325] to-[#2b2b2e] flex justify-center items-center min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          <span className="span">Certifications</span>
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-gray-800 text-white card rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex-shrink-0 mr-6">
                <img
                  className="w-12 h-12 text-blue-500"
                  src="https://www.langoly.com/wp-content/uploads/2022/09/udemy-logo.png"
                  alt="Certification Icon"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{cert.courseName}</h3>
                <p className="">{cert.platform}</p>
                <p className="text-sm  mb-4">{cert.date}</p>
                <p className="">{cert.description}</p>
                <a
                  href={cert.certificateLink}
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] hover:scale-105  text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credentials;