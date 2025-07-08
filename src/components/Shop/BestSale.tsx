import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../assets/Shop/BestSale.png";
export function BestSellingBanner() {
  return (
    <div className="relative rounded-2xl lg:w-1/2 mx-5 md:mx-0 overflow-hidden shadow-lg border-0 h-80 bg-gradient-to-r from-gray-50 to-gray-100 mt-8 p-0">
      <p className="hidden lg:block absolute top-5 text-start left-0 w-full h-full text-[75px] leading-[120%] font-semibold uppercase text-[#FCFCFC]  [text-shadow:0px_4px_40.5px_rgba(0,0,0,0.1)] font-poppins opacity-50 tracking-widest">
        Best Sale
      </p>

      <div className="flex flex-col sm:flex-row">
        <div className=" flex-1 p-6 lg:p-8  py-0 flex flex-col  ">
          <h3 className="text-lg text-[#1A1A1A] lg:text-xl font-semibold mb-4  z-50 text-nowrap">
            Best Selling Products
          </h3>

          <p className="text-sm z-10 lg:text-base text-[#484848] mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sociis nunc faucibus sodales
            sagittis risus aliquam duis nisl.
          </p>
          <Link
            to="/shop"
            className="flex justify-center md:justify-start md:items-center"
          >
            <motion.button
              whileTap={{ scale: 0.75 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#F04436]   md:absolute z-100  bottom-12 hover:bg-red-600 text-white px-10 py-3  mt-8 rounded-3xl text-lg font-medium shadow-lg  cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Shop Now
            </motion.button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative h-[200px] sm:h-[250px] lg:h-[300px]">
          <img
            src={img}
            alt="Best Selling Tech Products - Headphones, Phone, Watch"
            className=" w-full h-120 scale-200 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
