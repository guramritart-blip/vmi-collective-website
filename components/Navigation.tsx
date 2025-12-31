"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        </div>
      </div>
    </nav>
  );
}

