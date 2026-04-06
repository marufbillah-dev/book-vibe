import { use } from "react";
import BookCard from "./BookCard";

const booksDataPromise = fetch("/booksData.json").then((response) =>
  response.json(),
);

const BooksContainer = () => {
  const books = use(booksDataPromise);

  return (
    <section className="px-4 py-10" id="books">
      <div className="lg:container mx-auto space-y-9">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl text-content font-bold font-playfair-display">
            Books
          </h2>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksContainer;
