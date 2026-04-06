import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4 pt-16 md:max-lg:pt-20">
      <div className="lg:container mx-auto w-full bg-linear-to-br from-gray-50 to-gray-100/80 rounded-4xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-12 md:px-16 md:py-20 lg:px-20 lg:py-24">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-green/10 text-green text-sm font-semibold rounded-full font-work-sans tracking-wide">
                Your Reading Companion
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-content font-playfair-display leading-[1.15] md:leading-[1.15]">
                Books to freshen up <br className="hidden md:block" />
                your{" "}
                <span className="text-green underline italic decoration-green/40">
                  bookshelf
                </span>
              </h1>
            </div>
            <p className="text-content/60 font-work-sans text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Discover, track, and organize your reading journey all in one
              place.
            </p>
            <div className="pt-2">
              <a href="#books">
                <button className="px-8 py-3.5 bg-green hover:bg-green-hover rounded-xl text-white text-base font-bold shadow-lg shadow-green/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green/30 active:translate-y-0 active:shadow-md">
                  View The List
                </button>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-green/10 rounded-2xl blur-3xl scale-90 opacity-60" />
              <img
                src={heroImage}
                alt="Featured Books"
                className="relative max-h-64 md:max-h-112 w-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1 hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
