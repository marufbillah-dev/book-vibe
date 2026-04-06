import BooksContainer from "../components/home/books/BooksContainer";
import Hero from "../components/home/Hero";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home | Book Vibe");

  return (
    <>
      <Hero />
      <BooksContainer />
    </>
  );
};

export default Home;
