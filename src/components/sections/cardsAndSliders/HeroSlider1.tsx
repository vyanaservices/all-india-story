"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
import { newsArticles } from "@/data/global";
import Image from "next/image";
import { formatToReadableDate } from "@/utils/customText";

export const HeroSlider1 = ({ data }: { data: any }) => {
  const uniqueId = "HeroSlider1123";
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const array = [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Navigation, FreeMode, Thumbs, Autoplay],
    thumbs: { swiper: thumbsSwiper },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  };

  const swiperOptions1 = {
    onSwiper: (swiper: any) => setThumbsSwiper(swiper),
    spaceBetween: 5,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    modules: [FreeMode, Thumbs],
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    },
  };

  return (
    <div>
      <Swiper {...swiperOptions} className="w-full">
        {array?.map((item: any, index: number) => (
          <SwiperSlide key={`${index}-main`}>
            <NewsCard
              banner={item.banner}
              title={item.title}
              slug={item.slug}
              excerpt={item.excerpt}
              publishedDate={item.publishedDate}
              category={item.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative">
        <Swiper {...swiperOptions1} className="mt-1 w-full">
          {array?.map((item: any, index: number) => (
            <SwiperSlide key={`${index}-thumb`}>
              <Image
                src={item.banner}
                alt={item.title}
                width={400}
                height={400}
                className="h-18 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`${uniqueId}-prev text-grey1 absolute bottom-0 left-1 z-10 flex h-full cursor-pointer items-center justify-center bg-slate-50/70 px-2 shadow-lg hover:bg-slate-50`}
        >
          &lt;
        </div>
        <div
          className={`${uniqueId}-next text-grey1 absolute bottom-0 right-1 z-10 flex h-full cursor-pointer items-center justify-center bg-slate-50/70 px-2 shadow-lg hover:bg-slate-50`}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

function NewsCard({
  banner,
  title,
  slug,
  excerpt,
  publishedDate,
  category,
}: any) {
  return (
    <div className="relative w-full">
      <Image
        src={banner}
        alt={title}
        width={1000}
        height={1000}
        className="h-full max-h-[31.8rem] w-full cursor-pointer object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 col-span-3 bg-gradient-to-t from-black to-transparent p-2 pt-5 text-white">
        <p className="cursor-pointer text-sm">
          <span className="font-medium">{category}</span> /{" "}
          <span>{formatToReadableDate(publishedDate)}</span>
        </p>
        <Link href={`/${slug}`} className="cursor-pointer">
          <h3 className="cursor-pointer text-lg font-medium">{title}</h3>
          <p className="line-clamp-1">{excerpt}</p>
        </Link>
      </div>
    </div>
  );
}
