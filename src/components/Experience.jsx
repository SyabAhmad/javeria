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
      <div className="relative ml-3 md:ml-5">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-burgundy-200" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              <div className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-burgundy-700 ring-4 ring-white group-hover:ring-burgundy-50 transition-all duration-200" />

              <div className="bg-forest-50/40 rounded-xl p-5 sm:p-6 border border-forest-100/60 hover:border-forest-200 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-forest-700">
                      {exp.title}
                    </h3>
                    <p className="text-burgundy-700 font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm text-forest-600/70 mt-0.5">
                      {exp.location}
                    </p>
                  </div>
                  <span className="inline-block bg-forest-700 text-white px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap self-start sm:mt-1">
                    {exp.year}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-forest-800/80 leading-relaxed">
                  {exp.description}
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
