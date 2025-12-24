export default function Certifications() {
  const certs = [
    { label: 'SQL (Advanced) — HackerRank', url: 'https://www.hackerrank.com/certificates/f469f184fe56' },
    { label: 'Oracle GenAI Professional — Oracle', url: 'https://drive.google.com/file/d/1PPxTUZuD65MuLsYhmj09MFWnuDwqW4Mk/view?usp=drive_link' },
    { label: 'IBM Data Science Capstone — Coursera', url: 'https://www.coursera.org/user/76817eb96039ea012f3a23591335a45b' },
    { label: 'Industry 4.0 and Enabling Technologies — VIT', url: 'https://drive.google.com/file/d/1ukkOoRrI40LjjwTa-uaSdhguxtCF1hz9/view' },
    { label: 'Adobe India Hackathon 2025 — Adobe', url: 'https://drive.google.com/file/d/10fZfqI9mwHF29f6vcdcPcsoG52i-liAm/view' }
  ];

  return (
    <section className="py-20 px-6 md:px-20 relative overflow-hidden border-t border-b border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[#020b17] via-[#050f1f] to-[#020b17]">
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-1/4 w-1/4 h-32 bg-gradient-to-r from-[#E50914]/10 to-transparent blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-32 bg-gradient-to-l from-[#ff2d20]/10 to-transparent blur-3xl translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with design system styling */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-[#E50914] to-[#ff2d20]"></div>
          <span className="text-sm font-medium tracking-widest uppercase text-[#E50914]">
            Credentials
          </span>
        </div>
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff2d20]">&</span> Recognitions
          </h2>
          <p className="text-lg text-[#a6b3c2] max-w-3xl">
            Professional certifications and industry recognitions that validate my technical expertise 
            and commitment to continuous learning in data science and analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <a
              key={cert.label}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Icon */}
              <div className="mb-6 relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#050f1f] to-[#071427] border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[#E50914]/40 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-[#a6b3c2] group-hover:text-[#ff2d20] transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#E50914] to-[#ff2d20] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Certificate Label */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                {cert.label.split('—')[0].trim()}
              </h3>
              
              {/* Issuer */}
              <div className="mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20">
                  {cert.label.split('—')[1].trim()}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#a6b3c2] mb-6">
                Professional certification demonstrating advanced skills and expertise in the domain.
              </p>

              {/* View Button */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#ff2d20] group-hover:text-white transition-colors duration-300">
                  View Certificate
                </span>
                <svg 
                  className="w-5 h-5 text-[#a6b3c2] group-hover:text-[#ff2d20] group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E50914] to-[#ff2d20] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}