import React from "react";
import Card from "./Card";
import { streamsData } from "./constants";

const Streams = () => {



  return (
    <div className="my-[90px] w-full md:px-[2rem] xl:px-[100px]">
      <div className="justify-center items-center flex flex-col md:flex-row mb-[30px] md:mb-[50px] ">
        <div className="flex  w-full justify-center items-center font-600 md:pl-[150px] text-[40px]">
          <div>Popular</div>
          <div className="ml-[10px] text-[#FD5454] ">Streams</div>
        </div>
        <a href="#" className="md:mr-[20px] md:relative right-[0px]">
          <div className="w-[80px] h-[30px] lg:w-[120px] lg:h-[48px] xl:w-[137px] xl:h-[59px] text-white md:text-[16px] lg:text-[20px] font-bold flex items-center justify-center bg-gradient-to-r from-[#FF2525] from-70% to-[#ff252500] to-100% ">
            Login
          </div>
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        {streamsData.map((item) => (
            <Card
            key={item.id}
            bigImage={item.banner}
            title={item.title}
            description={item.description}
            smallImage={item.image2}
            estyle='active'
          />
        ))}
      </div>
    </div>
  );
};

export default Streams;
