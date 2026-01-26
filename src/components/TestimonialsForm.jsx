import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, ShieldCheck, Database, User, Mail, Briefcase, FileText, ChevronRight } from "lucide-react";
import Confetti from "react-confetti";
import CachedImage from "@/components/CachedImage";
import profilePic from "@/assets/images/profile.jpg";

export default function TestimonialsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    testimonial: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScZGz3RlVoiww0KLmPRGZICkwnPGw9A7owqIKtTlosTRde5fg/formResponse";

    const formBody = new URLSearchParams({
      "entry.466733": formData.name,
      "entry.1854453053": formData.email,
      "entry.370206935": formData.role,
      "entry.214661891": formData.testimonial,
    });

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      });

      // Simulate "ENCRYPTING LOG..." delay
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", role: "", testimonial: "" });
      }, 1500);
    } catch (error) {
      setIsSubmitting(false);
      alert("❌ SYSTEM_ERROR: Failed to transmit log to archive.");
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 sm:px-12 lg:px-20 bg-black text-white font-sans overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-800 pb-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono text-purple-400 tracking-[0.2em] uppercase text-xs">system.log_submission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              EXPERIENCE LOG
            </h1>
            <p className="text-gray-500 font-mono text-xs sm:text-sm leading-relaxed max-w-xl">
                            // AUTHORIZED FEEDBACK INTERFACE FOR SYSTEM VALIDATION.
              PLEASE SUBMIT YOUR EXPERIENCE LOG TO BE ARCHIVED IN THE SYSTEM CORE.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <div className="space-y-1">
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter">PROTOCOL: SECURE_FEEDBACK_v4</p>
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter">ENCRYPTION: AES_256_ENABLED</p>
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter">STATUS: ARCHIVIST_READY</p>
            </div>
          </div>
        </motion.div>

        {/* Form Dashboard */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info Module */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="p-6 bg-neutral-900/30 border border-neutral-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h3 className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-widest">Guideline 01</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Experience logs are verified manually. Please use clear, professional language for system archiving.
              </p>
            </div>

            <div className="p-6 bg-neutral-900/30 border border-neutral-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-widest">Guideline 02</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Submitted logs are displayed in the "TESTIMONIALS" module of the public dashboard.
              </p>
            </div>

            <div className="p-6 border-l-2 border-purple-500/30 bg-purple-500/5">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">active_archivist</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 overflow-hidden border border-neutral-700">
                  <CachedImage
                    src={profilePic}
                    alt="Archivist"
                    className="w-full h-full object-cover grayscale-[0.6]"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">ANKUSH_GANDHI</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-tighter italic">system_administrator</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Module */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-neutral-900/20 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden"
                >
                  {/* Submitting Overlay */}
                  <AnimatePresence>
                    {isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center flex-col gap-4 text-center p-6"
                      >
                        <div className="w-12 h-1 bg-neutral-800 relative overflow-hidden">
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-purple-500"
                          />
                        </div>
                        <p className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase animate-pulse">
                          transmitting_data_packet...
                        </p>
                        <p className="text-[10px] text-gray-600 font-mono uppercase italic">
                                                    // encrypting payload: AES_GCM_256
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Terminal Visuals */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neutral-800/50" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neutral-800/50" />

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* AUTHOR_NAME */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        <User className="w-3 h-3" /> AUTHOR_NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="[INPUT_NAME]"
                        required
                        className="w-full bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-sm font-mono text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-500 rounded-none"
                      />
                    </div>

                    {/* EMAIL_ID */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        <Mail className="w-3 h-3" /> EMAIL_ID
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="[INPUT_EMAIL]"
                        required
                        className="w-full bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-sm font-mono text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-500 rounded-none"
                      />
                    </div>
                  </div>

                  {/* DESIGNATION_ID */}
                  <div className="space-y-3 mb-8">
                    <label className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      <Briefcase className="w-3 h-3" /> DESIGNATION_ID
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="[TITLE @ ORGANIZATION]"
                      className="w-full bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-sm font-mono text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-500 rounded-none"
                    />
                  </div>

                  {/* LOG_DATA_ENTRY */}
                  <div className="space-y-3 mb-10">
                    <label className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      <FileText className="w-3 h-3" /> LOG_DATA_ENTRY
                    </label>
                    <textarea
                      name="testimonial"
                      value={formData.testimonial}
                      onChange={handleChange}
                      rows={5}
                      placeholder="[ENTER_EXPERIENCE_RECORDS...]"
                      required
                      className="w-full bg-neutral-900/50 border border-neutral-800 px-4 py-4 text-sm font-mono text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-500 rounded-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center gap-3 bg-white text-black py-4 font-bold tracking-widest text-sm hover:bg-transparent hover:text-white border border-white transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT_LOG_TO_ARCHIVE</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neutral-900/20 border border-neutral-800 p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/50" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/50" />

                  <div className="w-20 h-20 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-8">
                    <ShieldCheck className="w-10 h-10 text-purple-400" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 tracking-tight">TRANSMISSION SUCCESSFUL</h3>
                  <p className="text-gray-500 font-mono text-sm max-w-sm mx-auto mb-8 uppercase tracking-widest text-center">
                    Your experience log has been verified and encrypted. Synchronizing with system core...
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-purple-400 border-b border-purple-500/30 pb-1 hover:text-purple-300 transition-colors"
                  >
                                        // RETURN TO SECURITY_TERMINAL
                  </button>

                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={150}
                    colors={["#3b82f6", "#8b5cf6", "#ec4899"]}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
