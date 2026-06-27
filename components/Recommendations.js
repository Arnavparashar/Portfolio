export default function Recommendations() {
  const recommendations = [
    {
      name: "Senior Manager",
      company: "Titan Company Limited",
      relationship: "Direct Manager · Gen AI Internship",
      text: "Arnav joined us as an intern and left a lasting impression that few full-time hires do. He led the end-to-end development of a Gen AI bot for our Jewellery retail business — and took it from concept to live in just 3 months. What stood out wasn't just the speed, but how he operated: he quickly built genuine business understanding of a nuanced domain, while simultaneously implementing cutting-edge AI techniques. That combination is rare even in seasoned professionals. His ownership of the project was complete — from ideation to execution, he brought both the ideas and the drive to make them real. It was genuinely heartwarming to watch an intern carry something this significant all the way through. Arnav is the kind of person you want on your team. I'd recommend him without hesitation.",
    },
    // add more here later
  ];

  return (
    <section className="py-24 px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-[#020b17] via-[#050f1f] to-[#020b17]">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#E50914]/10 to-transparent blur-3xl rounded-full -translate-y-1/3 -translate-x-1/3 z-[-1]"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#ff2d20]/10 to-transparent blur-3xl rounded-full translate-y-1/3 translate-x-1/3 z-[-1]"></div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#E50914] to-[#ff2d20]"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#E50914]">
              Recommendations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff2d20]">Say</span>
          </h2>
          <p className="text-lg text-[#a6b3c2] max-w-2xl">
            Feedback from managers and colleagues I've worked with.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className="project-card group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#E50914]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Text */}
              <p className="text-[#a6b3c2] leading-relaxed text-base mb-8 italic">
                "{rec.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff2d20] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {rec.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{rec.name}</div>
                  <div className="text-[#E50914] text-sm">{rec.company}</div>
                  <div className="text-[#a6b3c2] text-xs mt-0.5">{rec.relationship}</div>
                </div>

                {/* LinkedIn badge */}
                <div className="ml-auto">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20">
                    via LinkedIn
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}