import { content } from "@/lib/content";
import Image from "next/image";

const serviceImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", // Skilling - education/training
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", // Learning - learning/education
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", // Standards - quality/standards
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", // Certification - certificate/award
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", // Innovation - tech/innovation
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#151515] border border-[#252525] rounded-full shadow-md">
            <span className="text-xs sm:text-sm font-bold text-[#00d4ff] uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
            Our <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive solutions designed to bridge skills, markets, and opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#151515] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-[#252525] hover:border-[#00d4ff]/30"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#0066ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-[#0066ff]/5 transition-all duration-700 z-0"></div>
              
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={serviceImages[index]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/40"></div>
                <div className="absolute top-5 left-5 w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/30 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-2xl font-black text-white">{index + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full mb-3 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
              <div className="relative p-6 sm:p-8 bg-[#151515]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#0066ff] group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#b0b0b0] leading-relaxed group-hover:text-[#ffffff] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

