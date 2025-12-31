import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const learningInfo = content.additionalServices.find(s => s.title === "Learning");

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-20">
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
            alt="Learning background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Learning</h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
            Comprehensive learning solutions that empower individuals and organizations
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Learning</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {learningInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Development</h3>
                <p className="text-gray-600">Custom curriculum design tailored to your learning objectives and audience needs.</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Learning Platforms</h3>
                <p className="text-gray-600">Implementation of modern e-learning platforms for scalable online education.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instructor-Led Training</h3>
                <p className="text-gray-600">Professional instructor-led programs for hands-on, interactive learning experiences.</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blended Learning</h3>
                <p className="text-gray-600">Combining online and offline learning methods for optimal knowledge retention.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

