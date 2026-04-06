import Hero from "../components/home/Hero";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home | Book Vibe");

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
