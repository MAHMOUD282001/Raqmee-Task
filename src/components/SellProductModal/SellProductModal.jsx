import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { IoIosArrowDown } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";
import CommonBtn from "../common/CommonBtn";

function SellProductModal() {
  let [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    description: "",
    category: "Select",
    price: "",
  });

  // Handle input change
  const handleInputChange = (name, value) => {
    if (name === "img") {
      const file = value;

      // Check if the file exists and is a valid Blob/File
      if (!file || !(file instanceof Blob)) {
        console.error("Invalid file input. Please select a valid image.");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        // Update formData with the base64 image data
        setFormData((prevState) => ({
          ...prevState,
          img: reader.result, // Base64 string
        }));
      };

      // Convert file to a base64-encoded Data URL
      reader.readAsDataURL(file);
    } else {
      // Handle other form inputs
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Close dropdown if the input is a category selection
      if (name === "category") {
        setIsDropDownOpen(false);
      }
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger click on the hidden input
  };

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  console.log(formData);

  let handleSubmit = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts.push({ id: storedProducts.length + 1, ...formData });
    localStorage.setItem("products", JSON.stringify(storedProducts));
    closeModal();
    document.body.style.overflow = "auto";
  };

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
          <div className="w-full h-[181px] border border-solid border-[#E5E5E5] rounded-[4px] flex items-center justify-center">
            <CommonBtn
              handleOnClick={handleFileClick}
              style={"border border-solid border-[#D9F99D] w-[140px]"}
            >
              Upload File
            </CommonBtn>
            <CommonInput
              type="file"
              name="img"
              id="fileInput"
              fileRef={fileInputRef}
              accept="image/*"
              style="hidden"
              value={formData.img}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Title</p>
          <CommonInput
            type="text"
            name={"name"}
            value={formData.title}
            onChange={handleInputChange}
            style="h-[44px] w-full"
          />{" "}
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Describe Your Item</p>
          <textarea
            type="text"
            name={"description"}
            value={formData.description}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            className="w-full h-[148px] border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px] outline-none text-[#737373] text-[14px]"
          ></textarea>
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Category</p>
          <CommonDropdown
            name="category"
            onChange={handleInputChange}
            dropdownValues={dropdownValues}
            dropdownValue={formData.category}
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            style={"w-full"}
          />
        </div>

        <div className="mt-[20px]">
          <p className="text-[14px] font-[300] mb-1">Item Price</p>
          <div className="relative w-full h-[42px] border border-solid border-[#E5E5E5] rounded-[4px] flex items-center px-[13px] py-[11px]">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              placeholder="00.00"
              className="border-none outline-none text-[#737373] placeholder-[#737373] text-[14px] w-full text-right"
            />

            <FaEuroSign
              size={20}
              className="absolute top-1/2 -translate-y-1/2 left-[11px]"
            />
          </div>
        </div>

        <CommonBtn
          style={"bg-[#D9F99D] mt-[30px] w-full"}
          handleOnClick={handleSubmit}
        >
          Upload Modal
        </CommonBtn>
      </div>
    </div>
  );
}

export default SellProductModal;
