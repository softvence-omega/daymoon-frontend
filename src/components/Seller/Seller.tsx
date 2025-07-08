import BusinessCard from "./BusinessCard";
import Confidence from "./Confidence";
import Counter from "./Counter";
import Hero from "./Hero";
import Work from "./Work";

const Seller = () => {
  return (
    <div className=" bg-[#FCFCFC] w-full">
      <Hero />
      <Counter />
      <BusinessCard />
      <Confidence />
      <Work />
    </div>
  );
};

export default Seller;
