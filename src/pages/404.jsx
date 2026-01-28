import Custom404 from "@/components/404"; // rename your file if needed
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
      <Navbar />
      <Custom404 />
      <Footer />
    </div>
  );
}
