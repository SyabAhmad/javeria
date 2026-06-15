const experiences = [
  {
    title: "Vice Principal",
    company: "Darearqam",
    location: "Phool Nagar, Pakistan",
    year: "Feb 2026 \u2013 Present",
    description:
      "Oversee academic and administrative operations to ensure high standards of teaching, discipline, and institutional performance. Support the Principal in strategic planning, faculty supervision, and implementation of curriculum policies. Coordinate with teachers, parents, and management to maintain a productive learning environment. Lead faculty development initiatives, monitor classroom quality, and ensure compliance with academic regulations and institutional standards.",
  },
  {
    title: "Freelance Writer & Editor",
    company: "Freelance",
    location: "Remote",
    year: "Feb 2024 \u2013 Present",
    description:
      "Provide high-quality writing, editing, and proofreading services for academic, professional, and business content. Specialize in technical writing, business writing, copywriting, and research-based materials, ensuring clarity, structure, and precision in every project. Offer mentorship and guidance for effective written communication.",
  },
  {
    title: "Career Advisor & Teacher",
    company: "SKANS Institute of Technology",
    location: "Pakistan",
    year: "Feb 2024 \u2013 Jun 2024",
    description:
      "Guided students and professionals in identifying strengths, exploring career paths, and aligning opportunities with personal and professional goals. Provided mentorship and advice on academic and professional development.",
  },
  {
    title: "Visiting Lecturer of English",
    company: "University of Swat",
    location: "Swat, Pakistan",
    year: "Apr 2022 \u2013 May 2024",
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
    year: "2020 \u2013 2021",
    description:
      "Designed and implemented engaging lesson plans tailored to diverse learning styles. Monitored student progress and provided feedback to enhance academic performance and communication skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-title font-display italic">Professional Experience</h2>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest-200 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}>

                  {/* Dot on central line */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-forest-700 ring-4 ring-white z-10 mt-6" />

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white rounded-xl shadow-card border border-forest-100 p-5 sm:p-6 hover:shadow-card-hover hover:border-forest-200 transition-all duration-200">
                      <span className="inline-block bg-forest-700 text-white px-3 py-1 rounded-md text-xs font-semibold mb-3">
                        {exp.year}
                      </span>

                      <h3 className="text-lg sm:text-xl font-bold text-forest-800 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-burgundy-700 font-semibold text-sm sm:text-base">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-forest-500/70 mb-3">
                        {exp.location}
                      </p>
                      <p className="text-sm sm:text-base text-forest-700/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
