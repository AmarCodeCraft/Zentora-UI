import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Button from "./Button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900/95 shadow-md border-b border-gray-800"
            : "bg-white/95 shadow-md border-b border-gray-100"
          : theme === "dark"
          ? "bg-gradient-to-r from-gray-900/80 to-gray-800/80"
          : "bg-gradient-to-r from-white/80 to-gray-50/80"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
            >
              Zentora
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/#components"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition font-medium"
            >
              Components
            </Link>
            <Link
              to="/#features"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition font-medium"
            >
              Features
            </Link>
            <Link
              to="/documentation"
              className={`transition font-medium ${
                location.pathname === "/documentation"
                  ? "text-primary dark:text-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
              }`}
            >
              Documentation
            </Link>
            <Link
              to="/pricing"
              className={`transition font-medium ${
                location.pathname === "/pricing"
                  ? "text-primary dark:text-primary-light"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
              }`}
            >
              Pricing
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/documentation">
              <Button
                variant="secondary"
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-primary-light"
                    : ""
                }`}
              >
                Documentation
              </Button>
            </Link>
            <Link to="/#get-started">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
              >
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "text-gray-200 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 rounded-xl shadow-lg ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/#components"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light py-2 transition font-medium"
              >
                Components
              </Link>
              <Link
                to="/#features"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light py-2 transition font-medium"
              >
                Features
              </Link>
              <Link
                to="/documentation"
                className={`py-2 transition font-medium ${
                  location.pathname === "/documentation"
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                }`}
              >
                Documentation
              </Link>
              <Link
                to="/pricing"
                className={`py-2 transition font-medium ${
                  location.pathname === "/pricing"
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                }`}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                <Link to="/documentation">
                  <Button
                    variant="secondary"
                    fullWidth
                    className={`${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-primary-light"
                        : ""
                    }`}
                  >
                    Documentation
                  </Button>
                </Link>
                <Link to="/#get-started">
                  <Button
                    variant="primary"
                    fullWidth
                    className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
