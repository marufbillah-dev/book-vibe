import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const EmptyState = ({ message }) => {
  return (
    <div className="min-h-72 flex flex-col items-center justify-center text-center px-6 py-12 bg-gray-50/60 rounded-xl border border-dashed border-gray-200">
      {/* Icon Circle */}
      <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mb-5">
        <BookOpen className="w-8 h-8 text-green" />
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold font-playfair-display text-content mb-2">
        No Books Found
      </h3>
      <p className="text-content/50 font-work-sans text-sm max-w-sm mb-6 leading-relaxed">
        {message ||
          "It looks like your list is currently empty. Start exploring our collection to add your favorite books here!"}
      </p>

      {/* Action Button */}
      <Link
        to={"/"}
        className="px-6 py-2.5 bg-green hover:bg-green-hover text-white rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-md hover:shadow-green/20 active:scale-95"
      >
        Browse Books
      </Link>
    </div>
  );
};

export default EmptyState;
