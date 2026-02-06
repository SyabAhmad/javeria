const experiences = [
  {
    title: "Career Advisor",
    company: "SKANS Institute of Technology",
    location: "Pakistan",
    year: "2024",
    description:
      "Guided students and professionals in identifying strengths, exploring career paths, and aligning opportunities with personal and professional goals. Provided mentorship and advice on academic and professional development.",
  },
  {
    title: "Visiting Lecturer of English",
    company: "University Of Swat",
    location: "Swat, Pakistan",
    year: "2022 – 2024",
    description:
      "Engaged students in dynamic discussions on English literature and composition, fostering critical thinking and analytical skills. Developed lesson plans, assessments, and learning activities to enhance academic performance.",
  },
  {
    title: "Social Media Coordinator",
    company: "ibex Pakistan",
    location: "Islamabad, Pakistan",
    year: "2023",
    description:
      "Monitored analytics, optimized content based on trends, and improved audience engagement across platforms. Planned and executed campaigns to increase community interaction and brand visibility.",
  },
  {
    title: "Data Enumerator",
    company: "ICON",
    location: "Islamabad, Pakistan",
    year: "2023",
    description:
      "Conducted field surveys and interviews to collect accurate demographic data. Verified and organized data for reporting, contributing to reliable analysis and informed decision-making.",
  },
  {
    title: "English Teacher",
    company: "Green Sprout Academy",
    location: "Pakistan",
    year: "2020 – 2021",
    description:
      "Designed and implemented engaging lesson plans tailored to diverse learning styles. Monitored student progress and provided feedback to enhance academic performance and communication skills.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white max-w-6xl mx-auto w-full relative"
    >
      <div className="absolute top-20 left-0 w-32 h-32 bg-forest-100 rounded-full opacity-20 blur-3xl" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-700 mb-6 sm:mb-8 pb-4 border-b-2 border-burgundy-700 flex items-center gap-2 relative z-10">
        <span>💼</span> Professional Experience
      </h2>
      <div className="space-y-6 sm:space-y-8 relative z-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-burgundy-700 pl-4 sm:pl-6 pb-6 sm:pb-8 relative bg-white rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:scale-102 hover:-translate-y-1 transition-all duration-300 hover:bg-burgundy-50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute -left-3 top-5 w-6 h-6 bg-burgundy-700 rounded-full shadow-lg" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-forest-700 mb-1 flex items-center gap-2">
                  ⭐ {exp.title}
                </h3>
                <p className="text-burgundy-700 font-semibold text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-xs sm:text-sm text-forest-600">
                  📍 {exp.location}
                </p>
              </div>
              <span className="inline-block bg-burgundy-700 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap self-start sm:self-auto min-h-10 flex items-center shadow-lg">
                📅 {exp.year}
              </span>
            </div>
            <p className="text-sm sm:text-base text-forest-900 mt-3 sm:mt-4 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
