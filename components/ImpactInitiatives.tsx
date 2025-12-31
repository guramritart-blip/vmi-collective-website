import { content } from "@/lib/content";

export default function ImpactInitiatives() {
  const initiatives = content.impactInitiatives;
  
  // Icons for each initiative
  const initiativeIcons = [
    "🚀", // Special Projects
    "⚡", // Frontier Technology Support
    "♿", // Learning for Disabled
    "🌐", // Culture Readiness
    "💡", // Positive Behavior Change
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-full">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Making a Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Impact <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Initiatives</span>
          </h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Special programs and initiatives that create lasting value and positive change
          </p>
        </div>
        
        {/* Mini Bento Box Grid - All Same Size */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200/60 hover:border-blue-300/60 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
                
                {/* Icon */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg md:text-xl">
                    {initiativeIcons[index]}
                  </span>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/95 to-transparent">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">
                    {initiative.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

