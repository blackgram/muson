import React from "react";

const Hero = () => {
  return (
    <div className="w-full p-4 lg:py-[2rem] xl:pt-[0] md:px-[2rem] xl:px-[100px] ">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className=" md:py-[2rem] max-w-[250px] lg:max-w-[400px] xl:max-w-[477px] flex flex-col  justify-center">
          <div className="flex md:h-[14px] md:w-[200px] lg:h-[18px] lg:w-[250px] lg:h-[25px] lg:w-[300px] xl:h-[30px] xl:w-[315px] bg-[#fff3e3] overflow-x-hidden rounded-full ">
            <div className="bg-[#fd5353] h-[14px] w-[60px] md:h-[14px] md:w-[60px] lg:h-[25px] lg:w-[94px] xl:h-[30px] xl:w-[94px] rounded-full " />
          </div>
          <div className=" flex items-center text-[30px] leading-[30px] mt-[15px] lg:mt-0 lg:text-[48px] xl:text-[54px] font-600 md:leading-[40px] lg:leading-[65px]">
            <div>Find your</div>
            <div className="flex ml-[14px] h-6 md:h-[30px] lg:h-[40px] xl:h-[45px]">
              <img src="/assets/image5.png" className=" " />
              <img src="/assets/image6.png" className="  " />
              <img src="/assets/image7.png" className="  " />
            </div>
          </div>
          <div className="text-[30px] lg:text-[48px] xl:text-[54px] font-600 md:leading-[40px] lg:leading-[65px]">Perfect mentor</div>
          <div className="text-[12px] lg:text-[16px] xl:text-[20px] ">
            Get a chance to listen to the background story of your favourite
            artiste and be inspired{" "}
          </div>
          <div className="flex items-center justify-center md:justify-start w-full md:my-[10px] my-[15px] lg:my-[35px] ">
            <a href="#" className="mr-[20px]">
              <div className="w-[80px] h-[30px] lg:w-[120px] lg:h-[48px] xl:w-[137px] xl:h-[59px] text-white md:text-[16px] lg:text-[20px] font-bold flex items-center justify-center bg-gradient-to-r from-[#FF2525] from-70% to-[#ff252500] to-100% ">
                Login
              </div>
            </a>
            <div className="flex items-center text-[12px] lg:text-[18px] xl:text-[20px] w-full">
              <a href="#">
                <img src="/assets/play-circle.svg" className="max-w-[38px] lg:max-w-[100px]"/>{" "}
              </a>
              <div>Watch how it works</div>
            </div>
          </div>
          <div >
            <img src="/assets/profilepictures.png" className="max-h-[40px] " />{" "}
          </div>
        </div>
        <div className=" mr-[25px] md:mr-[0] h-[200px] md:w-auto  lg:h-[500px] lg:w-[838px]  xl:w-[838px] xl:h-[542px] bg-[url('/assets/burnadesign.png')] bg-contain lg:bg-auto bg-center bg-no-repeat xl:bg-auto">
          <img
            className="relative max-w-[40%] bottom-[30px] left-[200px] md:left-auto md:top-0 lg:top-[90px] lg:right-[30px] xl:max-w-[100%] xl:top-[85px] xl:right-[60px] "
            src="/assets/pendesign.svg"
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-[20px] sm:text-[30px] lg:text-[40px] font-600 leading-[30px] lg:leading-[48px]">
        <div className="text-center p-6">
            <div>1K +</div>
            <div className="text-[14px] sm:text-[20px] lg:text-[24px] font-300 leading-7">Tutors</div>
        </div>
        <div className="text-center p-6">
            <div className="text-[#FD5454] ">3K +</div>
            <div className="text-[14px] sm:text-[20px] lg:text-[24px] font-300 leading-7">Videos</div>
        </div>
        <div className="text-center p-6">
            <div>18K +</div>
            <div className="text-[14px] sm:text-[20px] lg:text-[24px] font-300 leading-7">Streams</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
