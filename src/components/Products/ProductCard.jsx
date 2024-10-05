import React from "react";
import { CiHeart } from "react-icons/ci";
import img from "../../assets/5db05bf878eba0bb6a0084baa24dccea.png";

function ProductCard({ product }) {
  return (
    <div className="max-w-[326px] mx-auto sm:mx-0">
      <div className="w-full h-[326px]">
        <img
          src={product.image}
          alt="Product Img"
          className="w-full h-full object-cover rounded-[4px]"
        />
      </div>

      <div className="flex items-center justify-between mt-[10px]">
        <div>
          <p className="text-[13px] font-[300]">{product.name}</p>
          <h6 className="text-[16px] font-[400]">${product.price}</h6>
        </div>

        <div className="border border-solid border-[#E5E5E5] p-[8px] rounded-[4px] flex items-center justify-center">
          <CiHeart size={20} />
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1">
        <div>
          <img
            src={img}
            alt="Product Img"
            className="w-[20px] h-[20px] object-cover rounded-full"
          />
        </div>

        <div>
          <p className="text-[10px] font-[400]">Josie Parker</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
