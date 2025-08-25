import React from "react";
import JewelryHero from "./JewelryHero";
import JewelryAbout from "./JewelryAbout";
import Banner from "../homepage/Banner";
import Contact from "../homepage/Contact";
import FeatureSection from "./FeatureSection";

export default function JewelryPage() {
  return (
    <div className="pt-[4rem] max-lg:pt-[2rem]">
      <JewelryAbout />
      <FeatureSection />
      <JewelryHero />
      <Banner />
      <Contact />
    </div>
  );
}
