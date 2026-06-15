const education = [
  {
    degree: "M.Phil (English Literature)",
    institution: "MY University",
    location: "Islamabad, Pakistan",
    year: "Jan 2023 \u2013 Mar 2025",
    cgpa: "3.7/4.0 CGPA",
    activities: "General Secretary, Disciplinary Committee; Debates & Drama Competitions",
  },
  {
    degree: "Bachelor's (English Literature)",
    institution: "University of the Punjab (PU)",
    location: "Lahore, Pakistan",
    year: "2017 \u2013 2022",
    activities: "Literary discussions, academic seminars, essay writing, peer review, research-based assignments",
  },
];

const trainings = [
  {
    title: "Role of Youth in Building Democratic Society",
    org: "Peace and Education Foundation (PEF)",
    date: "January 04\u201307, 2024",
    location: "Peshawar, Pakistan",
  },
  {
    title: "4th National Young Leaders Camp",
    org: "Hawks Youth Vision Foundation",
    date: "November 01\u201305, 2023",
    location: "Swat, Pakistan",
  },
  {
    title: "Al-Khidmat Youth Gathering 8.0",
    org: "Al-Khidmat Foundation Pakistan",
    date: "December 16, 2023",
    location: "Aiwan-E-Iqbal Lahore, Pakistan",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-title font-display italic">Education</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-xl shadow-card border border-forest-100 p-6 sm:p-7 hover:shadow-card-hover hover:border-forest-200 transition-all duration-200 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-forest-700 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-forest-800 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-burgundy-700 font-semibold text-sm sm:text-base">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 text-forest-500/80">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {edu.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-forest-500/80">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {edu.year}
              </span>
              {edu.cgpa && (
                <span className="inline-flex items-center gap-1.5 text-forest-700 font-semibold">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {edu.cgpa}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-forest-500/70 italic leading-relaxed border-t border-forest-50 pt-3 mt-auto">
              {edu.activities}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-burgundy-50/60 rounded-xl border border-burgundy-100 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-burgundy-700 mb-6">
          Training & Workshops
        </h3>
        <div className="space-y-4">
          {trainings.map((t, index) => (
            <div key={index} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-500 mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-forest-800">
                  {t.title}
                </p>
                <p className="text-xs sm:text-sm text-forest-600/70">
                  {t.org} &mdash; {t.date} | {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
