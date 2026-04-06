import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import ContextProvider from "./context/ContextProvider";
import PagesToRead from "./pages/pages-to-read/PagesToRead";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Outlet>
          <Home />
          <ListedBooks />
          <PagesToRead />
        </Outlet>
      </ContextProvider>
      <ToastContainer />
    </>
  );
};

export default App;
