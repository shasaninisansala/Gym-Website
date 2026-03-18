import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero ";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Trainers from "../components/home/Trainers";
import Membership from "../components/home/Membership";
import Testimonials from "../components/home/Testimonial";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Trainers />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}