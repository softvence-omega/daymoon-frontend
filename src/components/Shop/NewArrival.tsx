import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/Shop/newArrival.png";

export function NewArrivalBanner() {
  return (
    <div className="relative rounded-2xl mt-16 h-88 md:h-auto w-full mx-auto  overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 border-0 shadow-lg">
      <p className="hidden lg:block absolute top-0 left-0 w-full h-full text-[128px] leading-[120%] font-semibold uppercase text-[#FCFCFC] [text-shadow:0px_4px_40.5px_rgba(0,0,0,0.1)] font-poppins text-center opacity-50">
        New Arrivals
      </p>

      <div className="flex flex-col lg:flex-row items-center h-80 ">
        {/* Left Content */}
        <div className="flex-1 p-6 lg:p-12 z-10">
          <div className="max-w-md">
            <h2 className="text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-2">
              New ARRIVAL
            </h2>
            <p
              style={{
                background: "linear-gradient(270deg, #F7813B 0%, #F46A39 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-xl lg:text-3xl font-bold text-orange-500 my-4"
            >
              UP TO 40% OFF
            </p>
            <Link to="/shop">
              <motion.button
                whileTap={{ scale: 0.75 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#F04436]   md:absolute z-100  bottom-12 hover:bg-red-600 text-white px-8 md:px-10 py-2 md:py-3  mt-8 rounded-3xl text-base md:text-lg md:font-medium shadow-lg  cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Shop Now
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative h-[250px] lg:h-[400px] w-full">
          <img
            src={img1}
            alt="New Arrival Products - Laptop, Clothing, Shoes, Accessories"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
