import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="group bg-white border border-gray-100 rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Container */}
        <div className="bg-[#F3F3F3] rounded-2xl flex items-center justify-center py-8 mb-6 overflow-hidden">
          <img
            src={image}
            alt={bookName}
            className="h-44 md:h-56 object-contain transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-green/5 text-green font-medium rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-playfair-display text-content line-clamp-1">
            {bookName}
          </h3>
          <p className="text-content/80 font-medium font-work-sans">
            By : {author}
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-gray-200" />

        {/* Footer Info */}
        <div className="flex justify-between items-center text-content/80 font-work-sans font-medium">
          <span>{category}</span>
          <div className="flex items-center gap-2">
            <span>{rating}</span>
            <Star className="w-5 h-5 text-content/70 fill-none" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
