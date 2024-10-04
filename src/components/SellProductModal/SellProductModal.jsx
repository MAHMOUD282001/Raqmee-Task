import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { IoIosArrowDown } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function SellProductModal() {
  let [dropdownValue, setDropdownValue] = useState("Price: Low to High");
  let [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  const closeModalHandler = () => {
    closeModal();
    document.body.style.overflow = "auto";
  };

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="w-full h-full bg-[#00000080] absolute top-0 left-0 flex items-center justify-center z-10">
      <div className="w-[785px] h-[calc(100vh_-_165px)] bg-white rounded-[4px] p-[20px] sm:p-[50px] overflow-auto mx-5 relative modal">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={closeModalHandler}
        >
          <IoClose size={20} />
        </span>

        <h2 className="text-[30px] font-[500] mb-[30px]">Sell an Item</h2>

        <div>
          <p className="text-[14px] font-[300] mb-1">Upload Photos</p>
          <div className="w-full h-[181px] border border-solid border-[#E5E5E5] rounded-[4px]"></div>
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Title</p>
          <input
            type="text"
            className="h-[44px] border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px] outline-none text-[#737373] text-[14px] w-full"
          />{" "}
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Describe Your Item</p>
          <input
            type="text"
            className="border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px] outline-none text-[#737373] text-[14px] w-full h-[148px]"
          />{" "}
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Category</p>
          <div className="dropdown text-[14px] relative">
            <button
              className="w-full h-[42px] border border-solid border-[#E5E5E5] rounded-[4px] text-[#737373] px-[13px] py-[11px] flex items-center justify-between"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              {dropdownValue}
              <IoIosArrowDown size={20} color="#171717" />
            </button>

            {isDropDownOpen && (
              <div className="dropdown-values bg-white shadow-xl border border-solid border-[#E4E4E4] w-full px-[15px] py-[11px] rounded-[4px] absolute top-[calc(100%_+_5px)]">
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
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Item Price</p>
          <div className="relative w-full h-[42px] border border-solid border-[#E5E5E5] rounded-[4px] flex items-center px-[13px] py-[11px]">
            <input
              type="text"
              placeholder="00.00"
              className="border-none outline-none text-[#737373] placeholder-[#737373] text-[14px] w-full text-right"
            />
            <FaEuroSign
              size={20}
              className="absolute top-1/2 -translate-y-1/2 left-[11px]"
            />
          </div>
        </div>

        <button className="px-[23px] py-[11px] font-[400] bg-[#D9F99D] rounded-[4px] w-full text-center mt-[30px]">
          Upload Modal
        </button>
      </div>
    </div>
  );
}

export default SellProductModal;
