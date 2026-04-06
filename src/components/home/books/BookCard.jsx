import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="group bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 hover:border-gray-200">
        {/* Image Container */}
        <div className="bg-gray-50 rounded-xl flex items-center justify-center py-8 mb-5 overflow-hidden">
          <img
            src={image}
            alt={bookName}
            className="h-40 md:h-52 object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green/8 text-green font-medium rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold font-playfair-display text-content line-clamp-1 group-hover:text-green transition-colors duration-200">
            {bookName}
          </h3>
          <p className="text-content/60 text-sm font-work-sans">
            By {author}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-gray-150" />

        {/* Footer Info */}
        <div className="flex justify-between items-center text-content/70 font-work-sans text-sm font-medium">
          <span className="px-2.5 py-1 bg-gray-50 rounded-lg text-content/60">{category}</span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-content/80">{rating}</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
