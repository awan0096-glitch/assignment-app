import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";

export default function Hero() {
  let h1Class =
    "self-stretch text-center justify-start text-[#333333] text-8xl font-normal font-['Nothing_You_Could_Do']";
  let h2Class =
    "self-stretch text-[#333] text-center font-medium text-[56px] leading-normal";
  let pClass = "text-[#333] text-center text-[16px] font-normal leading-normal";
  let h3Class =
    "text-center text-[12px] font-medium leading-normal text-[#333]";

  return (
    <>
      <div className="flex flex-col items-center gap-[10px] self-stretch">
        <div className="flex flex-col items-center self-stretch">
          <img
            src="/pictures/Hayao Miyazaki.png"
            alt="Hayao Miyazaki"
            className="max-w-xs sm:max-w-sm md:max-w-md h-auto mx-auto -mb-[50px]"
          />
          <ParallaxHero
            title="Hayao Miyazaki"
            // imageSrc="/pictures/Hayao Miyazaki.png"
            // imageAlt="Hayao Miyazaki"
            // aspect="1740/978" // keep original ratio
            // maxWidth="max-w-[600px]" // 3/4 width (optional)
            // imageScale={1.4} // a touch more zoom for cleaner parallax
            // imageOrientation="up"
            content="Legendary animator and storyteller, creator of timeless worlds where fantasy meets reality."
            titleSpeed={50} // tweak feel of title movement
            overlapPx={500} // pulls title up over the image
          />

          {/* <h1 className={h1Class}>Hayao Miyazaki</h1> */}
        </div>
        {/* <p className={`${pClass} mt-3`}>
          Legendary animator and storyteller, creator of timeless worlds where
          fantasy meets reality.
        </p> */}
      </div>
    </>
  );
}
