"use client";
import React from "react";
import Aside from "@/app/_components/Aside";
import Button from "@/components/elements/Button";
import Wrapper from "@/components/elements/Wrappers";
import { HeroSlider1 } from "@/components/sections/cardsAndSliders/HeroSlider1";
import NewsCard3 from "@/components/sections/cardsAndSliders/NewsCard3";
import { newsArticles } from "@/data/global";
import { use } from "react";
import Image from "next/image";
import { ad1, ad2 } from "@/assets";
import AdDisplay from "@/components/elements/AdDisplay";

type Params = {
  params: {
    cat: string;
  };
};

const adImages = [ad1, ad1, ad1];
const adSwitchInterval = 5000; // 5 seconds

export default function IndividualCategoryPage({ params }: Params) {
  const interval = 3; // Show ad every 3 NewsCards
  // const { cat } = use(params); // Unwrap `params` with `use`

  function handleLoadMore() {
    // Implementation for loading more content
  }

  return (
    <>
      {/* Hero Section  */}
      <Wrapper
        isTop={true}
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
      {/* Latest News  */}
      <Wrapper
        containerClassName="pb-10 pt-5"
        className="grid grid-cols-12 gap-5"
      >
        <div className="col-span-12 md:col-span-8">
          <h2 className="mb-5 text-2xl font-medium">Latest News</h2>
          {[
            ...newsArticles,
            ...newsArticles,
            ...newsArticles,
            ...newsArticles,
          ].map((item: any, index: number) => (
            <React.Fragment key={index}>
              <NewsCard3
                banner={item?.banner}
                title={item?.title}
                slug={item?.slug}
                publishedDate={item?.publishedDate}
                category={item?.category?.[0]}
                excerpt={item?.excerpt}
              />
              <hr className="my-4 border-gray-300" />
              {/* Insert AdDisplay after every `interval` NewsCards */}
              {(index + 1) % interval === 0 && (
                <div className="my-4">
                  <AdDisplay adImages={adImages} switchInterval={adSwitchInterval} />
                </div>
              )}
            </React.Fragment>
          ))}
          <Button size="md" className="w-full" onClick={handleLoadMore}>
            Load More
          </Button>
          <Image
            src={ad1}
            alt="ads"
            width={1000}
            height={1000}
            className="mt-5 w-full object-cover"
          />
        </div>
        <aside className="relative col-span-4 max-md:hidden">
          <div className="sticky top-44">
            <Image
              src={ad2}
              alt="ads"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          </div>
        </aside>
      </Wrapper>
    </>
  );
}
