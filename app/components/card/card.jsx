import Link from "next/link";

export default function Card({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  summary,
  className,
  link,
}) {
  return (
    <div className="flex p-[10px] flex-col items-center gap-[10px]">
      {link ? (
        <Link href={link}>
          <div className="w-[312px] h-[437px] overflow-hidden rounded-[10px] shadow-lg">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
            />
          </div>

          <p className="self-stretch text-[var(--Text,#333)] text-center text-[16px] not-italic font-bold leading-normal pt-5">
            {title}
          </p>
        </Link>
      ) : (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-[312px] h-[437px] aspect-[312/437] rounded-[10px] bg-lightgray bg-center bg-contain bg-no-repeat shadow-[0_0_10px_5px_rgba(51,51,51,0.25)]"
        />
      )}

      <div className="flex w-[165px] flex-col items-center gap-[5px]">
        {/* <p className="self-stretch text-[var(--Text,#333)] text-center text-[16px] not-italic font-bold leading-normal">
          {title}
        </p> */}
        <p className="self-stretch text-[var(--Text,#333)] text-center text-[12px] not-italic font-medium leading-normal">
          {subtitle}
        </p>
      </div>
      <p className="w-[372px] text-[var(--Text,#333)] text-center text-[16px] not-italic font-normal leading-normal">
        {summary}
      </p>
    </div>
  );
}
