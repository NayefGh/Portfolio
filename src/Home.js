import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TopBtn from "./components/TopBtn";
import { useEffect } from "react";
import Navbar3 from "./components/Navbar3";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Navbar3/>
      <Intro />
      <Work />
      <About />
      <Contact />
      <TopBtn />
      <Footer />
    </div>
  );
};

export default Home;
