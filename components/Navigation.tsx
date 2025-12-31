"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    }
    // If not on home page, Link component will handle navigation
  };

  // Determine if nav should be transparent (only on home page when not scrolled)
  const shouldBeTransparent = isHomePage && !isScrolled;
  const navBgClass = shouldBeTransparent 
    ? "bg-transparent py-6" 
    : "bg-white/95 backdrop-blur-md shadow-lg py-4";
  const textColorClass = shouldBeTransparent ? "text-white" : "text-gray-900";
  const linkColorClass = shouldBeTransparent 
    ? "text-white hover:text-blue-200" 
    : "text-gray-700 hover:text-blue-600";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo 
            textColor={shouldBeTransparent ? "text-white" : "text-gray-900"}
            className="transition-all duration-300"
          />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              shouldBeTransparent 
                ? "text-white hover:bg-white/10" 
                : "text-gray-900 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("hero")}
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("additional-services")}
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Divisions
                </button>
                <Link
                  href="/articles"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Articles
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-6 py-3 rounded-xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                    shouldBeTransparent
                      ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-xl border-2 border-white/30"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg"
                  }`}
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/#hero"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Services
                </Link>
                <Link
                  href="/#additional-services"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Divisions
                </Link>
                <Link
                  href="/articles"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Articles
                </Link>
                <Link
                  href="/#contact"
                  className={`font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 ${linkColorClass}`}
                >
                  Contact
                </Link>
                <Link
                  href="/#contact"
                  className={`px-6 py-3 rounded-xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-110 hover:shadow-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg`}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ top: "72px" }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => {
                      scrollToSection("hero");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("additional-services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Divisions
                  </button>
                  <Link
                    href="/articles"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Articles
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border-2 border-white/30 transition-all"
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/#hero"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#additional-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Divisions
                  </Link>
                  <Link
                    href="/articles"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Articles
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-blue-200 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border-2 border-white/30 transition-all"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

