import { client } from "@/app/lib/sanity";
import AddToCart from "@/components/AddToCart";
import CheckOutNow from "@/components/CheckOutNow";
import ImageGallery from "@/components/ImageGallery";
import { fullProduct } from "@/components/interface";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]   {
        _id,
         images,
          price,
          name,
         description,
        "slug":slug.current,
        "categoryName":category -> name,
        price_id
      }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";


const Product = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);
  return (
    <main className="flex flex-col lg:flex-row gap-6 max-w-7xl  mx-auto font-satoshi">
      <ImageGallery images={data.images} />
      <section className=" space-y-3 lg:space-y-6 lg:h-[530px] px-4">
        <div className="space-y-1">
          <h1 className="font-black text-[24px] lg:text-[40px]   font-plein">
            {data.name}{" "}
          </h1>
          <p className="text-[#FFC633] text-[20px]">
            &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
            <span className="text-black text-sm">4.5/5</span>
          </p>
          <p className="font-bold text-xl">
            $ {data.price}{" "}
            <span className="font-bold text-xl line-through">
              $ {data.price + 30}
            </span>
          </p>
          <p className="text-gray-500 lg:w-[590px]">{data.description} </p>
        </div>
        <div className="lg:w-[590px] border"></div>
        <div className="space-y-3">
          <p className="text-gray-600">Select Colors</p>
          <div className="flex gap-4">
            <div className="w-[37px] h-[37px] rounded-full bg-[#4F4631]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#314F4A]"></div>
            <div className="w-[37px] h-[37px] rounded-full bg-[#31344F]"></div>
          </div>
        </div>
        <div className="lg:w-[590px] border"></div>
        <div className="space-y-3">
          <p className="text-gray-600">Choose Size</p>
          <div className="flex gap-3">
            <div className="w-[100px] h-[46px] rounded-full flex justify-center items-center bg-[#F0F0F0]">
              Small
            </div>
            <div className="w-[100px] h-[46px] rounded-full flex justify-center items-center bg-[#F0F0F0]">
              Medium
            </div>
            <div className="w-[100px] h-[46px] rounded-full flex justify-center items-center bg-[#F0F0F0]">
              Large
            </div>
            <div className="w-[100px] h-[46px] rounded-full flex justify-center items-center bg-[#F0F0F0]">
              X-Large
            </div>
          </div>
        </div>
        <div className="lg:w-[590px] border"></div>
        <div className="flex gap-5">
          <CheckOutNow price_id={data.price_id} name={data.name} currency="USD" description={data.description} image={data.images[0]} price={data.price} key={`${data._id}-checkout`} />
          <AddToCart price_id={data.price_id} name={data.name} currency="USD" description={data.description} image={data.images[0]} price={data.price} key={data._id} />
        </div>
      </section>
    </main>
  );
};

export default Product;
