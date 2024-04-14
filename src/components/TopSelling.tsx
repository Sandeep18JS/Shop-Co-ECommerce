import Image from "next/image";
import React from "react";
import { simplifiedProduct } from "./interface";
import { client } from "@/app/lib/sanity";
import Link from "next/link";

type Props = {};

async function getData() {
  const query = `*[_type == "product"][0...4] | order(priority desc, _updatedAt desc) {
    _id,
      price,
      name,
      "slug":slug.current ,
      "categoryName":category -> name,
      "imageUrl":images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}
const TopSelling = async () => {
  const data: simplifiedProduct[] = await getData();


  return (
    <div className="mt-[50px] lg:mt-[72px] font-satoshi">
      <h1 className="font-black text-[32px] lg:text-[48px] text-center mb-[32px] lg:mb-[55px] font-plein">
        TOP SELLING{" "}
      </h1>
      <div className="px-2.5 flex gap-4 lg:gap-5 justify-normal lg:justify-center pl-4 lg:pl-0 overflow-hidden ">
        {data.map((product) => (
          <div key={product._id} className=" lg:space-y-1 flex-shrink-0">
            <div className="rounded-[20px] mb-[12px] w-[200px] lg:w-[300px] h-auto overflow-hidden">
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
      <div className="px-4 ">
        <Link
          href="/all"
          className="mx-auto  flex justify-center items-center w-full lg:w-[218px] h-[46px] lg:h-[52px] font-medium border rounded-full mt-[24px] lg:mt-[36px]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
