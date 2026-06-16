import { useState } from "react";
import { Link } from "react-router-dom";
import allEntries from "../data/leaderboard";
import successes from "../data/successStories";

export default function ResultsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = allEntries.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <img src="/results-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/70 via-forest-800/60 to-forest-700/50" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/70 text-xs sm:text-sm font-medium tracking-wide">
              Our Student Results
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 font-display">
            Results That <span className="text-amber-400">Speak</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Real scores from real students. See what our learners have achieved through dedicated training.
          </p>
        </div>
      </section>

      {/* ===== LEADERBOARD ===== */}
      <section className="py-20 px-5 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-center !mb-4 font-display italic">
            <span className="inline-block">Top Scorers Leaderboard</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-forest-800/70 max-w-2xl mx-auto">
            Our students consistently achieve outstanding IELTS results.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search by name..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-forest-200 bg-white text-sm text-forest-800 placeholder-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200" />
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-forest-100 overflow-hidden">
          {/* Header row */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-forest-700 text-white text-sm font-semibold">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Name</div>
            <div className="col-span-2 text-center">Band</div>
            <div className="col-span-3 text-right">Achievement</div>
          </div>

          <div className="divide-y divide-forest-100">
            {paginated.length === 0 ? (
              <div className="px-6 py-10 text-center text-sm text-forest-400">
                No results found for &ldquo;{search}&rdquo;
              </div>
            ) : (
              paginated.map((s) => (
                <div key={s.rank}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center text-sm transition-colors duration-200 ${
                    s.rank === 1 ? "bg-amber-50" : "hover:bg-forest-50/50"
                  }`}>
                  <div className="col-span-1">
                    {s.rank === 1 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold">1</span>
                    ) : s.rank === 2 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-forest-300 text-white text-xs font-bold">2</span>
                    ) : s.rank === 3 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700 text-white text-xs font-bold">3</span>
                    ) : (
                      <span className="text-forest-400 font-bold">{s.rank}</span>
                    )}
                  </div>
                  <div className="col-span-6 font-semibold text-forest-800">
                    {s.name}
                  </div>
                  <div className="col-span-2 text-center">
                    <span className={`inline-block font-bold text-lg ${
                      parseFloat(s.score) >= 7.5
                        ? "text-forest-700"
                        : parseFloat(s.score) >= 6.5
                        ? "text-forest-600"
                        : "text-forest-500"
                    }`}>
                      {s.score}
                    </span>
                  </div>
                  <div className="col-span-3 text-right text-forest-500/70 text-xs sm:text-sm">
                    {s.achievement}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
              className="px-3 py-1.5 rounded-lg text-sm font-medium border border-forest-200 text-forest-600 hover:bg-forest-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200">
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  p === page
                    ? "bg-forest-700 text-white shadow-sm"
                    : "text-forest-600 hover:bg-forest-50 border border-forest-200"
                }`}>
                {p}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg text-sm font-medium border border-forest-200 text-forest-600 hover:bg-forest-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200">
              Next
            </button>
          </div>
        )}

        <p className="text-center text-xs text-forest-500/60 mt-6">
          Scores verified and updated regularly. Join our next batch to see your name here.
        </p>
      </section>

      {/* ===== SUCCESS GALLERY ===== */}
      <section className="py-20 px-5 md:px-8 bg-ivory-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-center !mb-4 font-display italic">
              <span className="inline-block">Student Success Gallery</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-forest-800/70 max-w-2xl mx-auto">
              Meet our students who achieved their goals through dedication and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successes.map((s) => (
              <div key={s.name}
                className="bg-white rounded-xl shadow-card border border-forest-100 p-6 sm:p-7 hover:shadow-card-hover hover:border-forest-200 transition-all duration-200 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-forest-200">
                    {s.img ? (
                      <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-forest-500 font-bold text-lg">
                        {s.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-forest-800 text-sm sm:text-base">
                      {s.name}
                    </h3>
                    <span className="bg-forest-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {s.score}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-forest-700/80 leading-relaxed flex-1 italic">
                  &ldquo;{s.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/training"
              className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-[0.98]">
              Start Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
