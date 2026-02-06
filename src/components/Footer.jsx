export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-burgundy-700 rounded-full opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-3">
          <img
            src="/jw.png"
            alt="Javeria Wahab Logo"
            className="w-8 h-8 rounded-full mx-auto shadow-lg object-cover"
          />
        </div>
        <p className="mb-2 text-xs sm:text-sm flex items-center justify-center gap-2">
          <span>✨</span> © 2026 Javeria Wahab. All rights reserved.{" "}
          <span>✨</span>
        </p>
        <p className="text-ivory-200 text-xs sm:text-sm font-medium">
          📚 English Literature Educator | ✍️ Academic Writer | 🎯 Career
          Advisor
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 items-center">
          <span className="text-xs sm:text-sm text-ivory-200 flex items-center gap-1">
            📍 Rawalpindi, Pakistan
          </span>
          <span className="hidden sm:inline text-xs sm:text-sm text-ivory-200">
            •
          </span>
          <a
            href="mailto:jiyamoonshine76@gmail.com"
            className="text-burgundy-300 hover:text-burgundy-200 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm break-all flex items-center gap-1"
          >
            ✉️ jiyamoonshine76@gmail.com
          </a>
        </div>
        <div className="mt-4 pt-4 border-t border-forest-700 text-ivory-300 text-xs">
          Made with <span className="text-red-400 text-sm">❤️</span> for Javeria
          Wahab
        </div>
      </div>
    </footer>
  );
}
