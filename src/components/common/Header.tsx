"use client";
import { HEADER_LIST } from "@/utils/Helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      document.getElementById("navbar")?.classList.add("!bg-black");
    } else {
      document.getElementById("navbar")?.classList.remove("!bg-black");
    }
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 z-50 bg-dark-blue/50 min-h-[100px] w-full px-4"
    >
      <div className="container pt-4 mx-auto w-full max-w-[1140px] items-center justify-between flex">
        <Link href={"#home"} className="text-white font-bold text-[20px]">
          {" "}
          <Image
            src={"/assets/images/wepp/page logo.webp"}
            alt="logo"
            width={68}
            height={68}
          />{" "}
        </Link>
        <div
          className={`flex gap-5 items-center max-lg:fixed max-lg:bg-black max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-full max-lg:h-full transition-all duration-300 ${
            open === true
              ? "max-lg:top-0 max-lg:right-0"
              : "max-lg:top-[-100%] max-lg:right-[-100%]"
          }`}
        >
          {HEADER_LIST.map((item, index) => (
            <Link
              onClick={handleClose}
              href={item.link}
              key={index}
              className={`text-white relative after:absolute after:w-0 after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full leading-[19.2px] max-lg:text-xl max-lg:leading-6 ${
                index === 0 ? "font-semibold" : "font-normal"
              }`}
            >
              {item.title}
            </Link>
          ))}
          {/* <div className='bg-custom-gradient p-[2px_4px_5px] !backdrop-blur-[38px]'> */}
          <button
            onClick={handleClose}
            className="bg-custom-gradient max-lg:hidden max-sm:block shadow-[0px_4px_4px_0px_#FF676B33_inset] py-[11px] px-6 font-extrabold text-xl text-white rounded-lg lg:ml-[39px]"
          >
            Mint Now
          </button>
          {/* </div> */}
        </div>
        <div className="lg:hidden gap-10 flex items-center">
          <button className="bg-custom-gradient max-sm:hidden shadow-[0px_4px_4px_0px_#FF676B33_inset] py-[11px] px-6 font-extrabold text-xl text-white rounded-lg">
            Mint Now
          </button>
          <button
            onClick={handleOpen}
            className="flex flex-col justify-between overflow-hidden w-[32px] h-10"
          >
            <span
              className={`max-w-[32px] w-full bg-white h-[5px] rounded-full flex transition-all duration-300 ${
                open === true ? "translate-x-10" : ""
              }`}
            ></span>
            <span
              className={`max-w-[32px] w-full bg-white h-[5px] rounded-full flex transition-all duration-300 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:transition-all after:duration-300 after:rounded-full ${
                open === true ? " after:rotate-90 -rotate-45" : ""
              }`}
            ></span>
            <span
              className={`max-w-[32px] w-full bg-white h-[5px] rounded-full flex transition-all duration-300 ${
                open === true ? "-translate-x-10" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
