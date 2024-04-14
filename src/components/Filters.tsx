import React from "react";
import { TbFilters } from "react-icons/tb";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
type Props = {};

const Filters = (props: Props) => {
  return (
    <div className="w-[295px] rounded-[20px] border-[2px]  lg:ml-[140px] lg:mt-[70px] font-satoshi">
      {/* filters */}
      <div className="flex justify-between mt-5 px-6">
        <h1 className="font-bold text-[20px] ">Filters</h1>
        <TbFilters className="w-6 h-6 text-gray-500" />
      </div>
      <div className="border mt-6 w-[247px] mx-auto"></div>
      <div className="mt-6 flex flex-col gap-5">
        <div className="flex justify-between px-6 ">
          <h1>T-Shirts</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Shorts</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Shirts</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Hoodie</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Jeans</h1>
          <BsChevronRight />
        </div>
      </div>
      <div className="border mt-6 w-[247px] mx-auto"></div>
      {/* Dress style */}
      <div className="flex justify-between px-6 mt-6">
        <h1 className="font-bold text-[20px]">Dress Style</h1>
        <BsChevronUp />
      </div>
      <div className="mt-6 flex flex-col gap-5">
        <div className="flex justify-between px-6 ">
          <h1>Casual</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Formal</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Party</h1>
          <BsChevronRight />
        </div>
        <div className="flex justify-between px-6 ">
          <h1>Gym</h1>
          <BsChevronRight />
        </div>
      </div>
      <button className="w-[247px] h-[48px] bg-black text-white rounded-full ml-6 mt-6">
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
