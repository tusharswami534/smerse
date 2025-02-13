import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className='bg-[url("/assets/images/webp/hero-bg-image.webp")] pt-[100px] bg-cover max-md:bg-custom-size bg-center bg-no-repeat px-4'>
        <Header />
        <div className="container mx-auto max-w-[1140px] py-[51px] max-sm:py-10 flex justify-center items-center flex-col">
          <Image
            className="max-sm:max-w-[256px]"
            src={"/assets/images/webp/hero-image.webp"}
            alt="hero"
            height={241}
            width={404}
          />
          <div className="relative">
            <h1 className="pt-8 text-8xl font-black text-white tracking-[6px] relative z-10 leading-[120%]  max-md:text-[40px] max-md:pt-[108px]">
              SMERSE
            </h1>
            <span className="absolute inset-0 text-8xl max-md:text-[40px] leading-[115.2px] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[50%]">
              SMERSE
            </span>
          </div>
          <p className="max-w-[637px] mx-auto max-sm:mt-[27px] text-center text-4xl leading-[150%] font-semibold tracking-[2px] max-sm:tracking-[1px] text-white mt-2.5 max-md:text-3xl max-sm:text-xl">
            FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
          </p>
          <button className="font-extrabold text-xl hover:scale-110 transition-all duration-300 leading-[24px] tracking-[2px] py-4 px-7 mt-[44px] max-sm:mt-[82px] max-sm:mb-[85px] max-sm:py-[12.5px] max-sm:px-[19.5px] max-sm:text-base max-sm:leading-[19.2px] max-sm:tracking-[1px] bg-custom-gradient text-white rounded-lg">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-10 w-full bg-custom-gradient shadow-[0_0_15.01px_0px_#FFFFFF80]"></div>
    </>
  );
};

export default Hero;
