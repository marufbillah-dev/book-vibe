import { BarChart3 } from "lucide-react";
import { Link } from "react-router";

const NoReadBooks = ({ message }) => {
  return (
    <section className="px-4 pt-24 pb-16 bg-gray-50/30 min-h-screen">
      <div className="lg:container mx-auto space-y-6">
        {/* Page Title */}
        <div className="text-center py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-content">
            Pages to Read
          </h2>
          <p className="text-content/50 font-work-sans text-sm mt-2">
            Your reading progress at a glance
          </p>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center p-10 md:p-16 min-h-80">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-5 border border-gray-100">
            <BarChart3 className="w-8 h-8 text-content/30" />
          </div>

          <h3 className="text-2xl font-bold font-playfair-display text-content mb-3">
            Chart Unavailable
          </h3>

          <p className="text-content/50 font-work-sans text-sm max-w-md mb-8 leading-relaxed">
            {message ||
              "We can only generate a 'Pages to Read' chart after you've marked books as 'Read' on your shelf. Start your reading journey to see your progress visualized!"}
          </p>

          <Link
            to="/listed-books"
            className="px-7 py-3 bg-green hover:bg-green-hover text-white rounded-lg font-bold text-sm transition-all duration-200 hover:shadow-md hover:shadow-green/20 active:scale-95"
          >
            View My Book List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoReadBooks;
