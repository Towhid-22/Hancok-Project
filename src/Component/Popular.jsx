import React from "react";
import GameOne from "../assets/GameOne.png";
import GameTwo from "../assets/GameTwo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Popular = () => {
  var settings = {
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
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid white",
          color: "white",
          position: "absolute",
          bottom: "0",
          right: "0",
          marginBottom: "65px"
        }}
        onClick={onClick}
      >
        <FaAngleRight />
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
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid white",
          color: "white",
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "999"
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }
  return (
    <section className="lg:py-[90px] bg-[#191919] px-2.5">
      <div className="container">
        <h2 className="relative text-right font-BarlowCondensed tracking-[1.2px] lg:text-[38px] text-[24px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[13px] after:right-[110px]">
          POPULAR GAMES AROUND THE <br /> WORLD
        </h2>

        <div className="lg:mt-[-150px]">
          <Slider {...settings}>
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <img src={GameOne} alt="" />
                </div>
                <div>
                  <img src={GameTwo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <img src={GameOne} alt="" />
                </div>
                <div>
                  <img src={GameTwo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <img src={GameOne} alt="" />
                </div>
                <div>
                  <img src={GameTwo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <img src={GameOne} alt="" />
                </div>
                <div>
                  <img src={GameTwo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <img src={GameOne} alt="" />
                </div>
                <div>
                  <img src={GameTwo} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
