import { useLoaderData, useParams } from "react-router";
import useTitle from "../hooks/useTitle";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { toast } from "react-toastify";
import { addReadList, addWishList } from "../utils/localDB";

const BookDetails = () => {
  useTitle("Book Details | Book Vibe");

  const { bookParamsId } = useParams();
  const books = useLoaderData();

  const book = books.find((book) => book.bookId == bookParamsId);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const { readBooks, setReadBooks } = useContext(BooksContext);
  const isBookExistInRead = readBooks.some((b) => b.bookId === bookId);
  const handleAddToRead = () => {
    !isBookExistInRead &&
      (setReadBooks([...readBooks, book]),
      toast.success("The book added to read!"),
      addReadList(book));
  };

  const { wishList, setWishList } = useContext(BooksContext);
  const isBookExistInWishList = wishList.some((b) => b.bookId === bookId);
  const handleAddToWishList = () => {
    !isBookExistInWishList &&
      (setWishList([...wishList, book]),
      toast.success("The book added to wish list!"),
      addWishList(book));
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 bg-gray-50/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Container */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100/80 rounded-2xl p-10 md:p-16 flex justify-center items-center">
            <img
              src={image}
              alt={bookName}
              className="w-full max-w-72 drop-shadow-2xl transform transition-transform hover:scale-[1.03] duration-500"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            {/* Title and Author */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green/8 text-green font-medium rounded-full text-xs font-work-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-playfair-display text-content leading-tight">
                {bookName}
              </h1>
              <p className="text-base font-medium text-content/60 font-work-sans">
                By {author}
              </p>
            </div>

            <div className="my-5 border-t border-gray-100" />

            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-content/40 uppercase tracking-wider font-work-sans">
                Category
              </span>
              <span className="px-3 py-1 bg-gray-50 rounded-lg text-sm font-medium text-content/70 font-work-sans">
                {category}
              </span>
            </div>

            <div className="my-5 border-t border-gray-100" />

            {/* Review Section */}
            <div className="font-work-sans">
              <p className="text-xs font-semibold text-content/40 uppercase tracking-wider mb-2">
                Review
              </p>
              <p className="text-content/70 leading-relaxed text-sm">
                {review}
              </p>
            </div>

            <div className="my-5 border-t border-gray-100" />

            {/* Technical Specs Table */}
            <div className="grid grid-cols-2 gap-3 font-work-sans">
              {[
                { label: "Pages", value: totalPages },
                { label: "Publisher", value: publisher },
                { label: "Year", value: yearOfPublishing },
                { label: "Rating", value: `${rating} ★` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-xs text-content/40 font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="font-bold text-content text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 border ${
                  isBookExistInRead
                    ? "bg-content text-white border-content cursor-default"
                    : "border-gray-200 text-content hover:bg-content hover:text-white hover:border-content"
                }`}
                onClick={() => handleAddToRead()}
              >
                {isBookExistInRead ? "✓ Added to Read" : "Add to Read"}
              </button>
              <button
                className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 shadow-md ${
                  isBookExistInWishList
                    ? "bg-[#409db3] text-white cursor-default"
                    : "bg-[#50B1C9] hover:bg-[#409db3] text-white shadow-[#50B1C9]/30"
                }`}
                onClick={() => handleAddToWishList()}
              >
                {isBookExistInWishList
                  ? "✓ Added to Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
