import { formatToReadableDate } from "@/utils/customText";
import Image from "next/image";
import Link from "next/link";

export function NewsCard1({
  publishedDate,
  category,
  banner,
  title,
  slug,
}: any) {
  return (
    <Link
      href={`/${slug}`}
      className="grid cursor-pointer grid-cols-4 gap-1 hover:bg-zinc-200"
    >
      <Image
        src={banner}
        alt={title}
        width={300}
        height={300}
        className="col-span-1 h-full w-full cursor-pointer object-cover"
      />
      <div className="col-span-3">
        <p className="cursor-pointer text-sm">
          <span className="font-medium text-bg1">{category}</span> /{" "}
          <span className="text-grey1">
            {formatToReadableDate(publishedDate)}
          </span>
        </p>
        <h3 className="line-clamp-2 cursor-pointer text-lg font-medium hover:text-bg1">
          {title}
        </h3>
      </div>
    </Link>
  );
}
