import { useNavigate } from "react-router-dom";
import healthImage from "../assets/tech/health.png"; // Adjust the path based on your file structure

const insuranceData = [
  {
    title: "General Insurance",
    description:
      "Our General Insurance offerings encompass a wide range of coverage, including transport, property, and liability insurance.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Medical Insurance",
    description:
      "Our medical insurance plans are designed to provide comprehensive healthcare coverage, ensuring you and your family have access to quality medical care when you need it most.",
    image: healthImage,
  },
  {
    title: "Life Insurance",
    description:
      "Secure your future and safeguard your loved ones with our comprehensive Life Insurance products. We offer various options to suit your financial goals and provide peace of mind.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
];

const InsuranceCards = () => {
  const navigate = useNavigate();

  return (
    <section
      id="our-services"
      className="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-8 text-purple-700">
        Our Services
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        {insuranceData.map((item, index) => (
          <div
            key={index}
            className="bg-purple-50 rounded-3xl max-w-sm w-full flex flex-col overflow-hidden shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-purple-400 hover:shadow-lg duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-contain"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 flex-grow">{item.description}</p>
              <button
                onClick={() => navigate("/services")}
                className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-full transition duration-200"
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceCards;
