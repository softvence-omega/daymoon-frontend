import ButtonWithIcon from "@/common/ButtonWithIcon";
import { IoSearchSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const ProductSearch = () => {
  return (
    <div>
      <div className="w-full flex flex-col xl:flex-row justify-between items-start  xl:items-center pb-6 gap-x-10 gap-y-5">
        <div className="w-full flex-1 xl:max-w-xl flex items-center justify-between border border-foundation-white rounded-xl text-[#ABB7C2] cursor-pointer px-4 py-2 bg-white">
          <div className="flex items-center gap-2 flex-grow">
            <IoSearchSharp className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow bg-transparent border-none outline-none text-[#1F2937] placeholder-[#ABB7C2]"
            />
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <LuSlidersHorizontal className="text-lg" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <ButtonWithIcon
            icon={MdEdit}
            className="  bg-catalien-blue text-white"
          >
            Edit Selected
          </ButtonWithIcon>
          <ButtonWithIcon icon={MdDeleteOutline}>
            Delete Selected
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
