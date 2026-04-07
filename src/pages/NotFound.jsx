import { Link } from "react-router";
import { BookX } from "lucide-react";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useTitle("404 | Book Vibe");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50/30">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookX className="w-10 h-10 text-green" />
        </div>

        {/* 404 */}
        <p className="text-8xl font-extrabold font-playfair-display text-content/10 leading-none mb-2">
          404
        </p>

        <h1 className="text-2xl font-bold font-playfair-display text-content mb-3">
          Page Not Found
        </h1>
        <p className="text-content/50 font-work-sans text-sm leading-relaxed mb-8">
          Looks like this page went missing from the shelf. The path you're
          looking for doesn't exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 bg-green hover:bg-green-hover text-white rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-md hover:shadow-green/20 active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            to="/listed-books"
            className="px-6 py-2.5 border border-gray-200 hover:border-green hover:text-green text-content/60 rounded-lg text-sm font-bold transition-all duration-200 active:scale-95"
          >
            My Book List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
