import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import ContextProvider from "./context/ContextProvider";
import PagesToRead from "./pages/pages-to-read/PagesToRead";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./helper/ScrollToTop";
import Footer from "./components/shared/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <ContextProvider>
        <ScrollToTop />
        <Navbar />
        <Outlet>
          <Home />
          <ListedBooks />
          <PagesToRead />
          <NotFound />
        </Outlet>
        <Footer />
      </ContextProvider>
      <ToastContainer />
    </>
  );
};

export default App;
