export default function About() {
  return (
    <section className="py-32 px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-[#020b17] via-[#050f1f] to-[#020b17]">
      {/* Decorative glow effects matching Certifications */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#E50914]/10 to-transparent blur-3xl rounded-full -translate-y-1/3 translate-x-1/3 z-[-1]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#ff2d20]/10 to-transparent blur-3xl rounded-full translate-y-1/3 -translate-x-1/3 z-[-1]"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header with accent line */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-[#E50914] to-[#ff2d20]"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#E50914]">
              Professional Profile
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff2d20]">Me</span>
          </h2>
          <p className="text-lg text-[#a6b3c2] max-w-3xl">
            GenAI engineer and incoming Technology Consultant at EY, specializing in building 
            production AI systems, multi-agent pipelines, and agentic solutions for enterprise environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column - Personal & Education */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduction Card */}
            <div className="project-card group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Overview</h3>
              <div className="space-y-6 text-[#a6b3c2]">
                <p className="text-lg leading-relaxed">
                  With a strong foundation in <span className="text-white font-medium bg-gradient-to-r from-[#E50914] to-[#ff2d20] bg-clip-text text-transparent">large language models, agentic AI, and cloud infrastructure</span>, 
                  I focus on building production-grade AI systems that solve real enterprise problems.
                </p>
                <p className="leading-relaxed">
                  I hold a <span className="text-white font-medium">B.Tech in Information Technology</span> from 
                  <span className="text-[#ff2d20] font-medium"> VIT Vellore</span>, with hands-on experience in 
                  GenAI engineering, RAG pipelines, NL-to-SQL systems, and AWS cloud deployments.
                </p>
              </div>
              
              {/* Icon decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-12 h-12 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-[#E50914]/10">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff2d20]"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white">Professional Journey</h3>
              </div>

              <div className="relative pl-10 space-y-12">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E50914]/20 via-[#ff2d20]/30 to-transparent"></div>
                {/* EY Experience */}
                <div className="relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff2d20] border-4 border-[#020b17]"></div>
                  <div className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                        Senior Analyst – Technology Consulting
                      </h4>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20 group-hover:bg-[#E50914]/20 group-hover:border-[#E50914]/30 transition-all duration-300">
                        Jul 2026 – Present
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-[#a6b3c2]">EY India</span>
                    </div>
                    <ul className="space-y-3 text-[#a6b3c2]">
                      {[
                      "Building Agentic SOC systems for autonomous threat detection and incident response.",
                      "Designing multi-agent LLM pipelines integrated with enterprise security tooling.",
                      "Advising clients on AI-driven cybersecurity strategy and agentic automation frameworks."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-1.5 h-1.5 text-[#ff2d20] mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Company icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Titan Experience */}
                <div className="relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff2d20] border-4 border-[#020b17]"></div>
                  <div className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                        Gen AI Intern
                      </h4>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20 group-hover:bg-[#E50914]/20 group-hover:border-[#E50914]/30 transition-all duration-300">
                        Jan 2026 – Jun 2026
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-[#a6b3c2]">Titan Company Limited (Tanishq)</span>
                    </div>
                    <ul className="space-y-3 text-[#a6b3c2]">
                      {[
                        "Built and enhanced an enterprise-grade NL-to-SQL platform for Tanishq business users, enabling natural language access to enterprise data.",
                        "Developed a RAG-based multi-agent system leveraging organizational schemas and historical query patterns to improve SQL generation accuracy.",
                        "Deployed and integrated the end-to-end solution on AWS with a production-ready UI and scalable backend infrastructure."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-1.5 h-1.5 text-[#ff2d20] mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Company icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* SlashCurate Experience */}
                <div className="relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff2d20] border-4 border-[#020b17]"></div>
                  <div className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                        Data Science Intern
                      </h4>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20 group-hover:bg-[#E50914]/20 group-hover:border-[#E50914]/30 transition-all duration-300">
                        May 2025 – July 2025
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="text-[#a6b3c2]">SlashCurate Technologies</span>
                    </div>
                    <ul className="space-y-3 text-[#a6b3c2]">
                      {[
                        "Built analytical workflows for merchant churn analysis and forecasting",
                        "Performed feature engineering and model evaluation",
                        "Analyzed transactional data to identify behavioral patterns"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-1.5 h-1.5 text-[#ff2d20] mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>                    
                    {/* Company icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Focus */}
          <div className="space-y-16">
            
            {/* What I Do */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Expertise</h3>
              <div className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
                <p className="text-[#a6b3c2] leading-relaxed">
                  I design and ship end-to-end AI systems — from architecting multi-agent pipelines 
                  and RAG-based retrieval systems to deploying production applications on AWS with 
                  scalable, enterprise-ready infrastructure.
                </p>
                
                {/* Decorative icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Technical Focus */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Stack</h3>
              <div className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                      "Generative AI & LLMs",
                      "Machine Learning",
                      "RAG Pipelines",
                      "Predictive Modeling",
                      "Multi-Agent Systems",
                      "Feature Engineering",
                      "NL-to-SQL Engineering",
                      "Time-Series Forecasting",
                      "AWS Cloud Deployment",
                      "Data Analysis & EDA",
                      "Python & SQL",
                      "Business Intelligence"
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                      <svg className="w-2.5 h-2.5 text-[#ff2d20] mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                      <span className="text-[#a6b3c2] group-hover/item:text-white font-medium transition-colors text-sm">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Additional info */}
                <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  <p className="text-xs text-[#a6b3c2]/70">
                    Proficient in Python, Langchain, LangGraph, 
                    Azure OpenAI, SQL databases, and AWS for both ML and GenAI system development.
                  </p>
                </div>
                
                {/* Decorative icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>

         {/* Current Focus */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Current Focus</h3>
          <div className="bg-gradient-to-br from-[#050f1f]/60 via-[#E50914]/10 to-[#050f1f]/60 backdrop-blur-sm rounded-xl p-6 border border-[#E50914]/30 group hover:border-[#E50914]/50 transition-all duration-300">
            <p className="text-[#a6b3c2] leading-relaxed">
              Starting at EY as a Technology Consultant, building Agentic SOC systems 
              at the intersection of AI and cybersecurity — while continuing to grow 
              across ML, GenAI, and enterprise data engineering.
            </p>
                
                {/* Decorative icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-[#ff2d20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Resume CTA */}
            <div className="pt-8">
              <a
                href="https://drive.google.com/file/d/1GzHQ9uWKsvVUwljpnoStHJ-qZZIVXS54/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14l-7-7m7 7l7-7" />
                </svg>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E50914] to-[#ff2d20] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </a>
              <p className="text-sm text-[#a6b3c2]/70 text-center mt-4">
                PDF Format • Updated Regularly • Includes Projects & relevant details
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}