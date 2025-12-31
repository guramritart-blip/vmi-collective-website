import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const creativeInfo = content.additionalServices.find(s => s.title === "Creative");

export default function CreativePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 pt-16 sm:pt-20">
      <section className="relative py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
            alt="Creative background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🎨</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">Creative</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-pink-100 leading-relaxed px-2">
            Artistic vision meets strategic thinking to deliver compelling brand experiences
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Creative</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              {creativeInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-pink-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Brand Identity Design</h3>
                <p className="text-sm sm:text-base text-gray-600">Create distinctive brand identities that resonate with your target audience and reflect your values.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Digital Content Creation</h3>
                <p className="text-sm sm:text-base text-gray-600">Engaging digital content including graphics, videos, and interactive media.</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Multimedia Production</h3>
                <p className="text-sm sm:text-base text-gray-600">Professional video, audio, and multimedia production services.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Creative Strategy</h3>
                <p className="text-sm sm:text-base text-gray-600">Strategic creative planning to ensure your brand message is impactful and memorable.</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

