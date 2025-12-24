import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import projectsData from '../lib/projectsData';

export default function Projects({ projects }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-20 pb-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <p className="text-muted mt-2">
            Real-world data projects, notebooks, and demos.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.isArray(projects) &&
              projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
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
      projects: projectsData,
    },
  };
}
