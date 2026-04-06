import { Link } from "react-router";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4">
      <div className="lg:container mx-auto bg-linear-to-br from-content/3 to-content/6 rounded-[2.5rem] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 py-12 md:px-20 md:py-24">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 md:space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-content font-playfair-display leading-tight md:leading-[1.2]">
              Books to freshen up <br className="hidden md:block" />
              your{" "}
              <span className="text-green underline italic">bookshelf</span>
            </h1>
            <div className="pt-4">
              <a href="#books">
                <button className="px-10 py-4 bg-green hover:bg-green-hover rounded-xl text-white text-lg font-bold shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0">
                  View The List
                </button>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Featured Books"
              className="relative max-h-75 md:max-h-112.5 w-auto rounded-2xl shadow-2xl transform transition-transform duration-600 hover:scale-[1.02] hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
