import { useState, useEffect } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCollapsed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        collapsed || showMenu ? "bg-blue-700 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">My Portfolio</div>
        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8`}>
          <li>
            <a href="#about-me" className="hover:text-blue-300">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              showMenu ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              showMenu ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <ul className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <li>
            <a href="#about-me" className="block py-2 hover:text-blue-300">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 hover:text-blue-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
