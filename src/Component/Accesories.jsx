import React from "react";
import Game from "../assets/game.png";
import Monitor from "../assets/monitor.png";
import Keyboard from "../assets/keyboard.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Accesories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "50px",
          height: "50px",
          background: "#FF4655",
          borderRadius: "50%",
          border: "2px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "-25px",
          top: "308px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaAngleRight className="text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "50px",
          height: "50px",
          background: "#FF4655",
          borderRadius: "50%",
          border: "2px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "-25px",
          top: "308px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaAngleLeft className="text-white" />
      </div>
    );
  }
  return (
    <div className="px-2.5 lg:py-[90px]">
      <div className="container">
        <div>
          <h2 className="relative font-oswald inline-block tracking-[1.2px] lg:pt-0 pt-[30px] lg:text-[38px] text-[24px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[12px] after:ml-[12px]">
            WE PROVIDE ALL GAMING <br /> ACCESORIES
          </h2>
        </div>
        <Slider {...settings}>
          <div className="lg:mt-0 mt-[-65px]">
            <div className="flex justify-between items-center">
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Keyboard} alt="Keyboard" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Keyboard
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Monitor} alt="Monitor" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Monitor
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 mt-[-65px]">
            <div className="flex justify-between items-center">
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <h1 className="text-white"></h1>
                <img src={Keyboard} alt="Keyboard" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Keyboard
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Monitor} alt="Monitor" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Monitor
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 mt-[-65px]">
            <div className="flex justify-between items-center">
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Keyboard} alt="Keyboard" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Keyboard
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Monitor} alt="Monitor" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Monitor
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
              <div className="w-[315px] h-[465px] bg-[#212121] flex justify-center items-center flex-col py-[24px] px-[30px] mt-[102px]">
                <h3 className="font-oswald text-[40px] font-medium tracking-[1px] text-white">
                  $95
                </h3>
                <img src={Game} alt="Game" />
                <h4 className="font-oswald text-[25px] font-semibold text-white mb-[7px]">
                  Gaming Controller
                </h4>
                <p className="font-oswald text-base font-semibold text-[#FF4655]">
                  ADD TO CART
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Accesories;
