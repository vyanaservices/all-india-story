"use client";
import Tab from "@/components/elements/tabGridFramerMotion/Tab";
import { NewsCard1 } from "@/components/sections/cardsAndSliders/NewsCard1";
import { newsArticles } from "@/data/global";
import React, { useState } from "react";

export default function Aside() {
  const [activeTab, setActiveTab] = useState("latest");
  return (
    <>
      {/* Tabs  */}
      <ul className="mb-4 flex gap-2 border-b border-gray-300 p-2">
        <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>
      {/* Tabs Content  */}
      <ul className="grid grid-cols-1">
        {content?.slice(0, 5)?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <NewsCard1
              category={item?.category?.[0]}
              banner={item?.banner}
              title={item?.title}
              slug={item?.slug}
              excerpt={item?.excerpt}
              publishedDate={item?.publishedDate}
            />
            <hr className="my-4 border-gray-300" />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

const tabs = [
  { id: 11, label: "latest" },
  { id: 22, label: "popular" },
  { id: 33, label: "trending" },
];

const content = [
  ...newsArticles,
  ...newsArticles,
  ...newsArticles,
  ...newsArticles,
  ...newsArticles,
  ...newsArticles,
];
