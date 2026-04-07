import ListedBookCard from "./ListedBookCard";
import { useContext, useState, useRef, useEffect } from "react";
import { BooksContext } from "../../../../context/BooksContext";
import EmptyState from "./EmptyState";
import { ChevronDown, Check } from "lucide-react";
import { useSearchParams } from "react-router";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "rating", label: "Ratings" },
  { value: "pages", label: "Number of Pages" },
  { value: "year", label: "Published Year" },
];

const ListedBooksContainer = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  const { filteredReadList, setFilteredReadList } = useContext(BooksContext);
  const { filteredWishList, setFilteredWishList } = useContext(BooksContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab =
    searchParams.get("tab") === "wish" ? "Wishlist" : "Read Books";
  const [sortValue, setSortValue] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSortChange = (value) => {
    setSortValue(value);
    setDropdownOpen(false);
    const fakeEvent = { target: { value } };
    if (activeTab === "Read Books") {
      handleReadBooksSort(fakeEvent);
    } else {
      handleWishListSort(fakeEvent);
    }
  };

  const handleTabChange = (index) => {
    setSearchParams({ tab: index === 0 ? "read" : "wish" });
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
    <section className="px-4 pt-24 pb-16 bg-gray-50/30 min-h-screen">
      <div className="lg:container mx-auto space-y-8">
        {/* Title */}
        <div className="text-center py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl text-content font-bold font-playfair-display">
            My Book Collection
          </h2>
          <p className="text-content/50 font-work-sans text-sm mt-2">
            Manage your reading list and wishlist
          </p>
        </div>

        {/* Sort Items */}
        <div className="flex items-center justify-end gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
          <label className="text-sm font-semibold text-content/50 font-work-sans">
            Sort by:
          </label>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-2 text-sm font-semibold text-content bg-gray-50 border border-gray-200 rounded-lg px-4 py-1.5 hover:border-green hover:bg-green/5 hover:text-green transition-all duration-200 focus:outline-none min-w-40 justify-between font-work-sans"
            >
              <span>
                {SORT_OPTIONS.find((o) => o.value === sortValue)?.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-20 py-1.5 overflow-hidden font-work-sans">
                {SORT_OPTIONS.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => handleSortChange(option.value)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150 ${
                        sortValue === option.value
                          ? "text-green bg-green/5 font-semibold"
                          : "text-content/70 hover:bg-gray-50 hover:text-content font-medium"
                      }`}
                    >
                      {option.label}
                      {sortValue === option.value && (
                        <Check className="w-3.5 h-3.5 text-green" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Listed Books Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Custom Tab Bar */}
          <div className="flex border-b border-gray-100">
            {["Read Books", "Wishlist Books"].map((tab, index) => {
              const isActive =
                activeTab === (index === 0 ? "Read Books" : "Wishlist");
              const count = index === 0 ? readBooks.length : wishList.length;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(index)}
                  className={`relative flex items-center gap-2 px-6 py-4 text-sm font-semibold font-work-sans transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "text-green"
                      : "text-content/50 hover:text-content/80"
                  }`}
                >
                  {tab}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-green/10 text-green"
                        : "bg-gray-100 text-content/40"
                    }`}
                  >
                    {count}
                  </span>
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-5 md:p-7">
            {activeTab === "Read Books" ? (
              <div className="flex flex-col gap-4">
                {readBooks.length ? (
                  (filteredReadList.length ? filteredReadList : readBooks).map(
                    (book) => (
                      <ListedBookCard
                        key={book.bookId}
                        book={book}
                        listType="read"
                      />
                    ),
                  )
                ) : (
                  <EmptyState message="You haven't marked any books as 'Read' yet. Finish a book and add it here!" />
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {wishList.length ? (
                  (filteredWishList.length ? filteredWishList : wishList).map(
                    (book) => (
                      <ListedBookCard
                        key={book.bookId}
                        book={book}
                        listType="wish"
                      />
                    ),
                  )
                ) : (
                  <EmptyState message="Your wishlist is empty. Save books you want to read later!" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedBooksContainer;
