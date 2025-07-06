import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import fileSearch from "../../assets/Icon/fileSearch.svg";
import arrow from "../../assets/Navbar/arrow.svg";
const GlobalSearchBar = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 lg:px-48 py-4 mt-20 ">
      <div className="w-full flex-1 flex items-center rounded-full shadow-sm sm:px-4   bg-white p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-[#F46A39] font-normal px-2 sm:px-4 text-sm md:text-base  lg:text-lg"
            >
              Products
              <img alt="arrow" src={arrow} className="w-fit h-fit " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border-none space-y-2 ">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
            >
              <DropdownMenuItem className="text-[#F46A39] cursor-pointer font-normal px-2 sm:px-4 text-sm md:text-base lg:text-lg hover:bg-gray-100 border-t-[#e5e5e5]">
                Products
              </DropdownMenuItem>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
            >
              <DropdownMenuItem className="text-[#F46A39] cursor-pointer font-normal px-2 sm:px-4 text-sm md:text-base lg:text-lg hover:bg-gray-100 border-t-1 border-t-[#e5e5e5]">
                Services
              </DropdownMenuItem>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
            >
              <DropdownMenuItem className="text-[#F46A39] cursor-pointer font-normal px-2 sm:px-4 text-sm md:text-base lg:text-lg hover:bg-gray-100 border-t-1 border-t-[#e5e5e5]">
                Brands
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 mx-2 relative">
          <Input
            type="text"
            placeholder="Search for products..."
            className="focus-visible:ring-0 shadwo-none  ring-0 focus-visible:ring-offset-0 bg-transparent text-sm md:text-base border-none"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 md:w-9 md:h-9"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* <div className="block lg:hidden">
     for mobile view query
      </div> */}

      <div className="p-4 flex items-center border border-none rounded-full shadow-md px-4 bg-white w-full md:w-auto">
        <button className="text-sm whitespace-nowrap flex items-center justify-center w-full md:w-auto">
          <img alt="arrow" src={fileSearch} className="w-fit h-fit mr-2" />
          <span className="text-[#1A1A1A] text-sm md:text-base font-normal hidden sm:inline">
            Search by Image
          </span>
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
