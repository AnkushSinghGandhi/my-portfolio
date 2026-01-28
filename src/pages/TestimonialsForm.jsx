import TestimonialsForm from "@/components/TestimonialsForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TestimonialPage() {
  return (
      <div className="min-h-screen bg-black text-white font-sans text-lg leading-relaxed">
        <Navbar />
        <TestimonialsForm />
        <Footer />
      </div>
    );
}
