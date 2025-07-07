import CommonWrapper from "@/common/CommonWrapper";
import { motion } from "framer-motion";
import img1 from "../../assets/Home/img1.png";
import img2 from "../../assets/Home/img2.png";
import img3 from "../../assets/Home/img3.png";

const sourceCards = [
  {
    img: img1,
    alt: "Factory Live Tour",
    title: "Take a Factory Live Tour etc",
  },
  {
    img: img2,
    alt: "Connect with Top Manufacturers",
    title: "Connect with Top Manufacturers",
  },
  {
    img: img3,
    alt: "Get Samples",
    title: "Get Samples",
  },
];

export default function SourceDirectSection() {
  return (
    <section
      className="w-full mt-10 md:mt-32 py-12 md:py-20"
      style={{
        background: "linear-gradient(180deg, #272727 0%, #1A1A1A 35%)",
      }}
    >
      <CommonWrapper>
        <div className="">
          <h2 className="text-white text-3xl md:text-[48px] font-semibold leading-[1.2] mb-10">
            SOURCE DIRECT FROM <br className="hidden md:block" />
            MANUFACTURERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sourceCards.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                key={card.title}
                className="rounded-xl overflow-hidden bg-[#232323] relative group shadow-lg xl:h-[422px] xl:w-[422px]"
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full px-6 pb-5 pt-10 flex items-end">
                  <span className="text-xl font-semibold text-[#FF8700] drop-shadow-md">
                    {card.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
}
