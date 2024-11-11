import Image from "next/image";
import Link from "next/link";

export function NewsCard({ banner, excerpt, title, slug }: any) {
    return (
      <Link
        href={`/news/${slug}`}
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
          <h3 className="text-lg font-medium hover:text-bg1 cursor-pointer">{title}</h3>
          <p className="line-clamp-1">{excerpt}</p>
        </div>
      </Link>
    );
  }