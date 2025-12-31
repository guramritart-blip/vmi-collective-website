import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const globalMarketInfo = content.additionalServices.find(s => s.title === "Global Market");

export default function GlobalMarketPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 pt-20">
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80"
            alt="Global Market background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">🌍</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Market</h1>
          <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed">
            Expand your reach and succeed in international markets
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Global Market</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {globalMarketInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Entry Strategy</h3>
                <p className="text-gray-600">Develop comprehensive strategies for entering new international markets.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">International Business Development</h3>
                <p className="text-gray-600">Build and expand your business presence across global markets.</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Cultural Training</h3>
                <p className="text-gray-600">Prepare your team for success in diverse cultural environments.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Compliance</h3>
                <p className="text-gray-600">Navigate international regulations and compliance requirements.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

