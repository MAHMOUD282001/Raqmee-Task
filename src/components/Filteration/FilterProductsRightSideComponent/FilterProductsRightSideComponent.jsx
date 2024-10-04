import React, { useContext, useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { ModalContext } from "../../../context/ModalContext";
import SellProductModal from "../../SellProductModal/SellProductModal";
import { FilterationContext } from "../../../context/FilterationContext";

function FilterProductsRightSideComponent() {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  const {
    dropdownValue,
    isDropDownOpen,
    setIsDropDownOpen,
    dropdownValues,
    handleDropdown,
  } = useContext(FilterationContext);

  return (
    <div className="right-side flex items-center gap-[20px] flex-wrap">
      <p className="text-[14px] text-[#171717]">Sort by</p>

      <div className="dropdown text-[14px] relative">
        <button
          className="w-[202px] h-[44px] border border-solid border-[#E5E5E5] rounded-[4px] text-[#737373] px-[13px] py-[11px] flex items-center justify-between"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {dropdownValue}
          <IoIosArrowDown size={20} color="#171717" />
        </button>

        {isDropDownOpen && (
          <div className="dropdown-values bg-white shadow-xl border border-solid border-[#E4E4E4] w-[202px] px-[15px] py-[11px] rounded-[4px] absolute top-[calc(100%_+_5px)]">
            {dropdownValues.map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleDropdown(value)}
                  className="dropdown-value leading-[22px] cursor-pointer"
                >
                  {value}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <button
        className="px-[23px] py-[11px] flex items-center justify-center gap-[10px] bg-[#D9F99D] rounded-[4px] font-[300] w-full sm:w-auto text-center"
        onClick={openModal}
      >
        <FiPlus size={20} />
        Sell Item
      </button>
      {isModalOpen ? <SellProductModal /> : ""}
    </div>
  );
}

export default FilterProductsRightSideComponent;
