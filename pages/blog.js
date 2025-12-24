import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Blog({posts}){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#020b17] to-black">
      <NavBar />
      
      <main className="flex-grow pt-20 pb-20 px-6 md:px-20 relative overflow-hidden">
        {/* Decorative glow effects */}
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-r from-[#E50914]/10 to-transparent blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-l from-[#ff2d20]/10 to-transparent blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header with design system styling */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#E50914] to-[#ff2d20]"></div>
              <span className="text-sm font-medium tracking-widest uppercase text-[#E50914]">
                Data Insights
              </span>
            </div>
            
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff2d20]">Blog</span>
              </h1>
              <p className="text-lg text-[#a6b3c2] max-w-3xl">
                In-depth articles exploring forecasting techniques, machine learning applications, 
                and data engineering practices — sharing practical insights from real-world projects.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-bold text-white mb-2">{posts.length}</div>
                <div className="text-sm text-[#a6b3c2]">Total Articles</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-sm text-[#a6b3c2]">Categories</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-sm text-[#a6b3c2]">Learning Journey</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[rgba(255,255,255,0.08)]">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-[#a6b3c2]">Practical Focus</div>
              </div>
            </div>
          </div>

          {/* Featured Posts (first post highlighted) */}
          {posts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-6">Featured Article</h2>
              <a
                href={posts[0].url ? posts[0].url : `/blog/${posts[0].slug}`}
                target={posts[0].url ? "_blank" : "_self"}
                rel={posts[0].url ? "noreferrer" : ""}
                className="project-card group block relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20">
                          Featured
                        </span>
                        {posts[0].category && (
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-black/40 text-[#a6b3c2] border border-[rgba(255,255,255,0.08)]">
                            {posts[0].category}
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                        {posts[0].title}
                      </h3>
                      <p className="text-lg text-[#a6b3c2] mb-6">
                        {posts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-[#ff2d20] group-hover:text-white transition-colors duration-300">
                          Read Full Article →
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
                    </div>
                    <div className="md:w-64">
                      <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-br from-[#050f1f] to-[#071427] border border-[rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden">
                        {/* Post thumbnail or icon */}
                        <svg className="w-20 h-20 text-[#a6b3c2] group-hover:text-[#ff2d20] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#ff2d20] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
          )}

          {/* All Articles Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-white">All Articles</h2>
              <div className="flex gap-2">
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-[#E50914]/10 text-[#ff2d20] border border-[#E50914]/20 hover:bg-[#E50914]/20 hover:border-[#E50914]/30 transition-all duration-300">
                  All
                </button>
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-black/40 text-[#a6b3c2] border border-[rgba(255,255,255,0.08)] hover:bg-black/60 hover:text-white transition-all duration-300">
                  Forecasting
                </button>
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-black/40 text-[#a6b3c2] border border-[rgba(255,255,255,0.08)] hover:bg-black/60 hover:text-white transition-all duration-300">
                  Machine Learning
                </button>
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-black/40 text-[#a6b3c2] border border-[rgba(255,255,255,0.08)] hover:bg-black/60 hover:text-white transition-all duration-300">
                  Data Engineering
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((p, index) => (
                <article 
                  key={p.id} 
                  className="project-card group relative p-6 rounded-xl border border-[rgba(255,255,255,0.08)] hover:border-[#E50914]/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Category Badge */}
                  {p.category && (
                    <div className="mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 text-[#a6b3c2] border border-[rgba(255,255,255,0.08)]">
                        {p.category}
                      </span>
                    </div>
                  )}

                  {/* Article Icon */}
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#050f1f] to-[#071427] border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[#E50914]/40 transition-all duration-300">
                      <svg 
                        className="w-6 h-6 text-[#a6b3c2] group-hover:text-[#ff2d20] transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#E50914] to-[#ff2d20] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E50914] group-hover:to-[#ff2d20] transition-all duration-300">
                    {p.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="text-sm text-[#a6b3c2] mb-6 line-clamp-3">
                    {p.excerpt}
                  </p>

                  {/* Read Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <div className="text-sm font-medium text-[#ff2d20] group-hover:text-white transition-colors duration-300">
                      {p.url ? `Read on ${p.source || 'External'}` : 'Read Article'}
                    </div>
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
                </article>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,255,255,0.08)] max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-[#a6b3c2] mb-6">
                Subscribe to get notified about new articles on data science, machine learning, 
                and analytics engineering.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-black/60 border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#a6b3c2]/50 focus:outline-none focus:border-[#E50914]/50 transition-all duration-300"
                />
                <button className="btn-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-[#a6b3c2]/50 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/blog');
  const posts = await res.json();
  return {props:{posts}};
}