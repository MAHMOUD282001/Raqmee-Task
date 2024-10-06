import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { FilterationContext } from "../../../context/FilterationContext";

function FilterProductsLeftSideComponent() {
  const { searchTerm, setSearchTerm } = useContext(FilterationContext);

  return (
    <div className="left-side w-full md:w-[529px]">
      <div className="relative w-full h-[44px] border border-solid border-[#E5E5E5] rounded-[4px] flex items-center px-[13px] py-[11px]">
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none text-[#737373] placeholder-[#737373] text-[14px] w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch
          size={20}
          className="absolute top-1/2 -translate-y-1/2 right-[11px]"
        />
      </div>
    </div>
  );
}

export default FilterProductsLeftSideComponent;
