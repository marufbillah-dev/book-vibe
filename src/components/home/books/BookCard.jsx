import { Star } from "lucide-react";

const BookCard = () => {
  const tags = ["Fiction", "Romance"];

  return (
    <div className="group bg-white border border-gray-100 rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="bg-[#F3F3F3] rounded-2xl flex items-center justify-center py-8 mb-6 overflow-hidden">
        <img
          src={"https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"}
          alt={"The Catcher in the Rye"}
          className="h-44 md:h-56 object-contain transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1.5 bg-green/5 text-green font-medium rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Info */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-playfair-display text-content line-clamp-1">
          {"The Catcher in the Rye"}
        </h3>
        <p className="text-content/80 font-medium font-work-sans">
          By : {"Awlad Hossain"}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-dashed border-gray-200" />

      {/* Footer Info */}
      <div className="flex justify-between items-center text-content/80 font-work-sans font-medium">
        <span>{"Classic"}</span>
        <div className="flex items-center gap-2">
          <span>{"5.00"}</span>
          <Star className="w-5 h-5 text-content/70 fill-none" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
