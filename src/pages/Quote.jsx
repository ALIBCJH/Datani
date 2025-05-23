import React from "react";
import QuoteForm from "../components/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">
        Get Your Quote
      </h1>
      <QuoteForm />
    </div>
  );
};

export default Quote;
