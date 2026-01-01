import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const learningInfo = content.additionalServices.find(s => s.title === "Learning");

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16 sm:pt-20">
      <section className="relative py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
            alt="Learning background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors mb-4 sm:mb-6"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">📚</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">Learning</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] leading-relaxed px-2">
            Comprehensive learning solutions that empower individuals and organizations
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151515] border border-[#252525] rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">About Learning</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#b0b0b0] leading-relaxed mb-6 sm:mb-8">
              {learningInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Curriculum Development</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Custom curriculum design tailored to your learning objectives and audience needs.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">E-Learning Platforms</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Implementation of modern e-learning platforms for scalable online education.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Instructor-Led Training</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Professional instructor-led programs for hands-on, interactive learning experiences.</p>
              </div>
              <div className="bg-[#111111] border border-[#252525] rounded-xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Blended Learning</h3>
                <p className="text-sm sm:text-base text-[#b0b0b0]">Combining online and offline learning methods for optimal knowledge retention.</p>
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

