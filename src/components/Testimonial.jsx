import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Grace Wanjiku",
    role: "Small Business Owner, Nairobi",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Datani Insurance made the process of getting coverage for my shop incredibly easy. Their team is friendly, responsive, and very professional.",
  },
  {
    id: 2,
    name: "James Otieno",
    role: "Farmer, Kisumu County",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "After an unfortunate incident on my farm, Datani Insurance came through quickly with support and compensation. I highly recommend their services to anyone in agriculture.",
  },
  {
    id: 3,
    name: "Esther Njeri",
    role: "Parent & Teacher, Nyeri",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "With Datani, I finally feel secure about my family’s health and future. Their customer service is outstanding and their policies are very affordable.",
  },
];

const TestimonialCard = ({ photo, name, role, text }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
    <img
      src={photo}
      alt={`${name}'s photo`}
      className="w-20 h-20 rounded-full object-cover border-4 border-purple-500"
    />
    <div>
      <p className="text-gray-700 italic mb-4">“{text}”</p>
      <h3 className="text-lg font-semibold text-purple-700">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real feedback from those who have worked with us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map(({ id, photo, name, role, text }) => (
          <TestimonialCard
            key={id}
            photo={photo}
            name={name}
            role={role}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
