import { motion } from "framer-motion";
import { TbFilterEdit } from "react-icons/tb";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FilterSection from "./FilterSection";

const MobileFilterSection = () => {
  const handleFilterClick = () => {
    toast.error("System has been hacked !  You have pressed the Done button");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="  bg-[#F46A39]  text-white p-1 rounded-full     w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
          <TbFilterEdit className="w-4 h-4" />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[800px] border-none bg-white rounded-lg shadow-xl overflow-y-auto max-h-[80vh] ">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-gray-800">
            Filter Options
          </DialogTitle>
          <hr className="border-gray-200 mt-4" />

          <FilterSection />
        </DialogHeader>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className={`px-10 py-3 rounded-lg border-1`}
            >
              Cancel
            </motion.button>
          </DialogClose>
          <motion.button
            onClick={handleFilterClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className={`px-10 py-3 rounded-lg bg-[#F46A39] text-white `}
          >
            Done
          </motion.button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MobileFilterSection;
