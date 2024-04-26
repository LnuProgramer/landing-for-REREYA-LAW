import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Footer({ screenWidth }) {
  return (
    <>
      <div
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-duration="600"
        className="fixed z-10 top-[82.5%] right-[3%] w-[20%]"
      >
        <a
          href="https://t.me/MertviMoskali"
          id="telegram-button"
          className="flex items-center justify-center h-[70px] gap-3 p-3 bg-[#338feccc] border-[3px] border-[#3390EC]
          text-white rounded-[20px] group duration-300 transition-all ease-out hover:text-black hover:bg-[#f6f6f6cc]"
        >
          {screenWidth > 800 && (
            <h1
              id="telegram-button-text"
              className="text-xl font-extrabold text-center w-[65%]"
            >
              {screenWidth > 1148 ? "Напишіть нам в Telegram" : "Telegram"}
            </h1>
          )}
          <FaTelegramPlane size={40}></FaTelegramPlane>
        </a>
      </div>
      <div
        data-sal="fade-in"
        data-sal-delay="100"
        data-sal-duration="600"
        id="contacts"
        className="flex items-center bg-[#242424] w-full pt-[35px] pb-[35px] mt-8 text-white text-center"
      >
        <div className="footer-div flex flex-col gap-5 w-1/4 h-[130px] items-center">
          <h1 className="footer-up-text text-3xl font-extrabold">Контакти</h1>
          <h2 className="footer-bottom-text text-2xl font-semibold">
            тел. +38 (067) 210-56-33 (телеграм, вацап)
          </h2>
        </div>
        <div className="footer-div flex flex-col gap-5 w-1/4 h-[130px] items-center">
          <h1 className="footer-up-text text-3xl font-extrabold">
            Електронна адреса
          </h1>
          <h2 className="footer-bottom-text text-2xl font-semibold">
            oscarivasyk@gmail.com
          </h2>
        </div>
        <div className="footer-div flex flex-col gap-5 w-1/4 h-[130px] items-center">
          <h1 className="footer-up-text text-3xl font-extrabold">Адреса</h1>
          <h2 className="footer-bottom-text text-2xl font-semibold">
            Україна, 79496, м. Львів-Винники, вул. Івасюка 31
          </h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
