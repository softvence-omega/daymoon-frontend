import bannerImg from "../../assets/About/aboutBanner.png";

const Banner = () => {
  return (
    <div className="pt-[40px] md:pt-[60px] lg:pt-[70px]">
      <div className="mb-4 md:mb-6 lg:mb-8">
        <h1 className="text-black text-[24px] md:text-[36px] lg:text-[48px] not-italic font-[600] leading-[1.2] md:leading-[1.3] lg:leading-[1.4] tracking-[-0.5px] md:tracking-[-0.72px] lg:tracking-[-0.96px] uppercase pb-[16px] md:pb-[24px] lg:pb-[32px] text-center md:text-left">
          At Pangeti, we create trust for a <br className="hidden md:block" /> 
          smooth shopping experience with<br className="hidden md:block" /> 
          reliable suppliers.
        </h1>
      </div>
      <img 
        className="w-full rounded-lg md:rounded-xl lg:rounded-2xl" 
        src={bannerImg} 
        alt="Pangeti about banner" 
      />
    </div>
  )
}

export default Banner;