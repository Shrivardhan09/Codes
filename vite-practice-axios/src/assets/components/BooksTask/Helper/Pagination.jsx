import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const selectPage = (selectedPage) => {
        if (selectedPage > 0 && selectedPage <= totalPages) {
            onPageChange(selectedPage);
        }
        window.scrollTo(0, 0);
    };

    const renderPageNumber = (pageNumber) => (
        <span
            key={pageNumber}
            onClick={() => selectPage(pageNumber)}
            style={{
                display: "inline-block",
                padding: "8px 12px",
                margin: "0 5px",
                border: "1px solid #ccc",
                backgroundColor: currentPage === pageNumber ? "tomato" : "#fff",
                color: "#333",
                cursor: "pointer",
                transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
        >
            {pageNumber}
        </span>
    );

    return (
        <div
            style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    margin: "0 5px",
                    cursor: "pointer",
                }}
                onClick={() => selectPage(currentPage - 1)}
            >
                ⬅️
            </span>
            {[...Array(totalPages)].map((_, i) => renderPageNumber(i + 1))}
            <span
                style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    margin: "0 5px",
                    cursor: "pointer",
                }}
                onClick={() => selectPage(currentPage + 1)}
            >
                ➡️
            </span>
        </div>
    );
};

export default Pagination;
