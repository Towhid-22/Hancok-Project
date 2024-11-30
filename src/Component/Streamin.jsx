import React from "react";
import { IoIosPlay } from "react-icons/io";
import Delta from "../assets/delta.png";
import Alpha from "../assets/alpha.png";
import Devil from "../assets/devils.png";
import Ninja from "../assets/ninja.png";

const Streamin = () => {
  return (
    <section className="px-2.5 pb-[90px]">
      <div className="container">
        <div>
          <div className="lg:pt-[90px] pt-5 lg:pb-[68px] pb-5">
            <h2 className="relative font-oswald inline-block tracking-[1.2px] text-[24px] lg:text-[38px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[12px] after:ml-[12px]">
              LIVE STREAMIN VIDEO BY <br /> HANCOK
            </h2>
          </div>
          <div className="lg:flex justify-between items-center gap-y-3 lg:gap-y-0">
            <div className="bg-horizon bg-no-repeat bg-cover bg-center w-full lg:w-[427px] lg:h-[276px]">
              <div className="flex justify-center items-center pt-[103px] pb-[25px]">
                <div className="w-[70px] h-[70px] border-2 rounded-full flex justify-center items-center">
                  <IoIosPlay className="text-white text-[30px]" />
                </div>
              </div>
              <div className="px-[25px] pb-[23px]">
                <h3 className="font-BarlowCondensed text-[22px] font-semibold text-white">
                  HORIZON ZERO | DAWN
                </h3>
                <div className="flex justify-between">
                  <h4 className="text-base font-light font-oswald text-white">
                    Guerrilla Games
                  </h4>
                  <h4 className="relative text-base font-oswald font-normal text-white after:content-[' '] before:w-[5px] before:h-[5px] before:bg-[#ff4655] before:absolute before:left-[-15px] before:bottom-[5px] before:rounded-full">
                    LIVE
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-legends bg-no-repeat bg-cover bg-center w-full lg:w-[427px] lg:h-[276px]">
              <div className="flex justify-center items-center pt-[103px] pb-[25px]">
                <div className="w-[70px] h-[70px] border-2 rounded-full flex justify-center items-center">
                  <IoIosPlay className="text-white text-[30px]" />
                </div>
              </div>
              <div className="px-[25px] pb-[23px]">
                <h3 className="font-BarlowCondensed text-[22px] font-semibold text-white">
                  LEAGUE OF | LEGENDS
                </h3>
                <div className="flex justify-between">
                  <h4 className="text-base font-light font-oswald text-white">
                    Riot Games
                  </h4>
                  <h4 className="relative text-base font-oswald font-normal text-white after:content-[' '] before:w-[5px] before:h-[5px] before:bg-[#ff4655] before:absolute before:left-[-15px] before:bottom-[5px] before:rounded-full">
                    LIVE
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-paladins bg-no-repeat bg-cover bg-center w-full lg:w-[427px] lg:h-[276px]">
              <div className="flex justify-center items-center pt-[103px] pb-[25px]">
                <div className="w-[70px] h-[70px] border-2 rounded-full flex justify-center items-center">
                  <IoIosPlay className="text-white text-[30px]" />
                </div>
              </div>
              <div className="px-[25px] pb-[23px]">
                <h3 className="font-BarlowCondensed text-[22px] font-semibold text-white">
                  PALADINS
                </h3>
                <div className="flex justify-between">
                  <h4 className="text-base font-light font-oswald text-white">
                    Hi Rez Studios
                  </h4>
                  <h4 className="relative text-base font-oswald font-normal text-white after:content-[' '] before:w-[5px] before:h-[5px] before:bg-[#ff4655] before:absolute before:left-[-15px] before:bottom-[5px] before:rounded-full">
                    LIVE
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-[25px] text-white font-medium font-BarlowCondensed tracking-[2px] lg:pt-[60px] lg:pb-[50px] py-4">
            PREVIOUS MATCHES
          </h3>
          <div>
            <div className="lg:w-[1096px] mx-auto flex justify-between items-center">
              <div className="teaml w-[426px] h-[118px] bg-[#212121] flex justify-between items-center">
                <img src={Delta} alt="Delta" />
                <h4 className="sm:hidden text-[32px] font-BarlowCondensed font-medium text-white mr-[70px]">
                  TEAM DELTA
                </h4>
              </div>
              <h2 className="lg:text-[40px] text-[30px] text-white font-oswald tracking-[2px] font-medium">
                9:12
              </h2>
              <div className="teamr w-[426px] h-[118px] bg-[#212121] flex justify-between items-center">
                <h4 className="sm:hidden text-[32px] font-BarlowCondensed font-medium text-white ml-[70px]">
                  TEAM ALPHA
                </h4>
                <img src={Alpha} alt="Delta" className="pl-[30px]"/>
              </div>
            </div>
            <div className="lg:w-[1096px] mx-auto flex justify-between items-center lg:pt-[58px] pt-4">
              <div className="teaml w-[426px] h-[118px] bg-[#212121] flex justify-between items-center">
                <img src={Devil} alt="Devil" />
                <h4 className="sm:hidden text-[32px] font-BarlowCondensed font-medium text-white mr-[70px]">
                  TEAM DEVIL
                </h4>
              </div>
              <h2 className="lg:text-[40px] text-[30px] text-white font-oswald tracking-[2px] font-medium">
                17:8
              </h2>
              <div className="teamr w-[426px] h-[118px] bg-[#212121] flex justify-between items-center">
                <h4 className="sm:hidden text-[32px] font-BarlowCondensed font-medium text-white ml-[70px]">
                  TEAM NINJA
                </h4>
                <img src={Ninja} alt="Ninja" className="pl-[30px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streamin;
