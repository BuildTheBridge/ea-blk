"use client";
import { Box, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import SectionOne from "./components/Section1";
import SectionTwo from "./components/Section2";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionThree from "./components/Section3";
import SectionFour from "./components/Section4";
import SectionFive from "./components/Section5";
import Footer from "./components/Footer";
import SectionSix from "./components/Section6";
// import Footer from "@/app/components/Footer";

export default function Home() {
  const sectionTwoRef = useRef<any>(null);

  const [move, setMove] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (move) sectionTwoRef?.current.scrollIntoView({ behavior: "smooth" });
    return () => {
      setMove(false);
    };
  }, [move]);
  return (
    <Wrapper>
      <Navbar />
      <SectionOne onClick={() => setMove(true)} />
      <SectionTwo sectionTwoRef={sectionTwoRef} />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#141718",
  };
});
