import Image from "next/image";
import React from "react";

type Props = {};

const NewArrivals = (props: Props) => {
  return (
    <div className="mt-[50px] lg:mt-[72px] ">
      <h1 className="font-black text-[32px] lg:text-[48px] text-center mb-[32px] lg:mb-[55px] font-plein">
        NEW ARRIVALS
      </h1>
      <div className="px-2.5 flex gap-4 lg:gap-5 justify-normal lg:justify-center pl-4 lg:pl-0 overflow-hidden font-satoshi">
        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/arrivals/tshirt.svg"
            width="0"
            height="0"
            alt="tshirt"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            T-shirt with Tape Details
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">4.5/5</span>
          </p>
          <p className="font-bold text-xl">$120</p>
        </div>

        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/arrivals/pant.svg"
            width="0"
            height="0"
            alt="pant"
            priority
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Skinny Fit Jeans
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">4.0/5</span>
          </p>
          <p className="font-bold text-xl">$240</p>
        </div>

        <div className=" lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/arrivals/shirt.svg"
            width="0"
            height="0"
            alt="shirt"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Checkered Shirt
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">4.5/5</span>
          </p>
          <p className="font-bold text-xl">$180</p>
        </div>

        <div className="lg:space-y-1 flex-shrink-0">
          <Image
            className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto"
            src="/arrivals/stshirt.svg"
            width="0"
            height="0"
            alt="stshirt"
          />
          <p className="font-bold text-[16px] lg:text-[20px]">
            Sleeve Striped Tshirt
          </p>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733;
            <span className="text-black text-sm">4.0/5</span>
          </p>
          <p className="font-bold text-xl">$130</p>
        </div>
      </div>
      <div className="px-4 ">
        <button className="mx-auto  flex justify-center items-center w-full lg:w-[218px] h-[46px] lg:h-[52px] font-medium border rounded-full mt-[24px] lg:mt-[36px]">
          View All
        </button>
      </div>
      <div className="lg:w-[1240px] border mt-[40px] lg:mt-[64px] flex mx-auto"></div>
    </div>
  );
};

export default NewArrivals;
