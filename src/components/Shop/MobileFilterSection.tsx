import { motion } from "framer-motion";
import { TbFilterEdit } from "react-icons/tb";
import { toast } from "react-toastify";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"; // Import Sheet components
import FilterSection from "./FilterSection";

const MobileFilterSection = () => {
  const handleFilterClick = () => {
    toast.error(" You have pressed the Done button");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-jet-black mr-1 text-white p-1 rounded-full w-8 h-8 md:w-9 md:h-9 flex justify-center items-center cursor-pointer">
          <TbFilterEdit className="w-4 h-4" />
        </div>
      </SheetTrigger>

      <SheetContent className="max-w-[400px] bg-white shadow-xl overflow-y-auto max-h-[100vh] transform transition-all  border-none duration-500 ease-in-out">
        <div className="flex flex-col mt-6 h-full">
          <SheetHeader>
            <SheetTitle className="text-3xl font-semibold text-jet-black">
              Filter Options
            </SheetTitle>
            <hr className="border-gray-200  my-4 " />
            <FilterSection />
          </SheetHeader>

          <SheetFooter className="mt-auto">
            <SheetClose asChild>
              <motion.button
                onClick={handleFilterClick}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="px-10 py-3 rounded-lg bg-[#F46A39] text-white"
              >
                Done
              </motion.button>
            </SheetClose>
            <SheetClose asChild>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="px-10 py-3 rounded-lg border-1"
              >
                Cancel
              </motion.button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSection;
