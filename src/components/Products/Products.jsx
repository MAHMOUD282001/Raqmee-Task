import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { FilterationContext } from "../../context/FilterationContext";
import Pagination from "../Pagination/Pagination";
import img from "../../assets/b1d8bef0f98c2c1ca65646437d4ef615.png";


function Products() {
  let [currentItems, setCurrentItems] = useState([]);
  const { searchTerm, setSearchTerm, filteredProducts } =
    useContext(FilterationContext);

  let items = [
    {
      id: 1,
      name: "Product 1",
      img: img,
      price: 100,
      category: "Electronics",
      description: "Product 1 description",
    },
    {
      id: 2,
      name: "Product 2",
      img: img,
      price: 200,
      category: "Electronics",
      description: "Product 1 description",
    },
    {
      id: 3,
      name: "aProduct 3",
      img: img,
      price: 300,
      category: "Electronics",
      description: "Product 1 description",
    },
    {
      id: 4,
      name: "bProduct 4",
      img: img,
      price: 400,
      category: "Electronics",
      description: "Product 1 description",
    },
  ];

  localStorage.setItem("products", JSON.stringify(items));

  const getCurrentItems = (items) => {
    setCurrentItems(items);
  };

  return (
    <>
      <div className="mt-[40px] mb-[50px] grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {currentItems.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      
      
      <div className="pagination-nums">
        <Pagination
          items={filteredProducts}
          itemsPerPage={4}
          getCurrentItems={getCurrentItems}
        />
      </div>
    </>
  );
}

export default Products;
