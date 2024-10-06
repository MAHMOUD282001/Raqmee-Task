import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { FilterationContext } from "../../context/FilterationContext";
import Pagination from "../Pagination/Pagination";
import noProducts from "../../assets/no products.svg";

function Products() {
  let [currentItems, setCurrentItems] = useState([]);
  const { searchTerm, setSearchTerm, filteredProducts } =
    useContext(FilterationContext);

  const getCurrentItems = (items) => {
    setCurrentItems(items);
  };
  
  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center flex-col mt-32">
          <img src={noProducts} className="w-[300px]" alt="No Products" />

          <p className="text-[20px] font-[400] mt-3">There are No Products</p>
        </div>
      ) : (
        <>
          <div className="mt-[40px] mb-[50px] grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
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
      )}
    </>
  );
}

export default Products;
