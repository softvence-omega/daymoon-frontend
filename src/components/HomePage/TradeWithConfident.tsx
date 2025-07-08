import { motion } from "framer-motion";
import img from "../../assets/Home/badge.png";
import img3 from "../../assets/Home/delivery.png";
import img2 from "../../assets/Home/secure.png";

export default function TradeWithConfidence() {
  return (
    <section className="mx-auto mt-16 md:mt-32 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-[48px] font-semibold  md:leading-[57.6px] md:tracking-[-0.96px]"
      >
        TRADE WITH CONFIDENCE: FROM <br className="hidden md:block" />
        QUALITY TO PROTECTION
      </motion.h2>

      <div className="grid mt-6 md:mt-12 grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
          className="relative bg-white border-[#192D4E] rounded-xl border-1 lg:h-116 xl:h-102 hover:scale-103 ease-in-out duration-200  shadow-orange-100 shadow  flex flex-col items-center text-center  "
        >
          <div className="px-2 py-10">
            <div className="w-16 h-16 mx-auto my-10 flex items-center justify-center rounded-full ">
              <img
                src={img}
                alt="Production Quality Assurance"
                className=" object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg md:text-2xl mb-4 ">
              Production Quality Assurance
            </h3>
            <p className="text-[#666] text-sm md:text-base leading-relaxed">
              We ensure that all products meet the highest standards through
              third-party factory audits and product inspections. With certified
              manufacturers, you can be confident in the quality of every order.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
          className="relative bg-white border-[#192D4E] rounded-xl border-1 lg:h-116 xl:h-102 hover:scale-103 ease-in-out duration-200  shadow-orange-100 shadow  flex flex-col items-center text-center  "
        >
          <div className="px-2 py-10">
            <div className="w-16 h-16 mx-auto my-10 flex items-center justify-center rounded-full ">
              <img
                src={img2}
                alt="Production Quality Assurance"
                className=" object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg md:text-2xl mb-4 ">
              Secure Purchase Protection
            </h3>
            <p className="text-[#666] text-sm md:text-base leading-relaxed">
              Enjoy peace of mind with our purchase protection services,
              ensuring your payment is secure and products are delivered as
              promised. If something goes wrong, refunds and dispute resolution
              are available through our trusted platform.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
          className="relative bg-white border-[#192D4E] rounded-xl border-1 lg:h-116 xl:h-102  hover:scale-103 ease-in-out duration-200 shadow-orange-100 shadow  flex flex-col items-center text-center  "
        >
          <div className="px-2 py-10">
            <div className="w-16 h-16 mx-auto my-10 flex items-center justify-center rounded-full ">
              <img
                src={img3}
                alt="Production Quality Assurance"
                className=" object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg md:text-2xl mb-4 ">
              Verified Shipping & Delivery
            </h3>
            <p className="text-[#666] text-sm md:text-base leading-relaxed">
              Track your order every step of the way with our trusted logistics
              partners and real-time tracking system. We ensure your products
              arrive safely and on time, with support for navigating customs and
              international shipping regulations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
