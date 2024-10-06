import React, { useContext, useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { ModalContext } from "../../../context/ModalContext";
import SellProductModal from "../../SellProductModal/SellProductModal";
import { FilterationContext } from "../../../context/FilterationContext";
import CommonBtn from "../../common/CommonBtn";
import CommonDropdown from "../../common/CommonDropdown";

function FilterProductsRightSideComponent() {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  const {
    isSortingDropDownOpen,
    isCategoriesDropDownOpen,
    sortingDropdownValue,
    categoriesDropdownValue,
    sortingDropdownValues,
    categoriesDropdownValues,
    handleDropdownChange,
    handleDropdownState,
  } = useContext(FilterationContext);

  return (
    <div className="right-side flex items-center gap-[15px] flex-wrap w-full md:w-auto">
      <p className="text-[14px] text-[#171717]">Sort by</p>

      <CommonDropdown
        onChange={handleDropdownChange}
        dropdownValues={sortingDropdownValues}
        dropdownValue={sortingDropdownValue}
        isDropDownOpen={isSortingDropDownOpen}
        handleDropdown={handleDropdownState}
        isFilter={true}
        name={"sorting"}
      />
      
      <CommonDropdown
        onChange={handleDropdownChange}
        dropdownValues={categoriesDropdownValues}
        dropdownValue={categoriesDropdownValue}
        isDropDownOpen={isCategoriesDropDownOpen}
        handleDropdown={handleDropdownState}
        isFilter={true}
        name={"categories"}
      />

      <CommonBtn
        style={
          "bg-[#D9F99D] font-[300] w-full md:w-auto flex items-center justify-center gap-[10px] h-[44px]"
        }
        handleOnClick={openModal}
      >
        <FiPlus size={20} />
        Sell Item
      </CommonBtn>
      {isModalOpen ? <SellProductModal /> : ""}
    </div>
  );
}

export default FilterProductsRightSideComponent;
