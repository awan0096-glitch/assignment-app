import Nav from "../../components/nav/nav";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import Link from "next/link";

export default function Mononoke() {
  let h1Class =
    "self-stretch text-center justify-start text-[#333333] text-8xl font-normal font-['Nothing_You_Could_Do']";
  let h2Class =
    "self-stretch text-[#333] text-center font-medium text-[56px] leading-normal";
  let pClass = "text-[#333] text-center text-[16px] font-normal leading-normal";
  let h3Class =
    "text-center text-[12px] font-medium leading-normal text-[#333]";

  const slides = [
    {
      src: "/pictures/Spirited Away_1.jpg",
      title: "Chihiro in the Spirit Bathhouse",
      desc: "A young girl navigating a world of gods and spirits.",
    },
    {
      src: "/pictures/Spirited Away_2.jpg",
      title: "No-Face",
      desc: "A lonely spirit whose transformation reflects human greed and loneliness.",
    },
    {
      src: "/pictures/Spirited Away_3.jpg",
      title: "Haku, the Dragon",
      desc: "A river spirit who guides and protects Chihiro.",
    },
  ];

  return (
    <>
      {/* page */}
      <div className="px-14 py-20 bg-BG inline-flex justify-center items-start gap-2.5 bg-[#F5F5DC]">
        {/* content */}
        <div className="w-[1740px] inline-flex flex-col justify-start items-center gap-48">
          <Nav />
          {/* headline */}
          <div className="self-stretch inline-flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start text-[#333333] text-8xl font-normal font-['Nothing_You_Could_Do'] -mb-[100]">
              Spirited Away
            </div>
            <ParallaxHero
              // title="Spirited Away"
              imageSrc="/pictures/Spirited Away_Headline.png"
              imageAlt="Spirited Away"
              aspect="1740/978" // keep original ratio
              maxWidth="max-w-[500px]" // 3/4 width (optional)
              imageScale={2} // a touch more zoom for cleaner parallax
              imageOrientation="up"
              // titleSpeed={60} // tweak feel of title movement
              // overlapPx={200} // pulls title up over the image
            />
            {/* <img
              className="w-[774px] h-auto mx-auto -mt-[180px] -mb-[100px]"
              src="/pictures/Princess Mononoke_Headline.png"
            /> */}
          </div>
          {/* gallery */}
          <div className="px-6 py-16">
            <Gallery
              slides={slides}
              heading="Highlights"
              interval={5000}
              fitWhole={false}
            />
          </div>
          {/* story summary */}
          <div className="w-[1000px] flex flex-col justify-start items-center gap-7">
            <div className={h2Class}>Story Summary</div>
            <div className={pClass}>
              Spirited Away (2001) follows Chihiro, a ten-year-old girl trapped
              in a mysterious spirit world after her parents are transformed
              into pigs. To survive and save her family, she works in a
              bathhouse run by the witch Yubaba. The film is a journey of
              courage, growth, and identity, as Chihiro transforms from a
              frightened child into a brave young heroine.
            </div>
          </div>
          {/* production background */}
          <div
            className={
              "w-[1000px] flex flex-col justify-start items-center gap-7"
            }
          >
            <div className={h2Class}>Production Background</div>
            <div className={pClass}>
              The film was Miyazaki’s international breakthrough, winning the
              Academy Award for Best Animated Feature in 2003—the first (and
              still only) hand-drawn non-English film to do so. Its intricate
              animation, rooted in Japanese folklore and Shinto beliefs,
              resonated worldwide, cementing Studio Ghibli’s global legacy.
            </div>
          </div>

          {/* Prev / Next */}
          <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between mt-16">
            {/* Prev */}
            <Link
              href="/work/princess-mononoke"
              className="group inline-flex items-center gap-4 text-black text-3xl md:text-6xl font-medium font-['Alexandria']"
              aria-label="Go to previous page"
            >
              <img
                src="/pictures/Prev Button.png"
                alt=""
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:-translate-x-2 select-none"
                aria-hidden="true"
                draggable={false}
              />
              <span>Prev.</span>
            </Link>

            {/* Next */}
            <Link
              href="/work/howls-moving-castle"
              className="group inline-flex items-center gap-4 text-black text-3xl md:text-6xl font-medium font-['Alexandria']"
              aria-label="Go to next page"
            >
              <span>Next</span>
              <img
                src="/pictures/Next Button.png"
                alt=""
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:translate-x-2 select-none"
                aria-hidden="true"
                draggable={false}
              />
            </Link>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
