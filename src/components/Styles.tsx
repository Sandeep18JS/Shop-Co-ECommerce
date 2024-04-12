import Image from "next/image";
import React from "react";

const Styles = () => {
  return (
    <div className="mx-4 lg:mx-auto  lg:w-[1260px] lg:h-[866px] bg-[#F0F0F0] rounded-[20px] lg:rounded-[40px] mt-[50px] lg:mt-[80px] ">
      <h1 className="mx-4 lg:mx-0 leading-9 lg:leading-none text-center font-black text-[32px] lg:text-[48px] relative top-[32px] lg:top-[70px] font-plein">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="px-6 pb-6 mt-[56px] lg:mt-[116px] flex flex-col gap-4 font-satoshi font-extrabold">
        <div className="flex flex-col lg:flex-row  justify-center gap-4 ">
          <div className="w-full h-[190px] lg:w-[450px] lg:h-[289px] bg-white rounded-[20px] overflow-hidden">
            <p className="text-[24px] lg:text-[40px] absolute mt-[16px] ml-[24px] lg:mt-[25px] lg:ml-[36px] z-20">
              Casual
            </p>

            <Image
              className="relative  w-full h-auto"
              src="/styles/casual.svg"
              width="0"
              height="0"
              alt="casual"
            />
          </div>{" "}
          <div className="w-full h-[190px] lg:w-[630px] lg:h-[289px] bg-white rounded-[20px] relative overflow-hidden">
            <p className="text-[24px] lg:text-[40px] absolute mt-[16px] ml-[24px] lg:mt-[25px] lg:ml-[36px] z-20">
              Formal
            </p>

            <Image
              className="relative bottom-16 left-10 lg:bottom-32 lg:left-20 w-full h-auto"
              src="/styles/formal.svg"
              width="0"
              height="0"
              alt="formal"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="w-full h-[190px] lg:w-[630px] lg:h-[289px] bg-white rounded-[20px] relative overflow-hidden">
            <p className=" text-[24px] lg:text-[40px] absolute mt-[16px] ml-[24px] lg:mt-[25px] lg:ml-[36px] z-20">
              Party
            </p>

            <Image
              className="relative bottom-16 left-20 lg:bottom-36 lg:left-36 w-full h-auto"
              src="/styles/party.svg"
              width="0"
              height="0"
              alt="party"
            />
          </div>
          <div className="w-full h-[190px] lg:w-[450px] lg:h-[289px] bg-white rounded-[20px] overflow-hidden">
            <p className=" text-[24px] lg:text-[40px] absolute mt-[16px] ml-[24px] lg:mt-[25px] lg:ml-[36px] z-20">
              gym
            </p>

            <Image
              className="relative bottom-24 left-14 lg:bottom-36 lg:left-24 w-full h-auto"
              src="/styles/gym.svg"
              width="0"
              height="0"
              alt="gym"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Styles;
