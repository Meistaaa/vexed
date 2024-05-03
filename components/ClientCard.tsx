// Filter.tsx
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BreakpointSlides = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
};

const Filter = () => {
  return (
    <div className="w-[1440px] bg-red ">
      <Carousel
        responsive={BreakpointSlides}
        ssr
        infinite
        itemClass="carousel-item"
        className="ml-24 flex items-center justify-between"
      >
        <Carousel
          responsive={BreakpointSlides}
          ssr
          infinite
          itemClass="carousel-item"
          autoPlay
        >
          <Image
            alt="Gundam"
            src="/ghairmulki.png"
            priority
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            alt="Musgo"
            src="/computer.svg"
            priority
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            alt="Valley"
            src="/ghairmulki.png"
            priority
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            alt="Beach"
            src="/computer.svg"
            layout="responsive"
            width={700}
            height={475}
          />
          <Image
            alt="Torii"
            src="/ghairmulki.png"
            layout="responsive"
            width={700}
            height={475}
          />
        </Carousel>
      </Carousel>
    </div>
  );
};

export default Filter;
