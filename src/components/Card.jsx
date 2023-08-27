import React from "react";

const Card = (props) => {
  return (
    <a href="/">
    <div className={props.estyle === 'active' ? 'w-[280px] lg:w-[300px] h-[400px] 2xl:w-[390px] 2xl:h-[440px] m-[10px] border border-black border-solid shadow-customS hover:shadow-custom' : '' }>
      <img src={props.bigImage} />
      <div className="mx-[20px] mt-[30px]">
        <div className="flex items-center text-[18px] font-regular  ">
          <img src="/assets/streams/carbon_dot-mark.svg" />
          <div className="ml-[5px]">{props.title}</div>
        </div>
        <div className="max-w-[290px] my-[15px] ">
          {props.description}
        </div>
        <div className="flex justify-between">
          <div className="flex w-[50%] justify-between ">
            <img src="/assets/streams/like.svg" />
            <img src="/assets/streams/bookmark.svg" />
            <img src="/assets/streams/share.svg" />
            <img src="/assets/streams/option.svg" />
          </div>
          <img src={props.smallImage} />
        </div>
      </div>
    </div>
    </a>
  );
};

export default Card;
