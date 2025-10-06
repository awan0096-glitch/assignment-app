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
      src: "/pictures/Princess Mononoke_1.jpg",
      title: "Ashitaka and Yakul",
      desc: "The young prince rides his loyal red elk companion across vast landscapes.",
    },
    {
      src: "/pictures/Princess Mononoke_2.jpg",
      title: "San, the Wolf Girl",
      desc: "Raised by wolves, San embodies the struggle between humans and nature.",
    },
    {
      src: "/pictures/Princess Mononoke_3.jpg",
      title: "The Forest Spirit",
      desc: "A mysterious god whose existence balances life and death.",
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
              Princess Mononoke
            </div>
            <ParallaxHero
              // title="Princess Mononoke"
              imageSrc="/pictures/Princess Mononoke_Headline.png"
              imageAlt="Princess Mononoke"
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
              Princess Mononoke (1997) tells the epic tale of Ashitaka, a prince
              cursed by a demon. Seeking a cure, he becomes entangled in a
              battle between the forest gods, led by San, and the industrial
              settlement of Iron Town, led by Lady Eboshi. The story explores
              humanity’s relationship with nature, greed, and the cost of
              progress.
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
              A landmark film in Miyazaki’s career, Princess Mononoke was one of
              the most expensive animated films in Japan at the time. It
              introduced complex moral themes, portraying neither side as purely
              good or evil. Its international release, supported by Miramax,
              helped introduce Studio Ghibli to a global audience.
            </div>
          </div>

          {/* Prev / Next */}
          <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between mt-16">
            {/* Prev */}
            <Link
              href="/work/my-neighbor-totoro"
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
              href="/work/spirited-away"
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
