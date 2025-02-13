import { THE_VISION_LIST } from "@/utils/Helper";
import React from "react";

const Vision = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4 pb-[65px] max-sm:py-12">
      <div className="relative z-20">
        <h2 className="pt-8 max-sm:pt-0 text-5xl text-center  font-black text-white tracking-[3px] relative z-10 leading-[120%] max-md:text-[40px] max-md:pt-[108px]">
          THE VISION
        </h2>
        <span className="absolute max-md:hidden  text-center inset-0 text-5xl max-md:text-[40px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[33.5%] -translate-x-[1.5px] max-md:top-[70%]">
          THE VISION
        </span>
      </div>
      <div className="container pt-[138px] gap-5 gap-y-[68px] max-md:justify-center max-w-[1140px] max-lg:justify-start max-lg:flex-wrap flex">
        {THE_VISION_LIST.map((item, i) => (
          <div
            key={i}
            className="max-w-[367px] w-full bg-custom-gradient p-[1px] relative group min-h-[365px] rounded-[10px]"
          >
            <div className="px-[27px] max-w-[365px] h-full rounded-[10px] bg-dark w-full group-hover:bg-custom-gradient">
              <div className="size-24 bg-custom-gradient absolute left-1/2 -translate-x-1/2 top-[-48px] !rounded-full flex justify-center items-center">
                <div className="group-hover:bg-custom-gradient bg-dark w-full h-full flex justify-center items-center rounded-full">
                  <p className="text-4xl font-extrabold text-white leading-[43px] tracking-[1px]">
                    {" "}
                    0{i + 1}
                  </p>
                  {/* <div className="relative z-20">
                    <h2 className="text-4xl font-extrabold text-white leading-[43px] tracking-[1px]">
                      0{i + 1}
                    </h2>
                    <span className="absolute max-md:hidden inset-0 text-4xl font-extrabold text-white leading-[43px] tracking-[1px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent  top-[23.5%] -translate-x-[1.5px] max-md:top-[70%]">
                      0{i + 1}
                    </span>
                  </div> */}
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
