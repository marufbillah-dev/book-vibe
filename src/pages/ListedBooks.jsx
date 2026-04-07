import ListedBooksContainer from "../components/home/books/listed-books/ListedBooksContainer";
import useTitle from "../hooks/useTitle";

const ListedBooks = () => {
  useTitle("Listed Books | Book Vibe");
  return (
    <>
      <ListedBooksContainer />
    </>
  );
};

export default ListedBooks;
