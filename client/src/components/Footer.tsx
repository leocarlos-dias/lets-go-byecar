import React from "react";
import { useTheme } from "../hooks/useTheme";


const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  const bgClass = darkMode ? "bg-gray-900" : "bg-yellow-200";
  const textClass = darkMode ? "text-white" : "text-gray-900";
  const hoverTextClass = darkMode ? "hover:text-gray-600" : "hover:text-gray-500";

  return (
    <footer className={`${bgClass} ${textClass} py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            MeuSite
          </div>
          <ul className="flex space-x-4">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/leonardocsdias/" className={`${hoverTextClass} text-gray-400 transition duration-300 ease-in-out`}>
                Link 1
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/leocarlos-dias" className={`${hoverTextClass} text-gray-400 transition duration-300 ease-in-out`}>
                Link 2
              </a>
            </li>
            <li>
              <a target="_blank" href="https://leocarlos-dias.github.io/personal-portfolio/" className={`${hoverTextClass} text-gray-400 transition duration-300 ease-in-out`}>
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center">
          © {new Date().getFullYear()} MeuSite. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;