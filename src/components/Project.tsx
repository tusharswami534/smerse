import { PROJECT_LIST } from "@/utils/Helper";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="py-[65px] max-sm:py-12">
      <div className="container max-w-[1140px] gap-y-5 max-sm:py-12 max-lg:flex-wrap mx-auto flex items-center justify-between px-4">
        <div className="flex flex-col">
          <div className="relative z-20 mb-5">
            <h2 className="pt-8 max-sm:pt-0 text-5xl font-black text-white tracking-[3px] relative z-10 leading-[120%] max-md:text-[40px] max-md:pt-[108px]">
              THE PROJECT
            </h2>
            <span className="absolute max-md:hidden inset-0 text-5xl max-md:text-[40px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[33.5%] -translate-x-[1.5px] max-md:top-[70%]">
              THE PROJECT
            </span>
          </div>
          <div className="flex flex-col gap-2 max-w-[560px] max-lg:max-w-[unset]">
            {PROJECT_LIST.map((item, i) => (
              <div className="flex gap-5" key={i}>
                <div className="size-[29px] min-h-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
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
    </div>
  );
};

export default Project;
