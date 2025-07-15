// components/Navbar.tsx
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
import { Link, useLocation } from "react-router-dom";

// image imports
import NavCatgegory from "@/components/Category/NavCategory";
import arrow from "../assets/Navbar/arrow.svg";
import logo from "../assets/Navbar/logo.png";
import menu from "../assets/Navbar/menu.svg";
import world from "../assets/Navbar/public.svg";
import shopping from "../assets/Navbar/shopping_cart.svg";
import usa from "../assets/Navbar/usa.svg";
import MobileSidebar from "./MobileNavMenu";

const Navbar = () => {
  const [cartCount] = useState(3);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const menuItems = [
    { label: "Become A Supplier", href: "/supplier" },
    { label: "App & Extensions", href: "/apps" },
    { label: "Help Centre", href: "/help" },
    { label: "Log In & Sign Up", href: "/login" },
  ];
  // const categories = [
  //   "Electronics",
  //   "Fashion",
  //   "Home & Garden",
  //   "Sports & Outdoors",
  //   "Books",
  //   "Beauty & Health",
  //   "Automotive",
  //   "Toys & Games",
  // ];

  const countries = [
    { code: "USA", name: "United States", flag: usa },
    { code: "CAN", name: "Canada", flag: "🇨🇦" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "AUS", name: "Australia", flag: "🇦🇺" },
  ];

  return (
    <nav className="w-full bg-white shadow py-4">
      <div className="lg:hidden flex items-center justify-between w-full px-4">
        <Link to="/">
          <img
            className="w-[100px] h-[40px] object-contain"
            src={logo}
            alt="logo"
          />
        </Link>

        <MobileSidebar />
      </div>

      <div className="hidden lg:block lg:mx-5 2xl:mx-auto">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 lg:px-0 py-4">
          <Link to="/">
            <img
              className="w-[124px] h-[48px] object-cover"
              src={logo}
              alt="logo"
            />
          </Link>

          <section className="flex items-center justify-center gap-7 xl:ml-52">
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none p-2" asChild>
                <div className="flex items-center bg-transparent text-lg text-[#666] hover:bg-white space-x-1">
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className=" bg-white border-0">
                <NavCatgegory />
                {/* {categories.map((category, idx) => (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.8 }}
                    key={idx}
                  >
                    <DropdownMenuItem className="text-lg px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#1A1A1A]">
                      {category}
                    </DropdownMenuItem>
                    <div className="border-t border-[#E5E5E5] my-1" />
                  </motion.div>
                ))} */}
              </DropdownMenuContent>
            </DropdownMenu>

            {["shop", "about", "contact"].map((page) => (
              <Link key={page} to={`/${page}`}>
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  whileHover={{ scale: 1.03 }}
                  className={`text-lg hover:text-[#F04436] ${
                    isActive(`/${page}`) ? "text-[#F04436]" : "text-[#666]"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </motion.button>
              </Link>
            ))}
          </section>

          <div className="flex items-center justify-between space-x-16">
            <div>
              <div className="text-xs mb-1 text-[#666]">Delivered To</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center"
                  >
                    <Button
                      variant="ghost"
                      className="flex cursor-pointer items-center p-0 h-auto text-md font-medium"
                    >
                      <span className="mr-1">USA</span>
                      <img alt="flag" src={usa} className="w-4 h-5" />
                      <img alt="arrow" src={arrow} className="-ml-2" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 border-none bg-white"
                >
                  {countries.map((country) => (
                    <DropdownMenuItem
                      key={country.code}
                      className="cursor-pointer"
                    >
                      <img
                        alt="flag"
                        src={country.flag}
                        className="w-6 h-6 mr-2"
                      />
                      {country.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.5 }}
              >
                <Link to="/cart">
                  {" "}
                  <Button variant="ghost" size="icon" className="relative">
                    <img alt="cart" src={shopping} className="w-6 h-6" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-white bg-red-500">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.5 }}
              >
                <Button variant="ghost" size="icon">
                  <img
                    alt="globe"
                    src={world}
                    className="w-6 h-6 cursor-pointer"
                  />
                </Button>
              </motion.div>

              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 border-none" asChild>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.5 }}
                  >
                    <img
                      alt="menu"
                      src={menu}
                      className="w-6 h-6 cursor-pointer"
                    />
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border-0 rounded-xl shadow-md p-2 space-y-1">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.8 }}
                      key={idx}
                    >
                      <Link to={item.href}>
                        <DropdownMenuItem className="text-lg hover:text-[#F04436] px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#1A1A1A]">
                          {item.label}
                        </DropdownMenuItem>
                      </Link>
                      <div className="border-t border-[#E5E5E5] my-1" />
                    </motion.div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
