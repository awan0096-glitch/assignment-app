import Nav from "../../components/nav/nav";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import Link from "next/link";

export default function Totoro() {
  let h1Class =
    "self-stretch text-center justify-start text-[#333333] text-8xl font-normal font-['Nothing_You_Could_Do']";
  let h2Class =
    "self-stretch text-[#333] text-center font-medium text-[56px] leading-normal";
  let pClass = "text-[#333] text-center text-[16px] font-normal leading-normal";
  let h3Class =
    "text-center text-[12px] font-medium leading-normal text-[#333]";

  const slides = [
    {
      src: "/pictures/My Neighbor Totoro_1.jpg",
      title: "Totoro at the Bus Stop",
      desc: "The iconic scene where Satsuki and Mei meet Totoro on a rainy night.",
    },
    {
      src: "/pictures/My Neighbor Totoro_2.jpg",
      title: "The Catbus",
      desc: "A magical feline-shaped vehicle that transports the girls through the countryside.",
    },
    {
      src: "/pictures/My Neighbor Totoro_3.jpg",
      title: "Forest Spirits",
      desc: "Gentle woodland creatures that symbolize nature’s magic and mystery.",
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
              My Neighbor Totoro
            </div>
            <ParallaxHero
              // title="My Neighbor Totoro"
              imageSrc="/pictures/My Neighbor Totoro_Headline.png"
              imageAlt="My Neighbor Totoro"
              aspect="1740/978" // keep original ratio
              maxWidth="max-w-[500px]" // 3/4 width (optional)
              imageScale={2} // a touch more zoom for cleaner parallax
              imageOrientation="up"
              // titleSpeed={60} // tweak feel of title movement
              // overlapPx={200} // pulls title up over the image
            />
            {/* <img
              className="w-[774px] h-auto mx-auto -mt-[180px] -mb-[100px]"
              src="/pictures/My Neighbor Totoro_Headline.png"
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
              My Neighbor Totoro (1988) follows two young sisters, Satsuki and
              Mei, who move to the countryside with their father while their
              mother recovers from an illness. They soon encounter Totoro, a
              giant forest spirit, who introduces them to the wonders of the
              natural world. Through quiet adventures and whimsical discoveries,
              the film captures childhood innocence, the healing power of
              nature, and family bonds.
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
              Directed by Hayao Miyazaki and produced by Studio Ghibli, My
              Neighbor Totoro was initially a double feature with Grave of the
              Fireflies. Although modest at release, Totoro later became a
              cultural phenomenon and Studio Ghibli’s mascot. Its themes of
              environmental respect and magical realism shaped Miyazaki’s
              signature style.
            </div>
          </div>
          {/* Prev / Next */}
          <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between mt-16">
            {/* Prev */}
            <Link
              href="/work/howls-moving-castle"
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
              href="/work/princess-mononoke"
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
