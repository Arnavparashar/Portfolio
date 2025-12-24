import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight">
            Resume
          </h1>

          <p className="text-muted mt-4 max-w-xl mx-auto">
            A concise overview of my experience in analytics, machine learning,
            forecasting, and building end-to-end data products.
          </p>

          {/* Resume Card */}
          <div
            className="
              mt-14
              mx-auto
              max-w-md
              bg-[#050f1f]
              border
              border-white/10
              rounded-xl
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            "
          >
            <div className="text-lg font-medium">
              Arnav Parashar
            </div>

            <div className="text-sm text-muted mt-1">
              Analytics & Data Science
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1D3twjC1E04g4OjdTkHhjXhtwwO_A0m2h/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View Resume
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1D3twjC1E04g4OjdTkHhjXhtwwO_A0m2h"
                className="btn-ghost"
              >
                Download PDF
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
