import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
      <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
        <Navbar />
        <AboutMe />
        <Footer />
      </div>
    );
}