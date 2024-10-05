import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { FilterationContext } from "../../context/FilterationContext";
import Pagination from "../Pagination/Pagination";
import img from "../../assets/b1d8bef0f98c2c1ca65646437d4ef615.png";

function Products() {
  let [currentItems, setCurrentItems] = useState([]);
  const { searchTerm, setSearchTerm, filteredProducts } =
    useContext(FilterationContext);

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
