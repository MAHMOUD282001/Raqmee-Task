import React, { useEffect, useState } from "react";

function PaginationLogic(itemsPerPage, items, getCurrentItems) {
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

  return [currentItems, pageCount, handlePageClick];
}

export default PaginationLogic;
