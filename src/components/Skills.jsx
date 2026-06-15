const skillCategories = [
  {
    category: "Writing & Research",
    skills: [
      "Technical & Academic Writing",
      "Business & Proposal Writing",
      "Research & Analysis",
      "Content Editing & Proofreading",
      "Copywriting",
    ],
  },
  {
    category: "Leadership & Management",
    skills: [
      "Executive Management",
      "Team Leadership",
      "Supervisory Skills",
      "Office Administration",
      "Administrative Assistance",
      "Problem Solving",
    ],
  },
  {
    category: "Communication & Mentorship",
    skills: [
      "Effective Communication",
      "Public Speaking",
      "Career Development Coaching",
      "Mentorship & Guidance",
      "Critical Thinking",
      "Life Coaching",
    ],
  },
  {
    category: "Technical Proficiency",
    skills: [
      "MS Word",
      "Excel",
      "PowerPoint",
      "Curriculum Design",
      "Negotiation",
      "Team Building",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-title font-display italic">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="card">
            <h3 className="text-sm font-semibold text-burgundy-700 uppercase tracking-wider mb-4">
              {cat.category}
            </h3>
            <ul className="space-y-2.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 text-sm text-forest-800/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-500 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
