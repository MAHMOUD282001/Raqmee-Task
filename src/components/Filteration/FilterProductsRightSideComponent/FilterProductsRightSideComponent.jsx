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
    dropdownValue,
    isDropDownOpen,
    setIsDropDownOpen,
    dropdownValues,
    handleDropdown,
  } = useContext(FilterationContext);

  return (
    <div className="right-side flex items-center gap-[20px] flex-wrap w-full sm:w-auto">
      <p className="text-[14px] text-[#171717]">Sort by</p>

      <CommonDropdown
        onChange={handleDropdown}
        dropdownValues={dropdownValues}
        dropdownValue={dropdownValue}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
        isFilter={true}
        style={"w-full sm:w-[202px]"}
      />

      <CommonBtn
        style={
          "bg-[#D9F99D] font-[300] w-full sm:w-auto flex items-center justify-center gap-[10px]"
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
