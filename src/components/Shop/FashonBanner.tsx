import img from "../../assets/Shop/fashon.png";
const FashionBanner = () => {
  return (
    <section className="relative w-full h-[30dvh] overflow-hidden">
      <img
        src={img}
        alt="Fashion Banner"
        className="absolute inset-0 w-full h-full object-fill"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-[72px] font-bold text-center tracking-wide">
          FASHION & APPAREL
        </h1>
      </div>
    </section>
  );
};
export default FashionBanner;
