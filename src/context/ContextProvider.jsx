import { useState } from "react";
import { BooksContext } from "./BooksContext";

const ContextProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [filteredReadList, setFilteredReadList] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState([]);

  const value = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
    filteredReadList,
    setFilteredReadList,
    filteredWishList,
    setFilteredWishList,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default ContextProvider;
