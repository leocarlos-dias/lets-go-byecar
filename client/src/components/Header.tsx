import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const textClass = darkMode ? "text-gray-300" : "text-gray-800";
  const hoverTextClass = darkMode ? "hover:text-gray-400" : "hover:text-gray-600";
  const bgClass = darkMode ? "bg-gray-900" : "bg-yellow-200";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className={`${bgClass} ${textClass} py-4`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between ">
          <div className="text-xl font-bold">
            <NavLink to="/" className={`${hoverTextClass} transition duration-300 ease-in-out`}>
              MeuSite
            </NavLink>
          </div>
          <div className="flex items-center">
            <div
              onClick={toggleTheme}
              className={`relative inline-block w-10 align-middle select-none cursor-pointer transition duration-200 ease-in rounded-3xl ${darkMode ? "bg-gray-800/50" : "bg-yellow-300/50"}`}>
              <span
                className={`block h-8 w-12 rounded-full overflow-hidden transition-colors duration-200 ease-in ${textClass}`}>
                <span
                  className={`absolute inset-y-0 left-0 h-8 w-8 rounded-full transition-all duration-200 transform ${darkMode ? "translate-x-4 bg-gray-300" : "translate-x-0 bg-yellow-400"}`}
                >
                  <span className={"material-symbols-outlined p-1 text-gray-800"}>
                    {darkMode ? "dark_mode" : "light_mode"}
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="lg:hidden relative">
            <button
              className={`h-6 w-6 flex flex-col justify-between transform transition-transform ${menuOpen ? "rotate-180" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-6 h-1 bg-current rounded ${menuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`w-6 h-1 bg-current rounded ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-1 bg-current rounded ${menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
          <ul className={`flex lg:flex ${menuOpen ? "flex absolute top-16 left-0 backdrop-blur-sm w-full z-10 py-4 px-4" : "hidden"} lg:space-x-4 space-y-2 lg:space-y-0 flex-col lg:flex-row`}>
            <li><NavLink to="/" className={`${hoverTextClass} transition duration-300 ease-in-out`}>Página 1</NavLink></li>
            <li><NavLink to="/page2" className={`${hoverTextClass} transition duration-300 ease-in-out`}>Página 2</NavLink></li>
            <li><NavLink to="/page3" className={`${hoverTextClass} transition duration-300 ease-in-out`}>Página 3</NavLink></li>
            <li><NavLink to="/page4" className={`${hoverTextClass} transition duration-300 ease-in-out`}>Página 4</NavLink></li>
          </ul>
        </nav>
      </div >
    </header >
  );
}

export default Header;