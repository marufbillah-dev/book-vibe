import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/book-details/:bookParamsId",
        Component: BookDetails,
        loader: () => fetch("booksData.json"),
        HydrateFallback: () => <p>Loading...</p>,
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
    ],
  },
]);

export default router;
