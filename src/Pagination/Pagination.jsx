import React, { useState } from "react";
import { users } from "./index.js";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const totalPage = Math.ceil(users.length / perPage);
  const startIndex = (currentPage - 1) * perPage;

  const currentuser = users.slice(startIndex, startIndex + perPage);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1>Pagination</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
        }}>
        {currentuser.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>

      <div
        style={{
          display: "block",
        }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPage}
        </span>

        <button onClick={handleNext} disabled={currentPage === totalPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
