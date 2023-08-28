import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="my-[2rem] md:px-[2rem] md:py-[2rem] lg:mb-[2rem] xl:py-[1.5rem] xl:px-[100px]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full my-[2rem]">
        <div className="md:w-[50%]  flex flex-col gap-[15px] justify-center p-10 md:p-2">
          <div className=" flex text-[28px] lg:text-[35px] xl:text-[38px] font-600 leading-[45px]  ">
            <div>We prioritize & Embrace the power of cooperation</div>{" "}
          </div>
          <div className="text-[18px] lg:text-[20px]  ">
            Team work is always a fast and better way to get work done and a
            more effective way.
          </div>
          <Button text='Get Started' />
          <div className="flex items-center font-500 text-[14px] lg:text-[18px] ">
            <img src="/assets/cta/idea.svg" className="mr-[5px] h-[14px] sm:h-[20px]" />
            <div className="mr-[25px]">Be creative</div>
            <img src="/assets/cta/communication.svg" className="mr-[5px] h-[14px] sm:h-[20px]" />
            <div>Communication is key</div>
          </div>
        </div>
        <div className="md:w-[50%] p-8 md:p-0 ml-[50px] sm:ml-[50px] flex justify-center items-center">
          <img
            src="/assets/cta/Rectangle24.svg"
            className="h-[90px] sm:h-[120px] lg:h-[160px] w-[90px] sm:w-[120px] lg:w-[160px] relative left-[60px] sm:left-[90px] md:left-[80px] lg:left-[120px] xl:left-[100px] bottom-[110px] sm:bottom-[130px] md:bottom-[180px]  lg:bottom-[220px] xl:bottom-[250px] z-0 "
          />
          <img src="/assets/cta/image29.png" className="z-10" />
          <div className="flex flex-col px-[15px] text-[12px] sm:text-[16px] sm:px-[15px] py-[15px] sm:py-[5px] shadow-xl relative top-[130px] sm:top-[150px] right-[200px] sm:right-[250px] md:right-[220px] bg-white min-w-[120px] sm:min-w-[175px] min-h-[67px] z-20 ">
            <div>Meet your team</div>
            <img src="/assets/cta/tpi.png" />
          </div>
        </div>
      </div>

      {/* section break */}

      <div className="relative flex flex-col md:flex-row items-center p-8 md:p-0 w-full my-[2rem] ">
        <div className="md:w-[50%] p-2 flex justify-center items-center">
          <img src="/assets/cta/image32.png" className=" z-1" />
        </div>
        <div className="md:w-[50%] p-2 text-[18px] lg:text-[20px] ">
          <div className="flex font-600 text-[30px] lg:text-[35px] xl:text-[38px] mb-[15px] lg:mb-[30px]">
            <div>Follow Up With</div>
            <div className="text-[#FF2525] ml-[10px]">Ayra</div>
          </div>
          <div className="mb-[10px] lg:max-w-[500px] ">
            Follow up on a production section with one of the biggest raising
            start in africa.{" "}
          </div>
          <div className="max-w-[500px]">
            Learning and seeing all the production process and learning some
            basic skill to easy your musical journey.{" "}
          </div>
        </div>
        <div className="text-[10px] md:text-base absolute left-[40%] max-h-[120px] md:max-h-none md:left-[20%] top-[600px] sm:top-[580px] md:top-[280px] lg:left-[30%] lg:top-[360px] xl:left-[30%] xl:top-[450px] max-w-[350px] lg:min-w-[500px] xl:min-w-[525px] shadow-2xl bg-white px-[10px] md:px-[30px] lg:px-[60px] py-[5px] md:py-[25px] lg:py-[25px] xl:py-[35px] border-l-[10px] border-solid border-[#FFCE31] ">
          <div className="italic mb-[5px]">
            “Not how long, but how well you have lived is the main thing.”
          </div>
          <div>~ Ayra Starr</div>
          <div className="w-full flex flex-col items-end justify-end">
            <img src="/assets/cta/stars.svg" className="h-[15px] md:h-[25px] " />
            <div>Studio Rating</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CTA;
