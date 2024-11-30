import React from "react";

const FAQ = () => {
  return (
    <section className="bg-[#121212] pt-[55px] pb-[200px]">
      <div className="container">
        <div>
          <h2 className="mb-[92px] relative font-oswald inline-block tracking-[1.2px] text-[38px] text-primaryWhite font-semibold after:content-[''] after:w-[105px] after:h-[2px] after:bg-[#FF4655] after:absolute after:bottom-[12px] after:ml-[12px]">
            FREQUENTLY ASKED QUESTION <br /> “QUESTION & ANSWER”
          </h2>
        </div>
        <div >
          <div className="flex justify-between">
            <div className="flex">
              <h2 className="w-[70px] h-[70px] bg-[#FF4655] text-white text-[38px] font-semibold font-BarlowCondensed tracking-[2px] flex justify-center items-center">
                1
              </h2>
              <div className="ml-[42px]">
                <h3 className="text-white text-[22px] font-semibold font-BarlowCondensed hover:text-[#FF4655] mb-[11px] mt-[-6px]">
                  HOW TO DOWNLOAD THE GAME?
                </h3>
                <p className="text-base font-oswald font-normal text-[#666] max-w-[427px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, iste, sed error at adipisci repellat rem maiores
                  provident voluptatem ipsum autem fugiat.
                </p>
              </div>
            </div>
            <div className="h-[185px] w-[2px] bg-[#666]"></div>
            <div className="flex">
              <h2 className="w-[70px] h-[70px] bg-[#FF4655] text-white text-[38px] font-semibold font-BarlowCondensed tracking-[2px] flex justify-center items-center">
                2
              </h2>
              <div className="ml-[42px]">
                <h3 className="text-white text-[22px] font-semibold font-BarlowCondensed hover:text-[#FF4655] mb-[11px] mt-[-6px]">
                  IS THERE ANY AGE RESTRICTIONS?
                </h3>
                <p className="text-base font-oswald font-normal text-[#666] max-w-[427px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, iste, sed error at adipisci repellat rem maiores
                  provident voluptatem ipsum autem fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[2px] bg-[#666]"></div>
          <div className="flex justify-between items-center">
            <div className="flex pt-[67px]">
              <h2 className="w-[70px] h-[70px] bg-[#FF4655] text-white text-[38px] font-semibold font-BarlowCondensed tracking-[2px] flex justify-center items-center">
                3
              </h2>
              <div className="ml-[42px]">
                <h3 className="text-white text-[22px] font-semibold font-BarlowCondensed hover:text-[#FF4655] mb-[11px] mt-[-6px]">
                  HOW TO BECOME A TEAM MEMBER?
                </h3>
                <p className="text-base font-oswald font-normal text-[#666] max-w-[427px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, iste, sed error at adipisci repellat rem maiores
                  provident voluptatem ipsum autem fugiat.
                </p>
              </div>
            </div>
            <div className="h-[185px] w-[2px] bg-[#666]"></div>
            <div className="flex pt-[67px]">
              <h2 className="w-[70px] h-[70px] bg-[#FF4655] text-white text-[38px] font-semibold font-BarlowCondensed tracking-[2px] flex justify-center items-center">
                4
              </h2>
              <div className="ml-[42px]">
                <h3 className="text-white text-[22px] font-semibold font-BarlowCondensed hover:text-[#FF4655] mb-[11px] mt-[-6px]">
                  IS THERE ANY REWARD FOR WINNERS?
                </h3>
                <p className="text-base font-oswald font-normal text-[#666] max-w-[427px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, iste, sed error at adipisci repellat rem maiores
                  provident voluptatem ipsum autem fugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
