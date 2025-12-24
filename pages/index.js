import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../lib/projectsData';


export default function Home({ projects }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Certifications />

        {/* Featured Projects */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h3>
              <p className="text-muted max-w-2xl mx-auto text-lg">
                A selection of data projects and dashboards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/20
                  hover:border-white/40
                  transition
                "
              >
                View all projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ✅ STATIC + VERCEL SAFE */
export async function getStaticProps() {
  return {
    props: {
      projects: projectsData,
    },
  };
}
