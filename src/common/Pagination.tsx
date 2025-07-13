import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
  title: string;
  showText: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onToggleShowAll: () => void;
  showAll: boolean;
}

const Pagination: FC<PaginationProps> = ({
  title,
  showText,
  totalPages,
  currentPage,
  onPageChange,
  showAll,
  onToggleShowAll,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-between items-center text-jet-black text-base">
      <div className="hidden md:block">
        <p>{showText}</p>
      </div>

      <button
        onClick={onToggleShowAll}
        className="flex items-center underline text-sunset-orange md:text-sm sm:text-lg gap-1 cursor-pointer"
      >
        <p className="text-base sm:text-lg ">{title}</p>
        <span className="hidden sm:block">
          <FaLongArrowAltRight />
        </span>
      </button>

      <div className="flex items-center border border-foundation-white rounded-xl overflow-hidden">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1 || showAll}
          className="border-r border-foundation-white text-sunset-orange text-2xl cursor-pointer p-2 sm:p-4 disabled:cursor-not-allowed"
        >
          <IoIosArrowBack />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            disabled={showAll}
            onClick={() => onPageChange(page)}
            className={`p-2 sm:p-4 border-foundation-white cursor-pointer ${
              currentPage === page
                ? "bg-foundation-white text-sunset-orange font-bold"
                : "border-r border-foundation-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages || showAll}
          className="text-sunset-orange text-2xl cursor-pointer p-2 sm:p-4 disabled:cursor-not-allowed"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
