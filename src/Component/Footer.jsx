import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import FooterImg from "../assets/footerImg.png";

const Footer = () => {
  return (
    <footer className="bg-[#191919] pt-[112px]">
      <div className="container">
        <div className="relative">
          <div className=" bg-[#FF4655] py-[35px] px-[30px] absolute w-full top-[-205px]">
            <div className="flex justify-between items-center">
              <h3 className="text-[40px] font-semibold font-BarlowCondensed text-white uppercase max-w-[725px]">
                subscribe us to get latest news in your inbox from hancok
                community
              </h3>
              <div className="relative w-[409px]">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-[409px] h-[40px] p-[15px] rounded-full border-none focus:border-none text-base font-medium font-BarlowCondensed text-[#666]"
                />
                <button className="w-[117px] h-[40px] bg-[#191919] text-base font-medium font-BarlowCondensed text-white absolute right-0  rounded-full">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-[40px] pt-[30px]">
          <div>
            <img src="images/logo.png" alt="Logo" />
            <p className="text-base font-normal font-oswald text-[#666] max-w-[451px] uppercase pt-[30px] pb-[59px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
              officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
              aspernatur aperiam id.
            </p>
            <ul className="flex">
              <li className="w-[50px] h-[50px] flex items-center justify-center bg-[#212529] hover:bg-[#FF4655] rounded-full mr-[10px]">
                <BiLogoFacebook className="text-white w-[28px] h-[28px]" />
              </li>
              <li className="w-[50px] h-[50px] flex items-center justify-center bg-[#212529] hover:bg-[#FF4655] rounded-full mr-[10px]">
                <BiLogoLinkedin className="text-white w-[28px] h-[28px]" />
              </li>
              <li className="w-[50px] h-[50px] flex items-center justify-center bg-[#212529] hover:bg-[#FF4655] rounded-full mr-[10px]">
                <TiSocialTwitter className="text-white w-[28px] h-[28px]" />
              </li>
              <li className="w-[50px] h-[50px] flex items-center justify-center bg-[#212529] hover:bg-[#FF4655] rounded-full mr-[10px]">
                <FaInstagram className="text-white w-[28px] h-[28px]" />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold text-[25px] font-BarlowCondensed tracking-[1px]">
              LINKS
            </h2>
            <ul>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                Home
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                About
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                Tournament
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold text-[25px] font-BarlowCondensed tracking-[1px]">
              LINKS
            </h2>
            <ul>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                PALADINS
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                CS:G0
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                DOTA 2
              </li>
              <li className="text-base font-normal font-oswald text-[#666] hover:text-[#FF4655] mt-[30px]">
                VALORANT
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold text-[25px] font-BarlowCondensed tracking-[1px] mb-[30px]">
              GALLERY
            </h2>
            <img src={FooterImg} alt="FooterImg" />
          </div>
        </div>
        <hr className="mt-[25px] border-[#666] border-[1px]" />
        <p className="text-white text-5 font-normal font-BarlowCondensed text-center py-[25px]">
          © 2021 All rights reserved by{" "}
          <span className="text-[#FF4655]">Themebea.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
