import { Link } from "react-router";
import { BookOpen } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-content text-white font-work-sans">
      <div className="lg:container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green" />
              <span className="text-xl font-extrabold tracking-tight">
                Book<span className="text-green">Vibe</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Discover, track, and organize your reading journey — all in one
              place.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaXTwitter, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                // eslint-disable-next-line no-unused-vars
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green/20 hover:text-green flex items-center justify-center text-white/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Listed Books", to: "/listed-books" },
                { label: "Pages to Read", to: "/pages-to-read" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/50 hover:text-green transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reading Lists */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">
              My Lists
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Read Books", to: "/listed-books?tab=read" },
                { label: "Wishlist", to: "/listed-books?tab=wish" },
                { label: "Reading Chart", to: "/pages-to-read" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/50 hover:text-green transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>
          <p>
            Designed & built by{" "}
            <span className="text-white/60 font-semibold">Maruf Billah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
