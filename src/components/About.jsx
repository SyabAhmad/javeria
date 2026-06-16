export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title font-display italic">About Me</h2>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 space-y-5">
            <div className="bg-forest-50/60 rounded-xl border border-forest-100 p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg text-forest-800 leading-relaxed">
                I am an experienced professional in{" "}
                <span className="font-semibold text-forest-700">English Literature and Language</span>{" "}
                with strong skills in teaching, leadership, and team management. I specialize in writing,
                communication, research, and helping students grow.
              </p>
              <p className="text-base sm:text-lg text-forest-800 leading-relaxed mt-5">
                I have guided learners through mentorship, curriculum planning, and educational strategy,
                supporting them to reach their goals and develop confidence and critical thinking. I focus
                on clear, practical, and effective teaching, encouraging students to express themselves
                and learn deeply.
              </p>
              <p className="text-base sm:text-lg text-forest-800 leading-relaxed mt-5">
                I am passionate about teaching, writing, and sharing knowledge, and I am looking for
                opportunities to contribute my skills in{" "}
                <span className="font-semibold text-forest-700">English literature, writing, and educational leadership</span>{" "}
                to help students and institutions succeed.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-forest-700/10 rounded-2xl blur-xl" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden ring-4 ring-forest-100 shadow-xl">
                <img
                  src="/jw.png"
                  alt="Javeria Wahab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-burgundy-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                M.Phil English Literature
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
