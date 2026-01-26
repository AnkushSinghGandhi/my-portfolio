import { Link, useLocation } from "react-router-dom";

export default function MobileMenu({ setIsMenuOpen, links }) {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-gray-100 z-40">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`text-2xl transition-colors duration-200 ${isActive ? "text-gray-700 font-bold" : "text-gray-100"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
