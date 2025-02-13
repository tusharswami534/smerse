import { PROJECT_LIST } from "@/utils/Helper";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <>
      <div
        id="project"
        className="container max-w-[1140px] max-lg:justify-center gap-y-10 max-sm:py-12 max-lg:flex-wrap mx-auto flex items-center justify-between px-4"
      >
        <div className="flex flex-col">
          <div className="relative z-20 mb-5">
            <h2 className="text-5xl max-md:text-4xl font-black text-white tracking-[3px] relative z-10 leading-[120%]">
              THE PROJECT
            </h2>
            <span className="absolute max-md:text-4xl inset-0 text-5xl leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[4.5%] -translate-x-[1.5px] max-md:top-[4%]">
              THE PROJECT
            </span>
          </div>
          <div className="flex flex-col gap-2 max-w-[560px] pt-5 max-md:pt-[35px] max-lg:max-w-[unset]">
            {PROJECT_LIST.map((item, i) => (
              <div className="flex gap-5" key={i}>
                <div className="size-[29px] shadow-[0_0_5.01px_0px_#FFFFFF80] min-h-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
                  {item.icon}
                </div>
                <p className="text-white leading-[150%] tracking-[1px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"/assets/images/webp/girl.webp"}
          alt="girl image"
          width={471}
          height={626}
          className="pointer-events-none"
        />
      </div>
    </>
  );
};

export default Project;
