import React from "react";
import { Link } from "react-router-dom";
import icons from "../data/icons";
const MenuIcons = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto lg:h-[auto] h-auto flex items-center justify-center">
          <div className="w-full grid lg:grid-cols-6 xl:grid-cols-7 sm:grid-cols-5 md:grid-cols-6 grid-cols-3 gap-6 p-4 justify-center">
            {icons.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="w-full h-full flex flex-col items-center justify-center bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-15 h-15 mb-2 mt-2"
                />
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuIcons;
