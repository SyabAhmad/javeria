const skills = [
  "Technical & Academic Writing",
  "Business & Proposal Writing",
  "Research & Analysis",
  "Critical Thinking",
  "Effective Communication",
  "Public Speaking",
  "Mentorship & Guidance",
  "Team Leadership",
  "MS Word",
  "Excel",
  "PowerPoint",
  "Curriculum Design",
  "Content Editing & Proofreading",
  "Life Coaching",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="absolute -top-20 right-0 w-40 h-40 bg-burgundy-100 rounded-full opacity-20 blur-3xl" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-700 mb-6 sm:mb-8 pb-4 border-b-2 border-burgundy-700 flex items-center gap-2">
        <span>💡</span> Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-forest-50 text-forest-700 px-3 sm:px-4 py-3 sm:py-3 rounded-2xl text-xs sm:text-sm border-2 border-forest-200 text-center hover:border-burgundy-500 hover:shadow-lg hover:scale-105 hover:bg-forest-100 transition-all duration-300 font-medium cursor-pointer"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            ✓ {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
