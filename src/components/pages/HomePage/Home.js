import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
