import { useState } from "react";
import { BooksContext } from "./BooksContext";
import { getReadList, getWishList } from "../utils/localDB";

const ContextProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState(() => getReadList());
  const [wishList, setWishList] = useState(() => getWishList());
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
