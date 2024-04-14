"use client";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import Filters from "./Filters";

type Props = {};

const MobileFilter = (props: Props) => {
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div className="lg:hidden">
      <button className="lg:hidden mt-2" onClick={handleFilter}>
        <FiFilter />
      </button>
      {filter ? (
        <div className="w-full lg:hidden absolute left-[1px] px-14 mt-4 bg-white z-20">
          <Filters />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileFilter;
