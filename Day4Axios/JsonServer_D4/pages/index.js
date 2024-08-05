import React,{useEffect} from "react";
import Nav from './components/NavBar/LandingPage';
// import Hero from "./components/NavBar/Hero';
import LandingPage from './components/NavBar/LandingPage'
import InfoCard from "./components/Card/InfoCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Last from "./components/Footer/Last";
import OfferCard from "./components/Card/OfferCard";
import Footer from "./components/Footer/Footer";
const Index = () => {
  useEffect(() => {
    // AOS.init();
  }, );
  return (
    <div>
      <LandingPage/>
      {/* <InfoCard/> */}
      {/* <OfferCard/> */}
      {/* <Hero /> */}
      {/* <Nav /> */}
      <Footer /> 
      <Last/>
    </div>
  );
};

export default Index;
