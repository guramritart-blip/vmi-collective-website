import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

export default function ArticlesPage() {
  const articles = content.articles;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80"
            alt="Articles background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">📝</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 px-2">Articles & <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Insights</span></h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] leading-relaxed px-2">
            Explore our latest thoughts, insights, and expertise on skills, markets, and opportunities
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-[#151515] border border-[#252525] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00d4ff]/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#707070] mb-2 sm:mb-3">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#0066ff] group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#b0b0b0] leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] font-semibold hover:text-[#00b8e6] transition-colors duration-300 group-hover:gap-3"
                  >
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

