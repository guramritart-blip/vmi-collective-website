import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const investmentInfo = content.additionalServices.find(s => s.title === "Investment");

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            VMI Collective
          </Link>
        </div>
      </header>

      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80"
            alt="Investment background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">💰</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Investment</h1>
          <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed">
            Strategic investment advisory services to fuel growth and expansion
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Investment</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {investmentInfo?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Planning</h3>
                <p className="text-gray-600">Comprehensive financial planning to guide your investment decisions.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Strategy</h3>
                <p className="text-gray-600">Develop strategic investment plans aligned with your business objectives.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Capital Raising</h3>
                <p className="text-gray-600">Support in raising capital from investors and financial institutions.</p>
              </div>
              <div className="bg-yellow-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Investor Relations</h3>
                <p className="text-gray-600">Manage relationships with investors and stakeholders effectively.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

