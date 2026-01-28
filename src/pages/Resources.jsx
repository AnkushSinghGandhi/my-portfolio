import Resources from "@/components/Resources";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
            <Navbar />
            <Resources isPage={true} />
            <Footer />
        </div>
    );
}
