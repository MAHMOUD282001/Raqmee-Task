import React, { createContext, useEffect, useState } from "react";

// Create context
export const FilterationContext = createContext();

export const FilterationProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  let [dropdownValue, setDropdownValue] = useState("Price: Low to High");
  let [isDropDownOpen, setIsDropDownOpen] = useState(false);

  let dropdownValues = [
    "A - Z",
    "Z - A",
    "Price: Low to High",
    "Price: High to Low",
  ];

  let handleDropdown = (value) => {
    setDropdownValue(value);
    setIsDropDownOpen(false);
  };

  // Get Products
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Filter products based on search term
  let filteredProducts = [];
  if (dropdownValue === "A - Z") {
    filteredProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  } else if (dropdownValue === "Z - A") {
    filteredProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
  } else if (dropdownValue === "Price: Low to High") {
    filteredProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.price - b.price);
  } else if (dropdownValue === "Price: High to Low") {
    filteredProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.price - a.price);
  }

  return (
    <FilterationContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        dropdownValue,
        setDropdownValue,
        isDropDownOpen,
        setIsDropDownOpen,
        dropdownValues,
        handleDropdown,
      }}
    >
      {children}
    </FilterationContext.Provider>
  );
};
