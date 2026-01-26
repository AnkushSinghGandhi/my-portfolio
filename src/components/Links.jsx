import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, FileText, Briefcase, Globe, ChevronRight, Binary, ShieldCheck, Instagram } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import SponsorButtons from "@/components/SponsorButtons";

export default function Links() {
  const links = [
    {
      id: "IFACE_01",
      name: "WARRIOR_SYSTEMS",
      url: "https://warriorwhocodes.com/",
      icon: Globe,
      type: "CORE_PLATFORM",
      color: "border-blue-500",
      description: "Primary operational interface for scaling ideas into systems."
    },
    {
      id: "IFACE_02",
      name: "SCRIPT_SAINT",
      url: "http://scriptsaint.com/",
      icon: Briefcase,
      type: "CUSTOM_SOLUTIONS",
      color: "border-purple-500",
      description: "Production of custom web solutions and prebuilt modules."
    },
    {
      id: "IFACE_03",
      name: "LINKEDIN_RELAY",
      url: "https://www.linkedin.com/in/ankushsinghgandhi/",
      icon: Linkedin,
      type: "PROFESSIONAL_SYNC",
      color: "border-blue-600",
      description: "Direct professional communication and networking link."
    },
    {
      id: "IFACE_04",
      name: "GITHUB_ARCHIVE",
      url: "https://github.com/AnkushSinghGandhi",
      icon: Github,
      type: "CODE_REPOSITORY",
      color: "border-gray-500",
      description: "Public source repositories and versioned system logs."
    },
    {
      id: "IFACE_05",
      name: "DEV_TO_LOGS",
      url: "https://dev.to/ankushsinghgandhi",
      icon: FaDev,
      type: "TECHNICAL_WIRITING",
      color: "border-red-500",
      description: "Deep-dives into system architecture and development logs."
    },
    {
      id: "IFACE_06",
      name: "UPWORK_STATION",
      url: "https://www.upwork.com/freelancers/~015ea2207bd0b0f893",
      icon: FaUpwork,
      type: "SERVICE_STATION",
      color: "border-green-600",
      description: "Industrial-grade project collaboration and hire interface."
    },
    {
      id: "IFACE_07",
      name: "X_DOT_COM",
      url: "https://x.com/ankushsgandhi",
      icon: Twitter,
      type: "SOC_TRANSMISSION",
      color: "border-blue-400",
      description: "Real-time updates and ecosystem transmissions."
    },
    {
      id: "IFACE_07_B",
      name: "INSTAGRAM_FEED",
      url: "https://instagram.com/warriorwhocodes",
      icon: Instagram,
      type: "VISUAL_LOGS",
      color: "border-pink-500",
      description: "Visual documentation of coding lifestyle and setup."
    },
    {
      id: "IFACE_08",
      name: "RESUME_CORE",
      url: "/resume.pdf",
      icon: FileText,
      type: "DOWNLOADABLE_SPEC",
      color: "border-purple-600",
      description: "Complete technical specifications and service history.",
      download: true
    }
  ];

  return (
    <section className="min-h-screen bg-black text-gray-100 px-6 py-12 sm:py-20 flex items-center justify-center overflow-hidden relative">
      {/* Grid Atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full">
        {/* Header - Industrial ID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Technical Profile Container */}
          <div className="relative inline-block mb-10 group">
            <div className="w-28 h-28 bg-neutral-900 border border-neutral-800 p-2 relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white relative">
                ASG
                {/* HUD element */}
                <div className="absolute inset-0 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-500" />
              </div>
              {/* ID Bracket */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-500" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500" />
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-2 -right-2 bg-black border border-neutral-800 px-2 py-0.5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Authorized</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter mb-4 text-white uppercase italic">
            ANKUSH_SYNC_INDEX
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
               // Direct_System_Relays
            </p>
          </div>
        </motion.div>

        {/* Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 p-4 bg-neutral-900/40 border border-neutral-800 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-blue-500 opacity-50" />
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Protocol validation active</span>
          </div>
          <SponsorButtons />
        </motion.div>

        {/* Primary Site Link */}
        <motion.a
          href="https://warriorwhocodes.com"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="group flex items-center justify-center gap-3 w-full p-4 mb-8 bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 rounded-lg"
        >
          <Globe className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-bold text-white uppercase tracking-widest">Visit Primary Portfolio</span>
          <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Interface Grid */}
        <div className="space-y-4">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const colorBase = link.color.replace('border-', '');

            return (
              <motion.a
                key={index}
                href={link.url}
                target={link.download ? "_self" : "_blank"}
                rel="noopener noreferrer"
                download={link.download}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (index * 0.05) + 0.3 }}
                className={`group relative flex items-center gap-5 bg-neutral-900 border border-neutral-800 hover:border-${colorBase}/50 p-5 transition-all duration-300`}
              >
                {/* Link Type Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-${colorBase} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* ID Tag */}
                <span className={`absolute top-2 right-3 text-[8px] font-mono text-neutral-800 group-hover:text-${colorBase}/30 transition-colors`}>
                  {link.id}
                </span>

                {/* Icon Core */}
                <div className={`w-12 h-12 flex-shrink-0 bg-neutral-800/50 border border-neutral-700 flex items-center justify-center group-hover:bg-${colorBase} group-hover:border-${colorBase} group-hover:scale-105 transition-all duration-300`}>
                  <IconComponent className={`w-5 h-5 text-${colorBase} group-hover:text-white transition-colors`} />
                </div>

                {/* Info Hub */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-sm font-bold text-white group-hover:text-${colorBase} transition-colors tracking-tight uppercase`}>
                      {link.name}
                    </h3>
                    <div className="h-[1px] w-4 bg-neutral-800" />
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-tighter italic">
                      {link.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    // {link.description}
                  </p>
                </div>

                {/* Action Reveal */}
                <ChevronRight className={`w-4 h-4 text-neutral-800 group-hover:text-${colorBase} group-hover:translate-x-1 transition-all`} />
              </motion.a>
            );
          })}
        </div>

        {/* System Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12 flex flex-col items-center gap-3"
        >
          <Binary className="w-4 h-4 text-neutral-900" />
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-800">
            v4.0.0_DIRECT_INDEX_ARCHIVE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
