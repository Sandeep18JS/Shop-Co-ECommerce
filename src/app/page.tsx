import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Styles from "@/components/Styles";
// import { Testimonilas } from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals />
      <TopSelling />
      <Styles />
      {/* <Testimonilas items={testimonials} direction="right" speed="slow" /> */}
    </>
  );
}

const testimonials = [
  {
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: "Sarah M.",
  },
  {
    quote:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    name: "Alex K.",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
  },
  {
    quote:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    name: "Herman Melville",
  },
];
