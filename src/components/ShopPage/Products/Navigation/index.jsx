// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Navigation = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className=" flex items-center gap-10 justify-center">
      <FaChevronLeft />
      <ul className=" flex items-center gap-10">
        {pages.length > 3
          ? pages.slice(0, 3).map((page) => (
              <li
                key={page}
                className={`cursor-pointer w-10 h-10 rounded-[5px] font-bold ${
                  page === currentPage
                    ? "bg-[#1D1D1D] text-white"
                    : "border border-transparent hover:border-[#1D1D1D] duration-200 ease-linear"
                } grid place-items-center`}
                onClick={() => handlePageClick(page)}
              >
                <span>{page}</span>
              </li>
            ))
          : pages.map((page) => (
              <li
                key={page}
                className={`cursor-pointer w-10 h-10 rounded-[5px] font-bold ${
                  page === currentPage
                    ? "bg-[#1D1D1D] text-white"
                    : "border border-transparent hover:border-[#1D1D1D] duration-200 ease-linear"
                } grid place-items-center`}
                onClick={() => handlePageClick(page)}
              >
                <span>{page}</span>
              </li>
            ))}
        {pages.length > 3 && (
          <li className="cursor-pointer w-10 h-10 rounded-[5px] font-bold border border-transparent hover:border-[#1D1D1D] duration-200 ease-linear grid place-items-center">
            <span>...</span>
          </li>
        )}
      </ul>
      <FaChevronRight />
    </div>
  );
};

export default Navigation;
