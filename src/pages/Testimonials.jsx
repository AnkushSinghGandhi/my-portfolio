import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
      <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
        <Navbar />
        <Testimonials isPage={true}/>
        <Footer />
      </div>
    );
}