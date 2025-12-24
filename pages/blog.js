import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import blogData from '../lib/blogData';

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#020b17] to-black">
      <NavBar />

      <main className="flex-grow pt-20 pb-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Technical Blog
            </h1>
            <p className="text-muted mt-3 max-w-3xl">
              Practical insights on forecasting, machine learning, and analytics engineering.
            </p>
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="project-card p-6 rounded-xl border border-white/5 hover:border-[#E50914]/30 transition"
              >
                <span className="text-xs uppercase tracking-wide text-[#E50914]">
                  {p.category}
                </span>

                <h3 className="text-xl font-semibold text-white mt-2">
                  {p.title}
                </h3>

                <p className="text-muted mt-3 text-sm">
                  {p.excerpt}
                </p>

                <a
                  href={`/blog/${p.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-[#E50914] hover:underline"
                >
                  Read Article →
                </a>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: blogData,
    },
  };
}
