import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBookCard from "./ListedBookCard";
import { useContext } from "react";
import { BooksContext } from "../../../../context/BooksContext";

const ListedBooksContainer = () => {
  const { readBooks, wishList } = useContext(BooksContext);

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
        <div className="text-center">
          <select name="">
            <option defaultValue={"Sort By"} disabled>
              Sort By
            </option>
            <option value="">Ratings</option>
            <option value="">Number of Pages</option>
            <option value="">Published Year</option>
          </select>
        </div>

        {/* Listed Books Container */}
        <div className="">
          <div className="">
            <Tabs>
              <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
              </TabList>

              <TabPanel>
                <div className="flex flex-col gap-6">
                  {readBooks.map((book) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col gap-6">
                  {wishList.map((book) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
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
