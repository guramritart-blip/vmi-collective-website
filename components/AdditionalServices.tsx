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
    <section id="additional-services" className="py-24 md:py-32 px-4 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/25 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full shadow-md">
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Our Divisions</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Comprehensive <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our specialized divisions offering expertise across key business domains
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.additionalServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-100/50"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:via-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-700 z-0"></div>
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={additionalServiceImages[index]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-indigo-900/70 to-purple-900/50"></div>
                <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/30 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">{service.title}</h3>
                </div>
              </div>
              <div className="relative p-8 bg-white">
                <p className="text-gray-600 leading-relaxed text-lg mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <a
                  href={`/${serviceSlugs[service.title]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:gap-3"
                >
                  Discover More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

