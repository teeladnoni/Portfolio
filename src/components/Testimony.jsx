import React from "react";
import Slider from "react-slick";
import { setting, testimonialsData } from "./Testimonial";

export const Testimony = () => {
  return (
    <section className="py-14 bg-[#232325]  overflow-x-hidden">
    <div className="container mx-auto px-4">
      {/* header section */}
      <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto">
        <h2 className="text-white text-3xl font-bold">
          Our <span className="span">Testimonials</span>
        </h2>
        <p className="text-white text-lg font-semibold text-center">
          What Our Clients Say About Us
        </p>
      </div>

        {/* Testimonial card */}
        <div>
          <Slider {...setting}>
            {testimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 bg-[#2b2b2e] rounded-xl ">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-white/80">
                          {item.name}
                        </p>
                        <p className="text-white text-sm">{item.name}</p>
                      </div>
                    </div>
                    {/* lower section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-white">{item.text}</p>
                      <p className="span">★★★★☆</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
