import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex flex-wrap w-full h-[146px] lg:h-[122px] bg-black  justify-center gap-8 lg:gap-[106px] py-10">
      <Image
        className="w-[116px] lg:w-[166px] h-auto "
        src="/banner/one.svg"
        width="0"
        height="0"
        alt="versace"
      />
      <Image
        className="w-[63px] lg:w-[91px] h-auto "
        src="/banner/two.svg"
        width="0"
        height="0"
        alt="zara"
      />
      <Image
        className="w-[109px] lg:w-[156px] h-auto "
        src="/banner/three.svg"
        width="0"
        height="0"
        alt="gucci"
      />
      <Image
        className="w-[127px] lg:w-[194px] h-auto "
        src="/banner/four.svg"
        width="0"
        height="0"
        alt="prada"
      />
      <Image
        className="w-[134px] lg:w-[206px] h-auto "
        src="/banner/five.svg"
        width="0"
        height="0"
        alt="calvin klein"
      />
    </div>
  );
};

export default Banner;
