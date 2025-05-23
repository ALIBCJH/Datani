import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-purple-50 rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-6">
            Have a question or want to work with us? Fill out the form and we’ll
            respond shortly.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition duration-200 text-lg"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600 font-medium">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="bg-purple-50 rounded-lg shadow-md p-8 flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-purple-800 mb-2">Call Us</div>
          <div className="text-sm text-gray-700 mb-2">+254 797 942 186</div>
          <div className="text-sm text-gray-600">
            Available Monday to Friday
            <br />
            8:00 AM – 5:00 PM (EAT)
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
