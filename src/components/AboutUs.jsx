import React from "react";

function AboutUs() {
  return (
    <div
      id="about-us"
      className="w-full flex flex-col items-center gap-8 mt-28 text-center overflow-hidden pb-16"
    >
      <div
        data-sal="slide-down"
        data-sal-delay="100"
        data-sal-duration="600"
        id="about-us-wrapper-1"
        className="w-[50%]"
      >
        <div className="about-us-wrapper-divs bg-[#F6F6F6] p-7 rounded-[50px] shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
          <h1 id="about-us-wrapper-text-1" className="text-3xl font-extrabold">
            Ми команда юристів, які об’єднались заради реалізації та захисту
            прав наших Клієнтів. Головне наше завдання – це виконати{" "}
            <span className="text-[#B4963D]">швидко</span>,{" "}
            <span className="text-[#B4963D]">якісно</span> та
            <span className="text-[#B4963D]"> впевнено</span> справу кожного
            Клієнта
          </h1>
        </div>
      </div>
      <div
        id="about-us-mid-wrapper"
        className="flex gap-8 justify-center items-center"
      >
        <div
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="600"
          id="about-us-wrapper-2"
          className="w-[45%]"
        >
          <div className="about-us-wrapper-divs bg-[#F6F6F6] p-7 rounded-[50px] shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
            <h2
              id="about-us-wrapper-text-2"
              className="text-2xl font-extrabold"
            >
              Ми надаємо консультації 24/7 з будь-яких правових питань.
              Інформуємо Клієнта про хід вирішення його справи. Найбільше зараз
              зосереджені на питанні{" "}
              <span className="text-[#B4963D]">
                бронювання військовозобов’язаних працівників
              </span>
              , адже їх праця є великою запорукою перемоги України в
              економічному аспекті. Ми допомогли багатьом підприємствам під час
              дії воєнного стану забронювати своїх працівників і продовжуємо
              допомагати
            </h2>
          </div>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-duration="600"
          id="about-us-wrapper-3"
          className="w-[40%]"
        >
          <div className="about-us-wrapper-divs bg-[#F6F6F6] p-7 rounded-[50px] shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
            <h2
              id="about-us-wrapper-text-3"
              className="text-2xl font-extrabold"
            >
              Окрім цього,
              <span className="text-[#B4963D]"> ми спеціалізуємось</span> в
              таких питаннях як: реєстраційні дії юридичних осіб, ведення
              документації, договірні відносини, розірвання шлюбу, виплата
              аліментів, адміністративні справи, спадкування майна та в
              земельних відносинах
            </h2>
          </div>
        </div>
      </div>
      <div
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="600"
        id="about-us-wrapper-4"
        className="w-[45%]"
      >
        <div className="about-us-wrapper-divs bg-[#F6F6F6] p-7 rounded-[50px] shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
          <h2 id="about-us-wrapper-text-4" className="text-3xl font-extrabold">
            Звертайтесь до нас, будемо раді допомогти Вам у вирішенні будь-яких
            юридичних питань!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
