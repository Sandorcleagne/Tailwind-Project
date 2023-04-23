import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Rockets />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
