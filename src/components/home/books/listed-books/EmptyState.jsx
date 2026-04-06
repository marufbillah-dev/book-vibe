import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const EmptyState = ({ message }) => {
  return (
    <div className="min-h-100 flex flex-col items-center justify-center text-center px-4 bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200">
      {/* Icon Circle */}
      <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mb-6">
        <BookOpen className="w-10 h-10 text-green" />
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold font-playfair-display text-content mb-2">
        No Books Found
      </h3>
      <p className="text-content/60 font-work-sans max-w-md mb-8">
        {message ||
          "It looks like your list is currently empty. Start exploring our collection to add your favorite books here!"}
      </p>

      {/* Action Button */}
      <Link
        to={"/"}
        className="px-8 py-3 bg-green hover:bg-green-hover text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
      >
        Browse Books
      </Link>
    </div>
  );
};

export default EmptyState;
