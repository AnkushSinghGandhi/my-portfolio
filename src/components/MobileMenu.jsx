import { Link, useLocation } from "react-router-dom";

export default function MobileMenu({ setIsMenuOpen, links }) {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-gray-100 z-40 transition-all duration-500">
      <div className="flex flex-col items-center gap-8">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl transition-all duration-300 font-medium tracking-tight uppercase ${isActive ? "text-purple-500" : "text-gray-300 hover:text-white"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <a
        href="mailto:ankushsinghgandhi@gmail.com"
        className="mt-8 px-8 py-2.5 bg-purple-600 text-white rounded-none font-medium tracking-tight uppercase text-sm"
      >
        Get in Touch
      </a>
    </div>
  );
}
