import { MapPin, Users, FileText, Trash2 } from "lucide-react";
import { useContext } from "react";
import { BooksContext } from "../../../../context/BooksContext";
import { removeReadList, removeWishList } from "../../../../utils/localDB";
import { Link } from "react-router";

const ListedBookCard = ({ book, listType }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
    tags,
  } = book;

  const { readBooks, setReadBooks, wishList, setWishList } =
    useContext(BooksContext);

  const handleDelete = () => {
    if (listType === "read") {
      removeReadList(bookId);
      setReadBooks(readBooks.filter((b) => b.bookId !== bookId));
    } else {
      removeWishList(bookId);
      setWishList(wishList.filter((b) => b.bookId !== bookId));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 border border-gray-100 rounded-xl bg-white hover:border-gray-200 hover:shadow-md transition-all duration-200">
      {/* Left: Image */}
      <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center min-w-48 shrink-0">
        <img src={image} alt={bookName} className="h-36 object-contain" />
      </div>

      {/* Right: Content */}
      <div className="flex-1 space-y-3 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold font-playfair-display text-content leading-snug">
              {bookName}
            </h2>
            <p className="text-sm font-medium text-content/60 font-work-sans mt-1">
              By {author}
            </p>
          </div>
          {/* Delete Button */}
          <button
            onClick={handleDelete}
            aria-label="Remove book"
            className="shrink-0 p-2 rounded-lg text-content/30 hover:text-red-500 hover:bg-red-50 transition-all duration-200 active:scale-90"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Tags and Year */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-content/40 uppercase tracking-wider">
              Tags
            </span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-0.5 bg-green/8 text-green rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-content/50 text-xs font-work-sans">
            <MapPin className="w-3.5 h-3.5" />
            <span>{yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher and Pages */}
        <div className="flex flex-wrap gap-4 text-content/50 text-xs border-b border-gray-100 pb-3 font-work-sans">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{publisher}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>{totalPages} pages</span>
          </div>
        </div>

        {/* Badges and Action */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-xs font-semibold">
            {category}
          </span>
          <span className="px-3 py-1 bg-amber-50 text-amber-500 rounded-full text-xs font-semibold">
            ★ {rating}
          </span>
          <Link to={`/book-details/${bookId}`}>
            <button className="px-4 py-1.5 bg-green hover:bg-green-hover text-white rounded-full text-xs font-semibold transition-all duration-200 hover:shadow-md hover:shadow-green/20 active:scale-95 ml-auto">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
