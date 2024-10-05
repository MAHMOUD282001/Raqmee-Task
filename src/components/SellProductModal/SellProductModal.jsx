import React from "react";
import { FaEuroSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";
import CommonBtn from "../common/CommonBtn";
import SellProductModalLogic from "./SellProductModalLogic";

function SellProductModal() {
  let [
    closeModalHandler,
    register,
    errors,
    imagePreview,
    fileInputRef,
    handleButtonClick,
    handleImageChange,
    dropdownValues,
    handleDropdown,
    dropdownValue,
    handleDropdownClick,
    isDropDownOpen,
    handleSubmit,
    onSubmit,
  ] = SellProductModalLogic()

  return (
    <div className="w-full h-full bg-[#00000080] fixed top-0 left-0 flex items-center justify-center z-10">
      <div className="w-[785px] h-[calc(100vh_-_165px)] bg-white rounded-[4px] p-[20px] sm:p-[50px] overflow-auto mx-5 relative modal">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={closeModalHandler}
        >
          <IoClose size={20} />
        </span>

        <h2 className="text-[30px] font-[500] mb-[30px]">Sell an Item</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="text-[14px] font-[300] mb-1">Upload Photos</p>
            <div className="w-full h-[181px] border border-solid border-[#E5E5E5] rounded-[4px] flex items-center justify-center">
              {imagePreview ? (
                <div className="cursor-pointer" onClick={handleButtonClick}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[200px] h-[160px] object-cover rounded-[4px]"
                  />
                </div>
              ) : (
                <CommonBtn
                  handleOnClick={handleButtonClick}
                  style={"border border-solid border-[#D9F99D] w-[140px]"}
                >
                  Upload File
                </CommonBtn>
              )}

              <CommonInput
                type="file"
                name="img"
                id="fileInput"
                fileRef={fileInputRef}
                accept="image/*"
                style="hidden"
                onChange={handleImageChange}
                error={errors.image?.message}
              />
            </div>
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">Title</p>
            <CommonInput
              type="text"
              name={"name"}
              value={register("name")}
              style="h-[44px] w-full border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px]"
              error={errors.name?.message}
            />{" "}
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">Describe Your Item</p>
            <textarea
              type="text"
              name={"description"}
              {...register("description")}
              className="w-full h-[148px] border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px] outline-none text-[#737373] text-[14px]"
            ></textarea>
            <p className="text-[12px] text-[#FF0000] mt-1">
              {errors.description?.message}
            </p>
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">Category</p>
            <CommonDropdown
              name="category"
              onChange={handleDropdownClick}
              dropdownValues={dropdownValues}
              dropdownValue={dropdownValue}
              isDropDownOpen={isDropDownOpen}
              handleDropdown={handleDropdown}
              style={"w-full"}
              error={errors.category?.message}
            />
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">Item Price</p>
            <div className="relative w-full h-[42px] border border-solid border-[#E5E5E5] rounded-[4px]">
              <CommonInput
                type="number"
                name={"price"}
                value={register("price")}
                style="w-full border-none placeholder-[#737373] text-right outline-none"
                placeholder={"0.00"}
                error={errors.price?.message}
                isPrice={true}
              />{" "}
              <FaEuroSign
                size={20}
                className="absolute top-1/2 -translate-y-1/2 left-[11px]"
              />
            </div>
          </div>

          <CommonBtn style={"bg-[#D9F99D] mt-[30px] w-full"} type={"submit"}>
            Upload Modal
          </CommonBtn>
        </form>
      </div>
    </div>
  );
}

export default SellProductModal;
