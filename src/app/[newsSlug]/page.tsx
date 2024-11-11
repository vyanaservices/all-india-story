import Wrapper from "@/components/elements/Wrappers";
import React from "react";
import Aside from "../_components/Aside";
import Image from "next/image";
import { newsArticles } from "@/data/global";
import { FaGripfire } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { formatToReadableDate } from "@/utils/customText";
import AdDisplay from "@/components/elements/AdDisplay";
import { ad1, ad2 } from "@/assets";

type Prams = {
  params: {
    newsSlug: string;
  };
};
export default function page({ params }: Prams) {
  // const { newsSlug } = params;
  const news = newsArticles?.[0];
  return (
    <>
      {/* Hero Section  */}
      <Wrapper
        isTop={true}
        containerClassName="pb-5 pt-5"
        className="grid grid-cols-12 gap-5"
      >
        <div className="relative col-span-12 md:col-span-8">
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase text-bg1">
              {news?.category?.[0]}
            </p>
            <p className="flex items-center gap-1 text-grey1">
              <FaGripfire />
              <span>{news?.views} views</span>
            </p>
          </div>
          <h2 className="mb-2 text-xl font-medium md:text-3xl">
            {news?.title}
          </h2>
          <Image
            src={news?.banner}
            alt="placeholder"
            width={1000}
            height={1000}
            className="max-h-[31.8rem] w-full cursor-pointer object-cover md:h-full"
          />
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-grey1">
              <FaRegCircleUser className="text-lg" />{" "}
              <span className="capitalize">{news?.author?.name}</span>
            </p>
            <p className="mt-2 text-grey1">
              {" "}
              Published at {formatToReadableDate(news?.publishedDate)}
            </p>
          </div>
          {/* Content Section */}
          {news?.contentSection && <Content dataArray={news?.contentSection} />}
        </div>
        {/* Aside  */}
        <aside className="col-span-4 max-md:hidden">
          <Aside />
          <div>
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
      {/* Ad Banner  */}
      <Wrapper className="my-4">
        <Image
          src={ad1}
          alt="ads"
          width={1000}
          height={1000}
          className="mt-5 w-full object-cover"
        />
      </Wrapper>
    </>
  );
}

function Content({ dataArray }: any) {
  return (
    <>
      {dataArray?.map((item: any, index: number) => (
        <React.Fragment key={index}>
          {/* Text  */}
          {item?.content && (
            <div
              className="dangerouslySetInnerHTMLStyle transparent-bg mb-5 text-justify"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
          {/* Image  */}
          {item?.image && (
            <Image
              src={item.image}
              alt="ads"
              width={1000}
              height={1000}
              className="mt-5 w-full object-cover"
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
