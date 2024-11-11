import { formatToReadableDate } from "@/utils/customText";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard2({
  banner,
  title,
  slug,
  publishedDate,
  category,
}: any) {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <Image
          src={banner}
          alt={title}
          width={1000}
          height={1000}
          className="h-[16rem] w-full cursor-pointer object-cover transition-all duration-300 hover:scale-110 md:h-[24rem]"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 col-span-3 bg-gradient-to-t from-black to-transparent p-2 pt-5 text-white">
        <p className="cursor-pointer text-sm">
          <span className="font-medium">{category}</span> /{" "}
          <span>{formatToReadableDate(publishedDate)}</span>
        </p>
        <Link href={`/${slug}`} className="cursor-pointer">
          <h3 className="cursor-pointer text-lg font-medium">{title}</h3>
        </Link>
      </div>
    </div>
  );
}
