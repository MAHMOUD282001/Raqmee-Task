import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PaginationLogic from "./PaginationLogic";

function Pagination({ itemsPerPage, items, getCurrentItems }) {
  const [pageCount, handlePageClick] = PaginationLogic(
    itemsPerPage,
    items,
    getCurrentItems
  );

  return (
    <div className="pagination-nums">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <>
            Next <FaArrowRight />
          </>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <>
            <FaArrowLeft />
            previous
          </>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
