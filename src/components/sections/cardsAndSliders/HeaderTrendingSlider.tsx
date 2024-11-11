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
export const HeaderTrendingSlider = () => {
  const uniqueId = "HeaderTrending123";

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
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  };

  return (
    <div className="flex w-full items-center justify-between">
      <Swiper {...swiperOptions} className="w-full">
        {[
          ...newsArticles,
          ...newsArticles,
          ...newsArticles,
          ...newsArticles,
        ]?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <TrendingLine title={item?.title} slug={item?.slug} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 flex gap-1">
        <div
          className={`${uniqueId}-next text-grey1 cursor-pointer border border-zinc-300 px-1`}
        >
          &lt;
        </div>
        <div
          className={`${uniqueId}-prev text-grey1 cursor-pointer border border-zinc-300 px-1`}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

function TrendingLine({ title, slug }: any) {
  return (
    <Link
      href={`/news/${slug}`}
      className="text-grey1 flex items-center py-1 pl-3"
    >
      <p>{title}</p>
    </Link>
  );
}
