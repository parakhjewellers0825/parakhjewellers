import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Footer from "../components/Footer";
import About from "./About";
import Collection from "./Collection";
import Contact from "./Contact";
import Banner from "./Banner";
import FAQ from "./FAQ";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Collection />
      <Banner/>
      <Contact/>
      <FAQ/>
    </div>
  );
}
