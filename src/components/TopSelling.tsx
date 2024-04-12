import Image from "next/image";
import React from "react";

type Props = {};

const TopSelling = (props: Props) => {
  return (
    <div className="mt-[50px] lg:mt-[72px] ">
      <h1 className="font-black text-[32px] lg:text-[48px] text-center mb-[32px] lg:mb-[55px] font-plein">
        TOP SELLING{" "}
      </h1>
      <div className="px-2.5 flex gap-4 lg:gap-5 justify-normal lg:justify-center pl-4 lg:pl-0 overflow-hidden font-satoshi">
        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/top/checkshirt.svg"
            width="0"
            height="0"
            alt="checkshirt"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Vertical Striped Shirt
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">5.0/5</span>
          </p>
          <p className="font-bold text-xl">
            $212 <span> $232</span>
          </p>
        </div>

        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/top/tee.svg"
            width="0"
            height="0"
            alt="tee"
            priority
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Courage Graphic T-Shirt
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">4.0/5</span>
          </p>{" "}
          <p className="font-bold text-xl">$145</p>
        </div>

        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/top/shorts.svg"
            width="0"
            height="0"
            alt="shorts"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Loose Fit Bermuda Shorts
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">3.0/5</span>{" "}
          </p>{" "}
          <p className="font-bold text-xl">$80</p>
        </div>

        <div className="lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/top/jeans.svg"
            width="0"
            height="0"
            alt="jeans"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Faded Skinny Jeans
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733;
            <span className="text-black text-sm">4.5/5</span>
          </p>
          <p className="font-bold text-xl">$210</p>
        </div>
      </div>
      <div className="px-4 ">
        <button className=" flex mx-auto justify-center items-center w-full lg:w-[218px] h-[46px] lg:h-[52px] font-medium border rounded-full mt-[24px] lg:mt-[36px]">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
