const getReadList = () => {
  const readList = localStorage.getItem("readList");

  if (readList) return JSON.parse(readList);

  return [];
};

const addReadList = (book) => {
  const allBooks = getReadList();

  const isAlreadyExist = allBooks.some((b) => b.bookId === book.bookId);

  if (!isAlreadyExist) {
    allBooks.push(book);
  }

  localStorage.setItem("readList", JSON.stringify(allBooks));
};

const getWishList = () => {
  const wishList = localStorage.getItem("wishList");

  if (wishList) return JSON.parse(wishList);

  return [];
};

const addWishList = (book) => {
  const allBooks = getWishList();

  const isAlreadyExist = allBooks.some((b) => b.bookId === book.bookId);

  if (!isAlreadyExist) {
    allBooks.push(book);
  }

  localStorage.setItem("wishList", JSON.stringify(allBooks));
};

export { getReadList, addReadList, getWishList, addWishList };
