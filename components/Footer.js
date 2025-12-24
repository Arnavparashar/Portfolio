export default function Footer(){
  return (
    <footer className="site-footer w-full py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          <div className="font-semibold">Arnav Parashar <span className="text-sm font-normal text-muted">| Analytics & Data Science</span></div>
          <div className="text-sm mt-2"><a href="mailto:arnav.parashar2000@gmail.com" className="text-muted">arnav.parashar2000@gmail.com</a></div>
        </div>
        <div className="flex gap-4 text-sm text-muted items-center">
          <a href="https://github.com/Arnavparashar" className="nav-link" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arnav-parashar-920212240/" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
