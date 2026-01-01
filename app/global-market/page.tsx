import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const globalMarketInfo = content.additionalServices.find(s => s.title === "Global Market");

export default function GlobalMarketPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16 sm:pt-20">
      <section className="relative py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80"
            alt="Global Market background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🌍</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">Global Market</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] leading-relaxed px-2">
            Expand your reach and succeed in international markets
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151515] border border-[#252525] rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">About Global Market</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#b0b0b0] leading-relaxed mb-6 sm:mb-8">
              {globalMarketInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Market Entry Strategy</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Develop comprehensive strategies for entering new international markets.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">International Business Development</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Build and expand your business presence across global markets.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Cross-Cultural Training</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Prepare your team for success in diverse cultural environments.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Global Compliance</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Navigate international regulations and compliance requirements.</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#252525]">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] hover:from-[#00b8e6] hover:to-[#0052cc] text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

