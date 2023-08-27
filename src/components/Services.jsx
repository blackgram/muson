import React from "react";
import { servicesData } from "./constants";

const Services = () => {
  
  return (
    <div className="w-full bg-yellowish flex flex-col  justify-center items-center py-[50px] ">
      <div className="flex text-[30px] font-bold md:text-[40px] md:font-600 leading-[48px] mb-[20px] ">
        <div>Our Learning</div>
        <div className="text-[#FD5454] ml-[10px]">Opportunity</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className={` w-[285px] h-[80px] 2xl:w-[394px] 2xl:h-[90px] py-[20px] pl-[10px] m-[25px] flex border border-solid border-black ${item.background}`}
          >
            <img src={item.image} />
            <div className="mx-[20px] ">
              <div className="font-bold text-[18px] xl:text-[20px] leading-[24px]">
                {item.title}
              </div>
              <div className="text-[16px] xl:text-[18px] leading-[21px] ">
                {item.courses} Courses
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
