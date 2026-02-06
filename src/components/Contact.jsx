export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-forest-800 text-forest-800 relative overflow-hidden"
    >
      {/* Cute background decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-burgundy-700 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-forest-600 rounded-full opacity-5 blur-3xl" />

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2 fade-in-up text-burgundy-300">
          <span>💌</span> Let's Connect
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-forest-800 fade-in-up">
          I'm always interested in hearing about new opportunities and projects.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 fade-in-up">
          <a
            href="mailto:jiyamoonshine76@gmail.com"
            className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 min-h-40 sm:min-h-0 flex flex-col items-center justify-center hover:bg-burgundy-50"
          >
            <div className="text-4xl sm:text-5xl mb-3">✉️</div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-black">
              Email
            </h3>
            <p className="text-xs sm:text-sm break-all text-black">
              jiyamoonshine76@gmail.com
            </p>
          </a>

          <a
            href="tel:+923259518605"
            className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 min-h-40 sm:min-h-0 flex flex-col items-center justify-center hover:bg-burgundy-50"
          >
            <div className="text-4xl sm:text-5xl mb-3">📱</div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-black">
              Phone
            </h3>
            <p className="text-xs sm:text-sm text-black">+92-325-9518605</p>
          </a>

          <div className="bg-white rounded-2xl p-4 sm:p-6 min-h-40 sm:min-h-0 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-burgundy-50">
            <div className="text-4xl sm:text-5xl mb-3">📍</div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-black">
              Location
            </h3>
            <p className="text-xs sm:text-sm text-black">Lahore, Pakistan</p>
          </div>
        </div>

        <div className="mb-6 sm:mb-8 fade-in-up">
          <a
            href="https://linkedin.com/in/javeria-wahab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burgundy-700 hover:bg-burgundy-600 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base min-h-12 flex items-center justify-center active:scale-95 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 shadow-lg"
          >
            🔗 Visit LinkedIn Profile
          </a>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-forest-500 text-forest-800 text-xs sm:text-sm">
          <p>✨ Available for freelance work and full-time opportunities ✨</p>
        </div>
      </div>
    </section>
  );
}
