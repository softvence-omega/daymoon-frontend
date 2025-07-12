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
      <div>
        <p>{showText}</p>
      </div>
      <Link
        to={path!}
        className=" flex text-sunset-orange items-center   underline text-lg cursor-pointer gap-1"
      >
        <p>{title}</p>
        <p>
          <FaLongArrowAltRight />
        </p>
      </Link>
      <div>
        <ul className="flex items-center  border border-foundation-white rounded-xl">
          <li className="border-r  border-foundation-white text-sunset-orange p-4 text-2xl cursor-pointer">
            <IoIosArrowBack />
          </li>
          <li className="border-r border-foundation-white p-4 cursor-pointer">
            1
          </li>
          <li className="border-r border-foundation-white p-4 cursor-pointer">
            2
          </li>
          <li className="border-r border-foundation-white p-4 cursor-pointer">
            3
          </li>
          <li className="border-r border-foundation-white p-4 cursor-pointer">
            4
          </li>
          <li className=" text-sunset-orange p-4 text-2xl cursor-pointer">
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
