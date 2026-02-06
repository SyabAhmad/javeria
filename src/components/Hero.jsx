export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Cute background decorations */}
      <div className="absolute top-10 right-5 w-20 h-20 bg-burgundy-100 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-5 w-32 h-32 bg-forest-100 rounded-full opacity-20 blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8 fade-in-up">
          <img
            src="/jw.png"
            alt="Javeria Wahab"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full shadow-2xl flex-shrink-0 float pulse-glow object-cover border-4 border-white"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-forest-700 mb-3 sm:mb-4 leading-tight fade-in-up">
          Javeria Wahab
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-burgundy-700 mb-4 sm:mb-6 font-semibold fade-in-up flex items-center justify-center gap-2">
          <span>📚</span> English Literature Educator <span>✨</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg text-forest-900 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 fade-in-up">
          Motivated professional with strong expertise in academic writing,
          critical thinking, and effective communication. Passionate about
          teaching, research, and fostering intellectual growth in students
          while contributing to educational excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 fade-in-up">
          <a
            href="#contact"
            className="cute-button w-full sm:w-auto text-center py-3 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium min-h-12 sm:min-h-auto flex items-center justify-center"
          >
            💬 Get in Touch
          </a>
          <a
            href="mailto:jiyamoonshine76@gmail.com"
            className="bg-white text-forest-700 border-2 border-forest-700 rounded-lg hover:bg-forest-50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 inline-block w-full sm:w-auto text-center py-3 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium min-h-12 sm:min-h-auto flex items-center justify-center active:scale-95"
          >
            ✉️ Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
