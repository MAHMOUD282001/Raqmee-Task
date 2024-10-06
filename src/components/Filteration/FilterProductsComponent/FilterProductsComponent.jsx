import React from "react";
import FilterProductsLeftSideComponent from "../FilterProductsLeftSideComponent/FilterProductsLeftSideComponent";
import FilterProductsRightSideComponent from "../FilterProductsRightSideComponent/FilterProductsRightSideComponent";

function FilterProductsComponent() {
  return (
    <div className="flex items-center justify-between flex-col 2xl:flex-row gap-5 w-full">
      <FilterProductsLeftSideComponent />
      <FilterProductsRightSideComponent />
    </div>
  );
}

export default FilterProductsComponent;
