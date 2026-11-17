
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Products from "../components/sections/Products";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Process />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;






