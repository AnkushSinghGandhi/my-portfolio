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
    { name: "CLIENT_RECORDS", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "ABOUT_ME", path: "/about" },
    { name: "NETWORK", path: "/communities" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 
      bg-black/70 backdrop-blur-lg transition-all duration-300 z-50`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xl md:text-2xl font-semibold tracking-wide text-white hover:text-gray-300 transition"
      >
        warriorwhocodes<span className="text-gray-400">.com</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-0 text-xs font-mono uppercase tracking-wider text-gray-500">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`flex items-center px-4 py-3 transition-all duration-300 font-black ${isActive
                  ? "text-white"
                  : "hover:text-white"
                  }`}
              >
                <span className={`mr-1.5 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} text-purple-500`}>[</span>
                {link.name}
                <span className={`ml-1.5 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} text-purple-500`}>]</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Email Button */}
      <a href="mailto:ankushsinghgandhi@gmail.com" className="hidden sm:block">
        <Button
          className="bg-neutral-900/50 text-gray-400 border border-neutral-800 hover:border-purple-500 hover:text-white rounded-none
          backdrop-blur-sm px-6 py-2 transition-all duration-300 font-mono text-[10px] tracking-widest uppercase"
        >
          [ Email_Me ]
        </Button>
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-100 z-50"
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
