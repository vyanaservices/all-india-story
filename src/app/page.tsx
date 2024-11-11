"use client";
import Wrapper from "@/components/elements/Wrappers";
import { HeroSlider1 } from "@/components/sections/cardsAndSliders/HeroSlider1";
import { NewsSlider1 } from "@/components/sections/cardsAndSliders/NewsSlider1";
import { newsArticles } from "@/data/global";
import React, { useState } from "react";
import Aside from "./_components/Aside";
import { LatestSlider } from "@/components/sections/cardsAndSliders/LatestSlider";
import { PopularSlider } from "@/components/sections/cardsAndSliders/PopularSlider";
import { TrendingSlider } from "@/components/sections/cardsAndSliders/TrendingSlider";

export default function HomePage() {
  return (
    <>
      {/* Slider  */}
      <Wrapper isTop={true} className="relative">
        <NewsSlider1 data={newsArticles} />
      </Wrapper>
      {/* Hero Section  */}
      <Wrapper
        containerClassName="pb-10 pt-5"
        className="grid grid-cols-12 gap-5"
      >
        <div className="swiperStyle3 relative col-span-12 md:col-span-8">
          <HeroSlider1 data={newsArticles} />
        </div>
        <aside className="col-span-4 max-md:hidden">
          <Aside />
        </aside>
      </Wrapper>
      {/* Latest  */}
      <Wrapper containerClassName="pb-10 pt-5" className="relative">
        <h2 className="mb-5 text-2xl font-medium">Latest News</h2>
        <LatestSlider data={newsArticles} />
      </Wrapper>
      {/* Popular News  */}
      <Wrapper containerClassName="pb-10 pt-5" className="relative">
        <h2 className="mb-5 text-2xl font-medium">Popular News</h2>
        <PopularSlider data={newsArticles} />
      </Wrapper>
      {/* Trending News  */}
      <Wrapper containerClassName="pb-10 pt-5" className="relative">
        <h2 className="mb-5 text-2xl font-medium">Trending News</h2>
        <TrendingSlider data={newsArticles} />
      </Wrapper>
    </>
  );
}
