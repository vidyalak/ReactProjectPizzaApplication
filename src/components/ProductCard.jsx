import React from "react";

//Rendering List
const ProductCard = ({ serial, image, title, subtitle, price }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <span className="w-6 text-gray-600 font-medium">{serial}.</span>
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <span className="text-blue-600 font-bold">{price}</span>
    </div>
  );
};

export default ProductCard;
