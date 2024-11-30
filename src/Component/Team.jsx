import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
// import TeamOne from "../assets/team1.png";
// import TeamTwo from "../assets/team2.png";
// import TeamThree from "../assets/team3.png";
// import TeamFour from "../assets/team4.png";

const Team = () => {
  return (
    <section className="bg-[#191919] py-[100px]">
      <div className="container">
        <h2 className="relative text-right font-BarlowCondensed tracking-[1.2px] text-[38px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[13px] after:right-[85px] mb-[47px]">
          MEET OUR PROFESSIONAL ELITE <br /> TEAM
        </h2>
        <div className="flex justify-between">
          <div className="bg-TeamOne h-[428px] w-[650px] relative">
            <div className="text-white py-[30px] bg-[rgb(37,36,36,.38)] absolute bottom-0 left-0 w-full px-[30px]">
              <h3 className="text-[30px] font-BarlowCondensed font-semibold mb-[5px]">
                Paladins
              </h3>
              <p className="text-base font-oswald font-normal w-[300px] mb-[19px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                elit tellus, luctus nec ullamcorper.
              </p>
              <div className="flex justify-between">
                <button className="px-5 py-1 bg-[#FF4655] font-oswald font-normal text-base">
                  Know more
                </button>
                <ul className="flex items-center">
                  <li className="w-[35px] h-[35px] flex items-center justify-center bg-[#FF4655] rounded-full mr-[20px]">
                    <BiLogoFacebook className="w-[20px] h-[20px]" />
                  </li>
                  <li className="w-[35px] h-[35px] flex items-center justify-center bg-[#FF4655] rounded-full mr-[20px]">
                    <BiLogoLinkedin className="w-[20px] h-[20px]" />
                  </li>
                  <li className="w-[35px] h-[35px] flex items-center justify-center bg-[#FF4655] rounded-full mr-[20px]">
                    <TiSocialTwitter className="w-[20px] h-[20px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-TeamTwo h-[428px] w-[650px] relative">
            <div className="text-white py-[30px] bg-[rgb(37,36,36,.38)] absolute bottom-0 left-0 w-full px-[30px]">
              <h3 className="text-[30px] font-semibold font-BarlowCondensed text-white">
                CS:G0
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[29px]">
          <div className="bg-TeamThree h-[428px] w-[650px] relative">
            <div className="text-white py-[30px] bg-[rgb(37,36,36,.38)] absolute bottom-0 left-0 w-full px-[30px]">
              <h3 className="text-[30px] font-semibold font-BarlowCondensed text-white">
                DOTA 2
              </h3>
            </div>
          </div>
          <div className="bg-TeamFour h-[428px] w-[650px] relative">
            <div className="text-white py-[30px] bg-[rgb(37,36,36,.38)] absolute bottom-0 left-0 w-full px-[30px]">
              <h3 className="text-[30px] font-semibold font-BarlowCondensed text-white">
                VALORANT
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
