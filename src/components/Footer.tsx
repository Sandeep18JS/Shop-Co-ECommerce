import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full mt-52 lg:mt-44 ">
      <div className="w-full lg:h-[499px] bg-[#F0F0F0] relative px-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full  lg:w-[1260px] h-[293px] lg:h-[180px] relative bottom-[146.5px]   lg:bottom-[90px]  bg-black rounded-[20px] mx-auto p-6">
          <h1 className="w-full lg:w-[551px] text-white font-black font-plein text-[32px] lg:text-[40px] leading-9">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="lg:w-[349px] space-y-3 lg:space-y-5 relative">
            <input
              className="bg-white rounded-[60px] w-full  lg:w-[349px] h-[42px] lg:h-[48px]  pl-12 lg:pl-14 font-satoshi"
              placeholder="Enter Your email address"
            ></input>
            <TfiEmail className="w-5 h-5 absolute top-[-1px] left-5 lg:top-[-5px]  lg:left-5 text-[#909090]" />
            <button className="bg-white font-medium font-satoshi rounded-[60px] w-full lg:w-[349px] h-[42px] lg:h-[48px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row   lg:w-[1260px] lg:h-[177px] mx-auto gap-[100px] relative bottom-[100px] lg:bottom-6">
          <div className="w-full lg:w-3/12 space-y-6">
            <h1 className="text-[34px] font-black font-plein">SHOP.CO</h1>
            <p className=" font-satoshi text-gray-600">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-4">
              <AiFillTwitterCircle className="w-8 h-8" />
              <BsFacebook className="w-7 h-7" />
              <AiFillInstagram className="w-8 h-8" />
            </div>
          </div>
          <div className=" w-full lg:w-8/12  grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[80px]  lg:h-[177px] mx-auto font-satoshi">
            <div className="space-y-4 lg:space-y-5  text-gray-600 mb-4">
              <h1 className=" tracking-widest text-black font-medium">
                COMPANY
              </h1>
              <p>About</p>
              <p>Features</p>
              <p>Work</p>
              <p>Career</p>
            </div>
            <div className="space-y-4 lg:space-y-5  text-gray-600  ">
              <h1 className=" tracking-widest text-black font-medium">HELP</h1>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="space-y-4 lg:space-y-5  text-gray-600  ">
              <h1 className=" tracking-widest text-black font-medium">FAQ</h1>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div className="space-y-4 lg:space-y-5  text-gray-600  ">
              <h1 className=" tracking-widest text-black font-medium">
                RESOURCES
              </h1>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[1260px] border lg:mt-12 mx-auto relative bottom-10 lg:bottom-0"></div>
        <p className="font-satoshi text-gray-400 lg:mt-8 ml-8 lg:ml-32">
          Shop.co © 2000-2024, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
