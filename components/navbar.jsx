"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group z-10"
            >
              <img
                src="/leqallogo.jpg"
                alt="Leqal Logo"
                className="h-10 w-auto"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#B8956A]"
                    : "text-white hover:text-[#B8956A]"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#B8956A]"
                    : "text-white hover:text-[#B8956A]"
                }`}
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#B8956A]"
                    : "text-white hover:text-[#B8956A]"
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center shadow-md"
              >
                Appointment Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden transition-colors p-2 z-10 ${
                isScrolled
                  ? "text-gray-900 hover:text-[#B8956A]"
                  : "text-white hover:text-[#B8956A]"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-900 hover:text-[#B8956A] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-100 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-900 hover:text-[#B8956A] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-100 text-left"
                >
                  Services
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-900 hover:text-[#B8956A] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-100 text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center shadow-md"
                >
                  Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
