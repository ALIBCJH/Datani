import React from "react";
import madisonLogo from "../assets/tech/madison.png";
import britamLogo from "../assets/tech/britam.png";
import cicLogo from "../assets/tech/cic.png";
import oldMutualLogo from "../assets/tech/oldmutual.png";
import jubileeLogo from "../assets/tech/jubilee.png";
import imLogo from "../assets/tech/im.png";

const partners = [
  { name: "Madison", logo: madisonLogo },
  { name: "Britam", logo: britamLogo },
  { name: "CIC", logo: cicLogo },
  { name: "Old Mutual", logo: oldMutualLogo },
  { name: "Jubilee", logo: jubileeLogo },
  { name: "I&M Holdings Limited", logo: imLogo },
];

const Partners = () => {
  return (
    <section className="bg-white py-20 px-4" id="partners">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-8">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
          We proudly collaborate with industry leaders to bring you the best
          insurance solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-60 h-60 bg-purple-50 rounded-full border border-purple-300 shadow-lg flex flex-col items-center justify-center text-center hover:bg-purple-100 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white flex items-center justify-center mb-4 shadow-md">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-purple-800 uppercase tracking-wide px-4">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
