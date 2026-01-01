import { content } from "@/lib/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#0a0a0a] text-white py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/95"></div>
      </div>
      
      {/* Animated Background Elements - More subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00d4ff]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0066ff]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit mx-auto">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase">Empowering Growth & Innovation</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight px-2">
            <span className="block text-white mb-2 sm:mb-3">
              The Enabling <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Bridge</span>
            </span>
            <span className="block text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              between Skills, Markets & Opportunities
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#b0b0b0] leading-relaxed max-w-2xl mx-auto px-2">
            {content.hero.introduction}
          </p>
        </div>
      </div>
      
      {/* Gradient blend transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
    </section>
  );
}

