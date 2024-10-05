import React from "react";

function CommonBtn({children, style, handleOnClick}) {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`px-[23px] py-[11px] font-[400] rounded-[4px] text-center ${style}`}
    >
      {children}
    </button>
  );
}

export default CommonBtn;
