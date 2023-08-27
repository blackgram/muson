import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesSmall from "./components/ServicesSmall";
import Streams from "./components/Streams";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import StreamsSmall from "./components/StreamsSmall";

const App = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      <div className="font-inter flex flex-col justify-center items-center">
        <Hero />
        {isSmallScreen ? <ServicesSmall /> : <Services />}
        <CTA />
        {isSmallScreen ? <StreamsSmall /> : <Streams />}
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
