import bannerImg  from "../../assets/About/aboutBanner.png";

const Banner = () => {
  return (
    <div className="pt-[70px]">
        <div>
            <h1 className="text-black text-[48px] not-italic font-[600] leading-[67.2px] tracking-[-0.96px] uppercase pb-[32px]">At Pangeti, we create trust for a <br/>smooth shopping experience with<br/> reliable suppliers.</h1>
        </div>
        <img className="w-full rounded-2xl" src={bannerImg}alt="" />
    </div>
  )
}

export default Banner;