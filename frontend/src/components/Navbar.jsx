
import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import React from "react";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Create Note", path: "/create" },
  ];

  return (
    <nav className="backdrop-blur-md bg-gray-900/80 text-white shadow-md sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <BookOpen className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Arun's Note
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm md:text-base font-medium transition duration-200 ${
                location.pathname === link.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.name}
              {/* Active underline */}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full animate-slideIn"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
