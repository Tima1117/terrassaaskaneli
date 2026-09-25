import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Atmosphere from "@/components/Atmosphere";
import Chef from "@/components/Chef";
import Services from "@/components/Services";
import WineShop from "@/components/WineShop";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Atmosphere />
      <Chef />
      <Services />
      <WineShop />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  );
}
