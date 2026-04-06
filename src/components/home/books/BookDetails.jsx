const BookDetails = () => {
  const tags = ["Fiction", "Romance"];

  return (
    <section className=" min-h-screen pt-26 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image Container */}
          <div className="bg-content/5 rounded-3xl p-12 md:p-20 flex justify-center items-center">
            <img
              src={"https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"}
              alt={"The Catcher in the Rye"}
              className="w-full max-w-100 drop-shadow-2xl transform transition-transform hover:scale-105 duration-500"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col h-full">
            {/* Title and Author */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair-display text-content">
                {"The Catcher in the Rye"}
              </h1>
              <p className="text-xl font-medium text-content/80 font-work-sans">
                By : {"Awlad Hossain"}
              </p>
            </div>

            <div className="my-6 border-t border-gray-100" />

            {/* Category */}
            <p className="text-xl font-medium text-content/80 font-work-sans">
              {"Classic"}
            </p>

            <div className="my-6 border-t border-gray-100" />

            {/* Review Section */}
            <div className="font-work-sans">
              <p className="text-content/70 leading-relaxed">
                <span className="font-bold text-content">Review : </span>
                {
                  "Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare. Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non."
                }
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-4 mt-6">
              <span className="font-bold text-content font-work-sans">Tag</span>
              <div className="flex gap-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-green/5 text-green font-medium rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-gray-100" />

            {/* Technical Specs Table */}
            <div className="space-y-3 font-work-sans max-w-sm">
              <div className="flex justify-between">
                <span className="text-content/70">Number of Pages:</span>
                <span className="font-bold text-content">{"281"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-content/70">Publisher:</span>
                <span className="font-bold text-content">
                  {"J.B Lippincott & Co."}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-content/70">Year of Publishing:</span>
                <span className="font-bold text-content">{"1960"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-content/70">Rating:</span>
                <span className="font-bold text-content">{"5.00"}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-4 border border-content/20 rounded-xl font-bold text-lg hover:bg-content hover:text-white transition-all active:scale-95">
                Read
              </button>
              <button className="px-8 py-4 bg-[#50B1C9] hover:bg-[#409db3] text-white rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
