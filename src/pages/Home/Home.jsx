import Navbar from "../../components/Navigation";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;