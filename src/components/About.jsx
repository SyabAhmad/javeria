export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white max-w-6xl mx-auto w-full relative"
    >
      <div className="absolute -top-20 right-10 w-52 h-52 bg-burgundy-100 rounded-full opacity-20 blur-3xl" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-700 mb-6 sm:mb-8 pb-4 border-b-2 border-burgundy-700 flex items-center gap-3 relative z-10">
        <img
          src="/jw.png"
          alt="Javeria Wahab Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        About Me
      </h2>
      <div className="bg-forest-50 rounded-3xl p-4 sm:p-6 md:p-8 border-l-4 border-burgundy-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative z-10">
        <p className="text-sm sm:text-base md:text-lg text-forest-900 leading-relaxed">
          <span className="font-semibold text-burgundy-700">📚</span> I'm an
          English Literature and Language professional with a strong foundation
          in academic, critical, and business writing. My passion lies in
          teaching, research, and fostering effective communication skills in
          students and professionals alike.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-forest-900 leading-relaxed mt-3 sm:mt-4">
          <span className="font-semibold text-burgundy-700">🎯</span> With
          experience spanning from classroom instruction to career guidance and
          content coordination, I bring a holistic approach to education and
          professional development. I'm committed to intellectual growth,
          cultural exchange, and creating meaningful learning experiences that
          inspire excellence and critical thinking.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-forest-900 leading-relaxed mt-3 sm:mt-4">
          <span className="font-semibold text-burgundy-700">✨</span> I'm
          seeking opportunities in international academic or professional
          environments where my expertise in language, literature, and writing
          can contribute to educational excellence while enabling continuous
          personal and professional development.
        </p>
      </div>
    </section>
  );
}
