import React from "react";

function Services() {
  return (
    <div
      id="services"
      className="flex flex-col items-center bg-[#F6F6F6] shadow-xl w-[75%] rounded-[50px] h-fit m-auto mt-6 p-10 overflow-hidden"
    >
      <h1
        data-sal="slide-down"
        data-sal-delay="100"
        data-sal-duration="600"
        id="services-header-text"
        className="text-center text-4xl font-bold mb-16 mt-5"
      >
        Основні послуги, які ми надаємо
      </h1>
      <div
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-1.png"
          alt="img-1"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%]">
          Визнання підприємства критично важливим для регіону
        </h1>
      </div>
      <div
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full items-end -mt-10 gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-2.png"
          alt="img-2"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%] text-right">
          Бронювання військовозобов’язаних працівників
        </h1>
      </div>
      <div
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-3.png"
          alt="img-3"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%]">
          Реєстрація юридичних осіб, громадських формувань (об’єднань,
          організацій), благодійних фондів під ключ
        </h1>
      </div>
      <div
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full items-end -mt-10 gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-4.png"
          alt="img-4"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%] text-right">
          Ведення документообігу юридичних осіб
        </h1>
      </div>
      <div
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-5.png"
          alt="img-5"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%]">
          Оформлення права оренди на земельні ділянки комунальної та державної
          власності
        </h1>
      </div>
      <div
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-duration="600"
        className="services-divs flex flex-col w-full items-end -mt-10 mb-16 gap-2 group"
      >
        <img
          className="services-img size-[100px] group-hover:scale-110 transition-all ease-out duration-300"
          src="images/img-6.png"
          alt="img-6"
        ></img>
        <h1 className="services-text text-3xl font-semibold w-[60%] text-right">
          Приватизація земельних ділянок у місті Львів та області
        </h1>
      </div>
      <h1
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="600"
        id="services-footer-text"
        className="text-center text-3xl font-semibold w-[80%] mb-5"
      >
        Команда наших юристів надає послуги будь-якої складності у сфері
        цивільного, господарського, адміністративного, сімейного та спадкового
        права
      </h1>
    </div>
  );
}

export default Services;
