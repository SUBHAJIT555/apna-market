import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

const categoryImageBgStyle: React.CSSProperties = {
  WebkitMaskComposite: "source-over",
  WebkitMaskImage:
    "radial-gradient(ellipse 50% 50% at 0% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 40%, transparent 70%)",
  backgroundImage:
    "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
  backgroundSize: "18px 18px",
  maskComposite: "add",
  maskImage:
    "radial-gradient(ellipse 50% 50% at 0% 0%, black 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, black 40%, transparent 70%)",
  opacity: 0.35,
};

interface SingleItemProps {
  item: Category;
}

const SingleItem = ({ item }: SingleItemProps) => {
  return (
    <Link
      href={`/shop?category=${item.slug}`}
      className="group flex h-[248px] w-full flex-col overflow-hidden rounded-2xl border border-neutral-300 bg-white transition-all duration-300 ]"
    >
      {/* Image area — light + dot pattern */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center bg-white px-4 py-6">
        <div
          className="absolute inset-0 z-0"
          style={categoryImageBgStyle}
          aria-hidden
        />
        <Image
          src={item.img}
          alt={item.title}
          width={100}
          height={80}
          className="relative z-10 max-h-[88px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-neutral-300 bg-white px-4 py-3.5">
        <h3 className="line-clamp-2 min-w-0 flex-1 text-sm font-semibold leading-snug text-dark transition-colors group-hover:text-orange-600">
          {item.title}
        </h3>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-dark-3 transition-all duration-200 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 10L10 4M10 4H5.5M10 4V8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default SingleItem;
