import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
        <ListedBooks />
      </Outlet>
    </>
  );
};

export default App;
