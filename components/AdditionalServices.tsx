import { content } from "@/lib/content";
import Image from "next/image";

const additionalServiceImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // MarTech - analytics/charts
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", // Creative - design/creative
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", // Learning - education/books
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // Human Resource - team/people
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80", // Investment - finance/money
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", // Global Market - world/global
];

const serviceSlugs: { [key: string]: string } = {
  "MarTech": "martech",
  "Creative": "creative",
  "Learning": "learning",
  "Human Resource": "human-resource",
  "Investment": "investment",
  "Global Market": "global-market",
};

export default function AdditionalServices() {
  return (
    <section id="additional-services" className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#151515] border border-[#252525] rounded-full shadow-md">
            <span className="text-xs sm:text-sm font-bold text-[#00d4ff] uppercase tracking-wider">Our Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
            Comprehensive <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-2">
            Explore our specialized divisions offering expertise across key business domains
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {content.additionalServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#151515] border border-[#252525] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:border-[#00d4ff]/30"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#0066ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-[#0066ff]/5 transition-all duration-700 z-0"></div>
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={additionalServiceImages[index]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/50"></div>
                <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/30 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-1 w-20 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">{service.title}</h3>
                </div>
              </div>
              <div className="relative p-6 sm:p-8 bg-[#151515]">
                <p className="text-sm sm:text-base md:text-lg text-[#b0b0b0] leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                <a
                  href={`/${serviceSlugs[service.title]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] hover:from-[#00b8e6] hover:to-[#0052cc] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:gap-3"
                >
                  Discover More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

