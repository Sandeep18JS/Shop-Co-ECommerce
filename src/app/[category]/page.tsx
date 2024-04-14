import React from "react";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "@/components/interface";
import Filters from "@/components/Filters";
import Image from "next/image";
import Link from "next/link";
import MobileFilter from "@/components/MobileFilter";

type Props = {};

async function getData(category: string) {
  const query = `*[_type == "product"&& category->name=="${category}" ]{
        _id,
          "imageUrl":images[0].asset->url,
            price,
          name,
          "slug":slug.current,
          "categoryName":category->name
     } `;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category);
  return (
    <div className="flex gap-4">
      <div className="hidden lg:flex">
        <Filters />
      </div>
      <div className="flex flex-col mt-[35px] lg:mt-[70px] font-satoshi gap-4">
        <div className="flex justify-between px-4 lg:px-0">
          <h1 className="font-bold  text-2xl lg:text-3xl">{params.category}</h1>
          <p className="text-sm lg:text-base">
            Showing 1-10 of 100 Products{" "}
            <span className="">
              Sort by :{" "}
              <select className="w-5 h-5 outline-none font-semibold mt-2">
                <option value="mostpopular">Most Popular</option>
                <option value="trending">Trending</option>
                <option value="recent">Recent</option>
                <option value="lowtohigh">Price (Low to High)</option>
                <option value="hightolow">Price (High to Low)</option>
              </select>
            </span>
          </p>
          <MobileFilter />
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 justify-normal lg:justify-center  overflow-hidden px-4 lg:px-0">
          {data.map((product) => (
            <div key={product._id} className=" lg:space-y-1 flex-shrink-0">
              <div className="rounded-[20px] mb-[12px] w-[175px]  lg:w-[300px] lh-auto overflow-hidden">
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  alt="tshirt"
                  quality={100}
                />
              </div>
              <h3 className="font-bold text-[16px] lg:text-[20px]">
                <Link href={`/product/${product.slug}`}>{product.name} </Link>
              </h3>
              <p className=" text-lg">{product.categoryName} </p>

              <p className="text-[#FFC633] text-[20px]">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
                <span className="text-black text-sm">4.5/5</span>
              </p>
              <p className="font-bold text-xl">$ {product.price} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
