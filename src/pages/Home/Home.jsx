import Navbar from "../../components/Navigation";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;