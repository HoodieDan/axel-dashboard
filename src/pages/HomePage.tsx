import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices/counter";
import Hero from "../components/homepage/Hero";
import Intro from "../components/homepage/Intro";
import Benefits from "../components/homepage/Benefits";
import HowItWorks from "../components/homepage/HowItWorks";
import Pricing from "../components/homepage/Pricing";
import Faq from "../components/homepage/Faq";
import Testiomonial from "../components/homepage/Testiomonial";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <main className="font-montserrat">
      <Navbar />
      <Hero />
      <Intro />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Testiomonial />
      <Footer />
    </main>
  );
};

export default HomePage;
