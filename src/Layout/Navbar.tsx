import CommonWrapper from "@/common/CommonWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import arrow from "../assets/Navbar/arrow.svg";
import menu from "../assets/Navbar/menu.svg";
import world from "../assets/Navbar/public.svg";
import shopping from "../assets/Navbar/shopping_cart.svg";
import usa from "../assets/Navbar/usa.svg";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports & Outdoors",
    "Books",
    "Beauty & Health",
    "Automotive",
    "Toys & Games",
  ];
  const menuItems = [
    "Become A Supplier",
    "App & Extensions",
    "Help Centre",
    "Log In & Sign Up",
  ];

  const countries = [
    { code: "USA", name: "United States", flag: usa },
    { code: "CAN", name: "Canada", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "AUS", name: "Australia", flag: "🇦🇺" },
  ];

  return (
    <nav className="w-full text-[#1A1A1A)]  bg-white shadow  py-7">
      <CommonWrapper>
        <div className="flex items-center space-x-[58px]">
          <div className="flex items-center space-x-2">
            <img alt="logo" src={logo} className="w-[124px] h-[45px]" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="relative p-2 " asChild>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                className="flex items-center bg-transparent text-lg  text-[#1A1A1A] hover:bg-white space-x-1 "
              >
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {categories.map((category, idx) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                  key={idx}
                >
                  <DropdownMenuItem className="text-lg px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#1A1A1A] ">
                    {category}
                  </DropdownMenuItem>
                  <div className="border-t my-1" />
                </motion.div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between space-x-28">
          <div className=" items-center space-x-2">
            <div className=" ">
              <div className="text-xs mb-1 text-[#666]">Delivered To</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                    className="flex justify-center items-center"
                  >
                    <Button
                      variant="ghost"
                      className="flex items-center  p-0 h-auto text-md font-medium"
                    >
                      <span className="">USA</span>
                      <img alt="flag" src={usa} className="w-4 h-5" />
                      <img
                        alt="arrow"
                        src={arrow}
                        className="w-fit h-fit -ml-2"
                      />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {countries.map((country) => (
                    <DropdownMenuItem
                      key={country.code}
                      className="cursor-pointer"
                    >
                      <img alt="logo" src={country.flag} className="w-6 h-6" />
                      {country.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
              className="flex justify-center items-center"
            >
              <Button variant="ghost" size="icon" className="relative">
                <img alt="cart" src={shopping} className="w-6 h-16" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
              className="flex justify-center items-center"
            >
              <Button variant="ghost" size="icon">
                <img alt="cart" src={world} className="w-6 h-6" />
              </Button>
            </motion.div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="relative p-2" asChild>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
                  >
                    <img alt="menu" src={menu} className="w-6 h-6 text-black" />
                  </motion.div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-56 rounded-xl shadow-md bg-white p-2 space-y-1"
                >
                  {menuItems.map((category, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                      key={idx}
                    >
                      <DropdownMenuItem className="text-lg px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#1A1A1A] ">
                        {category}
                      </DropdownMenuItem>
                      <div className="border-t my-1" />
                    </motion.div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </nav>
  );
};
export default Navbar;
