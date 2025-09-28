import React from "react";
import ProductCard from "./IPhoneCard";
import LaptopCard from "./LaptopCard";

/* ✅ Conditional Rendering with Ternary */
const LaptopList = () => {
  const products = [
    {
      id: 1,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.-AtwxKY70S2aTwoDs2BL4AHaE8?pid=Api&P=0&h=180",
      title: "Laptop 1",
      subtitle: "Laptop subtitle 1",
      price: "$120",
    },
    {
      id: 2,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.PQYpG3T5F9psyoZ2uUwvZwHaEK?pid=Api&P=0&h=180",
      title: "Laptop 2",
      subtitle: "Laptop subtitle 2",
      price: "$90",
    },
    {
      id: 3,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.XRuClEZ5N9IjrBKC9gLfLgHaFp?pid=Api&P=0&h=180",
      title: "Laptop 3",
      subtitle: "Laptop subtitle 3",
      price: "$60",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {products && products.length > 0 ? (
        <div className="grid gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              serial={index + 1}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default LaptopList;
