import Communities from "@/components/Communities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
      <Navbar />
      <Communities isPage={true} />
      <Footer />
    </div>
  );
}
