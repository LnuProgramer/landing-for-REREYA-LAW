import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Header({ screenWidth }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef();

  const menuIsOpenHandle = (value) => {
    setMenuIsOpen(value);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIsOpen]);
  return (
    <>
      <div
        data-sal="slide-down"
        data-sal-delay="100"
        data-sal-duration="600"
        className="sticky top-0 z-10 flex justify-between bg-[#f0f0f0e1] w-full h-[110px]"
      >
        <div
          id="company-name-div"
          className="flex flex-col items-center justify-center w-1/4 h-full"
        >
          <h1 id="company-name" className="font-extrabold text-2xl mb-1">
            REREYA LAW
          </h1>
          <h2
            id="company-goal"
            className="font-semibold text-xl max-w-[250px] text-center"
          >
            Наша мета – реалізувати та захистити права Клієнта
          </h2>
        </div>
        {screenWidth >= 890 ? (
          <>
            <nav className="flex justify-center items-center gap-7 w-1/2 h-full">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                className="links font-extrabold text-3xl transition-all ease-out duration-300 hover:scale-110 hover:cursor-pointer"
              >
                Послуги
              </Link>
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                className="links font-extrabold text-3xl transition-all ease-out duration-300 hover:scale-110 hover:cursor-pointer"
              >
                Про нас
              </Link>
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                className="links font-extrabold text-3xl transition-all ease-out duration-300 hover:scale-110 hover:cursor-pointer"
              >
                Відгуки
              </Link>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                className="links font-extrabold text-3xl transition-all ease-out duration-300 hover:scale-110 hover:cursor-pointer"
              >
                Контакти
              </Link>
            </nav>
            <div className="flex flex-col items-center w-1/4 justify-center pr-1">
              <h1 id="consultation" className="font-semibold text-2xl mb-1">
                Консультація 24/7
              </h1>
              <h2 id="consultation-tel-num" className="font-extrabold text-2xl">
                +38 (067) 210-56-33
              </h2>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center w-[20%] justify-center pr-1">
            {menuIsOpen === false ? (
              <FiMenu
                size={40}
                className="transition-all ease-out duration-300 hover:scale-125 hover:cursor-pointer"
                onClick={() => menuIsOpenHandle(true)}
              />
            ) : (
              <IoClose
                size={40}
                className="transition-all ease-out duration-300 hover:scale-125 hover:cursor-pointer"
                onClick={() => menuIsOpenHandle(false)}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={`fixed flex flex-col top-[110px] left-0 overflow-hidden transition-all ease-out duration-500 items-center z-20 w-full ${
          menuIsOpen ? "h-[60%] opacity-100" : "h-0 opacity-0"
        } bg-[#d8d8d8ea]`}
        ref={menuRef}
      >
        <div className="flex justify-center items-center h-[20%] w-full gap-[22px]">
          <h1 className="consultation-text font-semibold text-2xl h-7">
            Консультація 24/7
          </h1>
          <h2 className="consultation-text font-extrabold text-2xl h-6">
            +38 (067) 210-56-33
          </h2>
        </div>
        <nav className="w-full flex-col h-full">
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="flex justify-center items-center h-1/4 border-b-2 border-[#808080] hover:cursor-pointer group"
            onClick={() => menuIsOpenHandle(false)}
          >
            <h1 className="font-extrabold text-2xl transition-all ease-out duration-300 group-hover:scale-110">
              Послуги
            </h1>
          </Link>
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="flex justify-center items-center h-1/4 border-b-2 border-[#808080] hover:cursor-pointer group"
            onClick={() => menuIsOpenHandle(false)}
          >
            <h1 className="font-extrabold text-2xl transition-all ease-out duration-300 group-hover:scale-110">
              Про нас
            </h1>
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="flex justify-center items-center h-1/4 border-b-2 border-[#808080] hover:cursor-pointer group"
            onClick={() => menuIsOpenHandle(false)}
          >
            <h1 className="font-extrabold text-2xl transition-all ease-out duration-300 group-hover:scale-110">
              Відгуки
            </h1>
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className="flex justify-center items-center h-1/4 group hover:cursor-pointer"
            onClick={() => menuIsOpenHandle(false)}
          >
            <h1 className="font-extrabold text-2xl transition-all ease-out duration-300 group-hover:scale-110">
              Контакти
            </h1>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
