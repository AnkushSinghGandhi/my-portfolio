import { Linkedin, Github, Twitter, Mail, Activity, Terminal, Instagram } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-neutral-900 text-gray-500 px-6 md:px-12 py-16 overflow-hidden snap-start">
      {/* Subtle Scanline Overlay specifically for Footer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Section 01: System Identity */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-bold text-white tracking-tighter">
                WARRIOR_SYSTEMS <span className="text-neutral-700">v4.0</span>
              </h3>
            </div>
            <p className="text-xs font-mono leading-relaxed max-w-xs uppercase tracking-tight text-neutral-400">
              // SCALING IDEAS INTO DISTRIBUTED SYSTEMS.
              CORE_ARCHITECT: ANKUSH SINGH GANDHI.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800">
                <Activity className="w-3 h-3 text-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">System_Status: Online</span>
              </div>
            </div>
          </div>

          {/* Section 02: Access Modules */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-8">Access_Modules</h4>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <li><Link to="/" className="hover:text-white transition-colors">{" >> "} Home</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">{" >> "} Experience</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{" >> "} Projects</Link></li>
              <li><Link to="/library" className="hover:text-white transition-colors">{" >> "} Archive</Link></li>
            </ul>
          </div>

          {/* Section 03: System Entry Points */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-8">Entry_Points</h4>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{" >> "} ABOUT_ME</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{" >> "} Contact</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">{" >> "} CLIENT_RECORDS</Link></li>
              <li><Link to="/communities" className="hover:text-white transition-colors">{" >> "} NETWORK</Link></li>
            </ul>
          </div>

          {/* Section 04: External Relays */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-8">External_Relays</h4>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/ankushsinghgandhi/" />
              <SocialLink icon={Github} href="https://github.com/AnkushSinghGandhi" />
              <SocialLink icon={FaDev} href="https://dev.to/ankushsinghgandhi" isIcon={true} />
              <SocialLink icon={FaUpwork} href="https://www.upwork.com/freelancers/~015ea2207bd0b0f893" isIcon={true} />
              <SocialLink icon={Twitter} href="https://x.com/ankushsgandhi" />
              <SocialLink icon={Instagram} href="https://instagram.com/warriorwhocodes" />
              <SocialLink icon={Mail} href="mailto:ankushsinghgandhi@gmail.com" />
            </div>
            <div className="p-4 bg-neutral-900 border border-neutral-800">
              <p className="text-[10px] font-mono text-neutral-400 uppercase leading-tight">
                 // Direct_Sync: ankushsinghgandhi@gmail.com <br />
                 // Station_Voice: +91 9529639652
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Versioning */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            © {new Date().getFullYear()} WARRIOR_WHO_CODES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-[9px] font-mono text-neutral-500">
            <span>ENCRYPTION: SH256</span>
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <span>LOC: 28.6139° N, 77.2090° E</span>
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <span>BUILD: 220126_V4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, isIcon = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 hover:border-blue-500 group transition-all hover:bg-neutral-800"
    >
      <Icon className={`w-4 h-4 text-white group-hover:text-blue-400 transition-colors`} />
    </a>
  )
}
