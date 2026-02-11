import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Archive", path: "/library" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Network", path: "/communities" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 
      bg-black/70 backdrop-blur-md border-b border-white/5 transition-all duration-300 z-50`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-white/80 transition"
      >
        warriorwhocodes<span className="text-purple-500">.</span><span className="text-white/50">com</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-3 lg:gap-5 text-[10px] lg:text-[13px] font-normal tracking-tight text-gray-400 uppercase">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative px-1 py-2 transition-all duration-300 ${isActive ? "text-white" : "hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Email Button */}
      <a href="mailto:ankushsinghgandhi@gmail.com" className="hidden lg:block">
        <Button
          variant="outline"
          className="bg-purple-600/10 text-purple-400 border-purple-500/20 hover:bg-purple-600 hover:text-white rounded-none
          backdrop-blur-sm px-6 py-2 transition-all duration-500 font-medium text-xs tracking-wide border uppercase"
        >
          Contact Me
        </Button>
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-100 z-[60] p-2 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Component */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} links={links} />}
    </nav>
  );
}
