import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
    price: yup.number().required(),
    image: yup
      .mixed()
      .required("Image is required")
      .test(
        "fileType",
        "Only JPEG, PNG, and GIF images are allowed",
        (value) => {
          if (value && value[0]) {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            return allowedTypes.includes(value[0].type);
          }
          return false;
        }
      )
      .test("fileSize", "File size must be less than 5MB", (value) => {
        if (value && value[0]) {
          return value[0].size <= 5000000; // 5MB limit
        }
        return false;
      }),
  })
  .required();

function SellProductModalLogic() {
  let [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
  const fileInputRef = useRef(null);

  // Validation
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Close Modal
  const closeModalHandler = () => {
    closeModal();
    document.body.style.overflow = "auto";
  };

  // Handle Upload Img Button Click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the click event on the hidden file input
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("image", [file]); // Pass the file as an array
        setImagePreview(reader.result); // Preview image
        clearErrors("image");

        // Store the Base64 string in local storage
        localStorage.setItem("storedImage", reader.result);
      };
      reader.readAsDataURL(file); // Convert to Base64
    } else {
      setImagePreview(null);
      setValue("image", undefined); // Clear the image value if no file selected
    }
  };

  // Dropdown
  let dropdownValues = [
    "Electronics",
    "Clothing",
    "Mobile Phones",
    "Home appliances",
  ];

  // Handle Dropdown Click
  const dropdownValue = watch("category", "");
  const handleDropdownClick = (type, value) => {
    setValue("category", value);
    clearErrors("category");
    setIsDropDownOpen(false);
  };

  // Handle Dropdown
  const handleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Handle Submit
  const onSubmit = (data) => {
    if (!data.category) {
      setError("category", {
        type: "manual",
        message: "Please select a value.",
      });
    }

    data.image = imagePreview;

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts.push({ id: storedProducts.length + 1, ...data });
    localStorage.setItem("products", JSON.stringify(storedProducts));
    closeModal();
    document.body.style.overflow = "auto";
    toast.success("Product added successfully");
  };

  // Remove Scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return [
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
  ];
}

export default SellProductModalLogic;
