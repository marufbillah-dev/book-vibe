import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Outlet>
          <Home />
          <ListedBooks />
        </Outlet>
      </ContextProvider>
    </>
  );
};

export default App;
