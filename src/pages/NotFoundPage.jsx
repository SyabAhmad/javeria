import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 text-forest-700 text-2xl font-bold mb-6">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-forest-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-forest-500/80 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/"
          className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-[0.98]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
