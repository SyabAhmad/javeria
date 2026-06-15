export default function Hero() {
  const stats = [
    { value: "3+", label: "Years Teaching" },
    { value: "365+", label: "Connections" },
    { value: "Vice Principal", label: "Current Role" },
    { value: "M.Phil", label: "Highest Degree" },
  ];

  return (
    <section id="home" className="relative overflow-hidden md:min-h-screen md:flex md:items-center">
      {/* Premium dark green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700" />

      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 sm:py-24 md:py-36">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">

          {/* Left content */}
          <div className="md:col-span-3 text-center md:text-left">

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white/70 text-xs sm:text-sm font-medium tracking-wide">
                Vice Principal at Darearqam
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-[1.1] animate-fade-in-up font-script font-normal"
              style={{ animationDelay: "100ms" }}>
              Javeria Wahab
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium mb-6 leading-relaxed animate-fade-in-up font-display italic"
              style={{ animationDelay: "200ms" }}>
              English Literature &amp; Language Specialist &middot; Educational Strategy &amp; Faculty Development
            </p>

            {/* Key expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "300ms" }}>
              {["Academic Writing", "Curriculum Design", "Team Leadership", "Research", "Career Mentorship"].map((tag) => (
                <span key={tag}
                  className="text-xs sm:text-sm text-white/50 bg-white/5 border border-white/10 rounded-full px-3.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "400ms" }}>
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-forest-900 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.98]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let&apos;s Connect
              </a>
              <a href="mailto:jiyamoonshine76@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </div>

          {/* Right - Photo + Stats */}
          <div className="md:col-span-2 flex flex-col items-center animate-fade-in-up"
            style={{ animationDelay: "200ms" }}>
            <div className="relative mb-6">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl scale-150" />
              <img
                src="/jw.png"
                alt="Javeria Wahab"
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover ring-4 ring-white/20 shadow-2xl"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((stat) => (
                <div key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3.5 text-center border border-white/5">
                  <p className="text-white font-bold text-lg sm:text-xl">{stat.value}</p>
                  <p className="text-white/50 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
