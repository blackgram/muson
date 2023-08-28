import React from "react";
import Card from "./Card";
import { streamsData } from "./constants";
import Button from "./Button";

const Streams = () => {



  return (
    <div className="my-[90px] w-full md:px-[2rem] xl:px-[100px]">
      <div className="justify-center items-center flex flex-col md:flex-row mb-[30px] md:mb-[50px] ">
        <div className="flex  w-full justify-center items-center font-600 md:pl-[150px] text-[40px]">
          <div>Popular</div>
          <div className="ml-[10px] text-[#FD5454] ">Streams</div>
        </div>
        <Button text='Start' />
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
