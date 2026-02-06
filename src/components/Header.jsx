import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "🏠 Home" },
    { href: "#about", label: "👤 About" },
    { href: "#skills", label: "💡 Skills" },
    { href: "#experience", label: "💼 Experience" },
    { href: "#contact", label: "💬 Contact" },
  ];

  return (
    <header className="bg-forest-700 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img
            src="/jw.png"
            alt="Javeria Wahab Logo"
            className="w-10 h-10 rounded-full flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300 float object-cover"
          />
          <h1 className="font-bold text-lg sm:text-xl hidden sm:block truncate hover:text-burgundy-200 transition-colors duration-300">
            Javeria Wahab
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-burgundy-200 transition-all duration-300 font-medium text-sm whitespace-nowrap hover:scale-110 hover:-translate-y-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-forest-600 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            style={{
              transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0)",
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-forest-800 border-t-2 border-burgundy-700 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 hover:bg-forest-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:-translate-x-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
