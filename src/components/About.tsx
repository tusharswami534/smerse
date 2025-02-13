import { ABOUT_US_LIST } from "@/utils/Helper";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="px-4 max-w-[1920px] pb-[78px] max-lg:pt-[99px] max-md:pt-[60px] max-lg:pb-[99px] max-sm:pb-12 mx-auto overflow-hidden relative">
      <div className="flex container pt-[189px] max-lg:pb-0 max-lg:pt-0 items-center max-w-[1140px] mx-auto pb-[198px] justify-between max-lg:flex-col  max-lg:gap-10">
        <div className=" relative z-20">
          <div className="relative z-20">
            <h2 className="max-sm:pt-0 text-5xl max-md:text-4xl font-black text-white tracking-[3px] relative z-10 leading-[120%]">
              About Us
            </h2>
            <span className="absolute inset-0 text-5xl max-md:text-4xl leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[4.5%] -translate-x-[1.5px] max-md:top-[4%]">
              About Us
            </span>
          </div>
          <div className="pt-7">
            {ABOUT_US_LIST.map((items, index) => (
              <div key={index} className="flex gap-5 pt-2">
                <div className="size-[29px] shadow-[0_0_5.01px_0px_#FFFFFF80] min-h-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
                  {items.icon}
                </div>
                <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] font-normal">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"/assets/images/webp/about-us-image.webp"}
          alt="hero"
          className=" absolute right-0 top-[13%] max-[1370px]:right-[-5%] pointer-events-none max-xl:right-[-10%] max-xl:max-w-[800px] max-xl:top-[17%] max-lg:relative max-lg:translate-x-[10px] max-md:-translate-x-10 max-sm:-translate-x-20 max-sm:max-w-[600px]"
          height={690}
          width={954}
        />
      </div>
    </div>
  );
};

export default About;
