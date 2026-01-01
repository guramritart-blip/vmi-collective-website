import { content } from "@/lib/content";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Contact background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
            Get In <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed px-2">
            Connect with us to explore how we can help bridge skills, markets, and opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-[#151515] border border-[#252525] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:border-[#00d4ff]/30 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#00d4ff] mb-1">Address</p>
                  <p className="text-white">{content.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#00d4ff] mb-1">Email</p>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-[#00d4ff] hover:text-[#00b8e6] transition-colors"
                  >
                    {content.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#00d4ff] mb-1">Phone</p>
                  <a
                    href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                    className="text-[#00d4ff] hover:text-[#00b8e6] transition-colors"
                  >
                    {content.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#00d4ff] mb-1">Business Hours</p>
                  <p className="text-white">{content.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#151515] border border-[#252525] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:border-[#00d4ff]/30 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Send Us a Message</h3>
            <form className="space-y-4 sm:space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 sm:px-5 sm:py-3 bg-[#111111] border border-[#252525] rounded-xl text-white text-sm sm:text-base placeholder-[#707070] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 sm:px-5 sm:py-3 bg-[#111111] border border-[#252525] rounded-xl text-white text-sm sm:text-base placeholder-[#707070] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3 bg-[#111111] border border-[#252525] rounded-xl text-white text-sm sm:text-base placeholder-[#707070] focus:ring-2 focus:ring-[#00d4ff] focus:border-[#00d4ff] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff] hover:from-[#00b8e6] hover:to-[#0052cc] text-white py-4 px-6 sm:py-5 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

