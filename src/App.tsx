import { useEffect } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Vehicles from "./components/Vehicles";
import Stage from "./components/Stage";
import Calculator from "./components/Calculator";
import Why from "./components/Why";
import Reviews from "./components/Reviews";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  // Scroll reveal animasyonu
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Vehicles />
        <Stage />
        <Calculator />
        <Why />
        <Reviews />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
      <MusicPlayer />
    </>
  );
}
