import React from "react";

function Reviews() {
  return (
    <div
      id="reviews"
      className="flex flex-col items-center gap-10 mt-12 overflow-hidden pb-16"
    >
      <h1
        data-sal="fade-in"
        data-sal-delay="100"
        data-sal-duration="600"
        id="reviews-header-text"
        className="text-4xl font-extrabold"
      >
        Відгуки наших Клієнтів
      </h1>
      <div
        id="reviews-main-wrapper"
        className="w-full flex justify-evenly mt-5 text-center"
      >
        <div
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="600"
          className="reviews-wrapper w-[30%]"
        >
          <div className="flex flex-col items-center h-full bg-[#F6F6F6] rounded-[50px] p-6 shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
            <img
              src="/images/Anatoli.jpg"
              alt="Anatoli"
              className="reviews-img size-[200px] rounded-[20px]"
            ></img>
            <h3 className="reviews-person text-xl font-semibold text-[#B4963D] w-[180px] mt-5 mb-5">
              Анатолій Ковальчук м. Львів
            </h3>
            <h2 className="reviews-text text-xl font-semibold w-full">
              У цей непростий час для нашої країни, питання бронювання
              військовозобов'язаних працівників стало критично важливим для
              нашого бізнесу. Звернувшись до REREYA LAW, ми отримали
              кваліфіковану юридичну допомогу, яка допомогла зберегти наш
              колектив і продовжити роботу. Їхня допомога була незамінною, і ми
              вдячні за їхній внесок у стабільність нашого підприємства
            </h2>
          </div>
        </div>
        <div
          data-sal="fade-in"
          data-sal-delay="100"
          data-sal-duration="600"
          className="reviews-wrapper w-[30%]"
        >
          <div className="flex flex-col items-center h-full bg-[#F6F6F6] rounded-[50px] p-6 shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
            <img
              src="/images/Maksym.jpeg"
              alt="Maksym"
              className="reviews-img size-[200px] rounded-[20px]"
            ></img>
            <h3 className="reviews-person text-xl font-semibold text-[#B4963D] w-[170px] mt-5 mb-5">
              Максим Тарасюк м. Сокаль
            </h3>
            <h2 className="reviews-text text-xl font-semibold w-full">
              Не можу не поділитися своїм враженням від співпраці з REREYA LAW.
              Завдяки їхній професійній роботі, наше підприємство отримало
              статус критично важливого для регіону. Це відкрило перед нами нові
              можливості та сприяло зміцненню нашого становища на ринку. Велике
              спасибі команді за надану підтримку та високий рівень
              професіоналізму!
            </h2>
          </div>
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-duration="600"
          className="reviews-wrapper w-[30%]"
        >
          <div className="flex flex-col items-center h-full bg-[#F6F6F6] rounded-[50px] p-6 shadow-xl transition-all ease-out duration-300 hover:shadow-2xl">
            <img
              src="/images/Iryna.png"
              alt="Iryna"
              className="reviews-img size-[200px] rounded-[20px]"
            ></img>
            <h3 className="reviews-person text-xl font-semibold text-[#B4963D] w-[170px] mt-5 mb-5">
              Ірина Білоножко м. Стрий
            </h3>
            <h2 className="reviews-text text-xl font-semibold w-full">
              Довгий час ми мріяли про приватизацію земельної ділянки для
              розширення нашого сільськогосподарського бізнесу. Звернулися за
              допомогою до REREYA LAW і не помилилися у своєму виборі. Завдяки
              їхній ефективній роботі та глибоким знанням у сфері земельного
              законодавства, ми швидко пройшли всі етапи приватизації. Щира
              вдячність команді за допомогу у реалізації нашої мрії!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
