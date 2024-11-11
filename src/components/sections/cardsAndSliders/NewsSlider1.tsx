"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { newsArticles } from "@/data/global";
import Image from "next/image";
import { NewsCard } from "./NewsCard";
export const NewsSlider1 = ({ data }: { data: any }) => {
  const uniqueId = "NewsSlider1123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="w-full">
        {[...data, ...data, ...data, ...data]?.map(
          (item: any, index: number) => (
            <SwiperSlide key={index}>
              <NewsCard
                banner={item?.banner}
                title={item?.title}
                slug={item?.slug}
                excerpt={item?.excerpt}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div
        className={`${uniqueId}-next text-grey1 absolute left-1 top-0 z-10 flex h-full cursor-pointer items-center justify-center bg-slate-50 px-2 shadow-lg`}
      >
        &lt;
      </div>
      <div
        className={`${uniqueId}-prev text-grey1 absolute right-1 top-0 z-10 flex h-full cursor-pointer items-center justify-center bg-slate-50 px-2 shadow-lg`}
      >
        &gt;
      </div>
    </>
  );
};


