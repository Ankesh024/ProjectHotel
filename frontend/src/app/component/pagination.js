export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handleNext = () => onPageChange(currentPage + 1);
    const handlePrev = () => onPageChange(currentPage - 1);
  
    return (
      <div>
        <button onClick={handlePrev} disabled={currentPage <= 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage >= totalPages}>
          Next
        </button>
      </div>
    );
  }
  