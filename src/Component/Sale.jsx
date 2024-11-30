import React from "react";
import HorizonZero from "../assets/HorizonZero.png";
import HorizonDawn from "../assets/HorizonDawn.png";
import Disciples from "../assets/Disciples.png";
import Industries from "../assets/industries.png";
import SaleSlide from "../assets/sale.png";

const Sale = () => {
  return (
    <section className="bg-[#191919] lg:py-[90px] py-[20px] px-2.5">
      <div className="container">
        <h2 className="relative text-right font-BarlowCondensed tracking-[1.2px] lg:text-[38px] text-[24px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[13px] after:right-[85px] mb-[47px]">
          TOP GAMES ON BLACK FRIDAY <br /> SALE
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0 justify-center lg:justify-between">
          <div className="text-white">
            <img src={HorizonZero} alt="" />
            <h2 className="text-[22px] font-semibold font-BarlowCondensed pt-[18px]">
              Horizon Zero Dawn <sup>TM</sup> Complet...
            </h2>
            <h3 className="text-base font-oswald tracking-[1px] text-[#666666] py-[20px]">
              Guerrilla Games
            </h3>
            <div className="flex gap-4">
              <h4 className="text-[14px] bg-[#FF4655] p-[5px]">-40%</h4>
              <span className="text-base font-oswald tracking-[1px] text-[#666666]">
                <del>$19.99</del>
              </span>
              <h3 className="text-base font-oswald tracking-[1px]">$7.99</h3>
            </div>
          </div>
          <div className="text-white">
            <img src={Disciples} alt="" />
            <h2 className="text-[22px] font-semibold font-BarlowCondensed pt-[18px]">
              Disciples: Liberation
            </h2>
            <h3 className="text-base font-oswald tracking-[1px] text-[#666666] py-[20px]">
              Frima Studio
            </h3>
            <div className="flex gap-4">
              <h4 className="text-[14px] bg-[#FF4655] p-[5px]">-40%</h4>
              <span className="text-base font-oswald tracking-[1px] text-[#666666]">
                <del>$19.99</del>
              </span>
              <h3 className="text-base font-oswald tracking-[1px]">$7.99</h3>
            </div>
          </div>
          <div className="text-white">
            <img src={HorizonDawn} alt="" />
            <h2 className="text-[22px] font-semibold font-BarlowCondensed pt-[18px]">
              Horizon Zero Dawn <sup>TM</sup> Complet...
            </h2>
            <h3 className="text-base font-oswald tracking-[1px] text-[#666666] py-[20px]">
              Guerrilla Games
            </h3>
            <div className="flex gap-4">
              <h4 className="text-[14px] bg-[#FF4655] p-[5px]">-40%</h4>
              <span className="text-base font-oswald tracking-[1px] text-[#666666]">
                <del>$19.99</del>
              </span>
              <h3 className="text-base font-oswald tracking-[1px]">$7.99</h3>
            </div>
          </div>
          <div className="text-white">
            <img src={Industries} alt="Industries" />
            <h2 className="text-[22px] font-semibold font-BarlowCondensed pt-[18px]">
              Industries of Titan
            </h2>
            <h3 className="text-base font-oswald tracking-[1px] text-[#666666] py-[20px]">
              Brace Yourself Games
            </h3>
            <div className="flex gap-4">
              <h4 className="text-[14px] bg-[#FF4655] p-[5px]">-40%</h4>
              <span className="text-base font-oswald tracking-[1px] text-[#666666]">
                <del>$19.99</del>
              </span>
              <h3 className="text-base font-oswald tracking-[1px]">$7.99</h3>
            </div>
          </div>
        </div>
        <h3 className="text-5 font-medium font-BarlowCondensed text-white mb-[30px] mt-[60px]">
          Hancok Games Catalog
        </h3>
        <div className="bg-[#212121] lg:flex justify-between lg:p-[42px]">
          <div>
            <h5 className="text-base font-oswald font-medium text-[#ff4655] mb-[15px] lg:pt-0 pt-5">
              Choose Your Favourite Game
            </h5>
            <h2 className="lg:text-[38px] text-[24px] font-semibold font-BarlowCondensed text-white max-w-[580px] uppercase mb-4">
              Explore hancok catalog for your next favorite game!
            </h2>
            <p className="text-base font-oswald font-semibold text-[#666666] max-w-[601px] mb-[25px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              culpa ratione enim maiores nisi cupiditate non nesciunt officia
              labore aut? Et, vero!
            </p>
            <button className="font-oswald text-base border-none bg-[#121212] text-white px-[31px] py-[13px]">
              Browse All
            </button>
          </div>
          <img src={SaleSlide} alt="SaleSlide" className="lg:pr-[69px] mt-5 lg:mt-0" />
        </div>
      </div>
    </section>
  );
};

export default Sale;
