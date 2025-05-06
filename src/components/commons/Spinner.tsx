import React from "react";

type TProps = {
  width?: string;
  height?: string;
};

const Spinner: React.FC<TProps> = ({ width, height }) => {
  return (
    <div className="flex items-center justify-center w-auto h-auto">
      <div
        className="w-6 h-6 border-4 border-gray-300 border-t-white rounded-full animate-spin "
        style={{ width, height }}></div>
    </div>
  );
};

export default Spinner;
