import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl shadow-grey-200 p-4 hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-30  size-90 h-40 rounded  pl-5"/>
      <h2 className="font-semibold text-lg">{product.id}</h2>
      <h2 className="font-semibold text-lg ">{product.title}</h2>
      <p className="text-gray-700 font-bold">₹ {product.price}</p>
      <p className="text-blue-300 "> {product.category}</p>

      {!product.inStock && (
        <span className="text-red-600 font-bold mt-2 bg-red-100  ">Sold Out ❌</span>
      )
      }
      {product.inStock && (
        <span className="text-green-600 font-bold mt-2 bg-green-100">In stock</span>
      )
      }

      {product.price > 1000 && (
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-400 rounded relative bottom-68 right-15 ">
          Expensive
        </span>
      )}
    </div>
  );
};


export default ProductCard;