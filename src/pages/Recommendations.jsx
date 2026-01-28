import Recommendations from "@/components/Recommendations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RecommendationsPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
            <Navbar />
            <Recommendations isPage={true} />
            <Footer />
        </div>
    );
}
