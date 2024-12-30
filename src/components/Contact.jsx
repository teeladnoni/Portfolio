import React from "react";
import Form from "./Form";
import { FaPhone, FaMessage, FaLocationPin } from "react-icons/fa6";




const contactInfo = [
  {
    icon: <FaPhone size={20}/>,
    title: "Phone",
    description: "+234 9069579704",
  },
  {
    icon: <FaMessage size={20}/>,
    title: "Email",
    description: "taofeekoyetunji01@gmail.com",
  },
  {
    icon: <FaLocationPin size={20}/>,
    title: "Address",
    description: "Nigeria",
  },
];

const Contact = () => {
  return (
    
    <div id="contact" className="min-h-screen bg-[#232325] flex  justify-center p-6">
    <div className="w-full flex flex-col md:flex-row gap-10 bg-[#232325] p-8 ">
      <div className="w-full flex flex-col items-center justify-center md:w-2/3">
        <Form />
      </div>
      <div className="w-full md:w-1/3 flex  flex-col justify-center gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="p-4 bg-purple-500 text-white rounded-full">
              {item.icon}
            </span>
            <div>
              <h3 className="text-white/60 text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-base text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
