"use client";
import { useEffect, useRef } from "react";
import SimpleParallax from "simple-parallax-js";
// import dynamic from "next/dynamic";

// const SimpleParallax = dynamic(() => import("simple-parallax-react"), {
//   ssr: false,
// });

/**
 * ParallaxHero
 * Props:
 * - title: string
 * - content: string
 * - imageSrc: string
 * - imageAlt: string
 * - aspect: string (Tailwind aspect ratio, e.g. "1740/978")  // optional
 * - maxWidth: string (Tailwind max-w, default "max-w-[1305px]")  // optional
 * - imageScale: number (parallax zoom; 1.2–1.4 recommended; default 1.25)
 * - imageOrientation: "up" | "down" | "left" | "right" (default "up")
 * - titleSpeed: number (px intensity for title parallax; default 20)
 * - overlapPx: number (negative top overlap for the title; default 50)
 * - titleClassName: string (extra classes for the h1)
 */
export default function ParallaxHero({
  title,
  content,
  imageSrc,
  imageAlt,
  aspect = "1740/978",
  maxWidth = "max-w-[1305px]", // 3/4 of 1740 ≈ 1305; keeps things tidy
  imageScale = 1.25,
  imageOrientation = "down",
  titleSpeed = 20,
  overlapPx = 50,
  titleClassName = "text-center text-[#333333] text-8xl font-normal font-['Nothing_You_Could_Do']",
  pClassName = "text-[#333] text-center text-[16px] font-normal leading-normal"
}) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // Lightweight title parallax
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const titleEl = titleRef.current;
      if (!section || !titleEl) return;

      const rect = section.getBoundingClientRect();
      // progress ~ -1 (above) → 0 (center) → +1 (below)
      const progress =
        (rect.top + rect.height / 2 - window.innerHeight / 2) /
        (window.innerHeight / 2);

      // parallax-y relative to image
      const translateY = progress * titleSpeed;
      titleEl.style.transform = `translateY(${translateY}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [titleSpeed]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center gap-4 select-none"
    >
      {/* Image viewport */}
      <div
        className={`relative w-full ${maxWidth} aspect-[${aspect}] overflow-hidden rounded-[20px]`}
      >
        <SimpleParallax scale={imageScale} orientation={imageOrientation}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="block w-full h-full object-cover"
            draggable={false}
          />
        </SimpleParallax>
      </div>

      {/* Title (overlap up a bit) */}
      <h1
        ref={titleRef}
        className={`${titleClassName} -mt-[${overlapPx}px] will-change-transform`}
      >
        {title}
      </h1>

      {/* content paragraph */}
      <p
        ref={contentRef}
        className={`${pClassName} -mt-[${overlapPx}px] will-change-transform`}
      >
        {content}
      </p>
    </section>
  );
}
