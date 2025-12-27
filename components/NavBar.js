import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded bg-[#E50914] flex items-center justify-center font-bold text-white">
            AP
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Arnav Parashar</div>
            <div className="text-xs text-muted">Analytics & Data Science</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/resume" className="nav-link">Resume</Link>

          <a
            href="https://github.com/Arnavparashar"
            target="_blank"
            rel="noreferrer"
            className="nav-social"
          >
            GitHub
          </a>

          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-black border-t border-white/10">
          <Link href="/" className="block nav-link">Home</Link>
          <Link href="/projects" className="block nav-link">Projects</Link>
          <Link href="/blog" className="block nav-link">Blog</Link>
          <Link href="/resume" className="block nav-link">Resume</Link>

          <a
            href="https://github.com/Arnavparashar"
            target="_blank"
            rel="noreferrer"
            className="block nav-link"
          >
            GitHub
          </a>

          <Link href="/contact" className="btn-primary block text-center">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
