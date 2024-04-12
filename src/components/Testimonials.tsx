"use client";

import { GoCheckCircleFill } from "react-icons/go";
import { cn } from "../../util/cn";
import React, { useEffect, useState } from "react";

export const Testimonilas = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div className="overflow-hidden  mt-12 lg:mt-16 relative">
      <h1 className="font-black font-plein text-[32px] lg:text-[40px] ml-[16px] lg:ml-32 leading-8 lg:leading-none">
        OUR HAPPY CUSTOMERS
      </h1>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative   w-full overflow-hidden  mt-6 lg:mt-10 mx-4 lg:mx-0 font-satoshi",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex mt-6 lg:mt-10 mx-4 lg:mx-0 font-satoshi min-w-full  gap-4  w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-full h-[186px] lg:w-[400px] lg:h-[240px]  border rounded-[20px] px-6 py-2 lg:py-4  lg:p-6 space-y-1 "
              key={item.name}
            >
              <p className="text-[#FFC633]  text-[22px] lg:text-[28px]">
                {" "}
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </p>

              <div className="flex">
                <h3 className=" font-bold text-[18px] lg:text-[24px]">
                  {item.name}
                </h3>
                <GoCheckCircleFill className="w-6 h-6 relative top-1.5 left-2 text-[#01AB31]" />
              </div>
              <p className="w-[336px] text-gray-500 text-[16px]">
                {item.quote}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
