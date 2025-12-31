import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const hrInfo = content.additionalServices.find(s => s.title === "Human Resource");

export default function HumanResourcePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 pt-16 sm:pt-20">
      <section className="relative py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Human Resource background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">👥</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">Human Resource</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-100 leading-relaxed px-2">
            Strategic HR solutions to build high-performing teams and positive workplace cultures
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Human Resource</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              {hrInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-orange-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Talent Acquisition</h3>
                <p className="text-sm sm:text-base text-gray-600">Strategic recruitment and hiring processes to attract top talent.</p>
              </div>
              <div className="bg-red-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Employee Development</h3>
                <p className="text-sm sm:text-base text-gray-600">Comprehensive programs to develop and upskill your workforce.</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Performance Management</h3>
                <p className="text-sm sm:text-base text-gray-600">Systems and processes to track and improve employee performance.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">HR Technology</h3>
                <p className="text-sm sm:text-base text-gray-600">Implementation of modern HR tech solutions for efficiency and insights.</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

