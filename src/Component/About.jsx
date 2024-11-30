import React from "react";
import AboutImg from "../assets/about.png";
import { MdDoubleArrow } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section className="pt-[34px] pb-[30px] lg:pb-[80px] bg-[#121212]">
      <div className="container px-2.5">
        <div>
          <h2 className="relative font-oswald inline-block tracking-[1.2px] lg:text-[38px] text-[24px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[12px] after:ml-[12px]">
            ABOUT THE BIGGEST HANCOK <br /> COMMUNITY
          </h2>
        </div>
        <div className="lg:mt-[64px] mt-5 lg:flex ">
          <div className="relative before:content-[''] before:w-[163px] before:h-[4px] before:bg-[#FF4655] before:top-[-4px] before:left-[-4px] before:absolute  after:content-[''] after:w-[4px] after:h-[163px] after:bg-[#FF4655] after:top-[-2px] after:left-[-4px] after:absolute">
            <img src={AboutImg} alt="AboutImg" />
          </div>
          <div className="lg:ml-[82px]">
            <h2 className="text-[27px] font-oswald font-semibold tracking-[1px] text-white">
              MOST POPULAR GAMING PLATFORM.
            </h2>
            <ul className="mt-[7px]">
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                World Bigghest Community & Gaming Server
              </li>
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                Friendly Clan & Mates
              </li>
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                We Provide Gaming Accesories
              </li>
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                Largest Online Gaming Community & Shop
              </li>
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                Hancok reaches more than 150 million monthly users
              </li>
              <li className="font-BarlowCondensed text-[18px] font-normal text-white flex items-center">
                <FaCheck className="text-[#FF4655] mr-[10px] w-[15px] h-[15px]" />{" "}
                We are leading global media brand for games
              </li>
            </ul>
            <p className="font-oswald text-[18px] font-normal text-white max-w-full lg:max-w-[467px] mt-[13px] mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
            <button className="text-white font-oswald flex items-center gap-[7px] text-base bg-[#212121] p-[13px]">
              View More
              <MdDoubleArrow className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
        <div className="mt-[50px] flex flex-wrap lg:flex-nowrap gap-y-5 lg:gap-y-0 justify-center lg:justify-between">
          <div className="text-center mb-5 lg:mb-0 bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] w-[315px] py-[27px]">
            <h2 className="relative font-BarlowCondensed text-[60px] text-white inline-block font-semibold tracking-[1px] after:content-[''] after:w-[12px] after:h-[12px] after:bg-[#ff4655] after:absolute after:bottom-[21px] after:right-[-20px] after:rounded-full mb-[18px]">
              112k
            </h2>
            <p className="font-oswald text-[18px] text-white font-light">
              Community Earning
            </p>
          </div>
          <div className="text-center mb-5 lg:mb-0 bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] w-[315px] py-[27px]">
            <h2 className="relative font-BarlowCondensed text-[60px] text-white inline-block font-semibold tracking-[1px] after:content-[''] after:w-[12px] after:h-[12px] after:bg-[#ff4655] after:absolute after:bottom-[21px] after:right-[-20px] after:rounded-full mb-[18px]">
              12M
            </h2>
            <p className="font-oswald text-[18px] text-white font-light">
              Total Member
            </p>
          </div>
          <div className="text-center mb-5 lg:mb-0 bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] w-[315px] py-[27px]">
            <h2 className="relative font-BarlowCondensed text-[60px] text-white inline-block font-semibold tracking-[1px] after:content-[''] after:w-[12px] after:h-[12px] after:bg-[#ff4655] after:absolute after:bottom-[21px] after:right-[-20px] after:rounded-full mb-[18px]">
              100k
            </h2>
            <p className="font-oswald text-[18px] text-white font-light">
              Streams Complete
            </p>
          </div>
          <div className="text-center mb-5 lg:mb-0 bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] w-[315px] py-[27px]">
            <h2 className="relative font-BarlowCondensed text-[60px] text-white inline-block font-semibold tracking-[1px] after:content-[''] after:w-[12px] after:h-[12px] after:bg-[#ff4655] after:absolute after:bottom-[21px] after:right-[-20px] after:rounded-full mb-[18px]">
              844
            </h2>
            <p className="font-oswald text-[18px] text-white font-light">
              Total Sponsers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
