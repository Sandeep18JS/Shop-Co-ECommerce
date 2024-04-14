"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useShoppingCart } from "use-shopping-cart";

type Props = {};

const links = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Children", href: "/Children" },
];

const Navbar = (props: Props) => {
  const { isSignedIn } = useUser();
  const [visible, setVisible] = useState(true);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(false);
  const [profile, setProfile] = useState(false);
  const { handleCartClick } = useShoppingCart()

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleList = () => {
    setList(!list);
  };

  const handleprofile = () => {
    setProfile(!profile);
  };

  return (
    <>
      {visible ? (
        <div className="w-full h-[34px] lg:h-[38px] bg-black text-white flex justify-center items-center text-xs lg:text-sm font-satoshi ">
          <p>Sign up and get 20% off on your first order.&nbsp; </p>

          <Link href="/sign-up" className="underline">
            Sign Up Now
          </Link>

          <IoClose
            className="ml-4 text-lg lg:absolute  lg:left-[1295px] cursor-pointer"
            onClick={handleClick}
          />
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto w-full lg:w-[1240px]  lg:h-[48px] flex gap-4 lg:gap-[40px] lg:mt-[24px] lg:mb-[24px] my-4">
        <div onClick={handleMenu} className="lg:hidden mt-1 ">
          {menu ? (
            <IoClose className="w-6 h-6 relative top-[4px] cursor-pointer" />
          ) : (
            <LuMenu className="w-6 h-6 relative top-[4px] cursor-pointer" />
          )}
        </div>
        {menu ? (
          <div className="absolute top-[100px]  font-satoshi  space-y-4 p-4 bg-black text-white w-full">
            <ul className="text-[14px] flex justify-center items-center gap-[16px] ">
              <li onClick={handleList}>Shop</li>
              <li>
                <Link href="/onsale">On Sale</Link>
              </li>
              <li>
                <Link href="/newarrivals">New Arrivals</Link>
              </li>
              <li>
                <Link href="/brands">Brands</Link>
              </li>
            </ul>
            {list ? (
              <div className=" font-satoshi   rounded-md">
                <ul className=" text-[14px] flex  justify-center items-center gap-[16px]  ">
                  {links.map((link, id) => (
                    <li key={id}>
                      <Link className="hover:underline" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <h1 className="text-[25px] lg:text-[32px] font-black font-plein">
          <Link href="/">SHOP.CO</Link>
        </h1>
        <ul className="hidden text-[16px] lg:flex justify-center items-center gap-[24px] font-satoshi cursor-pointer">
          <li className="flex " onClick={handleList}>
            <p>Shop</p>
            <BsChevronDown className="relative top-1.5 left-1" />
          </li>
          {list ? (
            <div className="absolute top-[100px] left-[285px]  font-satoshi   rounded-md">
              <ul className="  flex flex-col w-28 h-32 justify-center items-center gap-[14px] rounded-md  ">
                {links.map((link, id) => (
                  <li key={id}>
                    <Link className="hover:underline" href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="flex lg:w-[577px] lg:h-[48px]  gap-4 relative">
          <input
            placeholder="Search for products..."
            className="hidden lg:flex font-satoshi text-[16px] w-full font-base  rounded-full backdrop-blur-md  bg-[#00000010]  outline-none  lg:pl-14"
          ></input>
          <FiSearch className="w-6 h-6 absolute top-[7px] lg:left-5 left-[137px] lg:text-[#909090]" />
        </div>
        <div className="flex gap-4 justify-center items-center ml-40 lg:ml-0">
          <PiShoppingCartSimpleBold className="w-6 h-6 cursor-pointer" onClick={() => handleCartClick()} />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <PiUserCircleBold
              className="w-6 h-6 cursor-pointer"
              onClick={handleprofile}
            />
          )}
        </div>
        {profile ? (
          <div className="flex flex-col absolute right-1 top-24 lg:right-36  lg:top-[100px] w-20 h-20 gap-[14px] font-satoshi justify-center items-center">
            <Link href="/sign-up" className="underline">
              Sign-Up
            </Link>
            <Link href="/sign-in" className="underline">
              Sign-In
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
