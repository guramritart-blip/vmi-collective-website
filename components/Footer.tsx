import Link from "next/link";
import { content } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <Logo textColor="text-white" />
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The Enabling Bridge between Skills, Markets & Opportunities
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Empowering individuals and businesses through modern digital solutions, industry expertise, and sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/#hero" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#additional-services" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1">
                  Divisions
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Divisions</h4>
            <ul className="space-y-2 sm:space-y-3">
              {content.additionalServices.map((service, index) => {
                const slugs = ["martech", "creative", "learning", "human-resource", "investment", "global-market"];
                return (
                  <li key={index}>
                    <Link
                      href={`/${slugs[index]}`}
                      className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1"
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm leading-relaxed">{content.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${content.contact.email}`} className="text-xs sm:text-sm hover:text-blue-400 transition-colors duration-300 break-all">
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm hover:text-blue-400 transition-colors duration-300">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs sm:text-sm">{content.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} VMI Collective. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm text-gray-400">
                Privacy Policy
              </span>
              <span className="text-xs sm:text-sm text-gray-400">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

