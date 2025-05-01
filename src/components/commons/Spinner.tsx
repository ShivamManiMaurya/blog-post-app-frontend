import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-auto h-auto">
      <div className="w-6 h-6 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
