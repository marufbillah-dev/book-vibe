import { use } from "react";
import BookCard from "./BookCard";

const booksDataPromise = fetch("/booksData.json").then((response) =>
  response.json(),
);

const BooksContainer = () => {
  const books = use(booksDataPromise);

  return (
    <section className="px-4 py-16" id="books">
      <div className="lg:container mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl text-content font-bold font-playfair-display">
            Browse Books
          </h2>
          <p className="text-content/50 font-work-sans text-base">
            Explore our curated collection
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksContainer;
