import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articleId = parseInt(id);
  const article = content.articles.find((a) => a.id === articleId);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-blue-100">
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                  {article.excerpt}
                </p>
                
                <p>
                  {article.title.includes("Shift from Campaigns") && (
                    <>
                      At some point, the marketing process relied on temporary promotions such as seasonal sales, product launches, or festival promotions. These were effortful but temporary measures that did not help build long-term customer relationships. Today, the marketing landscape has fundamentally shifted toward continuous engagement strategies that foster deeper connections with customers throughout their entire journey.
                      <br /><br />
                      The shift from campaigns to continuous engagement represents a paradigm change in how businesses approach customer relationships. Instead of focusing on one-time promotional events, forward-thinking companies are building always-on marketing programs that maintain consistent communication and value delivery. This approach recognizes that customer relationships are not transactional events but ongoing partnerships that require nurturing and attention.
                      <br /><br />
                      Continuous engagement strategies leverage multiple touchpoints and channels to maintain meaningful connections with customers. By implementing automated workflows, personalized content delivery, and data-driven insights, businesses can create seamless experiences that keep customers engaged long after the initial purchase. This approach not only improves customer retention but also increases lifetime value and builds brand loyalty that extends far beyond traditional campaign periods.
                    </>
                  )}
                  {article.title.includes("Personalization at Scale") && (
                    <>
                      One-to-one marketing is changing how companies approach modern marketing and customer experience. By combining Artificial Intelligence (AI) with behavioral science, businesses can create unique, meaningful experiences for millions of customers simultaneously. This represents a fundamental shift from mass marketing approaches to truly personalized interactions at scale.
                      <br /><br />
                      The power of AI enables businesses to process vast amounts of customer data in real-time, identifying patterns, preferences, and behaviors that would be impossible to detect manually. When combined with insights from behavioral science, this technology allows companies to understand not just what customers do, but why they do it. This deeper understanding enables the creation of experiences that resonate on a personal level while being delivered at enterprise scale.
                      <br /><br />
                      Behavioral science provides the framework for understanding human decision-making processes, cognitive biases, and emotional triggers. By applying these principles to AI-driven personalization engines, businesses can create experiences that feel natural and intuitive to each individual customer. The result is a marketing approach that feels less like marketing and more like a genuine, helpful interaction tailored specifically to each person's needs and preferences.
                    </>
                  )}
                  {(article.title.includes("India & the Dynamics") || article.title.includes("Global Workforce")) && (
                    <>
                      India is on track to become a leading source of skilled workers worldwide. This potential could help turn India's large young population into a long-term source of diplomatic and economic power. For a global workforce to succeed, understanding these dynamics is crucial for businesses, governments, and individuals navigating the international labor market.
                      <br /><br />
                      The demographic advantage India possesses is significant. With over 65% of its population under the age of 35, India has one of the youngest workforces in the world. This demographic dividend, combined with increasing investment in education and skill development, positions India as a critical player in the global talent ecosystem. As developed economies face aging populations and skill shortages, India's skilled workforce becomes increasingly valuable.
                      <br /><br />
                      However, realizing this potential requires strategic investment in education, training, and infrastructure. Programs that align skills with global market demands, facilitate international mobility, and ensure quality standards are essential. The dynamics of global workforce mobility involve complex factors including immigration policies, recognition of qualifications, cultural adaptation, and the creation of pathways that benefit both sending and receiving countries. Understanding these dynamics helps create win-win scenarios that drive economic growth and create opportunities for skilled workers worldwide.
                    </>
                  )}
                  {(article.title.includes("AI-Powered Segmentation") || article.title.includes("Segmentation")) && (
                    <>
                      Digital marketing relies on segmentation, enabling marketers to target customers based on factors such as location, interests, and purchase history. AI-powered segmentation uses artificial intelligence and machine learning to help businesses understand customers beyond traditional demographics, moving toward behavioral impact and predictive insights.
                      <br /><br />
                      Traditional segmentation methods, while useful, often rely on static demographic data that provides limited insight into customer behavior and preferences. AI-powered segmentation transforms this approach by analyzing vast datasets to identify patterns, predict behaviors, and create dynamic segments that evolve as customer interactions change. This enables marketers to move from broad demographic categories to highly specific behavioral clusters that reflect actual customer needs and intentions.
                      <br /><br />
                      The shift from demographics to behavioral impact represents a fundamental change in how businesses understand their customers. Instead of grouping people based on age, gender, or location, AI segmentation identifies customers based on their actions, preferences, and predicted future behaviors. This approach enables more accurate targeting, more relevant messaging, and ultimately, more effective marketing campaigns that drive real business results. By understanding the behavioral impact of different customer segments, businesses can allocate resources more efficiently and create experiences that truly resonate with their audience.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get In Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

