import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#020b17] to-black">
      <NavBar />

      <main className="flex-grow pt-20 pb-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Technical Blog
            </h1>
            <p className="text-muted mt-3">
              Long-form writing on data science, finance, and analytics.
            </p>
          </header>

          {/* SINGLE BLOG CARD */}
          <article
            className="
              project-card
              p-6
              rounded-xl
              border
              border-white/5
              hover:border-[#E50914]/30
              transition
            "
          >
            <span className="text-xs uppercase tracking-wide text-[#E50914]">
              Finance · Optimization
            </span>

            <h3 className="text-2xl font-semibold text-white mt-3">
              I Built a Portfolio Optimization Model from Scratch — Here’s What Surprised Me
            </h3>

            <p className="text-muted mt-4 leading-relaxed">
              A deep dive into building a portfolio optimization model from first principles,
              covering risk, returns, constraints, and real-world trade-offs that don’t show up
              in textbooks.
            </p>

            <a
              href="https://medium.com/@arnav.parashar2000/i-built-a-portfolio-optimization-model-from-scratch-heres-what-surprised-me-07605fffd57d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-sm font-medium text-[#E50914] hover:underline"
            >
              Read on Medium →
            </a>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ✅ STATIC + VERCEL SAFE */
export async function getStaticProps() {
  return {
    props: {
      posts: blogData,
    },
  };
}
