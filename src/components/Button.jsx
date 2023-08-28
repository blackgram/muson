import React from "react";

const Button = (props) => {
  return (
    <a href="#" className={props.Class}>
      <div className="w-[80px] h-[30px] lg:w-[100px] lg:h-[40px] xl:w-[137px] xl:h-[59px] text-white text-[12px] md:text-[14px] xl:text-[20px] font-600 flex items-center justify-center bg-gradient-to-r from-[#FF2525] from-0% to-[#ff9898] to-100% ">
        {props.text}
      </div>
    </a>
  );
};

export default Button;
