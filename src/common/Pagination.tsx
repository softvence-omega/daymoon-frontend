import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

interface PaginationProps {
  title: string;
  showText: string;
  path?: string;
}

const Pagination: FC<PaginationProps> = ({ title, showText, path }) => {
  return (
    <div className=" flex justify-between items-center  text-jet-black text-base">
      <div className=" hidden md:block">
        <p>{showText}</p>
      </div>
      <Link
        to={path!}
        className=" flex text-sunset-orange items-center  underline md:text-sm sm:text-lg cursor-pointer gap-1 "
      >
        <p>{title}</p>
        <p className=" hidden sm:block">
          <FaLongArrowAltRight />
        </p>
      </Link>
      <div>
        <ul className="flex items-center border border-foundation-white rounded-xl overflow-hidden">
          {/* Previous arrow */}
          <li className="border-r border-foundation-white text-sunset-orange  text-2xl cursor-pointer  p-2 sm:p-4">
            <IoIosArrowBack />
          </li>

          {/* Page numbers */}
          {["1", "2", "3", "4"].map((item, index) => (
            <li
              key={index}
              className="border-r border-foundation-white p-2 sm:p-4 cursor-pointer hover:bg-foundation-white transition-colors duration-150"
            >
              {item}
            </li>
          ))}

          {/* Next arrow */}
          <li className="text-sunset-orange  text-2xl cursor-pointer  p-2 sm:p-4">
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
