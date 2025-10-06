"use client";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import FamousWorks from "../components/famous_works/famous_works";
import ArtisticStyle from "../components/artistic_style/artistic_style";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import React from "react";

export default function Home() {
  let h1Class =
    "self-stretch text-center justify-start text-Text text-8xl font-normal font-['Nothing_You_Could_Do']";
  let h2Class =
    "self-stretch text-[#333] text-center font-medium text-[56px] leading-normal";
  let pClass = "text-[#333] text-center text-[16px] font-normal leading-normal";
  let h3Class =
    "text-center text-[12px] font-medium leading-normal text-[#333]";

  return (
    <>
      <div className="flex w-[1842px] px-[60px] py-[80px] flex-col justify-center items-center gap-[10px] bg-[#F5F5DC]">
        <div className="flex flex-col items-center gap-[200px] self-stretch">
          <Nav />
          <Hero h1Class={h1Class} pClass={pClass} />
          <About h2Class={h2Class} pClass={pClass} />
          <FamousWorks h2Class={h2Class} pClass={pClass} />
          <ArtisticStyle h2Class={h2Class} pClass={pClass} h3Class={h3Class} />
          <Footer h3Class={h3Class} />
        </div>
      </div>
    </>
  );
}
