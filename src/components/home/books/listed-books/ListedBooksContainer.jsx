import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBookCard from "./ListedBookCard";
import { useContext, useState } from "react";
import { BooksContext } from "../../../../context/BooksContext";

const ListedBooksContainer = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  const { filteredReadList, setFilteredReadList } = useContext(BooksContext);
  const { filteredWishList, setFilteredWishList } = useContext(BooksContext);

  const [activeTab, setActiveTab] = useState("Read Books");

  const handleTabChange = (index) => {
    if (index === 0) {
      setActiveTab("Read Books");
    } else {
      setActiveTab("Wishlist");
    }
  };

  const handleReadBooksSort = (e) => {
    const value = e.target.value;

    if (value === "default") {
      setFilteredReadList(readBooks);
    } else if (value === "rating") {
      const sortedData = [...readBooks].sort((a, b) => a.rating - b.rating);
      setFilteredReadList(sortedData);
    } else if (value === "pages") {
      const sortedData = [...readBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setFilteredReadList(sortedData);
    } else if (value === "year") {
      const sortedData = [...readBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing,
      );
      setFilteredReadList(sortedData);
    }
  };

  const handleWishListSort = (e) => {
    const value = e.target.value;

    if (value === "default") {
      setFilteredWishList(wishList);
    } else if (value === "rating") {
      const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
      setFilteredWishList(sortedData);
    } else if (value === "pages") {
      const sortedData = [...wishList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setFilteredWishList(sortedData);
    } else if (value === "year") {
      const sortedData = [...wishList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing,
      );
      setFilteredWishList(sortedData);
    }
  };

  return (
    <section className="px-4 mt-30">
      <div className="lg:container mx-auto space-y-10">
        {/* Title */}
        <div className="text-center py-9 bg-linear-to-br from-content/3 to-content/6 rounded-[2.5rem]">
          <h2 className="text-4xl text-content font-bold font-playfair-display">
            Books
          </h2>
        </div>

        {/* Sort Items */}
        <div className="text-center flex justify-center gap-3">
          <h3>Filter By:</h3>
          <select
            onChange={
              activeTab === "Read Books"
                ? handleReadBooksSort
                : handleWishListSort
            }
          >
            <option value="default">Default</option>
            <option value="rating">Ratings</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Published Year</option>
          </select>
        </div>

        {/* Listed Books Container */}
        <div className="">
          <div className="">
            <Tabs onSelect={handleTabChange}>
              <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
              </TabList>

              <TabPanel>
                <div className="flex flex-col gap-6">
                  {(filteredReadList.length ? filteredReadList : readBooks).map(
                    (book) => (
                      <ListedBookCard key={book.bookId} book={book} />
                    ),
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col gap-6">
                  {(filteredWishList.length ? filteredWishList : wishList).map(
                    (book) => (
                      <ListedBookCard key={book.bookId} book={book} />
                    ),
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedBooksContainer;
