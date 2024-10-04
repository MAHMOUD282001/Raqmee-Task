import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import FilterProductsLeftSideComponent from "../FilterProductsLeftSideComponent/FilterProductsLeftSideComponent";
import FilterProductsRightSideComponent from "../FilterProductsRightSideComponent/FilterProductsRightSideComponent";

function FilterProductsComponent() {
  return (
    <div className="flex items-center justify-between flex-col xl:flex-row gap-5">
      <FilterProductsLeftSideComponent />
      <FilterProductsRightSideComponent />
    </div>
  );
}

export default FilterProductsComponent;
