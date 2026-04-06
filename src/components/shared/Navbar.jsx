const Navbar = () => {
  return (
    <nav className="px-4 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-work-sans">
      <div className="navbar lg:container mx-auto px-0">
        {/* Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2 text-content px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-2xl w-52 border border-gray-100"
            >
              <li>
                <a href="/" className="active:bg-green">
                  Home
                </a>
              </li>
              <li>
                <a href="/listed-books">Listed Books</a>
              </li>
              <li>
                <a href="/pages-to-read">Pages to Read</a>
              </li>
            </ul>
          </div>
          <a
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-content hover:opacity-80 transition-opacity"
            href="/"
          >
            Book<span className="text-green">Vibe</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a
                href="/"
                className="text-lg font-medium px-5 py-2.5 rounded-xl border border-green text-green bg-green/5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/listed-books"
                className="text-lg font-medium px-5 py-2.5 rounded-xl border border-transparent text-content/70 hover:text-green hover:bg-green/5 transition-all"
              >
                Listed Books
              </a>
            </li>
            <li>
              <a
                href="/pages-to-read"
                className="text-lg font-medium px-5 py-2.5 rounded-xl border border-transparent text-content/70 hover:text-green hover:bg-green/5 transition-all"
              >
                Pages to Read
              </a>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="navbar-end gap-3">
          <button className="hidden sm:inline-flex btn bg-white hover:bg-green/5 hover:text-green border border-green text-content/80 px-8 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95">
            Sign In
          </button>
          <button className="btn bg-green hover:bg-green-hover border border-transparent text-white px-8 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
