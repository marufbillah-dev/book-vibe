import { MapPin, Users, FileText } from "lucide-react";

const ListedBookCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
    tags,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-2xl bg-white">
      {/* Left: Image */}
      <div className="bg-[#F3F3F3] rounded-2xl p-8 flex items-center justify-center min-w-57.5">
        <img
          src={image}
          alt={bookName}
          className="h-44 object-contain shadow-lg"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold font-playfair-display text-content">
          {bookName}
        </h2>
        <p className="font-medium text-content/80 font-work-sans">
          By : {author}
        </p>

        {/* Tags and Year */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-content">Tag</span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-green/5 text-green rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-content/70">
            <MapPin className="w-4 h-4" />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher and Pages */}
        <div className="flex flex-wrap gap-6 text-content/60 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Page {totalPages}</span>
          </div>
        </div>

        {/* Badges and Action */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="px-5 py-2 bg-[#328EFF]/10 text-[#328EFF] rounded-full text-sm font-medium">
            Category: {category}
          </span>
          <span className="px-5 py-2 bg-[#FFAC33]/10 text-[#FFAC33] rounded-full text-sm font-medium">
            Rating: {rating}
          </span>
          <button className="px-5 py-2 bg-green hover:bg-green-hover text-white rounded-full text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
