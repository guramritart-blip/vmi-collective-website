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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-[#151515] border border-[#252525] rounded-full">
            <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">Making a Difference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight px-2">
            Impact <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Initiatives</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b0b0b0] max-w-2xl mx-auto px-2">
            Special programs and initiatives that create lasting value and positive change
          </p>
        </div>
        
        {/* Mini Bento Box Grid - All Same Size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative bg-[#151515] border border-[#252525] rounded-xl overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-[#111111]"></div>
                
                {/* Icon */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-base sm:text-lg md:text-xl">
                    {initiativeIcons[index]}
                  </span>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-[#151515]/95 to-transparent">
                  <h3 className="font-bold text-white text-xs sm:text-sm leading-tight line-clamp-2">
                    {initiative.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-2 sm:p-3">
                <p className="text-xs text-[#b0b0b0] leading-relaxed">
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

