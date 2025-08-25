import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Footer from "../components/Footer";
import About from "./About";
import Collection from "./Collection";
import Contact from "./Contact";
import Banner from "./Banner";
import FAQ from "./FAQ";
import ServicesSection from "./Services";
import JewelryFeatures from "./JewelryFeatures";


export default function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Collection />
      <JewelryFeatures/>
      <ServicesSection/>  
      <Banner/>
      <Contact/>
      <FAQ/>
    </div>
  );
}
