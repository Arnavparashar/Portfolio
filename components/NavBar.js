import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="site-nav">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        
        {/* LEFT — Brand */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded bg-[#E50914] flex items-center justify-center font-bold text-white">
            AP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">Arnav Parashar</span>
            <span className="brand-sub">Analytics & Data Science</span>
          </div>
        </div>

        {/* RIGHT — Navigation */}
        <div className="flex gap-5 items-center">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/resume" className="nav-link">Resume</Link>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Arnavparashar"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.58.23 2.74.11 3.03.74.81 1.19 1.85 1.19 3.11 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.11v3.13c0 .31.21.66.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>

          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
