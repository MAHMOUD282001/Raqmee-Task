import React from "react";

function CommonInput({
  type,
  name,
  placeholder,
  id,
  value,
  onChange,
  style,
  fileRef,
  accept,
}) {
  return (
    <input
      type={type}
      ref={fileRef}
      name={name}
      id={id}
      accept={accept}
      placeholder={placeholder}
      value={name !== "img" ? value : ""}
      onChange={
        name === "img"
          ? (e) => onChange(e.target.name, e.target.files[0])
          : (e) => onChange(e.target.name, e.target.value)
      }
      className={`border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px] outline-none text-[#737373] text-[14px] ${style}`}
    />
  );
}

export default CommonInput;
