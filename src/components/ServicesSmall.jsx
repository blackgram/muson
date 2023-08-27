import React from "react";
import { servicesData, responsive } from "./constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ServicesSmall = () => {

  return (
    <Carousel
      containerClass="w-full bg-yellowish flex py-[50px]"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
    >
      {servicesData.map((item, index) => (
        <div className="flex justify-center items-center flex-col gap-5" key={item.id}>
          <div
            className={`w-[285px] h-[80px] py-[20px] pl-[10px] flex border border-solid border-black ${item.background}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="mx-[20px]">
              <div className="font-bold text-[16px] leading-[24px]">
                {item.title}
              </div>
              <div className="text-[16px] xl:text-[18px] leading-[21px]">
                {item.courses} Courses
              </div>
            </div>
          </div>

          {index + 1 < servicesData.length && (
            <div
              className={`w-[285px] h-[80px] py-[20px] pl-[10px] flex border border-solid border-black ${
                servicesData[index + 1].background
              }`}
            >
              <img src={servicesData[index + 1].image} alt={servicesData[index + 1].title} />
              <div className="mx-[20px]">
                <div className="font-bold text-[16px]  leading-[24px]">
                  {servicesData[index + 1].title}
                </div>
                <div className="text-[16px] xl:text-[18px] leading-[21px]">
                  {servicesData[index + 1].courses} Courses
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ServicesSmall;
