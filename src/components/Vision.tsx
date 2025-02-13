import { THE_VISION_LIST } from "@/utils/Helper";
import React from "react";

const Vision = () => {
  return (
    <div
      id="vision"
      className="flex justify-center items-center flex-col px-4 pb-[65px] max-sm:pb-12"
    >
      <div className="relative z-20">
        <h2 className="max-sm:pt-0 text-5xl max-md:text-4xl text-center  font-black text-white tracking-[3px] relative z-10 leading-[120%]">
          THE VISION
        </h2>
        <span className="absolute text-center inset-0 text-5xl max-md:text-4xl leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[4.5%] max-lg:top-[4.5%] -translate-x-[1.5px] max-md:top-[4%]">
          THE VISION
        </span>
      </div>
      <div className="container pt-[138px] max-lg:pt-[129px] max-md:pt-[88px] gap-5 gap-y-[68px] max-sm:gap-[88px] max-md:justify-center max-w-[1150px] max-[860px]:justify-start max-lg:justify-center max-lg:flex-wrap flex">
        {THE_VISION_LIST.map((item, i) => (
          <div
            key={i}
            className="max-w-[367px] w-full bg-custom-gradient p-[1px] relative group min-h-[365px] rounded-[10px]"
          >
            <div className="px-[27px] max-md:px-[15px] max-w-[365px] h-full rounded-[10px] bg-dark w-full group-hover:bg-custom-gradient">
              <div className="size-24 max-sm:size-[86px] bg-custom-gradient absolute left-1/2 -translate-x-1/2 top-[-48px] !rounded-full flex justify-center items-center">
                <div className="group-hover:bg-custom-gradient max-w-[94px] max-h-[94px] max-sm:max-w-[84px] max-sm:max-h-[84px] bg-dark w-full h-full flex justify-center items-center rounded-full">
                  <div className="relative z-20">
                    <h2 className="text-4xl font-extrabold text-white leading-[43px] relative z-10 tracking-[1px]">
                      0{i + 1}
                    </h2>
                    <span className="absolute text-4xl inset-0 leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[3.5%] -translate-x-[1.5px] max-md:top-[3.5%]">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </div>
              <p className="max-w-[312px] mx-auto text-center text-white pt-[90px] leading-[27.2px] tracking-[1px]">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
