import { formatToReadableDate } from "@/utils/customText";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard4({
  banner,
  title,
  slug,
  publishedDate,
  category,
  excerpt,
}: any) {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-md">
        <Image
          src={banner}
          alt={title}
          width={1000}
          height={1000}
          className="h-[14rem] w-full cursor-pointer object-cover transition-all duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-2">
        <p className="cursor-pointer text-sm">
          <span className="font-medium text-bg1">{category}</span> /{" "}
          <span className="text-grey1">
            {formatToReadableDate(publishedDate)}
          </span>
        </p>
        <Link href={`/${slug}`} className="cursor-pointer">
          <h3 className="line-clamp-2 cursor-pointer text-lg font-medium transition-all duration-300 hover:text-bg1">
            {title}
          </h3>
        </Link>
        <p className="text-grey1 line-clamp-3">{excerpt}</p>
      </div>
    </div>
  );
}
