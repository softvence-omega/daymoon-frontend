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
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/Navbar/arrow.svg";
import MobileFilterSection from "../Shop/MobileFilterSection";
import SearchByImage from "./SearchByImage";

const GlobalSearchBar = () => {
  const dropDownCategories = [
    { label: "Products", value: "products" },
    { label: "Manufacturer", value: "manufacturer" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    dropDownCategories[0]
  );

  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Call your search API, dispatch Redux action, etc.
      console.log("Searching for:", searchTerm);
      // Optionally close dropdown:
      // setFocused(false);
    }
  };

  //  save recent searches in redux

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        event.target instanceof Node &&
        !wrapperRef.current.contains(event.target)
      ) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFillInput = (value: string, autoSearch: boolean = false) => {
    setSearchTerm(value);
    setFocused(false); // Optionally close dropdown
    if (autoSearch) {
      handleSearch(); // Or just call handleSearch if you want to search immediately
    }
  };

  const recentSearches = [
    "Find top-rated smartwatches",
    "Tractor offers near me",
    "Affordable fertilizers",
    "Best smartphone deals",
  ];

  const suggestedTags = ["smart watch", "Tractors", "Fertilizers"];

  return (
    <div className="max-w-[1000px] mx-auto  flex flex-col lg:flex-row items-center justify-between mb-12 gap-4 h-[80px] mt-12">
      <div className="w-full flex-1 relative" ref={wrapperRef}>
        <div className="w-full flex items-center  rounded-full shadow-[0_0_1px_0px_#F46A39] bg-white px-2 py-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-[#F46A39] font-normal px-2 sm:px-4 text-sm md:text-base cursor-pointer lg:text-lg"
              >
                {selectedCategory.label}
                <img alt="arrow" src={arrow} className="w-fit h-fit ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-none shadow-[0_0_1px_0px_#F46A39] space-y-2 p-2">
              {dropDownCategories.map((item) => (
                <motion.div
                  key={item.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                  onClick={() => setSelectedCategory(item)}
                >
                  <DropdownMenuItem
                    className={`text-[#F46A39] cursor-pointer font-normal px-2 sm:px-4 text-sm md:text-base lg:text-lg hover:bg-gray-100 ${
                      selectedCategory.value === item.value
                        ? "font-semibold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </DropdownMenuItem>
                </motion.div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex-1  relative rounded-full overflow-hidden">
            <Input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setFocused(true)}
              className="bg-transparent text-sm md:text-base border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none shadow-none"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 md:w-9 md:h-9 cursor-pointer "
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
          <div className=" lg:hidden bg-[#fff7ec] rounded-full ">
            <MobileFilterSection />
          </div>
        </div>
        {focused && (
          <div className="absolute top-full left-0 w-full bg-white shadow-[0_0_1px_0px_#F46A39] rounded-xl mt-2 z-50 p-4 space-y-6">
            <div className="my-2">
              <h4 className="text-orange-500  font-medium text-sm mb-2">
                Suggested Tags
              </h4>
              <div className="flex flex-wrap gap-2 ">
                {suggestedTags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => handleFillInput(tag, true)}
                    className="px-3 py-1 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="">
              <h4 className="text-gray-500 font-medium text-sm mt-4 mb-2">
                Recent Search
              </h4>
              <ul className="space-y-2">
                {recentSearches.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleFillInput(item, true)}
                    className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  >
                    <Search className="w-4 h-4 text-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="hidden cursor-pointer lg:block">
        {" "}
        <SearchByImage />
      </div>
    </div>
  );
};

export default GlobalSearchBar;
