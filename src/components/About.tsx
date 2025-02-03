import { ABOUT_US_LIST } from "@/utils/Helper";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="px-4">
      <div className="flex container max-w-[1140px] mx-auto pt-11 pb-[78px] justify-between max-lg:flex-col  max-lg:gap-10">
        <div>
          <div className="relative">
            <h2 className="pt-8 max-sm:pt-0 text-5xl font-black text-white tracking-[3px] relative z-10 leading-[120%] max-md:text-[40px] max-md:pt-[108px]">
              About Us
            </h2>
            <span className="absolute max-md:hidden inset-0 text-5xl max-md:text-[40px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[33.5%] -translate-x-[1.5px] max-md:top-[70%]">
              About Us
            </span>
          </div>
          <div className="pt-7">
            {ABOUT_US_LIST.map((items, index) => (
              <div key={index} className="flex gap-5 pt-2">
                <div className="size-[29px] min-h-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
                  {items.icon}
                </div>
                <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] font-normal">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/assets/images/wepp/about-image.webp"}
            alt="hero"
            height={484}
            width={484}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
