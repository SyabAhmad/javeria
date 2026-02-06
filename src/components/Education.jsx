const education = [
  {
    degree: "M.Phil (English Literature)",
    institution: "Muslim Youth University",
    location: "Islamabad, Pakistan",
    year: "2022 – 2024",
  },
  {
    degree: "Bachelor's (English Literature)",
    institution: "University Of Punjab (PU)",
    location: "Lahore, Pakistan",
    year: "2017 – 2022",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full relative bg-white"
    >
      <div className="absolute top-40 right-10 w-40 h-40 bg-forest-100 rounded-full opacity-20 blur-3xl" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-700 mb-6 sm:mb-8 pb-4 border-b-2 border-burgundy-700 flex items-center gap-2 relative z-10">
        <span>🎓</span> Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 relative z-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border-t-4 border-forest-700 p-4 sm:p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:border-burgundy-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-forest-700 mb-2 flex items-center gap-2">
              📚 {edu.degree}
            </h3>
            <p className="text-burgundy-700 font-semibold text-sm sm:text-base">
              {edu.institution}
            </p>
            <p className="text-xs sm:text-sm text-forest-600 mb-3 sm:mb-4">
              📍 {edu.location}
            </p>
            <div className="text-xs sm:text-sm font-semibold text-white bg-forest-700 inline-block px-3 sm:px-4 py-2 rounded-full shadow-md">
              📅 {edu.year}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 md:p-8 bg-burgundy-50 rounded-2xl border-l-4 border-burgundy-700 relative z-10 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-burgundy-700 mb-4 sm:mb-6 flex items-center gap-2">
          <span>🏆</span> Training & Workshops
        </h3>
        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-base text-forest-900">
          <li className="flex gap-3">
            <span className="text-burgundy-700 text-xl font-bold flex-shrink-0">
              ✨
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                Role Of Youth in Building Democratic Society
              </p>
              <p className="text-xs sm:text-sm text-forest-600">
                Peace and Education Foundation (PEF) - January 04-07, 2024 |
                Peshawar, Pakistan
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-burgundy-700 text-xl font-bold flex-shrink-0">
              ✨
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                4th National Young Leaders Camp
              </p>
              <p className="text-xs sm:text-sm text-forest-600">
                Hawks Youth Vision Foundation - November 01-05, 2023 | Swat,
                Pakistan
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-burgundy-700 text-xl font-bold flex-shrink-0">
              ✨
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                Al-khidmat Youth Gathering 8.0
              </p>
              <p className="text-xs sm:text-sm text-forest-600">
                Al-khidmat Foundation Pakistan - December 16, 2023 |
                Aiwan-E-Iqbal Lahore, Pakistan
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
