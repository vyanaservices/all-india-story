"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import NewsCard4 from "./NewsCard4";
import NewsCard3 from "./NewsCard3";
export const TrendingSlider = ({ data }: { data: any }) => {
  const uniqueId = "TrendingSlider123";

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
      1024: { slidesPerView: 2 },
    },
  };

  return (
    <>
      <Swiper {...swiperOptions} className="w-full">
        {[...data, ...data, ...data, ...data, ...data]?.map(
          (item: any, index: number) => (
            <SwiperSlide key={index}>
              <NewsCard3
                banner={item.banner}
                title={item.title}
                slug={item.slug}
                publishedDate={item.publishedDate}
                category={item.category[0]}
                excerpt={item?.excerpt}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div className="absolute right-0 top-0 z-10 flex gap-2">
        <div
          className={`${uniqueId}-next text-grey1 flex cursor-pointer items-center justify-center border border-gray-300 bg-slate-50 px-2`}
        >
          &lt;
        </div>
        <div
          className={`${uniqueId}-prev text-grey1 flex cursor-pointer items-center justify-center border border-gray-300 bg-slate-50 px-2`}
        >
          &gt;
        </div>
      </div>
    </>
  );
};
