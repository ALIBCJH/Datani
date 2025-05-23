import { styles } from "../styles";
import image from "../assets/tech/image03.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="relative w-full min-h-screen mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-20`}
      >
        {/* Left Section: Text */}
        <div
          className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left"
          style={{ fontFamily: "Segoe UI Variable" }}
        >
          <h1 className="text-[#5B2C91] text-5xl md:text-6xl leading-tight">
            Welcome to Datani Insurance
          </h1>

          {/* CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/quote")}
              className="py-3 px-8 bg-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <img
            src={image}
            alt="Datani Insurance"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-full shadow-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Decorative dots and line */}
      <div className="absolute top-[40%] left-0 flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
    </section>
  );
};

export default Hero;
