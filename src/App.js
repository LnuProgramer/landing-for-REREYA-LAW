import "./App.css";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="App">
      <Header screenWidth={screenWidth} />
      <MainImage />
      <Element name="services">
        <Services />
      </Element>
      <Element name="about-us">
        <AboutUs />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="contacts">
        <Footer screenWidth={screenWidth} />
      </Element>
    </div>
  );
}

export default App;
