import React from "react";
import { getPageArray } from "../../../utils/pages";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPageArray(totalPages);
  return (
    <>
      {pagesArray.map((p) => (
        <button
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "pageButtonCurrent" : "pageButton"}
        >
          {p}
        </button>
      ))}
    </>
  );
};
