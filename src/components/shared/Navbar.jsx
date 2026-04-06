import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? "text-green bg-green/8" : "text-content/60 hover:text-green hover:bg-green/5"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            `text-base font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? "text-green bg-green/8" : "text-content/60 hover:text-green hover:bg-green/5"}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            `text-base font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${isActive ? "text-green bg-green/8" : "text-content/60 hover:text-green hover:bg-green/5"}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="px-4 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100/80 font-work-sans shadow-sm shadow-gray-100/50">
      <div className="navbar lg:container mx-auto px-0 min-h-16">
        {/* Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-1 text-content px-2 hover:bg-green/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow-xl bg-white rounded-2xl w-52 border border-gray-100"
            >
              {navLinks}
              <li className="sm:hidden mt-1 pt-1 border-t border-gray-100 px-1">
                <button className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-content/70 hover:text-green hover:border-green hover:bg-green/5 active:bg-green/5 transition-all duration-200 text-center">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
          <Link
            className="text-xl md:text-2xl font-extrabold tracking-tight text-content hover:opacity-75 transition-opacity duration-200"
            to="/"
          >
            Book<span className="text-green">Vibe</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
        </div>

        {/* Action Buttons */}
        <div className="navbar-end gap-2">
          <button className="hidden sm:inline-flex btn btn-sm h-9 bg-white hover:bg-green/5 hover:text-green border border-gray-200 hover:border-green text-content/70 px-5 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 text-sm">
            Sign In
          </button>
          <button className="btn btn-sm h-9 bg-green hover:bg-green-hover border-0 text-white px-5 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md shadow-green/20 text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
