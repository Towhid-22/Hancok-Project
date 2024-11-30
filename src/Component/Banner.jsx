import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { MdDoubleArrow } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";

const Banner = () => {
  return (
    <section>
      <div className="bg-bannerImage bg-no-repeat bg-center bg-cover">
        <div className="container px-2.5 bg-black/40 lg:bg-transparent">
          <div>
            <div className="lg:pt-[270px] pt-[100px]">
            <h4 className="text-primaryWhite font-oswald lg:text-[27px] text-[17px] leading-[10%] pt-8 tracking-[2px]">
              LIFE TIME
            </h4>
            <h1 className="relative inline-block lg:text-[60px] lg:pt-0 pt-[15px] text-[30px] font-oswald font-semibold text-white mb-[5px] after:content-[''] after:w-[90px] after:h-[2px] after:bg-[#FFFFFF] after:absolute after:right-[-115px] after:bottom-[19px]">
              GAMING EXPERIENCE
            </h1>
            <p className="text-white max-w-full lg:max-w-[521px] font-oswald text-base font-normal lg:mb-12 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae alias voluptas optio. Veritatis recusandae pariatur
              qui dignissimos dolore similique ad adipisci eum. Quos aliquid
              fugiat magni illum eius?
            </p>
            <button className="text-[#121212] font-oswald flex items-center gap-[7px] text-base bg-white p-[7px] lg:p-[13px]">
              View More
              <MdDoubleArrow className="w-[25px] h-[25px]"/>
            </button>
            </div>
            <ul className="flex gap-5 pt-[30px] lg:pt-[301px] lg:pb-[103px] pb-[20px]">
              <li className="text-iconColor flex items-center justify-between bg-iconBG p-[10px] rounded-full text-[20px]">
                <BiLogoFacebook />
              </li>
              <li className="text-iconColor flex items-center justify-between bg-iconBG p-[10px] rounded-full text-[20px]">
                <BiLogoLinkedin />
              </li>
              <li className="text-iconColor flex items-center justify-between bg-iconBG p-[10px] rounded-full text-[20px]">
                <TiSocialTwitter />
              </li>
              <li className="text-iconColor flex items-center justify-between bg-iconBG p-[10px] rounded-full text-[20px]">
                <IoLogoInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
