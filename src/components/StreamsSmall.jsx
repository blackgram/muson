import React from "react";
import { responsive, streamsData } from "./constants";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StreamsSmall = () => {
  return (
    <Carousel
      containerClass="my-[90px] w-full"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
    >
      {streamsData.map((item) => (
        <div className="w-full flex justify-center">
        <Card
          key={item.id}
          bigImage={item.banner}
          title={item.title}
          description={item.description}
          smallImage={item.image2}
        />
        </div>
      ))}
    </Carousel>
  );
};

export default StreamsSmall;
