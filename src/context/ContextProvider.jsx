import { useState } from "react";
import { BooksContext } from "./BooksContext";

const ContextProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const readBooksData = {
    readBooks,
    setReadBooks,
  };

  return (
    <BooksContext.Provider value={readBooksData}>
      {children}
    </BooksContext.Provider>
  );
};

export default ContextProvider;
