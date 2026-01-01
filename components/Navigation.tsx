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

  // Determine if nav should be transparent (only on home page when not scrolled, and not on mobile)
  const shouldBeTransparent = isHomePage && !isScrolled;
  // On mobile, always show background for better visibility
  const navBgClass = shouldBeTransparent 
    ? "bg-[#0a0a0a]/95 md:bg-transparent backdrop-blur-md py-4 md:py-6 border-b md:border-b-0 border-[#252525]" 
    : "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg py-4 border-b border-[#252525]";
  const textColorClass = shouldBeTransparent ? "text-white" : "text-white";
  const linkColorClass = shouldBeTransparent 
    ? "text-white hover:text-[#00d4ff]" 
    : "text-[#b0b0b0] hover:text-[#00d4ff]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo 
            textColor="text-white"
            className="transition-all duration-300"
          />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
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
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed left-0 right-0 bottom-0 bg-[#0a0a0a] backdrop-blur-md transition-transform duration-300 z-40 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ top: "72px" }}
          >
            <div className="flex flex-col p-6 pt-8 space-y-4 overflow-y-auto" style={{ height: "calc(100vh - 72px)" }}>
              {isHomePage ? (
                <>
                  <button
                    onClick={() => {
                      scrollToSection("hero");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("additional-services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Divisions
                  </button>
                  <Link
                    href="/articles"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Articles
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/#hero"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#additional-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Divisions
                  </Link>
                  <Link
                    href="/articles"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Articles
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-bold text-lg py-3 hover:text-[#00d4ff] transition-colors"
                  >
                    Contact
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

