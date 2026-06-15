import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isTraining = location.pathname === "/training";

  const socialLinks = [
    {
      href: "mailto:jiyamoonshine76@gmail.com",
      label: "Email",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/javeriawahab",
      label: "LinkedIn",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="bg-forest-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/jw.png"
            alt="Javeria Wahab"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-200"
          />
          <span className="font-bold text-lg text-white tracking-tight">
            Javeria Wahab
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to={isTraining ? "/" : "/training"}
            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          >
            {isTraining ? "Portfolio" : "Training"}
          </Link>

          <nav className="flex items-center gap-1 ml-2 pl-2 border-l border-white/10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                aria-label={link.label}
              >
                {link.svg}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
