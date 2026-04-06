import { BarChart3 } from "lucide-react";
import { Link } from "react-router";

const NoReadBooks = ({ message }) => {
  return (
    <section className="container mx-auto px-4 py-10 mt-20">
      {/* Chart Title Container - Matching the design reference */}
      <div className="bg-content/5 rounded-2xl py-8 mb-8 border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-content font-playfair-display">
          Pages to Read Chart
        </h1>
      </div>

      {/* Main Empty State Content */}
      <div className="bg-content/3 rounded-[2.5rem] border border-gray-100 min-h-125 flex flex-col items-center justify-center text-center p-8 md:p-12">
        {/* Decorative Circle Icon */}
        <div className="w-24 h-24 bg-content/5 rounded-full flex items-center justify-center mb-8 border border-gray-100">
          <BarChart3 className="w-12 h-12 text-content/40" />
        </div>

        {/* Text and Title */}
        <h2 className="text-3xl font-bold font-playfair-display text-content mb-4">
          Chart Unavailable
        </h2>

        <p className="text-xl text-content/70 font-work-sans max-w-xl mb-12 leading-relaxed">
          {message ||
            "We can only generate a 'Pages to Read' chart after you've marked books as 'Read' on your shelf. Start your reading journey to see your progress visualized!"}
        </p>

        {/* Action Button - Go to Listed Books (where they can add to 'Read') */}
        <Link
          to="/listed-books"
          className="px-10 py-4 bg-green hover:bg-green-hover text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-green/20"
        >
          View My Book List
        </Link>
      </div>
    </section>
  );
};

export default NoReadBooks;
