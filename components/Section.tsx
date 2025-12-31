import { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  index: number;
  icon?: ReactNode;
}

const sectionImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", // Employability - team/people
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Go-to-Market - business/charts
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Growth - growth/upward
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", // Innovation - technology/innovation
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", // Adoption - collaboration/teamwork
];

export default function Section({ title, description, index }: SectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-20 md:py-32 px-4 bg-transparent relative ${index === 0 ? '-mt-40' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-12 md:gap-16`}
        >
          <div className="flex-1 space-y-8 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl w-fit shadow-md border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white">0{index + 1}</span>
              </div>
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Core Value</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              {title.split(" ").map((word, i) => (
                <span key={i} className={i === 0 ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={sectionImages[index]}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-indigo-900/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-4 group-hover:w-32 transition-all duration-500"></div>
                <div className="text-xl font-bold">{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

