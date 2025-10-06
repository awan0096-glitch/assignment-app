"use client";
import { useEffect, useRef, useState } from "react";

export default function Gallery({
  slides = [], // [{ src, title, desc }]
  heading = "Highlights", // optional page heading above the gallery
  interval = 5000, // ms per slide
  fitWhole = false, // false = object-cover (hero style), true = object-contain (show all)
  maxWidth = "max-w-[1305px]", // viewport width (3/4 of 1740)
  aspect = "1740/978", // keep original ratio
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    start();
    return stop;
  }, [slides.length, interval]);

  const start = () => {
    stop();
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);
  const goTo = (i) => {
    setIndex(i % slides.length);
    start();
  };

  // Guard: if no slides provided
  if (!slides.length) return null;

  return (
    <section className="w-full flex flex-col items-center gap-6">
      {/* Heading */}
      <div className="w-full max-w-[1160px] flex items-center justify-center">
        <h2 className="w-full text-center text-[#333] text-3xl md:text-5xl font-medium font-['Alexandria']">
          {heading}
        </h2>
      </div>

      {/* Indicators */}
      <div
        className="inline-flex items-center gap-5"
        aria-label="Slide indicators"
      >
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "transition-all duration-500",
                active
                  ? "w-20 h-4 rounded-[10px] bg-[#333]"
                  : "w-4 h-4 rounded-full bg-[#333]/80 hover:bg-[#333]",
              ].join(" ")}
            />
          );
        })}
      </div>

      {/* Viewport (keeps aspect ratio responsive) */}
      <div
        className={`relative w-full ${maxWidth} aspect-[${aspect}] overflow-hidden rounded-[20px] shadow-[0_0_10px_5px_rgba(51,51,51,0.25)]`}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <figure
              key={`${s.src}-${i}`}
              className="min-w-full h-full relative"
            >
              <img
                src={s.src}
                alt={s.title || `Slide ${i + 1}`}
                className={`w-full h-full ${
                  fitWhole ? "object-contain" : "object-cover"
                } select-none`}
                draggable={false}
              />

              {(s.title || s.desc) && (
                <figcaption className="absolute left-0 right-0 bottom-0">
                  <div className="px-10 py-6 bg-zinc-800/50 rounded-b-[20px] backdrop-blur-[5px]">
                    {s.title && (
                      <h3 className="text-white text-2xl md:text-4xl font-medium font-['Alexandria']">
                        {s.title}
                      </h3>
                    )}
                    {s.desc && (
                      <p className="text-white/90 text-sm md:text-base font-normal font-['Alexandria'] mt-2">
                        {s.desc}
                      </p>
                    )}
                  </div>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
