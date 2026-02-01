import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, Globe, ShieldCheck, ChevronRight, User, Hash, MessageSquare } from "lucide-react";
import Confetti from "react-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSf0_Kdf9imuayC5leicxUcNStUpY7xWqJt1O6AQeV40fd4xiw/formResponse";

    const data = new FormData();
    data.append("entry.441722236", formData.name);
    data.append("entry.1993096300", formData.email);
    data.append("entry.983352913", formData.phone);
    data.append("entry.1094250910", formData.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      // Simulate connection establishment delay
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 1500);
    } catch (err) {
      setIsSubmitting(false);
      console.error("Form submit error:", err);
      alert("❌ FAIL_STATUS: Unable to establish connection to system core.");
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 sm:px-12 lg:px-20 bg-white text-neutral-900 font-sans overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-neutral-300 pb-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono text-blue-600 tracking-[0.2em] uppercase">system.comm_protocol</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-black">
              CONNECT INTERFACE
            </h1>
            <p className="text-neutral-500 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl">
              // INITIALIZING SECURE COMMUNICATION CHANNEL...
              PLEASE TRANSMIT YOUR REQUEST PACKET BELOW TO ESTABLISH A DIRECT LINK WITH THE CORE SYSTEMS.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <div className="space-y-1">
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter uppercase">status: pending_connection</p>
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter uppercase">access: anonymous_sync</p>
              <p className="text-gray-600 text-[9px] font-mono tracking-tighter uppercase">id: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - System Access Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Available_Access_Points</h3>

              <AccessPoint
                icon={Mail}
                label="DIRECT_RELAY"
                value="ankushsinghgandhi@gmail.com"
                link="mailto:ankushsinghgandhi@gmail.com"
              />
              <AccessPoint
                icon={Phone}
                label="STATION_VOICE"
                value="+91 9529639652"
                link="tel:+919529639652"
              />
              <AccessPoint
                icon={Globe}
                label="BASE_LOCATION"
                value="Remote_Sync [India]"
              />
            </div>

            <div className="mt-12 p-8 border border-neutral-800 bg-neutral-900 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-20 h-20" />
              </div>
              <h4 className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-widest">Protocol Intelligence</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">
                // System identifies and prioritizes high-impact project requests.
                Average response latency: &lt; 24h.
              </p>
            </div>
          </motion.div>

          {/* Right - Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-neutral-900 border border-neutral-800 p-8 sm:p-12 relative shadow-2xl"
                >
                  <AnimatePresence>
                    {isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center flex-col gap-6 text-center p-8"
                      >
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: [8, 24, 8],
                                opacity: [0.3, 1, 0.3]
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                              className="w-1 bg-blue-500"
                            />
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-1">
                            establishing_connection...
                          </p>
                          <p className="text-[10px] text-gray-600 font-mono uppercase italic">
                            // syncing data packets: {formData.name.substring(0, 3).toUpperCase()}_LOG
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid md:grid-cols-2 gap-8">
                    <SystemInput
                      icon={User}
                      label="SENDER_IDENTITY"
                      name="name"
                      placeholder="[NAME_STRING]"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <SystemInput
                      icon={Mail}
                      label="ENCRYPTED_MAIL_ID"
                      name="email"
                      type="email"
                      placeholder="[USER@DOMAIN.NET]"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <SystemInput
                    icon={Hash}
                    label="CONTACT_LINK_REF"
                    name="phone"
                    placeholder="[+XX XXXXXXXXXX]"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      <MessageSquare className="w-3 h-3" /> DATA_PACKET_CONTENT
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="[ENTER_MESSAGE_STREAMS...]"
                      required
                      className="w-full bg-black border border-neutral-800 px-4 py-4 text-sm font-mono text-white focus:border-blue-500 outline-none transition-colors placeholder:text-gray-500 rounded-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center gap-3 bg-white text-black py-5 font-bold tracking-widest text-sm hover:bg-transparent hover:text-white border border-white transition-all duration-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT_PACKET</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-neutral-700" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-neutral-700" />
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neutral-900 border border-neutral-800 p-12 text-center relative flex flex-col items-center justify-center min-h-[500px] shadow-2xl"
                >
                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-8 rotate-45">
                    <ShieldCheck className="w-8 h-8 text-blue-400 -rotate-45" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 tracking-tighter">CONNECTION ESTABLISHED</h3>
                  <p className="text-gray-500 font-mono text-xs max-w-sm mx-auto mb-10 uppercase tracking-[0.2em] leading-relaxed">
                    Packet integrated into system queue. Expect relay response within protocol timeframe.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-mono text-blue-400 border-b border-blue-500/30 pb-0.5 hover:text-blue-300 transition-colors uppercase tracking-widest"
                  >
                    // Terminate and Reset
                  </button>

                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={200}
                    colors={["#3b82f6", "#60a5fa", "#93c5fd"]}
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

function AccessPoint({ icon: Icon, label, value, link }) {
  const Content = (
    <div className="group flex items-center gap-5 p-4 bg-neutral-900 border border-neutral-800 hover:bg-black hover:border-blue-500/50 transition-all shadow-md">
      <div className="p-3 bg-neutral-800 border border-neutral-700 text-white group-hover:text-blue-400 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link} className="block">{Content}</a> : Content;
}

function SystemInput({ icon: Icon, label, name, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-[10px] font-mono text-gray-300 uppercase tracking-widest">
        <Icon className="w-3 h-3 text-blue-400" /> {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-black border border-neutral-800 px-4 py-3.5 text-sm font-mono text-white focus:border-blue-500 outline-none transition-colors placeholder:text-gray-500 rounded-none shadow-none"
      />
    </div>
  );
}
