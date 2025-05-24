
import React from "react";

const servicesData = [
  {
    title: "Life Insurance",
    points: [
      "Protect your loved ones with comprehensive life insurance plans.",
      "Flexible terms and affordable premiums.",
      "Financial security for your family in case of unforeseen events.",
    ],
  },
  {
    title: "Health Insurance",
    points: [
      "Access quality healthcare without the financial burden.",
      "Coverage for hospitalization, outpatient treatments, and medicines.",
      "Plans tailored for individuals, families, and corporate clients.",
    ],
  },
  {
    title: "Vehicle Insurance",
    points: [
      "Comprehensive coverage for your car, motorcycle, or commercial vehicles.",
      "Protection against accidents, theft, and third-party liabilities.",
      "Hassle-free claims and roadside assistance.",
    ],
  },
  {
    title: "Home Insurance",
    points: [
      "Safeguard your property from fire, theft, natural disasters, and more.",
      "Customizable coverage options to suit your needs.",
      "Quick claims processing and dedicated customer support.",
    ],
  },
  {
    title: "Travel Insurance",
    points: [
      "Peace of mind for your trips domestically and internationally.",
      "Covers medical emergencies, trip cancellations, lost luggage, and more.",
      "24/7 assistance while you’re abroad.",
    ],
  },
  {
    title: "Business Insurance",
    points: [
      "Protect your business assets, employees, and operations.",
      "Options for liability insurance, property insurance, and employee benefits.",
      "Customized plans for startups to large enterprises.",
    ],
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-white px-6 pt-32 pb-16 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-10 text-center tracking-wide">
        Our Insurance Services
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
        At Datani Insurance, we offer a wide range of insurance products
        tailored to your needs. Explore our services below and find the coverage
        that suits you best.
      </p>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(({ title, points }, idx) => (
          <div
            key={idx}
            className="bg-purple-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-3xl font-semibold text-purple-800 mb-6 border-b-2 border-purple-300 pb-2">
              {title}
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-3 text-base leading-snug">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="hover:text-purple-700 transition-colors duration-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
