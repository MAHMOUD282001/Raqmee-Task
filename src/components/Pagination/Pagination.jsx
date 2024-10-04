import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Pagination({ itemsPerPage, items, getCurrentItems }) {
  const [itemOffset, setItemOffset] = useState(0);
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    getCurrentItems(currentItems);
  };
  
  useEffect(() => {
    getCurrentItems(currentItems);
  }, [items, itemOffset, itemsPerPage]);
  
  
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
