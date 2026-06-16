import { useState } from "react";

const plans = [
  {
    name: "Quick Start",
    duration: "10 Days",
    price: "PKR 5,000",
    tagline: "Perfect for beginners",
    features: [
      "Basic grammar & vocabulary review",
      "Speaking & listening foundations",
      "IELTS/English overview",
      "Daily practice material",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    duration: "30 Days",
    price: "PKR 12,000",
    tagline: "Most popular choice",
    features: [
      "Comprehensive grammar & writing",
      "Full IELTS preparation (all modules)",
      "Reading & listening strategies",
      "Speaking practice with feedback",
      "Mock tests & progress tracking",
      "Personalized study plan",
    ],
    popular: true,
  },
  {
    name: "Mastery",
    duration: "6 Months",
    price: "PKR 50,000",
    tagline: "Complete transformation",
    features: [
      "Advanced academic writing & research",
      "Full IELTS mastery with guaranteed score",
      "Public speaking & presentation skills",
      "Business & professional writing",
      "One-on-one mentorship sessions",
      "Resume & interview preparation",
      "Unlimited email & WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Custom",
    duration: "Flexible",
    price: "Negotiable",
    tagline: "Tailored to your needs",
    features: [
      "Personalized curriculum design",
      "Flexible schedule & duration",
      "Focus on specific skill areas",
      "Corporate & group packages available",
      "Dedicated instructor",
      "Regular assessments & reports",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "IELTS Candidate",
    text: "Javeria's training transformed my English skills. I went from a band 5.5 to 7.5 in just two months. The structured approach and personalized feedback made all the difference.",
    score: "IELTS 7.5",
  },
  {
    name: "Usman Ali",
    role: "University Applicant",
    text: "The academic writing course was exactly what I needed for my university applications. Javeria's attention to detail and constructive feedback helped me craft compelling essays.",
    score: "Accepted at 3 universities",
  },
  {
    name: "Fatima Ahmed",
    role: "Professional",
    text: "I needed to improve my business English for work. The custom training plan was tailored to my industry and schedule. My confidence in presentations has grown tremendously.",
    score: "Promoted within 3 months",
  },
];

const faqs = [
  {
    q: "How are the classes conducted?",
    a: "Classes are conducted online via Zoom or Google Meet, making it convenient for students from anywhere. In-person sessions can also be arranged in Rawalpindi/Islamabad upon request.",
  },
  {
    q: "Do you offer a free trial class?",
    a: "Yes, we offer a free 30-minute consultation session to assess your current level, discuss your goals, and recommend the best plan for you.",
  },
  {
    q: "Can I switch plans after enrolling?",
    a: "Absolutely. You can upgrade or customize your plan at any time. We will adjust the remaining fee accordingly.",
  },
  {
    q: "Are the prices really negotiable?",
    a: "Yes. We understand every student has a different budget. Fill out the enrollment form and we will work out a plan that fits your financial situation without compromising on quality.",
  },
  {
    q: "What is the class schedule like?",
    a: "Schedules are flexible. We offer morning, afternoon, and evening slots. You can choose the days and timings that work best for you.",
  },
  {
    q: "Do you provide study material?",
    a: "Yes, all necessary study material, practice tests, and resources are provided as part of the program. You don't need to purchase anything separately.",
  },
];

const GOOGLE_FORM_URL = "https://forms.google.com/your-form-id";

const planKeys = ["quickstart", "standard", "mastery", "custom"];

const execution = [
  {
    plan: "Quick Start",
    phases: [
      { week: "Days 1\u20133", title: "Foundation", activities: ["Daily vocab drills", "Grammar warm-up exercises", "Basic speaking practice", "Listening foundations"] },
      { week: "Days 4\u20136", title: "Skill Building", activities: ["Daily mini-tests", "Listening comprehension tasks", "Reading exercises", "Pronunciation drills"] },
      { week: "Days 7\u20138", title: "Writing & Speaking", activities: ["Essay writing practice", "Recorded speaking tasks", "Personalized feedback session", "Vocabulary review"] },
      { week: "Days 9\u201310", title: "Mock & Review", activities: ["Full IELTS mock test", "Speaking interview simulation", "Results discussion", "Improvement plan & certificate"] },
    ],
  },
  {
    plan: "Standard",
    phases: [
      { week: "Week 1", title: "Foundations & Assessment", activities: ["Diagnostic test & goal setting", "Daily grammar & vocab", "Speaking assessment", "WhatsApp support begins"] },
      { week: "Week 2", title: "IELTS Module Focus", activities: ["Timed reading & listening practice", "Writing task 1 & 2 drills", "Speaking cue card practice", "Weekly progress test"] },
      { week: "Week 3", title: "Intensive Practice", activities: ["Daily speaking sessions", "Essay reviews & rewrites", "Listening & reading mocks", "Second weekly test"] },
      { week: "Week 4", title: "Final Prep", activities: ["Full mock exams (x2)", "Speaking interview mock", "Final feedback session", "Results & certificate"] },
    ],
  },
  {
    plan: "Mastery",
    phases: [
      { week: "Month 1", title: "Advanced Foundations", activities: ["Complex grammar & academic vocab", "Research writing", "Critical analysis exercises", "Baseline assessment"] },
      { week: "Month 2", title: "IELTS Deep Dive", activities: ["All modules intensive", "Weekly mock tests", "Strategy refinement", "Weak area targeting"] },
      { week: "Month 3", title: "Speaking & Presentation", activities: ["Weekly debates", "Recorded presentations", "Public speaking drills", "Peer review sessions"] },
      { week: "Month 4", title: "Professional Writing", activities: ["Business English", "Report & email writing", "Formal communication", "Resume & cover letter"] },
      { week: "Month 5", title: "Mock Exams & Interviews", activities: ["Full IELTS mocks (weekly)", "One-on-one interview prep", "Progress review meetings", "Score tracking"] },
      { week: "Month 6", title: "Final Polish", activities: ["Weak area focus", "Final mock exam", "Score guarantee assessment", "Certification & grad"] },
    ],
  },
  {
    plan: "Custom",
    phases: [
      { week: "Flexible", title: "Needs Assessment", activities: ["Goal-setting consultation", "Current level evaluation", "Custom curriculum design", "Schedule planning"] },
      { week: "Flexible", title: "Core Modules", activities: ["Selected skill focus", "Adaptive pace & difficulty", "Regular check-ins", "Progress tracking"] },
      { week: "Flexible", title: "Advanced Work", activities: ["Specialized topics", "Corporate/group sessions", "Intensive practice", "Mentorship sessions"] },
      { week: "Flexible", title: "Final Evaluation", activities: ["Customized mock tests", "Goal achievement review", "Feedback & recommendations", "Ongoing support option"] },
    ],
  },
];

export default function TrainingPage() {
  const [activePlan, setActivePlan] = useState(0);
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/80 via-forest-800/70 to-forest-700/60" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Warm glow left */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        {/* Cool glow right */}
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

        {/* Decorative abstract shapes at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 opacity-[0.07]">
          <svg viewBox="0 0 800 120" fill="none" className="w-full h-full">
            <ellipse cx="200" cy="60" rx="120" ry="40" fill="white" />
            <ellipse cx="600" cy="50" rx="100" ry="35" fill="white" />
            <ellipse cx="400" cy="70" rx="140" ry="30" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-24 sm:py-28 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left — Headline */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-white/70 text-xs sm:text-sm font-medium tracking-wide">
                  Enrollments Open for 2026
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-display">
                Master English &amp;<br />
                <span className="text-amber-400">Excel in IELTS</span>
              </h1>
            </div>

            {/* Right — Text + CTA */}
            <div className="animate-fade-in-up"
              style={{ animationDelay: "150ms" }}>
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                Expert-led training programs designed to help you achieve your target IELTS score
                and communicate with confidence in English — whether for study, work, or personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-forest-900 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.98]">
                  View Programs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]">
                  Enroll Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 px-5 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-center !mb-4 font-display italic">
            <span className="inline-block">Choose Your Program</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-forest-800/70 max-w-2xl mx-auto">
            Structured programs designed to help you achieve your English language goals.
            From crash courses to comprehensive mastery &mdash; find the plan that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-xl border transition-all duration-200 hover:shadow-card-hover flex flex-col ${
                plan.popular
                  ? "border-forest-700 bg-white shadow-card ring-1 ring-forest-700/10"
                  : "border-forest-100 bg-white shadow-card hover:border-forest-200"
              }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-forest-900 text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-forest-700 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-burgundy-700 font-semibold uppercase tracking-wider">
                    {plan.duration}
                  </p>
                  <p className="text-xs text-forest-500/70 mt-1 italic">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-5">
                  <span className="text-2xl sm:text-3xl font-bold text-forest-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-forest-500/70 ml-2">
                    {plan.duration === "Flexible" ? "" : "total"}
                  </span>
                  <div className="mt-1">
                    <span className="text-xs text-forest-500/60 italic">
                      * Negotiable
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-forest-800/70">
                      <svg className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
                  className={`block text-center font-semibold px-5 py-3 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-forest-700 text-white hover:bg-forest-800 hover:shadow-lg"
                      : "border-2 border-forest-700 text-forest-700 hover:bg-forest-50 hover:shadow-md"
                  }`}>
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-forest-500/70 bg-forest-50/60 rounded-full px-5 py-2.5 border border-forest-100">
            <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All prices are negotiable. Fill out the form and we will tailor a plan that fits your budget and learning needs.
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 px-5 md:px-8 bg-ivory-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-center !mb-4 font-display italic">
              <span className="inline-block">How Each Plan Works</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-forest-800/70 max-w-2xl mx-auto">
              Preview the first phase &mdash; enroll to unlock the full execution plan.
            </p>
          </div>

          {/* Plan tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {plans.map((plan, i) => (
              <button key={plan.name} onClick={() => setActivePlan(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activePlan === i
                    ? "bg-forest-700 text-white shadow-md"
                    : "bg-white text-forest-700 border border-forest-200 hover:border-forest-400"
                }`}>
                {plan.name}
              </button>
            ))}
          </div>

          {/* Execution timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {execution[activePlan].phases.map((phase, i) => {
              const locked = i > 0;
              return (
              <div key={i}
                className={`relative bg-white rounded-xl shadow-card border p-6 transition-all duration-200 ${
                  locked ? "border-forest-100 select-none" : "border-forest-200 hover:shadow-card-hover"
                }`}>
                {locked && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-xl z-10 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-6 h-6 text-forest-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0h-2m2-6a4 4 0 00-4 4v1h8v-1a4 4 0 00-4-4z" />
                      </svg>
                      <p className="text-xs text-forest-400 font-medium">Enroll to reveal</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    locked ? "bg-forest-100 text-forest-400" : "bg-forest-700 text-white"
                  }`}>
                    {phase.week}
                  </span>
                  <h3 className={`text-base font-bold ${locked ? "text-forest-300" : "text-forest-800"}`}>
                    {phase.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((a) => (
                    <li key={a} className={`flex items-start gap-2.5 text-sm ${locked ? "text-forest-300" : "text-forest-700/80"}`}>
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${locked ? "text-forest-200" : "text-forest-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="py-20 px-5 md:px-8 bg-ivory-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-center !mb-4 font-display italic">
              <span className="inline-block">Success Stories</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-forest-600/70 max-w-2xl mx-auto">
              Real results from real students who trusted our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name}
                className="bg-white rounded-xl shadow-card border border-forest-100 p-6 sm:p-7 hover:shadow-card-hover hover:border-forest-200 transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-forest-700/80 leading-relaxed mb-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-forest-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-forest-800">{t.name}</p>
                    <p className="text-xs text-forest-500/60">{t.role}</p>
                  </div>
                  <span className="bg-forest-700 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {t.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section id="faqs" className="py-20 px-5 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-center !mb-4 font-display italic">
            <span className="inline-block">Frequently Asked Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-forest-800/70 max-w-2xl mx-auto">
            Everything you need to know about our training programs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <details key={i}
              className="group bg-white rounded-xl border border-forest-100 shadow-card hover:shadow-card-hover transition-all duration-200 open:border-forest-700/30 open:ring-1 open:ring-forest-700/5">
              <summary className="flex items-center justify-between px-5 sm:px-6 py-4 cursor-pointer list-none">
                <span className="text-sm sm:text-base font-semibold text-forest-800 pr-4">
                  {faq.q}
                </span>
                <svg className="w-4 h-4 text-forest-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 sm:px-6 pb-4">
                <p className="text-sm text-forest-600/80 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-forest-500/70 mb-4">
            Still have questions? Reach out and we'll be happy to help.
          </p>
          <a href="mailto:jiyamoonshine76@gmail.com"
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-[0.98]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Ask a Question
          </a>
        </div>
      </section>
    </div>
  );
}
