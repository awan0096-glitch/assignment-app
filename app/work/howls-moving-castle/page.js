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
      src: "/pictures/Howl’s Moving Castle_1.jpg",
      title: "The Moving Castle",
      desc: "A lumbering, magical fortress that defies the laws of physics.",
    },
    {
      src: "/pictures/Howl’s Moving Castle_2.jpg",
      title: "Sophie and Howl",
      desc: "A cursed young woman and a mysterious wizard whose destinies intertwine.",
    },
    {
      src: "/pictures/Howl’s Moving Castle_3.jpg",
      title: "Calcifer the Fire Demon",
      desc: "A witty flame spirit who powers the castle.",
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
              Howl’s Moving Castle
            </div>
            <ParallaxHero
              // title="Howl's Moving Castle"
              imageSrc="/pictures/Howl’s Moving Castle_Headline.png"
              imageAlt="Howl's Moving Castle"
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
              Howl’s Moving Castle (2004) tells the story of Sophie, a young hat
              maker cursed into old age by a jealous witch. Seeking help, she
              enters the magical home of the wizard Howl. Together, they
              navigate war, curses, and personal growth. The film weaves themes
              of love, pacifism, and self-acceptance.
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
              Adapted from Diana Wynne Jones’s novel, the film was partly
              Miyazaki’s response to the Iraq War, expressing his anti-war
              views. With dazzling hand-drawn and digital animation, it became
              one of Studio Ghibli’s highest-grossing films worldwide. Its
              fantastical visuals and strong message of compassion continue to
              inspire audiences.
            </div>
          </div>

          {/* Prev / Next */}
          <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between mt-16">
            {/* Prev */}
            <Link
              href="/work/spirited-away"
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
              href="/work/my-neighbor-totoro"
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
