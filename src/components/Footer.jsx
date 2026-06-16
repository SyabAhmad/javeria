import { EMAIL } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <img
            src="/jw.png"
            alt="Javeria Wahab"
            className="w-10 h-10 rounded-full mx-auto ring-2 ring-white/10 object-cover"
          />
        </div>

        <p className="text-sm font-medium mb-1 tracking-tight">
          &copy; 2026 Javeria Wahab. All rights reserved.
        </p>
        <p className="text-ivory-200/50 text-xs mb-5">
          Vice Principal at Darearqam &middot; English Literature Specialist &middot; Career Mentor
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center text-xs text-ivory-200/40 mb-5">
          <span>Rawalpindi, Pakistan</span>
          <span className="hidden sm:inline">&middot;</span>
          <a
            href={`mailto:${EMAIL}`}
            className="text-burgundy-300/80 hover:text-burgundy-200 transition-colors duration-200 break-all"
          >
            {EMAIL}
          </a>
        </div>

        <div className="pt-5 border-t border-white/5 text-ivory-200/30 text-xs">
          Made with care for Javeria Wahab
        </div>
      </div>
    </footer>
  );
}
