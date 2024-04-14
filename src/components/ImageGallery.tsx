"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: any;
}
const ImageGallery = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const handleImageClick = (image: any) => {
    setMainImage(image);
  };

  return (
    <>
      <section className="flex lg:flex-col gap-3  px-4 lg:p-0 lg:w-custom-12">
        {images.map((image: any, id: any) => (
          <div key={id} className="w-[125px] h-[125px] lg:w-[152px] lg:h-[167px] rounded-[20px] overflow-hidden">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="tshirt"
              onClick={() => handleImageClick(image)}
              quality={100}
            />
          </div>
        ))}
      </section>
      <section>
        <div className="px-4 lg:p-0 w-[400px] h-[400px] lg:w-[444px] lg:h-[530px]  rounded-[20px] overflow-hidden">
          <Image
            src={urlFor(mainImage).url()}
            width={500}
            height={500}
            alt="tshirt"
            quality={100}

          />
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
