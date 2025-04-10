import React from "react";

const Quotes = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl px-6 text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-900 text-left">
          “The customer service I received was exceptional. The support team
          went above and beyond to address my concerns.”
        </p>
        <div className="mt-6">
          <p className="text-base font-semibold text-gray-900 text-left">
            Jules Winnfield
          </p>
          <p className="text-sm text-gray-500 text-left">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
