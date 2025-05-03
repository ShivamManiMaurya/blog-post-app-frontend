import React from "react";

interface IProps {
  imgUrl: string;
  name: string;
  date: string;
}

const Header: React.FC<IProps> = ({ imgUrl, name, date }) => {
  return (
    <div className=" flex items-center justify-start space-x-2 text-sm text-gray-600 py-2">
      <img
        src={imgUrl}
        alt={`${name} avatar`}
        className=" rounded-full w-6 h-6 object-cover"
      />
      <span className=" font-medium text-gray-900">{name}</span>
      <span>.</span>
      <span>{date}</span>
    </div>
  );
};

export default Header;
