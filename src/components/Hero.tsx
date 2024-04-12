import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full lg:h-[663px] flex flex-col lg:flex-row  bg-[#F2F0F1]">
      <div className="w-full lg:w-1/2  pt-10  px-2.5 lg:pl-[100px] lg:pt-[103px] space-y-[20px] lg:space-y-[24px]">
        <h1 className="font-black font-plein text-[36px] lg:text-[64px] pr-14  leading-[35px] lg:leading-[70px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="lg:pr-32  text-gray-500 font-satoshi">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="w-full lg:w-[210px] h-[52px] bg-black rounded-full text-white font-satoshi font-medium">
          Shop Now
        </button>
        <div className="flex flex-wrap w-10/12 lg:w-full  justify-center lg:justify-normal mx-auto gap-4 lg:gap-8 font-satoshi ">
          <div>
            <p className="font-bold text-[24px] lg:text-[40px]">200+</p>
            <p className="text-xs lg:text-sm">International Brands</p>
          </div>
          <div className="border border-r"></div>
          <div>
            <p className="font-bold text-[24px] lg:text-[40px]">2000+</p>
            <p className="text-xs lg:text-sm">High-Quality Products</p>
          </div>
          <div className="border border-r"></div>

          <div>
            <p className="font-bold  text-[26px] lg:text-[40px]">30000+</p>
            <p className="text-xs lg:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          className=" w-full h-full"
          src="/hero1.svg"
          width="0"
          height="0"
          alt="hero"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
