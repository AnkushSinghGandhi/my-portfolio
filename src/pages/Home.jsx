import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AboutMe from "@/components/HomeAbout";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import DevLibrary from "@/components/DevLibrary";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white text-black font-sans text-lg leading-relaxed">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects limit={9} />
      <Testimonials limit={6} />
      <DevLibrary />
      <FAQ />
      <Footer />
    </div>
  );
}
