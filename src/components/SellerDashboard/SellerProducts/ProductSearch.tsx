import ButtonWithIcon from "@/common/ButtonWithIcon";
import { IoSearchSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const ProductSearch = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center pb-6">
        <div className=" w-full max-w-xl flex items-center justify-between border border-foundation-white rounded-xl text-[#ABB7C2]  px-2.5 py-3 cursor-pointer">
          <div className="flex items-center gap-2">
            <IoSearchSharp />
            <input type="text" placeholder="Search..." />
          </div>

          <span>
            <LuSlidersHorizontal />
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ButtonWithIcon
            icon={MdEdit}
            className="  bg-catalien-blue text-white"
          >
            Edit Selected
          </ButtonWithIcon>
          <ButtonWithIcon icon={MdDeleteOutline} className="">
            Delete Selected
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
