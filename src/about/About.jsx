import React from "react";
import JewelryFeatures from "./JewelryFeatures";
import JewelryHero from "./JewelryHero";
import JewelryAbout from "./JewelryAbout";
import Banner from "../homepage/Banner";
import Contact from "../homepage/Contact";

export default function JewelryPage() {
  return (
    <div className="pt-[4rem] max-lg:pt-[2rem]">
      <JewelryAbout />
      <JewelryHero />
      <JewelryFeatures />
      <Banner/>
      <Contact/>
    </div>
  );
}
